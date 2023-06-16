# x-ray

- visualize the components of an application and flow of api calls, identify performance bottlenecks, and trouble requests that result in errors

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

## terms

- dwell time: duration for which an invocation was queued
- initialization: only occurs for coldstarts
  - execution environment: duration it takes to start and initialized an execution environment on coldstarts
  - fn: all the code thats part of the fn but outside the handler is initialized and loaded into memory

## basics

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

## considerations
