# about
  - allows you to setup verbs with routes

# useful modules
  - body-parser
  - nodemon

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

# middleware
  - a function to inspect and modify request and response objects
  - are called in order they are defined
  - types
    - 3rd party
    - router level
    - application level
    - error handling
    - built in
  -
