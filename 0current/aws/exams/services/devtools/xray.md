# x-ray

- distributed tracing to give you insight into issues or bottlenecks across your distributed architecture
- visualize the components of an application and flow of api calls, identify performance bottlenecks, and trouble requests that result in errors

## my thoughts

## links

- [landing page](https://aws.amazon.com/xray/features/)
- [lambda + xray](https://docs.aws.amazon.com/lambda/latest/dg/using-x-ray.html)
- [using xray in the console](https://docs.aws.amazon.com/xray/latest/devguide/xray-console.html)
- [deep dive into xray use cases](https://aws.amazon.com/blogs/developer/deep-dive-into-aws-x-ray-groups-and-use-cases/)
- [analyze and debug apps using xray](https://aws.amazon.com/blogs/developer/new-analyze-and-debug-distributed-applications-interactively-using-aws-x-ray-analytics/)
- [dev guide getting started](https://docs.aws.amazon.com/xray/latest/devguide/xray-gettingstarted.html)

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

#### instrumentation

- active: samples and instruments incoming requests
  - write traces to xray
- passive: instruments requests that have been samples by other services
  - add information to existing traces

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

### service map/graph

- visualize integration points across services and provides details about success, errors, faults and throttles
- view/filter details about each integration point on the map
- high level overview of your distributed services

### sampling

### encryption

## considerations

## integrations

- 1 click integration for lambda, api gateway SNS, and SQS queues that are not lambda event sources
- else you have to instrument your code

### lambda

- supports active + passive instrumentation
- both the lambda service and the fn handler are instrumented
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

- supports active + passive instrumentation
- trace an analyze user requests as they travel through apigateway to underlying services
- observe how your application is performing to identify, troobleshoot and rootcause analysis of per issues and errors
- configure sampling rules specifying: which requests to record & at what sampling rates

### sns

- only supports passive instrumentation

### sqs

- only supports passive instrumentation
