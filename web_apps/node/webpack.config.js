var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
htmlConfg = new HtmlWebpackPlugin({
  template: './web/app/client/components/root/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: [
        './web/app/client/components/root/index.js'
    ],
    output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: '/',
      filename: 'bundle.js',
    },
    resolve: {
      modules: [__dirname, 'node_modules', 'src'],
      extensions: ['*','.js', '.scss']
    },
    devtool: 'source-map',
    plugins: [htmlConfg],
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
         include: path.join(__dirname, 'src'),
          exclude: /node_modules/
        }
      ]
    },
  }
