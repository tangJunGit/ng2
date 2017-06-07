const helpers = require('./helpers');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ngtools = require('@ngtools/webpack');
const commonConfig = require('./webpack.common.js');

module.exports = function () {
    return webpackMerge(commonConfig('prod'), {
        output: {
            path: helpers.root('dist'),       
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
                    loaders: ['to-string-loader', 'css-loader', "sass-loader"]
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
