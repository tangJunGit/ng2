const helpers = require('./helpers');

/**
 * Webpack Plugins
 */
const DefinePlugin = require('webpack/lib/DefinePlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');

const ENV = process.env.ENV = process.env.NODE_ENV = 'test';

module.exports = function (options) {
  return {

    devtool: 'inline-source-map',

    resolve: {

      extensions: ['.ts', '.js'],

      modules: [helpers.root('src'), 'node_modules'],

    },

    module: {

      rules: [
        {
          test: /\.ts$/,
          loader: ['awesome-typescript-loader', 'angular2-template-loader'],
          exclude: [/\.e2e\.ts$/]
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        },
        {
          test: /\.css$/,
          loaders: ['to-string-loader', 'css-loader']
        },
        {
          test: /\.scss$/,
          loaders: ['to-string-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.html$/,
          loader: 'raw-loader'
        },
        {
          enforce: 'post',
          test: /\.(js|ts)$/,
          loader: 'istanbul-instrumenter-loader'
        }

      ]
    },

    plugins: [

      new DefinePlugin({
        'process.env': {
          'ENV': JSON.stringify(ENV),
          'NODE_ENV': JSON.stringify(ENV),
        }
      }),

      new ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
        helpers.root('src') 
      ),

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

    node: {
      global: true,
      process: false,
      crypto: 'empty',
      module: false,
      clearImmediate: false,
      setImmediate: false,
      net: 'empty',    
    }

  };
}