bookmark
https://koajs.com/#introduction
midle of Context
# links
  - [home](https://koajs.com/)
  - [http server listen](http://nodejs.org/api/http.html#http_server_listen_port_hostname_backlog_callback)


# terminology
  - 


# basics
  - designed by the express team to be smaller, more expressive and robust for building web apps and apis
  - leverages async functions to ditch callbacks

## best practices
  - avoid overloading *app.context* as its created per request
  - utilize *ctx.state* for passing information through middleware|frontend views
# api 
## gotchas
  - only parent apps can modify their context/settings
    - i.e. mounted apps inherit from their parent
## koa application
  - an object containing an array of middleware functions composed and executed ina stack-like manner upon request
    - content-negotiation, cache freshness, proxy support, redirection, etc
  - settings: properties on the app instance 
    - *env, proxy, subDomainOffset, silent*
  - context: the prototype from which `ctx` is created
    - fields: *request, response*
    - setup `ctx` via `app.context`  e.g. adding props/methods for use across the entire koa application
      - more performant (no middleware)
      - remember this object is created per request
        - keep the logic to a minimum
  - on('eventName', ...)
    - *error,*
    - event handlers
    

### app.on('error', ...)

## koa middleware app.use(midWareFn)
  - cascading: invocation flows *downstream*, then control flows back *upstream*
  - 


### koa ctx
  - see app.context for setup
  - ctx is passed to all middleware fns
  - many props are sugar; delegated to either request, response (etc)
  - fields: *request, response, type, length, path, method, state, cookies, throw, assert, respond*
    
    - request: koa request
      - fields: *header(s), method, url, origin, originalUrl, href,  path, query(string), host(name), fresh, stale, socket, protocol secure, ip(s), subdomains, is, accepts(Encodings|Charsets|Languages),get*
    
    - response: koa response
      - fields: *body, status, message, length, type, headerSent, redirect, attachment, set, append,remove,lastModified, etag*

    - type: response.type
    - length: response.length
    - path: request.path
    - method: request.method
    - req: node request
    
    - res: node response
      - ypassing koas response handling is not supported
        - refrain from using *res[statusCode|writeHead|write|end]
    
    - state: object; per req|res cycle
      - namespace (object) for passing info through middleware and to your frontend views
    
    - app: koa app refernces
    
    - cookies: cookie logic
      - get(name, options)
      - set(name, value, prop)
        - prop.maxAge: ms from Date.now for expiry
        - props.signed: sign the cookie value
        - props.expires: date for expiration
        - props.path: '/' default
        - props.domain
        - secure:
        - httpOnly: true default; server-accessible cookie
        - overwrite: false default; whther to overwrite previously set cookies of the same name
          - when set to true: all cookies set during the request cycle with the same name are filterd out of the `set-cookie`
    
    - throw(status, msg, props)
      - throw an error with a .status prop (500 default) 
      - stale dep
    
    - assert(value, status, msg, props)
      - stale dep
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

  // 


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
  // app.keys = 'dont use this due to stale keyGrip dep'

  // error handling
    // outputs errs to stderr unless app.silent = true
    app.silent = false;
    app.on('error', err => {
      // handle error
    })

  // askholz
  // stale dep: https://github.com/jed/cookies
  // ctx.cookies{}

  // askholz
  // stale dep: https://github.com/jshttp/http-errors
  // throw error for koa to handle automaticaly
    ctx.throw(400);
    ctx.throw(400, 'name requiered');
    ctx.throw(400, 'name required', { user });
      // longform
      const e = new Error('name required');
      e.status = 400;
      e.expose = true; // send msg to client in response
      throw e;

  // askholz
  // stale dep: https://github.com/jshttp/http-assert
  // helper to throw error when !value
    ctx.assert(ctx.state.user, 401, 'user not found');

  // bypass koas built-in response handling
  // +not recommended, however is escape hatch 
  // *if wanting to use fn(req, res) fns and middleware within koa
  

```