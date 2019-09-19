# links
  - [homepage](https://www.fastify.io/)
  - [docs](https://www.fastify.io/docs/)

## related technologies
  - [json schema](https://json-schema.org/)
  -

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