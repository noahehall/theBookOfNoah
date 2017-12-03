import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
export default function htmlPlugin (nconf, config) {
  config
    .plugin('htmlplugin')
    .use(HtmlWebpackPlugin);

  const filename = path.join(nconf.get('output'), nconf.get('htmlpath'),'index.html');
  console.log('filename', filename)
  config.plugin('htmlplugin')
    .init(
      Plugin => new Plugin({
        template: './client/index.html',
        filename,
        inject: 'body'
      })
    )

    console.log('returning html plugin')

  return config;
}
