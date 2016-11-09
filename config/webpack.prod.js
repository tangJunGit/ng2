const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

/**
 * Webpack Plugins
 */
const DefinePlugin = require('webpack/lib/DefinePlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const WebpackMd5Hash = require('webpack-md5-hash');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
const METADATA = {
  host: 'localhost',
  port: 3000,
  ENV: ENV,
};

module.exports = function (env) {
  return webpackMerge(commonConfig({env: ENV}), {
    devtool: 'source-map',

    output: {

        path: helpers.root('dist'),
        filename: '[name].[chunkhash].bundle.js',
        sourceMapFilename: '[name].[chunkhash].bundle.map',
        chunkFilename: '[id].[chunkhash].chunk.js'
        
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
        // 取代标准webpack chunkhash md5
        new WebpackMd5Hash(),

        //定义变量
        new DefinePlugin({
            'ENV' : JSON.stringify(METADATA.ENV),
            'process.env': {
              'ENV': JSON.stringify(METADATA.ENV),
              'NODE_ENV': JSON.stringify(METADATA.ENV),
            }
        }),

        //压缩
        new UglifyJsPlugin({
            beautify: false, 
            mangle: {
              screw_ie8: true,
              keep_fnames: true
            }, 
            compress: {
              screw_ie8: true
            }, 
            comments: false 
          }),

        new LoaderOptionsPlugin({
            debug: false,
            options: {
              tslint: {
                emitErrors: true,
                failOnHint: true,
                resourcePath: 'src'
              },

              htmlLoader: {
                minimize: true,
                removeAttributeQuotes: false,
                caseSensitive: true,
                customAttrSurround: [
                  [/#/, /(?:)/],
                  [/\*/, /(?:)/],
                  [/\[?\(?/, /(?:)/]
                ],
                customAttrAssign: [/\)?\]?=/]
              },

            }
        })

        
    ]

  })
}
