import path from 'path';
import clientConfig from './config/webpack/client';
import Config from 'webpack-chain';
let config = new Config();

import webpack from 'webpack';


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


  return clientConfig(nconf, config).toConfig();
}
