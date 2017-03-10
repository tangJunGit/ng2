const helpers = require('./helpers');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = function (options) {
  return {
    devtool: 'inline-source-map',

    entry: {
        polyfills: './src/polyfills.ts',
        vendor: './src/vendor.ts',
        app: './src/main.ts'
    },
    
    resolve: {
        extensions: ['.ts', '.js'],     //用来解析 modules
        modules: [helpers.root('src'), 'node_modules'],   // 解析当前目录
    },

     plugins: [
        // 能够识别共用的模块,并把它们放在共用的块
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        //复制文件夹到assets
        new CopyWebpackPlugin([
            {
                from: 'src/assets',
                to: 'assets',
            }
        ]),

        // 通过 webpack 简化了 html 页面
        new HtmlWebpackPlugin({
            favicon: 'src/assets/images/favicon.ico',  
            template: 'src/index.html'
        }),

        //定义变量
        new DefinePlugin({
          'ENV' : JSON.stringify(options.ENV),
          'process.env': {
            'ENV': JSON.stringify(options.ENV),
            'NODE_ENV': JSON.stringify(options.ENV),
          }
      }),
        
    ],

    devServer: {
        contentBase: 'src/',       // 确定 app 的根目录，也就是 index.html 的路径
        inline: true,
        stats: 'errors-only',
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 100,
            poll: 500
        }
    },

    node: {
        global: true,
        crypto: 'empty',
        __dirname: true,
        __filename: true,
        Buffer: false,
        clearImmediate: false,
        setImmediate: false
    }
  }
}
