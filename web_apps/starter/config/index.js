import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import sourcemaps from './sourcemaps';
import hotReload from './hotreload';
import plugins from './plugins';

function getConfig(options) {
  return {
    context: options.context,
    entry: {
      main: [options.mainEntry],
      vendor: ['react', 'react-bootstrap']
    },
    output: {
      path: options.path,
      publicPath: options.publicPath,
      filename: 'js/[name].js'
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
      modules: ['node_modules', options.reactPath]
    },
    module: {
      noParse: /\.min\.js/,
      rules: [
        {
          test:  /\.(s?)css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            // resolve-url-loader may be chained before sass-loader if necessary
            use: ['css-loader', {
              loader: 'sass-loader',
              options: {
                modules: true,
                includePaths: [options.cssPath],
                filename: '[name].[ext]',
                outputPath: 'css/'
              }
            }]
          })
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: [{
            loader: 'babel-loader',
            options: {
              "presets": [
                ["env", {
                  "targets": {
                    "browsers": ["last 2 versions", "safari >= 7"]
                  }
                }],
                "react",
              ],
              plugins: [
                "transform-class-properties",
                "transform-object-rest-spread",
              ]
            }
          }]
        },
        {
          test: /\.html$/,
          loader: 'html-loader'
        },
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                name: '[name].[ext]',
                outputPath: 'images/'
              }
            }
          ]
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                name: '[name].[ext]',
                outputPath: 'fonts/'
              }
            }
          ]
        }
      ]
    },
    plugins: []
  };
}

export default function webpackConfig(options) {
  return hotReload(getConfig(options), options)
  .then(function applySourcemaps(config) {
    return sourcemaps(config, options)
  })
  .then(function applyPlugins(config) {
    return plugins(config, options)
  });
}
