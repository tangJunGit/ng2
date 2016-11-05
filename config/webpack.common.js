const webpack = require('webpack');
const helpers = require('./helpers');

/*
 * Webpack Plugins
 */
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');


const METADATA = {
  title: 'Angular2 demo',
  baseUrl: '/',
};

module.exports = function (options) {
  return {
    entry: {

      'polyfills': './src/polyfills.ts',
      'vendor': './src/vendor.ts',
      'app': './src/main.ts'

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
            'angular2-template-loader'    //  templates and stylesheets into angular components.
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
          test: /\.html$/,
          loader: 'raw-loader',               // 把文件内容作为字符串返回
          exclude: [helpers.root('src/index.html')]
        },
        {
          test: /\.(png|jpe?g|gif|ico)$/,
          loader: 'url?name=assets/[name].[hash].[ext]&limit=10000'    // 小于10kb，则转成一个DataUrl
        },
        {
          test: /\.(svg|woff|woff2|ttf|eot)$/,
          loader: 'file?name=assets/[name].[hash].[ext]'
        },
      ],

    },

    plugins: [
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

      // 通过 webpack bundles 简化了 html 页面
      new HtmlWebpackPlugin({
        favicon: 'src/assets/favicon.ico',  
        template: 'src/index.html',
        title: METADATA.title,
        chunksSortMode: 'dependency',
        metadata: METADATA,
        inject: 'head'
      }),

      // 提高html-webpack-plugin功能（为了script 元素的async 与 defer 属性)
      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: 'defer'
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
