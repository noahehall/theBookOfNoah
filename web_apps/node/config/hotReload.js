import express from 'express';
import webpack from 'webpack';
import path from 'path';

export default function hotReload(nconf, config) {

  var app = express();

  var compiler =  webpack(config);

  if (nconf.get('NODE_ENV') === 'production') {
    console.log('prod')

  } else {
    app.use(require('webpack-dev-middleware')(compiler, {
      noInfo: true, publicPath: config.output.publicPath
    }));
    app.use(require('webpack-hot-middleware')(compiler));
  }

  app.get('*', function(req, res) {
    res.sendFile(path.join(nconf.get('output'),nconf.get('htmlpath'),'index.html'));
  });

  const port = nconf.get('port');
  const domain = nconf.get('domain');
  app.listen(port, function(err) {
    if(err) {
      return console.log('hotreload.js',err);
    }

    console.log(`Server running on ${domain}:${port}`);
  });
}
