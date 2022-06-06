# TLDR

- various copypasta concerning API design

# links

- [towards a vlidated human-centered workshop design](https://www.slideshare.net/TobiasBlum/innovating-the-api-economy-towards-a-humancentered-workshop-design)
  - master thesis by tobias blum; creator of the human-centered api methdology
- [human-centered api design](https://medium.com/api-product-management/design-apis-human-centered-to-build-successful-api-products-ffe35015cee5)
- [api product ideation and validation](https://medium.com/api-product-management/api-product-ideation-and-validation-aef140db00b)
- [best practices for REST api design (stackoverflow.blog)](https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/)
- [best practices in API Design (swagger)](https://swagger.io/resources/articles/best-practices-in-api-design/)
- [RESTful web API design (microsoft)](https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design)
- [REST API: concepts, best practices and benefits (altexsoft)](https://www.altexsoft.com/blog/rest-api-design/)
- [HATEOAS driven REST APIs](https://restfulapi.net/hateoas/)
- [best practices for designing pragmatic RESTful apis (enchant)](https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api)
- [REST (roy fielding)](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm)
- [REST (wikipedia)](https://en.m.wikipedia.org/wiki/Representational_state_transfer)
- [roy fielding](https://roy.gbiv.com/)

- other links

  - [selecting a rapid prototyping process](https://engineeringproductdesign.com/rapid-prototyping-process-selection-key-factors/)
  - [rapid prototyping](https://engineeringproductdesign.com/knowledge-base/rapid-prototyping-techniques/)
  - [CRUD](https://en.m.wikipedia.org/wiki/Create,_read,_update_and_delete)
  - [api versioning](https://stackoverflow.com/questions/389169/best-practices-for-api-versioning)
  - [api versioning (stripe)](https://stripe.com/docs/api/pagination/auto)

- todo

- [api as a product](https://api-as-a-product.com/articles/case-study-human-centered-api-design/)
- [rethinking service blueprints for agile delivery](https://wiprodigital.com/2018/08/30/rethinking-service-blueprints-for-agile-delivery/)
- [how to mke effective service blueprints](https://miro.com/guides/service-blueprints/)

## rest api design

### best practices

- before you do anything
  - start with a stable data model before releasing a public API
- structure & design: an API is a user interface for a developer

  - use plural NOUNS (things) and not ACTIONS (http methods) in your endpoint URLs
    - wtf is the difference between goose & geese?
  - use web standards
  - should be explorable via a browser address bar
    - this should also include common search queries
      - package up common sets of conditions into easily accessible endpoints
      - e.g. recently closed could be `/tickets/recentlyclosed` versus a long as fkn filter query param
  - have a single source of documentation
    - available without logging in
    - not embedded (e.g. as a PDF) but by default via browser
    - include copypasta examples
      - im personally not using shit without a working copypasta
  - use restful URLs and actions
    - structure your API into logical resources that are manipulated using HTTP methods (CRUD)
      - dont map to your data model 1 to 1
        - this is likely not effective from an API consumer perspective
        - a security risk by revealing the structure to your data modal
        - brittle in the event your data model changes
      - hierarchy
        1. if resource Y is always a child of X, then `/v1/x/:id/y
        2. if resource Y is independent but associated: include an identifier with X where Y can be retrieved with a second API call
        3. if resource Y is independent but always requested with X: see #1 or embed the resource within the call to retrieve X
           - this avoid the second call with approach #2
      - http methods have meaning: e.g. a single `/users` endpoint can receive GET, PUT, POST, PUT, PATCH, etc without needing 5 different URIs
        - GET: retrieve thing(s)
        - POST: create thing(s)
        - PUT: update thing(s)
        - PATCH: partially update thing(s)
          - arguable if PATCH should ever be used
          - however PATCH can be used to make an ACTION on a resource appear as a FIELD ona resource
            - e.g. ACTIVATE action could be a PATCH on a resource, even tho the backend data model supports this via other logic (and not an activate field)
        - DELETE: delete thing(s)
  - return useful confirmations from POST, PATCH & PUT requests
  - only/always use
    - JSON syntax (fk xml) for all HTTP methods
      - some HTTP clients wont be supported, but fk them (unless their paying u)
    - camelCase (fk snake)
    - compression (e.g. gzip) unless in test mode
    - pretty print unless in unless in prod prod
  - effectively use HTTP status codes
  - define a consumable error payload

- versioning
  - have a predictable and publicly available versioning scheme and update schedule
    - CHANGE is coming, everyone knows it, versioning helps manage it
  - version via the URL (lol1)
    - prevents invalid requests from hitting updated endpoints
    - smooth transition to newer versions while sunsetting legacy endpoints
    - ensures browser explorability across versions
    - provides structural stability
  - version via HEADER fields (lol2)
    - useful for specifying minor/patch versions of a major versions
      - e.g. field deprecedations, endpoint changes, etc
- features
  - HATEOAS
    - implement it (lol1)
    - dont implement it (lol2)
  - many features require extended set of options
    - filtering
      - use a unique query param for each field e.g. `poop?field1=yes&field2=no`
    - sorting
      - use a generic queyr param for sorting rules e.g. poop?sort=-field1&field2
        - unary operators -/+ indicate DESC & ASC
    - searching:
      - /users?search=field1...:
        - some resources require SEARCH as a mechanism to filtering and retrieving matches
      - /search?...:
        - a distinct endpoint for searching all resources
    - pagination
      - via link headers (lol1)
      - via query params (lol2)
  - ability to toggle/specify specific features
    - toggle
      - response envelopes: required by JSONP and other limited http clients
    - specify
      - version: major version in the URL, minor/patch versions via HEADER fields (see stripe/enchant)
      - returned fields: do you need every user field every time?
  - autoloading
  - http-method-override
    - never on GET requests
  - caching
    - via response headers
- security
  - use SSL everywhere
    - encrypt communication between parties
    - inhibit eavesdropping/impersonation if authentication credentials are hijacked
    - enables use of access tokens instead of having to sign each API request
  - token based authentication
  - oauth2 in case delegation is required
  - use HARD errors
    - e.g. a client requests a non secure version of an API endpoint
      - an automatic redirect to the SSL version could leak request params over the unencrypted endpoint

## human-centered api design

- api design approach that explores the needs, wants and wishes of users and other stakeholders to create API products that fit their needs
