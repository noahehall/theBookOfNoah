var fse = require('fs-extra');
var webpack = require('webpack');

export default function Save(nconf, config) {
  return fse.emptyDir(config.output.path, function(err) {
    console.log('error', err)
    return webpack(config, function(err, stats) {
      console.log('error',err)
      //console.log(stats)
      console.log('finished')
    })
  })
}
