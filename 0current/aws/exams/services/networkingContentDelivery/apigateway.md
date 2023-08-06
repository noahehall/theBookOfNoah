# API Gateway

- synchronous application frontdoor to your lambda, aws services and backend apis
- define resources and associated methods (GET, POST, PUT, etc.) in API Gateway as well as the backend target (e.g. lambda fn, another service, 3rd party, etc)

## links

- [faqs](https://aws.amazon.com/api-gateway/faqs/?da=sec&sec=prep)
- [api gateway developer guide intro](http://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html)
- [api gateway stage variables](https://docs.aws.amazon.com/apigateway/latest/developerguide/amazon-api-gateway-using-stage-variables.html)
- [http vs rest](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vs-rest.html)
- [pricing](https://aws.amazon.com/api-gateway/pricing/)
- [websocket selection expressions](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html)
- [websocket connections api](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-how-to-call-websocket-api-connections.html)
- [rest api caching](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html)
- [api proxies](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-set-up-simple-proxy.html)
- [api proxies (lambda)](https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html)
- [mapping template variable reference](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html)
- [request validation](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-method-request-validation.html)
- [lambda: handling errors](https://docs.aws.amazon.com/apigateway/latest/developerguide/handle-errors-in-lambda-integration.html) -[api gateway limits](https://docs.aws.amazon.com/apigateway/latest/developerguide/limits.html)

## best practices

- know your api type
  - rest/http vs websocket is an easy one
  - but REST has 3 different types
    - you can change between the them after deployment, but never from private to edge optimized
- know your access patterns and select ther ight endpoint type
  - edge optimized has builtin CDN
  - optional cache to reduce latency
  - api keys + usage plans to throttle client requests
- use custom domains for the invoke url and choose a base path map to route it to the aws invoke url
- think through your API stage strategy
  - for versioning and rollbacks
  - use different stages by environment/customer
  - stage variables increase deployment flexibility
  - enable canary deployments to test new versions
  - variables can be injected at runtime to dynamnically invoke lambda fns, endpoints, etc
- set throttling and usage plans
  - prevent minority of customers from using all of your systems capacity
  - ensure downstream systems can amange the # of requests
  - provide api keys to customers for identification and application of usage and throttle limits to their requests

### anti patterns

- abc

## features

- run mulitple api versions/deploy to distinct stages at the same time
- sdk generation via aws cli for java, javascript, objective-c or swift and ruby
- proxy integration: more straight forward
  - mapping templates require putting logic at the API gateway layer, which can become complex
  - prefer using a proxy integration that handles this translation for you
- mapping templates: more complex
  - transform and validate incoming and outgoing requests if require
    - Transform the body and headers of incoming API requests to match backend systems
    - Transform the body and headers of the outgoing API responses to match API requirement
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
- simple request validation against a type definition at the method level

### pricing

- charged based on requests served
- rest apis
  - flat charge: flat rate per million requests
  - data transfer out
    - private endpoints: check privatelink pricing
    - public endpoints: standard aws prices
  - optional cache: per hour per stage depending on cache size

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
- api endpoint: the hostname of the API; can be edge-optimized or regional, depending on where traffic originates from
- invoke url: `https://${api-id}.execute-api.${region}.amazon.com/${stage}/${resource}`
- stage: a deployed snapshot of the API with a unique versioned identifier
- OIDC: openid connect token, usually part of a json web token

## basics

| api type  |                              purpose                              |            workloads             |
| :-------: | :---------------------------------------------------------------: | :------------------------------: |
|   rest    |         api mgmt, private proxies, backend auth, WAF, iam         | sync edge, private apis, caching |
|   http    | native oidc/oauth2, serverless proxies, cheaper & faster, no mgmt |           low latency            |
| websocket |                      realtime + server push                       |            real time             |

### OSI model

- operates at layer 7

### architecture

- three options for authnz
  - IAM: best for authn users within your AWS env or can use IAM creds
  - lambda: best for integratin with external oauth services and need to run additional logic within a lambda fn or centralize authnz across AWS accounts
  - cognito: best when starting fresh and want a managed service, or mobile apps

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

- deployment stage: aka just stage, e.g. dev, prod, etc
- binary media types: map api responses to content-type
- metrics and logging: standard cloudwatch + cloudwatch log pricing
  - cloudwatch: record latency & error metrics in
  - cloudwatch logs: log errors
- general workflow
  - choose an api type
  - create, clone or import an API as a starting point
  - select an endpoint type
  - add addressable resources in parent-child relationships
    - proxy resources use a speciall ANY http method
    - lambda proxy invokes a specific lambda fn
  - add http methods to resources, timeouts and integration types
  - edit method details: e.g. query strings, custom header params, data transformations, etc
  - test the api
  - deploy to a stage

### api authnz

- authnz + additional options
  - IAM: signature v4
  - lambda authorizer token: cognito user pools, third-party auth
  - lambda authorizer request: lambda authorizer token options, multiple header support
  - cognito: cognito user pools
- authnz options
  - for consumers using IAM, then you should use IAM
  - for external users, generally lambda authorizers / cognito
- iam authnz process
  - consumer signs request using aws v4 signing process
  - IAM uses the aws access key and secret to compute an HMAC signature using sha256
  - the signature is added to the auth header, api gateway parses it and determines if the IAM permissions match the request
- lambda authorizers: preferred for oauth/saml/custom authnz strategies
  - a custom lambda fn that handles authnz
    - token: when only a token is required for authnz
      - api gateway passes the source token to the lambda fn as JSON input and expects an IAM policy into be returned (with execute-API:invoke for accepted)
    - request: when more than a token is required for authnz
      - additional metadata is provided in the JSON input passed to the lambda fn
        - e.g. info found in the request header, query string params, request body, etc
      - only return the lalow if all off the required param values match the preconfigured ones in the lambda fn
  - apigateway invokes the lambda authorizer configured for the api method
    - if a previous token is supplied with the request, a cache TTL can be checked instead of invoking the lambda
  - lambda fn returns a policy that allows/denies the request
- cognito authorizers + cognito user pools: intended for mobile/web apps that handle authnz within the application
  - user pools must be integrated into your consuemr application for authnz
    - can also include custom oauth2 resource servers + custom scopes
  - create an authorizer of type COGNITO_USER_POOLS and configure an api method to use it
  - users are authenticated against the user pool and receive an OIDC token formatted in a json web token within your app
  - your app then makes requests to api gateway and provide the users token in the request header
  - apigateway validates the token
- security:
  - method authorization settings:
    - none / iam
    - request validator
    - api key
  - resource policies

#### resource policies + authnz

- its all about limiting access by account, IP range, VPC endpoint, etc
- resource policy only: explicit allow required on inbound criteria of the caller, else deny the caller
- lambda auth + resource policy: if policy explicitly denies, the caller is denied, else evaluate lambda auth
- IAM auth + resource policy:
  - if caller & api owner are from separate accounts: both iam user policy & resource policy must explicitly allow
  - if caller & api owner are same account: either user policy / resource policy must explicitly allow
- cognito auth + resource policy:
  - if api gateway authenticates the caller from cognito, evaluate the resource policy
  - the resource policy must explicitly allow

### throttling, quotas & usage plans

- each require providing api keys to clients
- consumers set their key in the `x-API-key` header
- configuration
  - api key throttling
  - stage > method throttling
  - stage throttling
  - account limits
- throttling based on rate and burst per key, applied in the following order
  - per client, per method: throttle limits set for an api stage in a usage plan
  - per client: throttle limits set in a usage plan
  - defualt per-method limits & individual per-method limits set in an api stage
  - the account level limit
- usage plan types
  - api key throttling per second and burst
  - api key quota by day, week or month
  - api key usage by daily usage requests
- token bucket algorithm: limits are measured and throttled by confirming network traffik conforms to set limits
  - a token counts as a request
  - the burst is the maximum bucket size
  - requests (tokens) that come into the bucket are filled at at a steady rate
    - if the rate at which requests fill the bucket exceed the burst value, a `429 Too Many Requests` are returned
  - defaults: per account per region; use usage plans for more granular control
    - steady-state request rate: 10k requests per second
    - burst: 5k requests across all apis

### all api types

- route
- integration: e.g. lambda, an http endpoint, or any aws service action
  - integration reqest: for one-way communication with a backend endpoint
  - integration response: configure transformations on the returned message payload
- stage
  - caching
  - throttling
  - usage plans
  - export language specific SDKs, swagger definitions and postman extensions
  - variables: create then reference them via `${stageVariables.varName}`
  - canary:
    - enable canary deployments to keep a base stage, and a latest version of the same stage
    - you can then promote the canary to be the base after validation
- mapping template transformations: both incoming and outgoing requests can be transformed to match the target/client expectations
  - map request to integration request payload
  - map target response to the method response
  - key transformation variables
    - $input: body, json, params path
    - $stageVAriables: any stage variable name
    - $util: `escapeJAvascript(), parseJson(), urlEncode/DecodE(), base64Encode/Decode()`
- API monitoring: generally through cloudwatch integration
- integration types
  - lambda function:
    - requests are proxies to a lambda fn with the request details passed in the event param
    - requires an IAM role with perms for API gateway to invoke lambda on your behalf
  - http endpoint
    - for public endpoints
    - requires either a proxy (which does the following) or manually configure integration request-response & data mappings to the method request-response
  - aws service
    - expose AWS service actions, e.g. passing messages directly into an SQS queue
  - mock
    - return a response without sending the request to any backend, e.g. for a healthcheck or any hardcoded response
  - vpc link
    - connect to a network load balancer for interacting with services within a private vpc
- custom error responses:
  - change http status code
  - modify body content
  - add headers
- request validation: specify an object describing the acceptable request type definition
  - required request params in the url, query string and headers are included and non blank
  - application request paylaod adheres to the configured json request model of the method

```jsonc
// example request validation
{
  "type": "object",
  "title": "some description",
  "required": ["somePropX", "somePropY"],
  "properties": {
    "somePropX": { "type": "string", "enum": ["this", "or", "that"] }
  }
}
```

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

## integrations

- since API gateway is sync and expects a sync response
  - integrate with an async backend that can immediately return a request ID but asynchronously process the request, e.g. with api gateway -> SQS -> lambda

### lambda

- authorizors: enable custom oauth/saml/etc authnz
  - from lambdas perspective its just another fn, so all the best practices still apply
- use auth caching to reduce repeat API calls for returning users
  - cachable between 5min -> 1 hour

### step functions

- ensure the expected request throughput with the step function start execution api can handle

### WAF

- put infront of API gateway for public APIs

### cloudfront

- helps prevent DDoS attacks
- automatically provided with edge optimized endpoints, or cna add manually for regional endpoints
