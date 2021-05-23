# links
  - [home](https://koajs.com/)
  - [http server listen](http://nodejs.org/api/http.html#http_server_listen_port_hostname_backlog_callback)


# terminology
  - 


# basics
  - designed by the express team to be smaller, more expressive and robust for building web apps and apis
  - leverages async functions to ditch callbacks


# api 
## gotchas
  - only parent apps can modify their context/settings
    - i.e. mounted apps inherit from their parent
## koa application
  - an object containing an array of middleware functions composed and executed ina stack-like manner upon request
    - content-negotiation, cache freshness, proxy support, redirection, etc
  - settings: properties on the app instance (env, proxy, subDomainOffset)
  - context: the prototype from which `ctx` is created
    - modify `ctx` via `app.context`  e.g. adding props/methods for use across the entire koa application
      - more performant (no middleware)
    


## koa middleware
  - cascading: invocation flows *downstream*, then control flows back *upstream*


### koa context
  - 
# examples
```js
  // koa app
    const app = new Koa();

  // application settings
    app.env = NODE_ENV || 'development';
    app.proxy = false; // true === proxy headers fields are trusted
    app.subdomainOFfset = 0; // # of .subdomains to ignore
  
  // application context
  // +use your imagination, but overloading context === antipattern
    app.context.db = db();

  // add fn to stack of middleware
    // app.use(fn)

  // downstream upstream behavior
    app.use(async (ctx, next) => {
      // downstream logic
      //...
      await next(); // await demarcs down + up
      // upstream logic
      // ..
    });


  // listening on port
    const http = require('http');
    const https = require('https');
    const Koa = require('koa');
    const app = new Koa();
    // app.listen(3000); // use below instead
    http.createServer(app.callback()).listen(3000);
    https.createServer(app.callback()).listen(3001);

  // fn for http.createServer method to handle a request
  // also used for mounting the koa app ina connect|express app
    // app.callback

  // askholz
  // https://github.com/koajs/koa/issues/1539
  // app,keys = 'dont use this due to stale keyGrip dep'

```