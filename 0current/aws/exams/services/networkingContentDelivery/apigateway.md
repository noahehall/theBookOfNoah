# API Gateway

- application frontdoor to your lambda, aws services and backend apis
- define resources and associated methods (GET, POST, PUT, etc.) in API Gateway as well as the backend target (e.g. lambda fn, another service, 3rd party, etc)

## links

- [api gateway developer guide intro](http://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html)
- [api gateway stage variables](https://docs.aws.amazon.com/apigateway/latest/developerguide/amazon-api-gateway-using-stage-variables.html)
- [http vs rest](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vs-rest.html)

## best practices

- abc

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

- rest api with complete control over the req and resp
- has various api proxy functionality and management features like usage plans, api keys, publishing and monetization

#### http api

- low latency rest apis with odic, oauth2, native cors support
- lowest latency & cost relative to the REST api but dont offer api management features
- ideal for serverless workloads; send requests to lambda fns or any routable http endpoint

#### websocket API

- maintains a persistent connection between connected clients enabled bidirectional communication designed for realtime applications
- integrates with lambda fns, kinesis, or any http endpoint designed to receive messages

### API Gateway cache

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

### API type

- abc
