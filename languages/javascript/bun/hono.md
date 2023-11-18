# hono

- Hono is a lightweight ultrafast web framework designed for the edge.
- framework similar to Express, But it runs on CDN Edges and allows you to construct larger applications when combined with middleware
- FYI notes in this file are specific to bun, check the docs for cloudflare/deno/aws/etc
- [bookmark](https://hono.dev/api/hono#fire)

## links

- [landing page](https://hono.dev/top)
- [examples](https://github.com/honojs/examples)

### ecosystem

- [zod middleware](https://github.com/honojs/middleware/tree/main/packages/zod-validator)

### docs

- [AAAA: getting started](https://hono.dev/getting-started/basic)
- [bun](https://hono.dev/getting-started/bun)
- [middleware](https://hono.dev/concepts/middleware)
- [routers](https://hono.dev/concepts/routers)
- [stacks](https://hono.dev/concepts/stacks)
- [web standard](https://hono.dev/concepts/web-standard)

### api

- [Hono object](https://hono.dev/api/hono)
- [routing](https://hono.dev/api/routing)
- [context](https://hono.dev/api/context)
- [context: renderer](https://hono.dev/api/context#render-setrenderer)
- [presets](https://hono.dev/api/presets)
- [helpers: adapter](https://hono.dev/helpers/adapter)
- [helpers: cookie](https://hono.dev/helpers/cookie)
- [helpers: factory (middleware creator)](https://hono.dev/helpers/factory)
- [helpers: html](https://hono.dev/helpers/html)
- [helpers: jwt](https://hono.dev/helpers/jwt)
- [helpers: streaming](https://hono.dev/helpers/streaming)
- [helpers: testing](https://hono.dev/helpers/testing)

### guides

- [validation](https://hono.dev/guides/validation)
- [middleware](https://hono.dev/guides/middleware)
- [middleware: timing](https://hono.dev/middleware/builtin/timing)
- [middleware: logger](https://hono.dev/middleware/builtin/logger)
- [middleware: pretty json](https://hono.dev/middleware/builtin/pretty-json)
- [middleware: secure headers (helmet)](https://hono.dev/middleware/builtin/secure-headers)
- [middleware: 3rd party](https://hono.dev/middleware/third-party)
- [middleware: jwt](https://hono.dev/middleware/builtin/jwt)
- [middleware: cors](https://hono.dev/middleware/builtin/cors)
- [middleware: cache](https://hono.dev/middleware/builtin/cache)
- [middleware: basic auth](https://hono.dev/middleware/builtin/basic-auth)
- [middleware: bearer auth](https://hono.dev/middleware/builtin/bearer-auth)
- [helpers](https://hono.dev/guides/helpers)
- [jsx](https://hono.dev/guides/jsx)
- [testing](https://hono.dev/guides/testing)
- [rpc](https://hono.dev/guides/rpc)

## TLDR

```sh
# read this https://hono.dev/getting-started/basic

# create an app
bunx create-hono my-app

```

## basics

- works with Zod + zod-to-openapi, check the stacks section
- bindings: Environment variables, secrets, and KV namespaces
  - always available as global variables and can be accessed via the context c.env.BINDING_KEY.
- hono/jsx is bundled with Hono and is strictly for Server-Side Rendering (SSR), not for client-side.

### routers

- the core component of hono
- 5 different types

#### RegExpRouter

- supposedely the fastest in JS ecosystem
- the route registration phase can be slightly slow. So, it's not suitable for an environment that initializes with every request.
  - check LinearRouter instead

#### TrieRouter

- not as fast as RegExpRouter, but provides more functionality
- supposedely faster than express router

#### SmartRouter

- examines all your routes and matches them with the best router
- When the application starts, SmartRouter detects the fastest router based on routing and continues to use it.
  - for some will use regexprouter, so its super fast
  - for others it will use one of the others

```ts
// Inside the core of Hono.
readonly defaultRouter: Router = new SmartRouter({
  routers: [new RegExpRouter(), new TrieRouter()],
})
```

#### LinearRouter

- optimized for "one shot" situations. Route registration is significantly faster than with RegExpRouter because it adds the route without compiling strings, using a linear approach.

#### PatternRouter

- the smallest router among Hono's routers; An application using only PatternRouter is under 12KB in size.

### Middleware

- runs before and after handlers
- REQUEST > m1 > m2 > m3 > HANDLERS > m3 > m2 > m1 > RESPONSE
- very express-esque so you should feel at home

```ts
// custom middleware to add X-Response-Time header
app.use("*", async (c, next) => {
  const start = Date.now();
  await next();
  const end = Date.now();
  c.res.headers.set("X-Response-Time", `${end - start}`);
});

// hono has prebuilt middleware too
import { basicAuth } from "hono/basic-auth";
app.use(
  "/admin/*",
  basicAuth({
    username: "admin",
    password: "secret",
  })
);
app.get("/admin", (c) => {
  return c.text("Your are authorized!");
});
```

#### Adapters

- adapters are platform specific middlewares ;)~

```ts
// import { serveStatic } from "hono/cloudflare-workers"; // blah!
import { serveStatic } from "hono/bun"; // bam! check the docs for all the options

const app = new Hono();

app.use("/static/*", serveStatic({ root: "./" }));
app.use("/favicon.ico", serveStatic({ path: "./favicon.ico" }));
app.get("/", (c) => c.text("You can access: /static/hello.txt"));
app.get("*", serveStatic({ path: "./static/fallback.txt" }));
```

#### helpers

- Unlike middleware, they don't act as handlers, but rather provide useful functions.

```ts
import { getCookie, setCookie } from "hono/cookie";

const app = new Hono();

app.get("/cookie", (c) => {
  const yummyCookie = getCookie(c, "yummy_cookie");
  // ...
  setCookie(c, "delicious_cookie", "macha");
  //
});
```

### stacks

#### validators

```ts
// option 1: with basic hono validator
import { validator } from "hono/validator";
app.post(
  "/posts",
  // Validation targets include json, query, header, param and cookie in addition to form.
  validator('param', ...),
  validator('query', ...),
  validator('json', ...),
  validator("form", (value, c) => {
    const body = value["body"];
    if (!body || typeof body !== "string") {
      return c.text("Invalid!", 400);
    }
    return {
      body: body,
    };
  }),
  // handler
  (c) => {
    const { body } = c.req.valid("form");
    // ... do something
    return c.json(
      {
        message: "Created!",
      },
      201
    );
  }
);


// option 2: use z and hono validator
import { z } from "zod";
const schema = z.object({
  body: z.string(),
});
const route = app.post(
  "/posts",
  validator("form", (value, c) => {
    const parsed = schema.safeParse(value);
    if (!parsed.success) {
      return c.text("Invalid!", 401);
    }
    return parsed.data;
  }),
  (c) => {
    const { body } = c.req.valid("form");
    // ... do something
    return c.json(
      {
        message: "Created!",
      },
      201
    );
  }
);

// option 3: zod middleware (recommended)
import { zValidator } from "@hono/zod-validator";
app.get(
  "/hello",
  zValidator(
    "query",
    z.object({
      name: z.string(),
    })
  ),
  (c) => {
    const { name } = c.req.valid("query");
    return c.json({
      message: `Hello! ${name}`,
    });
  }
);

```

#### RPC

- allows you to share API specs with little change to your code.
- The client generated by `hc` will read the spec and access the endpoint Type-Safety.
- key components
  - hono api server
  - Zod Validator
  - Zod Validator Middleware
  - `hc` http client

```ts
// for each route: emit an endpoint specification
const route = app.get(
  "/hello",
  zValidator(
    "query",
    z.object({
      name: z.string(),
    })
  ),
  (c) => {
    const { name } = c.req.valid("query");
    // use jsonT instead of json !!!
    return c.jsonT({
      message: `Hello! ${name}`,
    });
  }
);
export type AppType = typeof route; // <------ dont forget to expore it!

// on the client side import apptype and hc to create a client
import { AppType } from "./server";
import { hc } from "hono/client";

const client = hc<AppType>("/api"); // <---- bam!
const client = hc<AppType>("http://localhost:8787/"); // or full url
const client = hc<AppType>("/api", {
  // can also add headers to all requests
  headers: {
    Authorization: "Bearer TOKEN",
  },
});
// client.{path}.{method}
const res = await client.hello.$get({
  query: {
    name: "Hono",
  },
});
if (res.ok) {
  const data = await res.json();
  console.log(data.message);
}

// for paths with params e.g.  app.get('/posts/:id',...)
const res = await client.posts[":id"].$get(
  {
    param: {
      id: "123",
    },
    query: {},
  },
  {
    headers: {
      "X-Custom-Header": "Here is Hono Client",
      "X-User-Agent": "hc",
    },
  }
);
```

### Presets

```ts
//  ideal for long-life servers built with Deno, Bun, or Node.js.
import { Hono } from "hono"; // smart router

// designed for environments where the application is initialized for every request
import { Hono } from "hono/quick";

// suitable for environments where resources are limited.
import { Hono } from "hono/tiny";
```

## API

### Hono object

- Hono is the primary object. It will be imported first and used until the end.

```ts
import { Hono } from 'hono'

const app = new Hono()
//... bunch of stuff here

export default app // for Cloudflare Workers or Bun

// instance methods
app.HTTP_METHOD([path,]handler|middleware...)
app.all([path,]handler|middleware...)
app.on(method|method[], path, handler|middleware...)
app.use([path,]middleware)
app.route(path, [app])
app.basePath(path)
app.notFound(handler)
app.onError(err, handler)
app.showRoutes()
app.routerName
app.mount(path, anotherApp)
app.fire()
app.fetch(request, env, event)
app.request(path, options)

```

### examples

#### basic app

```ts
/////////////// basic app
import { Hono } from "hono";

type Variables = {
  message: string
}
const app = new Hono<{ Variables: Variables }>()
const app = new Hono();
app.get("/", (c) => {
  return c.text("Hello Hono!");
});

// bunch of stuff
app.notFound((c) => {
  return c.text("Custom 404 Message", 404);
});
app.onError((err, c) => {
  console.error(`${err}`);
  return c.text("Custom Error Message", 500);
});
app.post("/posts", (c) => c.text("Created!", 201));
app.delete("/posts/:id", (c) => c.text(`${c.req.param("id")} is deleted!`));
app.get('/post/:date{[0-9]+}/:title{[a-z]+}', (c) => {
  const { date, title } = c.req.param()
  ...
})
app.get("/api/animal/:type?", (c) => c.text("Animal!")); // Will match `/api/animal` and `/api/animal/:type`

// can be chained
app
  .get("/endpoint", (c) => {
    return c.text("GET /endpoint");
  })
  .post((c) => {
    return c.text("POST /endpoint");
  })
  .delete((c) => {
    return c.text("DELETE /endpoint");
  });

// return some html with jsx, make sure the file ends in .tsx
const View = () => {
  return (
    <html>
      <body>
        <h1>Hello Hono!</h1>
      </body>
    </html>
  );
};

app.get("/page", (c) => {
  return c.html(<View />);
});
export default app;
```

#### tests

```ts
/////////////// basic tests
import { describe, expect, it } from "bun:test";
import app from ".";
// via request object + fetch
describe("My first test", () => {
  it("Should return 200 Response", async () => {
    const req = new Request("http://localhost/");
    const res = await app.fetch(req);
    expect(res.status).toBe(200);
  });
});

// or request object + app.request
test("POST /message is ok", async () => {
  const req = new Request("Hello!", {
    method: "POST",
  });
  const res = await app.request(req);
  expect(res.status).toBe(201);
});

// or app.request with path of route
test("GET /hello is ok", async () => {
  const res = await app.request("/hello");
  expect(res.status).toBe(200);
});
// testing GETs
describe("Example", () => {
  test("GET /posts", async () => {
    const res = await app.request("/posts");
    expect(res.status).toBe(200);
    expect(await res.text()).toBe("Many posts");
  });
});
// testing POSTs
test("POST /posts", async () => {
  const res = await app.request("/posts", {
    method: "POST",
  });
  expect(res.status).toBe(201);
  expect(res.headers.get("X-Custom")).toBe("Thank you");
  expect(await res.json()).toEqual({
    message: "Created",
  });
});

// fake an e2e test
test("POST /posts", async () => {
  const req = new Request("http://localhost/posts", {
    method: "POST",
  });
  const res = await app.request(req);
  expect(res.status).toBe(201);
  expect(res.headers.get("X-Custom")).toBe("Thank you");
  expect(await res.json()).toEqual({
    message: "Created",
  });
});

// with the test client helper
import { testClient } from "hono/testing";
it("test", async () => {
  const app = new Hono().get("/search", (c) => c.jsonT({ hello: "world" }));
  const res = await testClient(app).search.$get();
  expect(await res.json()).toEqual({ hello: "world" });
});
```

#### context

```ts
/////////////// context is the world
// if app.get('/about/me', ...)
// ^ const pathname = c.req.path // `/about/me`
// ^ const url = c.req.url // `http://localhost:8787/about/me`
// ^ const method = c.req.method // `GET`
// path params: c.req.param('name') || { name } = c.req.param()
// query strings: c.req.query("page");
// multiple query strings: const tags = c.req.queries('tags') // tags: string[] e.g. /search?tags=A&tags=B
// headers: c.header("X-Message", "Hi!"); || const userAgent = c.req.header('User-Agent')
// form-data / application/x-www-form-urlencoded: const body = await c.req.parseBody()
// as json: const body = await c.req.json()
// as text: const body = await c.req.text()
// as array buffer: const body = await c.req.arrayBuffer()
// get validated data: const { title, body } = c.req.valid('form')
// ^ form, json, query, header, cookie, param
```

#### responses

```ts
app.get("/posts/:id", (c) => {
  // return raw response
  return new Response("Good morning!");
  // or text
  return c.text(`You want see ${page} of ${id}`);
  // with additional stuff
  return c.text("Created!", 201, {
    "X-Custom": "Thank you!",
  });
  // or json
  return c.json({
    ok: true,
    message: "Hello Hono!",
  });
  // json with options
  return c.json({ message: "Created" }, 201, { "X-Custom": "Thank you" });
  // or Typedresponse
  return c.jsonT({ ok: true });

  // manually via context
  // Set headers
  c.header("X-Message", "Hello!");
  c.header("Content-Type", "text/plain");

  // Set HTTP status code
  c.status(201);

  // Return the response body
  return c.body("Thank you for coming");

  // or via response object
  new Response("Thank you for coming", {
    status: 201,
    headers: {
      "X-Message": "Hello",
      "Content-Type": "text/plain",
    },
  });
});
app.get("/redirect", (c) => c.redirect("/")); // defaults to 302
app.get("/redirect-permanently", (c) => c.redirect("/", 301));

// return stream
app.get("/", (c) => {
  return c.stream(async (stream) => {
    await stream.write(new Uint8Array([0x48, 0x65, 0x6c, 0x6c, 0x6f])); // Write a Uint8Array
  });
});

// or stream text
app.get("/", (c) => {
  return c.streamText(async (stream) => {
    await stream.writeln("Hello"); // Write a text with a new line ('\n')
    await stream.sleep(1000); // Wait 1 second
    await stream.write(`Hono!`); // Write a text without a new line
    await stream.pipe(hogeReadableStream); // Pipe a readable stream
  });
});
```

#### middleware

```ts
import { basicAuth } from "hono/basic-auth";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { poweredBy } from "hono/powered-by";
import { prettyJSON } from "hono/pretty-json";
import { etag } from "hono/etag";
// match any method, all routes
app.use("*", logger());
// specify path
app.use("/posts/*", cors());
// specify method and path
app.post("/posts/*", basicAuth());

// execution order similar to koa
app.use(async (_, next) => {
  console.log("middleware 1 start"); // before request is handled
  await next();
  console.log("middleware 1 end"); // after request is handled
});

// Response object
app.use("/", async (c, next) => {
  await next();
  c.res.headers.append("X-Debug", "Debug message");
});

// set and get values
app.use("*", async (c, next) => {
  c.set("message", "Hono is cool!!");
  await next();
});

app.get("/", (c) => {
  const message = c.get("message");
  return c.text(`The message is "${message}"`);
});

// middleware which provides a custom method, write like the following:
const echoMiddleware: MiddlewareHandler<{
  Variables: {
    echo: (str: string) => string;
  };
}> = async (c, next) => {
  c.set("echo", (str) => str);
  await next();
};

app.get("/echo", echoMiddleware, (c) => {
  return c.text(c.var.echo("Hello!"));
});

// error handler
app.use("*", async (c, next) => {
  await next();
  if (c.error) {
    // do something...
  }
});

// throwing exceptions When a fatal error occurs
import { HTTPException } from "hono/http-exception";
app.post("/auth", async (c, next) => {
  // authentication
  if (authorized === false) {
    throw new HTTPException(401, { message: "Custom error message" });
    // or explicitly specify the response object
    const errorResponse = new Response("Unauthorized", {
      status: 401,
      headers: {
        Authenticate: 'error="invalid_token"',
      },
    });
    throw new HTTPException(401, { res: errorResponse });
  }
  await next();
});

// ^ handle exceptions in app.onError
import { HTTPException } from "hono/http-exception";
app.onError((err, c) => {
  if (err instanceof HTTPException) {
    // Get the custom response
    return err.getResponse();
  }
  //...
});

// example with basic auth
api.post(
  "/posts",
  async (c, next) => {
    const auth = basicAuth({
      username: c.env.USERNAME,
      password: c.env.PASSWORD,
    });
    return auth(c, next);
  },
  async (c) => {
    const post = await c.req.json<Post>();
    const ok = createPost({ post });
    return c.json({ ok });
  }
);
```
