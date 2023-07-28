# x-ray

- distributed tracing to give you insight into issues or bottlenecks across your distributed architecture
- visualize the components of an application and flow of api calls, identify performance bottlenecks, and trouble requests that result in errors

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

### architecture

- instrument your code with the AWS xray sdk
  - it records i/o and relays it to the xray daemon in batches
- it gets data from services as segments and groups them by request into traces.
- X-Ray then creates a service graph that gives you a visual representation of what’s happening at each service integration point, highlighting successful and failed service calls

### traces

- you generally want to group by a trace attribute, e.g. ClientIP
- allows you to dive into individual requests at specific integration points

#### segments

- subsegments: created automatically for some services, or can be manually defined
  - used to debug/annotate blocks of code and groups traces for app-specific operations
  - provides a granular breakout of traces

#### annotations

- key value pairs with string/number/bool values that are automatically indexed by xray for fast searches within traces
- enables you to group traces across application operations and compare performance

### service map

- visualize integration points across services and provides details about success, errors, faults and throttles
- view/filter details about each integration point on the map
- high level overview of your distributed services

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

### sns
