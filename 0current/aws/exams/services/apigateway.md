# API Gateway

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

## terms

- resource
- methods: i.e. http methods
- backend target: e.g. a lambda function, another aws service, or a thirdparty api

## basics

- A microservice using Amazon API Gateway consists of a defined resource and associated methods (GET, POST, PUT, etc.) in API Gateway as well as the backend target
