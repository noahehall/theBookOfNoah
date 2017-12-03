import express from 'express';
import webpack from 'webpack';
import path from 'path';

export default function hotReload(nconf, config) {
  // return fse.emptyDir(config.output.path, function(err) {
  //
  // }
  var app = express();
  console.log('config', config, config.plugins[3])
  var compiler =  webpack(config);

  if (nconf.get('NODE_ENV') === 'production') {
    console.log('prod')

  } else {
    console.log('hot reload else')
    app.use(require('webpack-dev-middleware')(compiler, {
      noInfo: false
    }));
    app.use(require('webpack-hot-middleware')(compiler));
  }

  // app.get('*', function(req, res) {
  //   console.log('hello')
  //   res.sendFile(path.join(nconf.get('output'),nconf.get('htmlpath'),'index.html'));
  // });

  const port = nconf.get('port');
  const domain = nconf.get('domain');
  app.listen(port, function(err) {
    if(err) {
      return console.log('hotreload.js',err);
    }

    console.log(`Server running on ${domain}:${port}`);
  });
}
