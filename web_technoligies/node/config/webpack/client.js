import Config from 'webpack-chain';
import htmlPlugin from './plugins/htmlPlugin';
import webpack from 'webpack';


export default function clientConfig(nconf, config) {
  const env = nconf.get('NODE_ENV');

  config.when(
    ['development'].includes(env),
    config => {
      console.log('client webpack dev mode')
      config
        .entry('client')
          .add('react-hot-loader/patch')
          .add('webpack-hot-middleware/client')
          .end();

      config.devtool('eval');

      config.plugin('HotModuleReplacementPlugin')
        .use(webpack.HotModuleReplacementPlugin);
      config.plugin('NoEmitOnErrorsPlugin')
        .use(webpack.NoEmitOnErrorsPlugin);

      config.plugin('NamedModulesPlugin')
        .use(webpack.NamedModulesPlugin)

      config.module.rule('compile')
        .use('babel')
        .tap(options => Object.assign(
          {},
          options,
          {
            "presets": [
              ["env", {"modules": false}],
              "stage-1",
              "react",
              "react-hmre"
            ],
            "plugins": [
              "transform-runtime",
              "react-hot-loader/babel"
            ]
          }
        ))
    },
    config => {
      config.module.rule('compile')
        .use('babel')
        .tap(options => Object.assign(
          {},
          options,
          {
            "presets": [
              ["env", {"modules": false}],
              "stage-1",
              "react",
            ],
            "plugins": [
              "transform-runtime",
            ]
          }
        ))
    }
  )

  config
    .entry('client')
      .add('./client/index.js')
      .end()
    .output
      .path(nconf.get('output'))
      .publicPath(nconf.get('publicPath'))
      .filename(nconf.get('jspath')+'/bundle_[name].js')


  console.log('client js returning html plugin')
  return htmlPlugin(nconf, config);
}
