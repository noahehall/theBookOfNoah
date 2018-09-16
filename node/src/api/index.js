import http from 'http'
import app from './server';

export default function reload(nconf, config) {
  console.log('bam2')
  const port = nconf.get('port');
  const domain = nconf.get('domain');
  const server = http.createServer(app)
  let currentApp = app
  server.listen(port)
  if (module.hot) {
   module.hot.accept('./server', () => {
     console.log('module hot')
    server.removeListener('request', currentApp)
    server.on('request', app)
    currentApp = app
   })
  }

}
