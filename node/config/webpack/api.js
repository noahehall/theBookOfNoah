import Config from 'webpack-chain';
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';
import StartServerPlugin from 'start-server-webpack-plugin';

export default function apiConfig(nconf, config) {
  const env = nconf.get('NODE_ENV');

  config.when(
    ['development'].includes(env),
    // development webpack config
    config => {
      config
        .entry('api')
          .add('webpack/hot/poll?1000')
          .add('./api/index')
          .end();

      config.watch(true);
      config.externals([
        nodeExternals({
          whitelist: ['webpack/hot/poll?1000']
        })
      ])

      config.devtool('eval');

      config.plugin('HotModuleReplacementPlugin')
        .use(webpack.HotModuleReplacementPlugin);

    },
    // all other webpack config
    config => {
      // do nothing different
    }
  )

  config.module.rule('compile')
    .use('babel')
    .tap(options => Object.assign(
      {},
      options,
      {
        "presets": [
          ["env", {"modules": false}],
          "stage-1",
        ],
        "plugins": [
          "transform-runtime",
        ]
      }
    ))

  config
    .entry('api')
      .add('./api/index.js')
      .end()
    .output
      .path(nconf.get('output'))
      .filename(nconf.get('jspath')+'/bundle_[name].js')


  return config;
}
