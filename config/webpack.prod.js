const helpers = require('./helpers');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ngtools = require('@ngtools/webpack');
const commonConfig = require('./webpack.common.js');
const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = function () {
    return webpackMerge(commonConfig({env: ENV}), {
        output: {
            path: helpers.root('aot'),       
            filename: '[name].[chunkhash].bundle.js',
            chunkFilename: '[id].[chunkhash].chunk.js'
        },

        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loaders: [
                        '@ngtools/webpack'
                    ]
                }, 
                {
                    test: /\.css$/,
                    loaders: ['to-string-loader', 'css-loader']
                }, 
                {
                    test: /\.scss$/,
                    loaders: ['to-string-loader', 'css-loader', "scss-loader"]
                },
                {
                    test: /\.html$/,
                    loader: 'raw-loader'
                }
            ]
        },

        plugins: [
            new ngtools.AotPlugin({
                tsConfigPath: 'tsconfig.json',
                entryModule:  'src/app/app.module#AppModule'
            }),

            new webpack.optimize.UglifyJsPlugin()
        ],
        
        devServer: {
            port: 3001,
        },

    });
}
