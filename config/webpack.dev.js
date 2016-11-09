const helpers = require('./helpers');
const webpackMerge = require('webpack-merge'); 
const commonConfig = require('./webpack.common.js');

/**
 * Webpack Plugins
 */
const DefinePlugin = require('webpack/lib/DefinePlugin');
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const METADATA = {
  host: 'localhost',
  port: 3000,
  ENV: ENV,
};

module.exports = function (options) {
  return webpackMerge(commonConfig({env: ENV}), {

    devtool: 'cheap-module-source-map',

    output: {

      path: helpers.root('dist'),
      filename: '[name].[hash].js',
      sourceMapFilename: '[name].[hash].map',
      chunkFilename: '[name].chunk.js',

    },

    module: {
      rules: [
        {
          test: /\.ts$/,
          loaders: [
            'awesome-typescript-loader',    // 类似ts-loader, babel
            'angular2-template-loader',    //  templates and stylesheets into angular components.
            'angular2-router-loader'    // 懒加载
          ],
          exclude: [/\.(spec|e2e)\.ts$/]
        }
      ]

    },

    plugins: [
      //定义变量
      new DefinePlugin({            
        'ENV' : JSON.stringify(METADATA.ENV),
        'process.env': {
          'ENV': JSON.stringify(METADATA.ENV),
          'NODE_ENV': JSON.stringify(METADATA.ENV),
        }
      }),

      new NamedModulesPlugin(),

      new LoaderOptionsPlugin({
        debug: true,
        options: {
          tslint: {
            emitErrors: false,
            failOnHint: false,
            resourcePath: 'src'
          },

        }
      }),

    ],

    devServer: {
      port: METADATA.port,
      host: METADATA.host,
      historyApiFallback: true,
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
      },
      contentBase: "src/",
      outputPath: helpers.root('dist'),
//      代理
//       proxy: {  
//           '/youtube/*': {  
//               target: 'https://www.googleapis.com/',  
//               secure: false  
//           }  
//       }
    },

    node: {
      global: true,
      crypto: 'empty',
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false
    }

  });
}
