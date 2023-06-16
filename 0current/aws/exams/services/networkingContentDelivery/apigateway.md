# API Gateway

- A microservice using Amazon API Gateway consists of a defined resource and associated methods (GET, POST, PUT, etc.) in API Gateway as well as the backend target (e.g. lambda fn, another service, 3rd party, etc)
- todos
  - [apigateway for serverless applications](https://explore.skillbuilder.aws/learn/course/52/Amazon%2520API%2520Gateway%2520for%2520Serverless%2520Applications)

## links

- [api gateway developer guide intro](http://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html)
- [api gateway stage variables](https://docs.aws.amazon.com/apigateway/latest/developerguide/amazon-api-gateway-using-stage-variables.html)

## best practices

- abc

### anti patterns

- abc

## features

- Transform the body and headers of incoming API requests to match backend systems
- Transform the body and headers of the outgoing API responses to match API requirements
- Control API access via AWS Identity and Access Management
- Create and apply API keys for third-party development
- Enable Amazon CloudWatch integration for API monitoring
- Cache API responses via Amazon CloudFront for faster response times
- Deploy an API to multiple stages, allowing easy differentiation between development, test, production as well as versioning
- Connect custom domains to an API
- Define models to help standardize your API request and response transformations
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

### http api

- low latency rest apis with odic, oauth2, native cors support

### rest api

- rest api with complete control over the req and resp
