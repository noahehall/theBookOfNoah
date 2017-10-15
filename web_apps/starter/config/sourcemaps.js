export default function sourceMap(config, env) {
  return Promise.resolve(
    Object.assign(
      {},
      config,
      {
        devtool: env === 'development'
          ? 'eval-source-map'
          : 'source-map'
      }
    )
  );
};
