const helpers = require('./helpers');
const webpackMerge = require('webpack-merge'); 
const commonConfig = require('./webpack.common.js');

/**
 * Webpack Plugins
 */
const DefinePlugin = require('webpack/lib/DefinePlugin');
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

/**
 * ENV
 */
const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const METADATA = {
  host: 'localhost',
  port: 3000,
  ENV: ENV,
};

module.exports = function (options) {
  return webpackMerge(commonConfig({env: ENV}), {

    devtool: 'cheap-module-source-map',

    output: {

      path: helpers.root('dist'),
      filename: '[name].[hash].js',
      sourceMapFilename: '[name].[hash].map',
      chunkFilename: '[name].chunk.js',

    },

    plugins: [
      new NamedModulesPlugin(),

      new LoaderOptionsPlugin({
        debug: true,
        options: {
          tslint: {
            emitErrors: false,
            failOnHint: false,
            resourcePath: 'src'
          },

        }
      }),

    ],

    devServer: {
      port: METADATA.port,
      host: METADATA.host,
      historyApiFallback: true,
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
      },
      contentBase: "src/",
      outputPath: helpers.root('dist'),
//      代理
//       proxy: {  
//           '/youtube/*': {  
//               target: 'https://www.googleapis.com/',  
//               secure: false  
//           }  
//       }
    }

  });
}
