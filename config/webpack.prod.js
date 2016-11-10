const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

/**
 * Webpack Plugins
 */
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

/**
 * ENV
 */
const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = function (env) {
  return webpackMerge(commonConfig({env: ENV}), {
    
    devtool: 'source-map',

    output: {

        path: helpers.root('dist'),
        filename: '[name].[chunkhash].bundle.js',
        sourceMapFilename: '[name].[chunkhash].bundle.map',
        chunkFilename: '[id].[chunkhash].chunk.js'
        
    },

    plugins: [

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
