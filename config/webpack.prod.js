var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-source-map',

    output: {
        path: helpers.root('dist/ng2/'),
        publicPath: '/ng2/',
        filename: '[name].js',
        chunkFilename: '[id].[hash].chunk.js'
    },

    htmlLoader: {
        minimize: false // workaround for ng2
    },

    plugins: [
        new webpack.NoErrorsPlugin(),   //如果出现任何错误，就终止构建
        new webpack.optimize.DedupePlugin(),        //检测完全相同 ( 以及几乎完全相同 ) 的文件，并把它们从输出中移除
        new webpack.optimize.UglifyJsPlugin({          //最小化 (minify) 生成的包
            beautify: false,
            comments: false,
            compress: { warnings: false }
        }),
        new ExtractTextPlugin('[name].css'),          //把内嵌的 css 抽取成外部文件
        new webpack.DefinePlugin({                      //用来定义环境变量，以便我们在自己的程序中引用它
            'process.env': {
                'ENV': JSON.stringify(ENV)
            }
        })
    ]
});