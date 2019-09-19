# links
  - [homepage](https://www.fastify.io/)
  - [docs](https://www.fastify.io/docs/)

## related technologies
  - [json schema](https://json-schema.org/)
  -

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
  // example server
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

```