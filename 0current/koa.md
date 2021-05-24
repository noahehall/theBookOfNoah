bookmark
https://koajs.com/#introduction
midle of Context

# TODO
  - general http(s) protocol refresher
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
  - content negotiation 
    - Accept-Encoding: e.g. gzip, identity, etc
    - Accept-Charsets: e.g. utf-8, utf-7, iso-8859-1;q=0.2
    - Accept-Language: e.g. en, es, pt



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
  - set app settings directly on the app instance
    - fields: *env, proxy, subdomainOffset, silent*
      - see *request -> subdomains*
  
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
      - content negotiation
        - check the request *Accept(-...): BLAH...* header to see content types consumer supports
          - if no types supplied: all types are supported
          - if multiple types supplied; return the best match
          - if no matches found; send a http code *406 Not Acceptable* response 
          - for *Accept-Encoding:...* header
            - always include *identity* (i.e. no encoding) when checking supported encodings
              - note that *Accept-Encoding: identity;q=0* means identity is not supported
              - 
        - applicable to all the accepts* fields
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
        - ips: array of IPs [upstream, > downstream] if *X-Forwarded-For* && *!!app.proxy*
        - subdomains:  array of subdomains i.e. the dot-separtaed parts of the host before the main domain (last two parts)
          - see *app.subdomainOffset*
        - is(types...): assert incoming request contains *types...* in Content-Type header field
        - accepts(types...): check if given type(s) are supported, returning the best match
        - acceptsEncodings(encodings...): check if given encoding(s) are supported, returning the best match
        - acceptsCharsets(charsets): same as above
        - acceptsLanguages(langs): same as above
        - idempotent: check request is idempotent
          - if receiving the **same** response multiple times has the same **effect**
        - socket: returns request socket
        - get: returns request header field
    
    - response: koa response
      - abstraction on top of nodes response object
      - fields: *body, status, message, length, type, headerSent, redirect, attachment, set, append,remove, lastModified, etag*
        - header(s): response header object
        - socket: request socketh
        - status: get/set; 404 default; Get response status
        - message: get/set; whatever the response.status is by default
        - length: get/set; response Content-Length
        - body: get/set; response body
          - string|Buffer written
            - text/html|plain charset=utf-8
            - application/octet-stream + Content-Length
          - stream piped
          - Object|Array json-stringified
          - null no content response

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

  // subdomains + subdomainOffset
    // domain = three.two.one.com
    // assumes main domain is last two parts by default
    // i.e. app.subdomainOffset = 2;
    ctx.request.subdomains === ['two', 'three']

    // removed 3 from the right
    app.subdomainOffset = 3
    ctx.request.subdomains === ['three']

  // checking content-type of a request
  // returns bool|null when no request body
    // Content-Type: text/html; charset=utf-8
    ctx.is('html') === 'html';
    ctx.is('text/html') === 'text/html';
    ctx.is('text/*', 'text/html') === 'text/html';

    // Content-Type: application/json
    ctx.is('json', 'urlencoded'); // => 'json'
    ctx.is('application/json'); // => 'application/json'
    ctx.is('html', 'application/*'); // => 'application/json'

  // ensure valid content type of request
    return ctx.request.is('image/*)) 
      ? continueLogic()
      : ctx.throw(415, 'images only'); // dont use ctx.throw (stale dep: askholz)


  // check mime/types (i.e. type/extension) consumer supports via request Accept header
    // i.e. [application/json, text/html, text/*]
    // better to be as specific as possible 
    // dont leave off type as below which only checks the extension
    switch (ctx.accepts('json', 'html', 'text')) {
      case 'json': break;
      case 'html': break;
      case 'text': break;
      default: ctx.throw(406, 'json, html, or text only');
    }


  // available response status codes set via #
    100 "continue"
    101 "switching protocols"
    102 "processing"
    200 "ok"
    201 "created"
    202 "accepted"
    203 "non-authoritative information"
    204 "no content"
    205 "reset content"
    206 "partial content"
    207 "multi-status"
    208 "already reported"
    226 "im used"
    300 "multiple choices"
    301 "moved permanently"
    302 "found"
    303 "see other"
    304 "not modified"
    305 "use proxy"
    307 "temporary redirect"
    308 "permanent redirect"
    400 "bad request"
    401 "unauthorized"
    402 "payment required"
    403 "forbidden"
    404 "not found"
    405 "method not allowed"
    406 "not acceptable"
    407 "proxy authentication required"
    408 "request timeout"
    409 "conflict"
    410 "gone"
    411 "length required"
    412 "precondition failed"
    413 "payload too large"
    414 "uri too long"
    415 "unsupported media type"
    416 "range not satisfiable"
    417 "expectation failed"
    418 "I'm a teapot"
    422 "unprocessable entity"
    423 "locked"
    424 "failed dependency"
    426 "upgrade required"
    428 "precondition required"
    429 "too many requests"
    431 "request header fields too large"
    500 "internal server error"
    501 "not implemented"
    502 "bad gateway"
    503 "service unavailable"
    504 "gateway timeout"
    505 "http version not supported"
    506 "variant also negotiates"
    507 "insufficient storage"
    508 "loop detected"
    510 "not extended"
    511 "network authentication required"

  // common headers
  // TODO: should already be in one of the other files somewhere
    Content-Length

```