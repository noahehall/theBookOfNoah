var express = require('express')
var path = require('path');
var app = express();

app.use(require('morgan')('short'));
if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const config = require('../../../../webpack.config.js')

  const compiler = webpack(config)

  app.use(webpackHotMiddleware(compiler))
  // app.use(webpackDevMiddleware(compiler, {
  //   entry: '...',
  //   log: true,
  //   noInfo: true,
  //   output: {
  //     path: '/'
  //   },
  //   publicPath: config.output.publicPath
  // }))
}
// added to app later in file
var blahRouter = express.Router();
var otherRouter = express.Router();

blahRouter.get(':blah', function(req, res) {
  // the root is /blah
  // but we specify it as /
  // this means this handles any /blah/:thingy
  return res.send(req.params.blah)
})

// useful when multiple verbs exist for the same route
otherRouter.route('/')
  .get(function(req,res) {
    res.send('hello')
  })
  .post(function(req,res) {
    //..
  })

/*
  app use middleware
  app.use(express.static('path'))
  const blah = function(req, res, next) {
    ...
    next();
  }
  app.use(blah);


 */

/*
  routes
  app.get
  app.all: good for always doing something for a specific route
  app.post
  app.delete
  app.put
  app.param: good for extracting params and storing them on the request so your routes are simpler
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
  return res.sendFile('index.html')
})

app.param('blah', function(req, res, next, blah) {
  if (true) {
    req.blah = blah;
    next();
  } else {
    res.send('wheres my blah')
  }
})

const validate = function(options = {}) {
  return function(req, res, next) {
    // validate middleware
  }
}
app.get('/private', validate(), function(req, res) {
  // you can send in an array of route level middle ware

});

app.use('/blah', blahRouter)
app.use('/other', otherRouter)

const errorMiddleware = function(err, req, res, next) {
  // make sure you log error
}
/*
  this will catch any next(error) within your route
 */
app.use(errorMiddleware)

// app.listen(3000, function(){
//   console.log('listeing on localhost:3000')
// });
export default app
