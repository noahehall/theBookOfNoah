# x-ray

- visualize the components of an application and flow of api calls, identify performance bottlenecks, and trouble requests that result in errors
- trace requests into your app and passed through to downstream AWS resources

## my thoughts

## links

- [x-ray features](https://aws.amazon.com/xray/features/)
- [x-ray intro](https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html)

## best practices

### anti patterns

## features

- process trace data and generate service maps and searchable trace summaries
- tuning performance
- identifying the callflow of lambda fns and API calls
- tracing path and timing of an invocation to locate bottlenecks and failures

### pricing

## terms

- dwell time: duration for which an invocation was queued
- initialization: only occurs for coldstarts
  - execution environment: duration it takes to start and initialized an execution environment on coldstarts
  - fn: all the code thats part of the fn but outside the handler is initialized and loaded into memory

## basics

### traces

- you generally want to group by a trace attribute, e.g. ClientIP

### service map

### sampling

### encryption

## considerations

## integrations

### lambda

- general flow
  - a trace starts when lambda is invoked
  - for async events the requests is queued, else lambda fetches the requests immediately and invokes the fn
  - cold starts
    - if no warm environment is available one needs to be `initialized`
    - then the function is initialized and loaded into memory
  - warm starts
    - lambda needs to `thaw` the execution environment and fetch the fn from memory
  - the handler method is invoked and your fn executes

### api gateway

- trace an analyze user requests as they travel through apigateway to underlying services
- observe how your application is performing to identify, troobleshoot and rootcause analysis of per issues and errors
- configure sampling rules specifying: which requests to record & at what sampling rates
