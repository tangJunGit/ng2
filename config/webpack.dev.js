const helpers = require('./helpers');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const ENV = process.env.NODE_ENV = process.env.ENV = 'development';

module.exports = function () {
  return webpackMerge(commonConfig({env: ENV}), {
    output: {
        path: helpers.root('dist'),        
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js'
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    'awesome-typescript-loader',
                    'angular2-router-loader',
                    'angular2-template-loader'
                ]
            }, 
            {
                test: /\.css$/,
                loaders: ['to-string-loader', 'css-loader']
            }, 
            {
                test: /\.scss$/,
                loaders: ['to-string-loader', 'css-loader', "sass-loader"]
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            }
        ]
    },
    
    devServer: {
        port: 3000,
    },
  });
}
