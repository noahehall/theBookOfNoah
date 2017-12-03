import nconf from 'nconf';
import fse from 'fs-extra';
import process from './process';
import path from 'path';

nconf.use('memory')
  .argv({
    /*
      inspect: {default: undefined},
    */
  })
  .env(['NODE_ENV']);

nconf.set('NODE_ENV', nconf.get('NODE_ENV') || 'development')
nconf.set('port', nconf.get('port') || 8080);
nconf.set('domain', nconf.get('domain') || 'localhost');
nconf.set('output', nconf.get('path') || path.resolve(__dirname, '..','build/public/'))
nconf.set('jspath', nconf.get('jspath') || 'js')
nconf.set('htmlpath', nconf.get('htmlpath') || 'html')
nconf.set('imagepath', nconf.get('imagepath') || 'images')
nconf.set('protocol', nconf.get('protocol') || 'http');
nconf.set('publicPath', nconf.get('publicPath') || '/');

fse.outputJson(
  'config.json',
  nconf.get(),
  function cb(err, data) {
    if (err) console.error('config/index',err);
    console.log('return process')
    return process(nconf);
  }
)
