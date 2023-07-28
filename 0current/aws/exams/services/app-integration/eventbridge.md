# Event Bridge

- serverless event bus

## links

- [landing page](https://aws.amazon.com/eventbridge/?did=ap_card&trk=ap_card)
- [user guide](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-what-is.html)
- [content filtering with event patterns](https://docs.aws.amazon.com/eventbridge/latest/userguide/content-filtering-with-event-patterns.html)
- [architectural patterns with eventbridge pipes](https://aws.amazon.com/blogs/compute/implementing-architectural-patterns-with-amazon-eventbridge-pipes/)

## best practices

### anti patterns

## features

- Create point-to-point integrations between event producers and consumers
- Connect AWS services, software-as-a-service (SaaS) applications, and custom applications as event producers to launch workflows.
  - 90+ services as sources, 20+ services as targets
- Create, trigger, and manage millions of events and tasks from a single source with Amazon EventBridge Scheduler.
- help manage errors across services

### pricing

- pay for events published to your event bus, and events ingested for Schema Discovery and event replay
  - $1 per million events in the bus, no charge for delivery

## terms

## basics

### event bus

- has rules and filters for sending messages to appropriate consumers

### producers

- send events to the bus

### consumers

## considerations
