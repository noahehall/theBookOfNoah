import webpackBase from '../webpack.base.js';
import save from './save';
import hotReload from './hotReload';

export default function process(nconf) {
  if (nconf.get('type') === 'client') {
    if (nconf.get('NODE_ENV') === 'production') {
      save(nconf, config);
    }else{
      hotReload(nconf, webpackBase(nconf));
    }
  }
}
