# Simple Notification Service (SNS)

- fully managed pub/sub

## my thoughts

## links

- [landing page](https://aws.amazon.com/sns/?did=ap_card&trk=ap_card)
- [developer guide](https://docs.aws.amazon.com/sns/latest/dg/welcome.html)
- [fanout pattern](https://aws.amazon.com/blogs/compute/messaging-fanout-pattern-for-serverless-architectures-using-amazon-sns/)
- [filtering policies](https://docs.aws.amazon.com/sns/latest/dg/sns-subscription-filter-policies.html)
- [message delivery retry policy](https://docs.aws.amazon.com/sns/latest/dg/sns-message-delivery-retries.html)
- [dead letter queues](https://docs.aws.amazon.com/sns/latest/dg/sns-dead-letter-queues.html)
- [message delivery retries](https://docs.aws.amazon.com/sns/latest/dg/sns-message-delivery-retries.html)

## best practices

### anti patterns

## features

- deliver application-to-application notifications to integrate and decouple distributed applications
- distribute application-to-person notification to your customers with SMS texts, push notificaitons and email
- reduce costs with message filtering, batching, ordering and deduplication
- increase message durability with archiving, dleivery rates, and dead-letter queues
- use cases
  - useful for integrating with external webhooks
  - initiate parallel tasks and nested applications

### pricing

- based on type of topic used
  - standard: number of monthly api requests, and number of deliveries based on endpoint type
  - FIFO: based o number of published messages, subscribed messages, and their payload size

## basics

### topics

- topic: arbitrary channel for related messages

### subscribers

- receive messages to topics their subscribed to
- emails, http endpoints, lambda functions or sqs queues
- filter policy: subscribes can filter topic messages by attributes, and SNS will only deliver messages that satisfy the filter
  - helps reduce the amount of topics you need to configure for each producer

### publishers

- sends messages to topics

### error handling

- 3 immediate tries, 2 at 1 second apart, 10 backing off from 1 second to 20 seconds, and 100,000 at 20 seconds apart.

## considerations

## integrations

### sqs

- use a fan-out pattern and a FIFO SQS queue to ensure you can perform actions simultaneously and offload events to a queue until lambdas can process them

### lambda

- review the retry policy with lambda subscribers
- max 250 filter policies per region per topic
