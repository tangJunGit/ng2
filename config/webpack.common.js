const webpack = require('webpack');
const helpers = require('./helpers');
/*
 * Webpack Plugins
 */
const WebpackMd5Hash = require('webpack-md5-hash');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');

const METADATA = {
  title: 'Angular2 demo',
  baseUrl: '/',
  favicon: 'src/assets/images/favicon.ico',  
  template: 'src/index.html',
};

module.exports = function (options) {
  if(options.env == 'production') METADATA.baseUrl = '/ng2';   //产品需要
  return {
    entry: {

      'polyfills': './src/polyfills.ts',
      'vendor'   : './src/vendor.ts',
      'app'      : './src/main.ts'

    },

    resolve: {

      extensions: ['.ts', '.js', '.json'],     //用来解析 modules
      modules: [helpers.root('src'), 'node_modules'],   // 解析当前目录

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
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        },
        {
          test: /\.css$/,
          loaders: ['to-string-loader', 'css-loader']   // css-loader 读取 css 文件， to-string-loader 返回字符串
        },
        {
          test: /\.scss$/,
          loaders: ['to-string-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.html$/,
          loader: 'raw-loader',               // 把文件内容作为字符串返回
          exclude: [helpers.root('src/index.html')]
        },
        {
          test: /\.(png|jpe?g|gif|ico)$/,     
          loader: 'file-loader' 
        },
      ]

    },

    plugins: [

      // 取代标准webpack chunkhash md5
      new WebpackMd5Hash(),

      //在一个单独的进程做类型检查,所以webpack不需要等待
      new ForkCheckerPlugin(),
     
      // 能够识别共用的模块,并把它们放在共用的块
      new CommonsChunkPlugin({
        name: ['polyfills', 'vendor'].reverse()
      }),

      // Provides context to Angular's use of System.import
      new ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
        helpers.root('src') 
      ),

      //复制文件与文件夹
      new CopyWebpackPlugin([
        {
          from: 'src/assets',
          to: 'assets',
        }
      ]),

      // 通过 webpack bundles 简化了 html 页面
      new HtmlWebpackPlugin({
        favicon        : METADATA.favicon,
        template       : METADATA.template,
        title          : METADATA.title,
        chunksSortMode : 'dependency',
        metadata       : METADATA,
        inject         : 'head'
      }),

      // 提高html-webpack-plugin功能（为了script 元素的async 与 defer 属性)
      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: 'defer'
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

    node: {
      global: true,
      crypto: 'empty',
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false,
      net: 'empty',    // stomp
    }

  };
}
