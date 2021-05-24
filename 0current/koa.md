bookmark
https://koajs.com/#introduction
midle of Context

# TODO
  - general http refresher
  - x-forwarded-host
  - app.proxy
  - ip4|6 config
  - http|2|3 & speedy
  - examples
  - routing
  - cache headers (and headers in general)
    - If-None-Match
    - ETag
    - If-Modified-Since
    - Last-Modified



# links
  - [home](https://koajs.com/)
  - [http server listen](http://nodejs.org/api/http.html#http_server_listen_port_hostname_backlog_callback)
  - [WHATWG url api](https://nodejs.org/dist/latest-v8.x/docs/api/url.html#url_the_whatwg_url_api)


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
    - i would refrain from using this sugar and directly access THING via `ctx.re(quest|sponse).THING`
  - fields: *request, response, method, state, cookies, throw, assert, respond*
    - in general fields are *getters & setters*
    
    - request: koa request
      - abstraction on top of nodes request object
      - fields: *header(s), method, url, origin, originalUrl, href,  path, query(string), host(name), fresh, stale, socket, protocol, search secure, ip(s), subdomains, is, accepts(Encodings|Charsets|Languages), get *
        - method: useful for implementing middleware such as *methodOverride()*
        - length: Content-Length as a number|undefined
        - url: Get request URL
        - originalUrl: Get request original URL
        - origin: Get origin of URL (includes protocol & host)
        - href: Get full request URL
        - path: request pathname, retains querystring if present
        - querystring: raq query string sans *?*
        - search: raw querystring with *?*
        - host: Get hostname:port|X-Forwarded-Host when !!app.proxy
        - hostname: Get hostname|X-Forwarded-Host when !!app.proxy
          - ip6 forces koa to parse hostname via WHATWG URL API (perf impact)
        - URL: WHATWG parsed URL object
        - type: Get request Content-Type e.g. *image/png* sans parameters e.g. *charset*
        - charset
        - query: parsed querystring object (sans nested parsing)
        - fresh: check if a request cash contents have not changed (i.e. is fresh)
          - for cache negotiating between *If-None-Match / ETag* and *If-Modified-Since & Last-Modified*
          - referenced AFTER setting one/more aforementioned response headers
        - stale: !request.fresh
        - protocol: http(s)|X-Forwarded-Proto when *!!app.proxy*
        - secure: *protocol === https*
        - ip: Request remote address|X-Forwarded-For if !!app.proxy
        - ips: array of IPs if *X-Forwarded-For* && !!app.proxy
    
    - response: koa response
      - fields: *body, status, message, length, type, headerSent, redirect, attachment, set, append,remove,lastModified, etag*
      - 

    - type: response.type
    - length: response.length
    - path: request.path
    - method: request.method
    - req: node request
    
    - res: node response
      - bypassing koas response handling is not supported
        - refrain from using *res[statusCode|writeHead|write|end]*
    
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
  

  // freshness check requires status 20x or 304
    ctx.status = 200;
    ctx.set('ETag', '123');

    // cache is ok
    if (ctx.fresh) {
      ctx.status = 304;
      return;
    }

    // cache is stale
    // fetch new data
    ctx.body = await db.find('something');
```