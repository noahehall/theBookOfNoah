var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals')
var StartServerPlugin = require('start-server-webpack-plugin')

module.exports = {
    context: path.join(__dirname, "src"),
    entry: [
        'webpack/hot/poll?1000',
        './web/app/api/index.js'
    ],
    watch: true,
    target: 'node',
    externals: [nodeExternals({
        whitelist: ['webpack/hot/poll?1000']
    })],
    devtool: 'source-map',
    resolve: {
      modules: [__dirname, 'node_modules', 'src'],
      extensions: ['*','.js', '.scss']
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          include: path.join(__dirname, 'src'),
          exclude: /node_modules/
        }
      ]
    },
    plugins: [
        new StartServerPlugin('server.js'),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                "BUILD_TARGET": JSON.stringify('server')
            }
        }),
    ],
    output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: '/build/',
      libraryTarget: 'commonjs2',
      filename: 'server.js',
    }
  }
