import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
export default function htmlPlugin (nconf, config) {
  config
    .plugin('htmlplugin')
    .use(HtmlWebpackPlugin);

  config.plugin('htmlplugin')
    .init(
      Plugin => new Plugin({
        template: './web/app/client/components/root/index.html',
        filename: path.join(nconf.get('output'), nconf.get('htmlpath'),'index.html'),
        inject: 'body'
      })
    )

  return config;
}
