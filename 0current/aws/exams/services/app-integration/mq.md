# service name

- managed message broker service for apache activeMQ and rabbgitMQ
- allows components in a distributed system to communicate

## my thoughts

## links

- [landing page](https://aws.amazon.com/amazon-mq/?did=ap_card&trk=ap_card)
- [workshop labs](https://catalog.us-east-1.prod.workshops.aws/workshops/0b534eb9-fdfb-49f0-8df4-ebccca71a9eb/en-US)

## best practices

### anti patterns

## features

- use a variety of messaging protocols: JMS, AMQP, STOMP, NMS, MQTT and websocket
- messages are replicated across 3 AZs for high durability: active & standby broker + replicated message store
- encryption in transit (TLS) and at rest
- VPC enabled + security groups for virtual firewalls
- queues & topics with ordering
- transient and persistent messaging
- local and distributed transactions
- composite and virtual destinations
- messaging filtering
- request / reply
- scheduled messages

### pricing

## terms

- message oriented middleware: aka MOM / message broker; centralized service to facilitate communication between applications

## basics

## architectures

- fanout pattern:

### queues vs topics

- queue
  - either LIFI/FIFO
  - messages are kept until processed
- topic
  - broadcast
  - messages are delivered to all subscribers
  - if no subscribers are present, messages could be lost

### point to point with queues

- point-to-point messaging: uses queues; each message is consumed by one receiver in a 1:1 relationship
- depending on the depth of the queue; you can add more receivers to process more messages
  - messages are load balanced across all available receivers

### pub sub with topics

- pub-sub: uses topics; published messages are received by all subscribers in a 1:M relationship

## considerations

- deployment mode:
  - single instance broker: a single broker instances in a single AZ
    - useful for development or a production instance connecting to a network of active/standby
    - messages are still stored redundantly across AZs
  - active/standby broker: provides high availability and automatic failover
    - useful for production workloads
    - only one broker is active at any time, but they use shared redundant storage
- storage type
  - durability optimized: backed by EFS
    - data stored redundantly across multiple AZs
    - data accessible from active and standby brokers
  - throughput optimized: backed by EBS
    - data is replicated across mulitple servers in a AZ
    - data accessible from a single broker (i.e. cant be used with active/standby deployments)
- blueprints: ready-made configuration for different architectures
  - mesh network of single-instance brokers: 3 single instance brokers connected in a mesh network across mulitple AZs
  - mesh network of active/standby brokers: 3 active/standby brokers connected in a mesh network
    - each broker has automatic failover to a standby in another AZ

## integrations
