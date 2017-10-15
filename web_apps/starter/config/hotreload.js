import path from 'path';

function getHotReload(options) {
  return options.env === 'development'
    ? {
      devServer: {
        contentBase: options.contentBase,
        historyApiFallback: true,
        port: options.port,
        hotOnly: true,
        hot: true,
        inline: true,
        clientLogLevel: 'info',
        compress: false,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
      }
    }
    : {};
}

export default function hotreload(config, options) {
  return Promise.resolve(
    Object.assign(
      {},
      config,
      getHotReload(options)
    )
  );
};
