# about
  - allows you to setup verbs with routes
  - middleware and routes are executed in order

# useful modules
  - body-parser
  - morgan
  - nodemon
  - https://httpie.org/ (terminal client for testing apis)
  - node-inspector: debug express app
  - supertest: for testing APIs

# testing
  - best practice
    - export the express app into the test so that you can start the test in each test with different configs if you need it
    ```javascript
      var app = require('./some/express/app')
      var request = require('supertest');
      it('should get all todos', function(done) {
        request(app)
          .get('/todos')
          .set('Accept', 'application/json')
          .expect('Content-Type', 'json')
          .expect(200)
          .done(function(err resp) {
            expect(resp.id).toBeDefined();
            done()
          })
      })
    ```
# rest
  - stateless
  - use http verbs
  - expose a directory like url pattern
  - modeling your data
    - defined as a json object
      - each key becomes a route param `/blah/name/id/gender`
      ```javascript
        {
          "name": "noah",
          "id": 1,
          "age": 31,
          "gender": "mail"
        }
      ```
    - design the routes to access the resource via HTTP verbs
      - get
        - allow query params for filtering/ordering
      - post
      - put
      - delete
      ```javascript
        {
          "GET /blah": {
            "desc": "does stuff",
            "response": "200, application/json",
            "data": [{}, {}] // array of all blahs
          },
          "GET /blah/:id": {
            ...
            "data": {} // a specific blah
          }
        }
      ```
# API organization
  - API is just a
    - collection of resources
    - models to define how resources look: the blueprint
    - controllers to access resources: glue between routes and models
    - routers to let controllers know how to run & expose our API
  - patterns
    - MVC:
    - services: instead of grouping bycode by typ we will group by features
      ```javascript
        config/
        api/
          someEndpoint/
            someEndpoint.model.js
            someEndpoint.controller.js
            someEndpoint.routes.js
          anotherEndpoint/
            ...
        utils/
        index.js
      ```
# middleware
  - a function to inspect and modify request and response objects
    - really good for keeping your API logic DRY by grouping logic at the application > router > route level
  - are called in order they are defined
  - types
    - 3rd party: stuff you install
    - router level
    - application level: anything in consumed via `app.use`
      - it will process every request/respond anywhere in the app
    - error handling: any middleware that takes error as the first argument
    - built in

# routers
  - isolated set of rules and routes
    - epress.Router() can do everything express()
    - separate middleware, routes, etc
  - great for
    - versioning apis
  - best practice
    - use express() for global middleware and configuration and to setup routes and subroutes
    - create specific routers that have their own config
    - the order still matters
