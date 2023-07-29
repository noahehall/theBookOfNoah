# Simple Queue Service (SQS)

- fully managed queuing service for microservices, distributed systems and serverless applications

## my thoughts

## links

- [landing page](https://aws.amazon.com/sqs/?did=ap_card&trk=ap_card)
- [faqs](https://aws.amazon.com/sqs/faqs/?da=sec&sec=prep)
- [deverloper guide](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html)
- [visibility timeout](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html)
- [dead letter queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html)
- [short & long polling](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-short-and-long-polling.html)
- [limits & quotas](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-limits.html)

## best practices

- setup a dead letter queue on the source queue to process failed messages
  - as opposed to handling it downstream
- setup performance testing and adjust retries and timeouts that allows consumers to process messages without creating bottlenecks that cascade through the system

### anti patterns

## features

- reliabily deliver large volumes of data at any level of throughput
- securely send sensitive data between apps & centralize manage keys using AWS Key Management

### pricing

## terms

## basics

### standard Queues

- provide higher throughput than FIFO
- messages may be delivered more than once
- nearly unlimited messages per second

### FIFO queues

- order is guaranteed per group Id
- messages delivered at most once
- up to 300 messages per second, per API action without batching
  - 3000 with batching

### dead letter queues

- for messages that continually fail but require success (e.g. purchases)
- a human is required to investigate and resolve messages in the queue
- dead letter queues should always be configured in SQS and not a downstream service like lambda

## considerations

- visisible timeouts
- delay queues
- retry policies

## integrations

### lambda

- push as much SQS configuration into SQS, lambda should only be responsible for polling and processing messages
- be sure to validate configuration settings across SQS queues and lambdas
  - timeouts: queue visibility timeout must have capacity for the lambda function to consume all messages in the batch
    - but remember a lambda function only has 15 minutes max, including retries and throttling
  - retry logic
  - batch size: larger batch sizes require less polling;
    - but you need to ensure you're consuming all messages are being consumed before the queuue timeout
    -
