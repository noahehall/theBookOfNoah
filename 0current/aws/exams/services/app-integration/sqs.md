# Simple Queue Service (SQS)

- fully managed queuing service for microservices, distributed systems and serverless applications

## my thoughts

## links

- [landing page](https://aws.amazon.com/sqs/?did=ap_card&trk=ap_card)
- [faqs](https://aws.amazon.com/sqs/faqs/?da=sec&sec=prep)
- [deverloper guide](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html)

## best practices

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
