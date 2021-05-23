# links
  - [home](https://koajs.com/)
  - [http server listen](http://nodejs.org/api/http.html#http_server_listen_port_hostname_backlog_callback)


# terminology
  - 


# basics
  - designed by the express team to be smaller, more expressive and robust for building web apps and apis
  - leverages async functions to ditch callbacks


# api 
## koa application
  - an object containing an array of middleware functions composed and executed ina stack-like manner upon request
    - content-negotiation, cache freshness, proxy support, redirection, etc
  - settings: properties on the app instance (env, proxy, subDomainOffset)


## koa middleware
  - cascading: invocation flows *downstream*, then control flows back *upstream*



# examples
```js
  // koa app
    const app = new Koa();

  // application settings
    app.env = NODE_ENV || 'development';
    app.proxy = false; // true === proxy headers fields are trusted
    app.subdomainOFfset = 0; // # of .subdomains to ignore
    

  // downstream upstream behavior
    app.use(async (ctx, next) => {
      // downstream logic
      //...
      await next(); // await demarcs down + up
      // upstream logic
      // ..
    });

```