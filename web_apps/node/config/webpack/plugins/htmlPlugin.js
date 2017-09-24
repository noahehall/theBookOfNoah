import HtmlWebpackPlugin from 'html-webpack-plugin';

export default function htmlPlugin (nconf, config) {

  config
    .plugin('htmlplugin')
    .use(HtmlWebpackPlugin);

  config.plugin('htmlplugin')
    .init(
      Plugin => new Plugin({
        template: './web/app/client/components/root/index.html',
        filename: 'index.html',
        inject: 'body'
      })
    )

  return config;
}
