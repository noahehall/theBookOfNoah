# links
  - [homepage](https://www.fastify.io/)
  - [docs](https://www.fastify.io/docs/)

## related technologies
  - [json schema](https://json-schema.org/)
  - [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)


## recommended plugins
  - [all fastify org provided plugins](https://github.com/fastify?type=source)
  - [fastify-plugin](https://github.com/fastify/fastify-plugin)
    - When you build plugins for Fastify and you want that them to be accessible in the same context where you require them,
  - [fastify-cors](https://github.com/fastify/fastify-cors)
    - enables the use of CORS in a Fastify application.
  - [fastify-language-parser](https://github.com/lependu/fastify-language-parser)
    - It decorates req object with detectedLng and adds preHandler hook for those language parsers which you specified in order option. Supports cookie, header, query, path and session parser.
  - [fastify swagger](https://github.com/fastify/fastify-swagger)
    - Swagger documentation generator for Fastify. It uses the schemas you declare in your routes to generate a swagger compliant doc.

# framework opinions
  - everything is a plugin

# API
## FASTIFY.route
  - declare a new route
  - accepts a route definition
```js
  // fastify.route({...})
  {
    method: 'GET',
    url: '/some/endpoint',
    schema: {
      querystring: SCHEMA // validate request query string,
      response: {
        STATUS_CODE: SCHEMA, // validate response per status code, e.g. 200
      }
    },
    beforeHandler: async (request, reply) => {}, // executed for each request pre-handler
    handler: async (request, reply) => {},
  }
```
# TOPICS
## REQ/RES VALIDATION AND HOOKS




# QUICKIES
```js
  // example server on localhost
      // Require the framework and instantiate it
      const fastify = require('fastify')({
        logger: true
      })

      // Declare a route
      fastify.get('/', function (request, reply) {
        reply.send({ hello: 'world' })
      })

      // Run the server!
      fastify.listen(3000, function (err, address) {
        if (err) {
          fastify.log.error(err)
          process.exit(1)
        }
        fastify.log.info(`server listening on ${address}`)
      })

  // example server with async await on localhost
      const fastify = require('fastify')()

      fastify.get('/', async (request, reply) => {
        return { hello: 'world' }
      })

      const start = async () => {
        try {
          await fastify.listen(3000)
        } catch (err) {
          fastify.log.error(err)
          process.exit(1)
        }
      }
      start()

  // specify the address when instantiating a server
      // all ip4
      fastify.listen(3000, '0.0.0.0', function (err, address) {...}
      // localhost ip6
      fastify.listen(3000, '::1', function (err, address) {...}
      // all ip6
      fastify.listen(3000, '::', function (err, address) {...}

```