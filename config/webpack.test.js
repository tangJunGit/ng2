const helpers = require('./helpers');

/**
 * Webpack Plugins
 */
const DefinePlugin = require('webpack/lib/DefinePlugin');

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
          loader: ['awesome-typescript-loader', 'angular2-template-loader']
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
        }

      ]
    },

    plugins: [

      new DefinePlugin({
        'process.env': {
          'ENV': JSON.stringify(ENV),
          'NODE_ENV': JSON.stringify(ENV),
        }
      })

    ]
  };
}