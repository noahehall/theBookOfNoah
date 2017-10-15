import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';


export default function plugins(config, options) {
  switch (options.env) {
    case 'development': {
      config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
      )
      break;
    }
    case 'production': {
      config.plugins.push(
        new CleanWebpackPlugin(
          [options.path],
          {
            verbose: true,
            root: options.context
          }
        ),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
          sourceMap: true // Why sourcempaps in prod?
        })
      );
    }
  }

  // all environments
  config.plugins.push(
    new webpack.ProvidePlugin({
      React: 'react',
      _: 'lodash'
    }),
    new ExtractTextPlugin('bundle.css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(options.env)
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['vendor', 'main']
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'react/components/App/index.html',
      hash: false // setting to true breaks hot reloading
    }),
  );

  return Promise.resolve(
    Object.assign(
      {},
      config
    )
  );
};
