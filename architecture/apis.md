# terms
  - web api
    - application programming interface for a web server/browser
  - endpoints
    - specify where resources can be accessed
    - principles
      - static definitions
      - versioning
      -
  - webhooks
    - take URI as input and is designed to be used like a remote named pipe/callback such that the server acts as a client to derefence the provided URI and trigger an event on another server which handles this event providing peer-to-peer ipc
# restful
  - based on http methods to access resources via URL

# soap
  - standardized protocols by the W3C and mandate the use of XML as the payload format, typically over http
# server side API
  - consists of one/more publicly exposed endpoints to a defined request-response message system
  -
# best ppractices
  - there should be only 2 base urls per resource
    - /dogs
    - /dogs/1 = total size
  - naming
    - use verbs in base urls for responses that dont involve resources
      - calulate,
      - convert
      - etc
    - keep all verbs out of your base urls that involve reources
      - /getalldogs
      - /getallleasheddogs
  - use http verbs to operate on the collections and elements
  - use ploural nouns and concrete names
  - simplify associates
    - max 3 levels
    - /resource/identifier/resource
  - put complex options in the query string
  - use http status codes for all response types
  - never release an api without a version
    - make the version mandatory
  - allow for partial Responses
    - add optional fields in a comma-delimited list
  - make it easy for developers to paginate objects in the database
    - use limit and offset
    - include metadata
  - support multiple response formats
  - attributes
    - use JSON and follow javascript naming conventions
  - consolidate api requests in one subdomain
    - do web redirects
  - authentication
    - ppermission service api
    - oauth 2
    - oauth 1