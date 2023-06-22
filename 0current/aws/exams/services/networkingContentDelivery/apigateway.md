# API Gateway

- application frontdoor to your lambda, aws services and backend apis
- define resources and associated methods (GET, POST, PUT, etc.) in API Gateway as well as the backend target (e.g. lambda fn, another service, 3rd party, etc)

## links

- [api gateway developer guide intro](http://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html)
- [api gateway stage variables](https://docs.aws.amazon.com/apigateway/latest/developerguide/amazon-api-gateway-using-stage-variables.html)
- [http vs rest](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vs-rest.html)
- [costs](https://aws.amazon.com/api-gateway/pricing/)
- [websocket selection expressions](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html)
- [websocket connections api](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-how-to-call-websocket-api-connections.html)
- [rest api caching](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html)

## best practices

- know your api type
  - rest/http vs websocket is an easy one
  - but REST has 3 different types
    - you can change between the third after deployment, but never from private to edge optimized

### anti patterns

- abc

## features

- run mulitple api versions/deploy to distinct stages at the same time
- sdk generation via aws cli for java, javascript, objective-c or swift and ruby
- transform and validate incoming and outgoing requests
  - Transform the body and headers of incoming API requests to match backend systems
  - Transform the body and headers of the outgoing API responses to match API requirements
  - Define models to help standardize your API request and response transformations
- integrate with cloudfront edge locations
  - reduce latency and throttle traffic
  - cache responses
- several authnz mechanisms
  - Control API access via IAM / cognito
  - oauth2 and openid connect
  - create API keys + usage plans for third-party access
  - use lambda fn for custom authnz
- full https support for encryption in transit

### specifics

- Enable Amazon CloudWatch integration for API monitoring
- Connect custom domains to an API
- api endpoint: the hostname of the API; can be edge-optimized or regional, depending on where traffic originates from

## terms

- resource: represented as a url endpoint and path, e.g. blah.com/this/thing and represents a single microservice
- method: the combination of an http method and resource
- method request: authg settings, url query string params, and request headers
- integration request: define the backend target used with the method and mapping templates to transform incoming requests
- integration response: define mappings between teh backend target's response and the api gateway response, transform outgoing requests
- method response: define the method response types, headers and content types
- model: define the format/schema of some data; create and use models for mapping templates
- stage: the path through which an api deployment is accessible, e.g. prod vs dev endpoints
- backend target: e.g. a lambda function, another aws service, or a thirdparty api

## basics

### architecture

#### rest api

- synchronous rest api with complete control over the req and resp
- has various api proxy functionality and management features like usage plans, api keys, publishing and monetization
- collection of resources and methods that integrate with http endpoints, lambda fns and other aws services
- only option with the native api gateway cache
- costs
  - cache: charged at an hourly rate based on total cache size,

#### http api

- low latency rest apis with odic, oauth2, native cors support
- lowest latency & cost relative to the REST api but dont offer api management features
- ideal for serverless workloads; send requests to lambda fns or any routable http endpoint

#### websocket API

- stateful & persistent connection between connected clients enabled bidirectional communication designed for realtime applications
- integrates with lambda fns, kinesis, or any http endpoint designed to receive messages
- cost
  - 32kb increments, up to 128kb per message,
  - total connection in minutes
- pipeline
  - connect: the client sends a websocket upgrade request; until the `$connect` comletes successfully the upgrade request is pending
  - established: `$connect` was successful and the websocket api routes the request.body to the appropriate route based on the determiend route key
  - discconect: `$disconnect` is invoked after the connection is closed, anything after this is a best effort

## considertaions

- security:
  - iam
  - open
  - api key
- deployment stage: aka just stage, e.g. dev, prod, etc
- binary media types: map api responses to content-type
- metrics and logging: standard cloudwatch + cloudwatch log pricing
  - cloudwatch: record latency & error metrics in
  - cloudwatch logs: log errors

### all api types

- route
- integration: e.g. lambda, an http endpoint, or any aws service action
  - integration reqest: for one-way communication with a backend endpoint
  - integration response: configure transformations on the returned message payload
- stage
- public/private access
- transformations: both incoming and outgoing requests can be transformed to match the targets expectations

#### websocket api

- json messages routed to your configured routes, non json to a `$default` route
  - routes are mapped by the properties in the incoming json message, e.g. `request.body.blah` mapps to lambda fn X
- routes
  - `$connect`: a persistent connection between client & api is being initiated
  - `$disconnect`: after client/server disconnects, not guaranteed to be delivered
  - `$default`: useful as a fallbackroute, mock integrations, proxy delegation to another catchall, handle non json payloads
  - custom routes: define routes based on the properties of incoming json request.body
- selection expressions: evaluate the request and response context to determine a mappable key
  - route response: modeling responses from backend to the client
  - api key: validate request api keys
  - api mapping: map requests from custom api domains to specific api stages

#### http api

#### rest api

- endpoint types
  - regional: low latency for clients in the same AWS region as the api
    - no cloudfront distro is needed, but can be manually (+cost) added for custom scenarios
  - edge-optimized: low latency for clients anywhere on the internet
    - cloudfront distro automatically created (no cost)
  - private: only accepts requests from clients inside your VPC for super secure communication
    - no data transfer-out chargers, but costs for AWS PrivateLink
- api caching: minimize requests to backend targets per stage
  - TTL up to 300 seconds
  - between 0.5 and 237gb, optionally encrypted
  - GET requests by default, but can be configured
  - per method override of all stage level settings
  - use request params for cache keys
