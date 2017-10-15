var path = require('path');

const options = {
  env: process.env.NODE_ENV || 'development',
  contentBase: path.resolve('./resources/react/'),
  path: path.resolve('./resources/public'),
  port: 3000,
  context: path.resolve('./resources'),
  publicPath: '/',
  cssPath: path.resolve('./resources/public/css/'),
  reactPath: path.resolve('./resources/react/'),
  mainEntry: './react/index.js'
};

module.exports = require('./config').default(options);
