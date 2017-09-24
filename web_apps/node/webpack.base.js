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
