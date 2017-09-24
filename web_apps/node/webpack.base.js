import path from 'path';
import Config from 'webpack-chain';
let config = new Config();

var webpack = require('webpack')

var filepath = path.resolve(__dirname, 'build');

import clientConfig from './config/webpack/client';

export default function webpackBase(nconf) {
  config.context(path.resolve(__dirname, "src"))
  config.resolve.modules
    .add(__dirname)
    .add('node_modules')
    .add('src')
    .end()

  config.resolve.extensions
    .add('*')
    .add('.js')
    .add('.scss')
    .end()

  config.module.rule('compile')
    .test(/\.js$/)
    .exclude
      .add(/node_modules/)
      .end()
    .include
      .add(path.join(__dirname, 'src'))
      .end()
    .use('babel')
      .loader('babel-loader')
      .options({})


  config = clientConfig(nconf, config);
  return config.toConfig();
}
// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var htmlConfig = new HtmlWebpackPlugin({
//   template: './web/app/client/components/root/index.html',
//   filename: 'index.html',
//   inject: 'body'
// })

// module.exports = {
  //context: path.resolve(__dirname, "src"),
  //devtool: 'eval',
  // entry: {
  //   client: [
  //     'react-hot-loader/patch',
  //     'webpack-hot-middleware/client',
  //     './web/app/client/components/root/index.js'
  //   ]
  // },
  // output: {
  //   path: filepath,
  //   publicPath: 'http://localhost:8080/',
  //   filename: 'bundle_[name].js'
  // },
  // resolve: {
  //   modules: [__dirname, 'node_modules', 'src'],
  //   extensions: ['*','.js', '.scss']
  // },
  // plugins: [
  //   //htmlConfig,
  //   new webpack.HotModuleReplacementPlugin(),
  //   new webpack.NoEmitOnErrorsPlugin(),
  //   new webpack.NamedModulesPlugin()
  // ],
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       exclude: /node_modules/,
  //       include: path.join(__dirname, 'src'),
  //       use: {
  //         loader: 'babel-loader',
  //         options: {
  //           "presets": [
  //             ["env", {"modules": false}],
  //             "stage-1",
  //             "react"
  //           ],
  //           "plugins": [
  //             "transform-runtime",
  //             "react-hot-loader/babel"
  //           ]
  //         }
  //       }
  //     }
  //   ]
  // },
// }
