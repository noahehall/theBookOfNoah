# links
  - [home](https://koajs.com/)


# terminology
  - koa application: 
  - 


# basics
  - designed by the express team to be smaller, more expressive and robust for building web apps and apis
  - leverages async functions to ditch callbacks


# api 
## koa application
  - an object containing an array of middleware functions composed and executed ina stack-like manner upon request
    - content-negotiation, cache freshness, proxy support, redirection, etc


## koa middleware
  - cascading: invocation flows *downstream*, then control flows back *upstream*



# examples
```js
  // koa app
  const app = new Koa();

  // downstream upstream behavior
  app.use(async (ctx, next) => {
    // downstream logic
    //...
    await next(); // await demarcs down + up
    // upstream logic
    // ..
  });

```