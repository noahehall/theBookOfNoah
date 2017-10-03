import webpackBase from '../webpack.base.js';
import save from './save';
import hotReloadClient from './hotReloadClient';

export default function process(nconf) {
  const config = webpackBase(nconf);
  if (nconf.get('NODE_ENV') === 'production') {
    save(nconf, config);
  }

  else if (nconf.get('type') === 'client') {
    console.log('return hotreload client')
    return hotReloadClient(nconf, config);
  }
}
