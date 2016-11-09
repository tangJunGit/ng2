const helpers = require('./helpers');
const ngTools = require('@ngtools/webpack');

/**
 * Webpack Plugins
 */
const DefinePlugin                  = require('webpack/lib/DefinePlugin');
const NamedModulesPlugin            = require('webpack/lib/NamedModulesPlugin');
const LoaderOptionsPlugin           = require('webpack/lib/LoaderOptionsPlugin');
const UglifyJsPlugin                = require('webpack/lib/optimize/UglifyJsPlugin');
const WebpackMd5Hash                = require('webpack-md5-hash');
const HtmlWebpackPlugin             = require('html-webpack-plugin');
const CopyWebpackPlugin             = require('copy-webpack-plugin');

const ENV = process.env.ENV = process.env.NODE_ENV = 'production';
const METADATA = {
  title: 'Angular2 demo',
  baseUrl: '/',
  ENV    : ENV,
  AOT    : true
};

module.exports = function (options) {
  return {

    devtool: 'source-map',

    entry  : {
      'app': './src/main.aot.ts'
    },
    output : {
      
      path: helpers.root('dist'),
      filename: '[name].[chunkhash].bundle.js',
      sourceMapFilename: '[name].[chunkhash].bundle.map',
      chunkFilename: '[id].[chunkhash].chunk.js'

    },
    
    resolve: {
      
      extensions: ['.ts', '.js', '.json'],
      modules: [helpers.root('src'), 'node_modules'],
      
    },
    
    module: {
      rules: [
        {
          test   : /\.ts$/,
          loader : ['@ngtools/webpack'],
          exclude: [/\.(spec|e2e)\.ts$/]
        },
        {
          test  : /\.json$/,
          loader: 'json-loader'
        }, 
        {
          test   : /\.css$/,
          loaders: ['to-string-loader', 'css-loader']
        }, 
        {
          test   : /\.html$/,
          loader : 'raw-loader',
          exclude: [helpers.root('src/index.html')]
        }, 
        {
          test: /\.(png|jpe?g|gif|ico)$/,     
          loader: 'file-loader' 
        }
      ]
    },
    
    plugins: [
      new WebpackMd5Hash(),
      
      new ngTools.AotPlugin({            // aot
        tsConfigPath: './tsconfig.aot.json',
        entryModule : 'src/app/app.module#AppModule',
        mainPath: 'src/main.ts'
      }),
      
      new HtmlWebpackPlugin({
        favicon       : 'src/assets/images/favicon.ico',  
        template      : 'src/index.html',
        title         : METADATA.title,
        chunksSortMode: 'dependency',
        metadata      : METADATA,
        inject        : 'body'
      }),
      
      new CopyWebpackPlugin([
        {
          from: 'src/assets',
          to: 'assets',
        },
        {
          from: 'node_modules/core-js/client/shim.min.js'
        }, 
        {
          from: 'node_modules/zone.js/dist/zone.min.js'
        }
      ]),
      
      new DefinePlugin({            
        'ENV' : JSON.stringify(METADATA.ENV),
        'process.env': {
          'ENV' : JSON.stringify(METADATA.ENV),
          'NODE_ENV': JSON.stringify(METADATA.ENV),
        }
      }),
      
      new UglifyJsPlugin({
        beautify: false, 
        mangle  : {
          screw_ie8  : true,
          keep_fnames: true
        }, 
        compress: {
          screw_ie8: true
        }, 
        comments: false 
      }),
     
      new LoaderOptionsPlugin({
        debug  : false,
        options: {
          tslint: {
            emitErrors  : true,
            failOnHint  : true,
            resourcePath: 'src'
          },
          
        }
      }),
    
    ],
    node: {
      global        : true,
      crypto        : 'empty',
      process       : false,
      module        : false,
      clearImmediate: false,
      setImmediate  : false,
      net: 'empty',    // stomp
    }
    
  };
};
