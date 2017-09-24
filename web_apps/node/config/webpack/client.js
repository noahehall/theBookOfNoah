import Config from 'webpack-chain';
import htmlPlugin from './plugins/htmlPlugin';
import webpack from 'webpack';


export default function clientConfig(nconf, config) {
  const env = nconf.get('NODE_ENV');

  config.when(
    ['development'].includes(env),
    config => {
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
    }
  )


  const publicPath = nconf.get('protocol')
      + '://'
      + nconf.get('domain')
      + ':'
      + nconf.get('port') + '/';

  config
    .entry('client')
      .add('react-hot-loader/patch')
      .add('webpack-hot-middleware/client')
      .add('./web/app/client/components/root/index.js')
      .end()
    .output
      .path(nconf.get('output'))
      .publicPath(publicPath)
      .filename('bundle_[name].js')


  config = htmlPlugin(nconf, config);

  return config;
}
