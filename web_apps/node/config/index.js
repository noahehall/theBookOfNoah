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
nconf.set('output', nconf.get('path') || path.resolve(__dirname, '..','build'))
nconf.set('protocol', nconf.get('protocl') || 'http');

fse.outputJson(
  'config.json',
  nconf.get(),
  function cb(err, data) {
    if (err) console.error('error',err);
    else process(nconf);
  }
)
