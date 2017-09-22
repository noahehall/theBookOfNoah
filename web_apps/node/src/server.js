var express = require('express')

var app = express();
// app use middleware
/*
  app.use(express.static('path'))
  const blah = function(req, res, next) {
    ...
    next();
  }
  app.use(blah)
 */
app.get('/', function(req, res /*, next */) {
  /*
    res.setHeader('name', 'value')
    .send
    .sendFile
    .json
    .end
    res.status(500).send
   */
  return res.send('hello')
})
app.get('/:blah', function(req, res) {
  return res.send(req.params.blah)
})
app.listen(3000 function(){
  console.log('listeing on localhost:3000')
});
