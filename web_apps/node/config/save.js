var fse = require('fs-extra');
var webpack = require('webpack');
import express from 'express';
import path from 'path';

export default function Save(nconf, config) {
  return fse.emptyDir(config.output.path, function(err) {
    console.log('save.js.emptydir', err)

    return webpack(config, function(err, stats) {
      console.log('save.js.webpack.save',err)

      var app = express();
      app.use(express.static(path.join(nconf.get('output'))));
      app.get('/', function(req, res) {
        res.sendFile(path.join(nconf.get('output'), nconf.get('htmlpath'),'index.html'));
      });



      const port = nconf.get('port');
      const domain = nconf.get('domain');
      app.listen(port, function(err) {
        if(err) {
          return console.log('save.js.listen',err);
        }

        console.log(`Server running on ${domain}:${port}`);
      });
    })
  })
}
