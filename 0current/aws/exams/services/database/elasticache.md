# ElastiCache for Redis/Memcached

- fully managed in memory data cache for redis/memcached
- designed for in-memory data store and cache with known query patterns

## my thoughts

## links

- [landingpage](https://aws.amazon.com/elasticache/?did=ap_card&trk=ap_card)
- [caching strategies](https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/Strategies.html)
- [redis getting started (tut)](https://aws.amazon.com/getting-started/hands-on/building-fast-session-caching-with-amazon-elasticache-for-redis/)
- [faqs](https://aws.amazon.com/elasticache/faqs/?da=sec&sec=prep)
- [redis vs memcached](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SelectEngine.html)
- [user guide](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/WhatIs.html)
- [amazon linux: redis cli](https://aws.amazon.com/amazon-linux-2/faqs/#Amazon_Linux_Extras)
- [common use cases](https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/elasticache-use-cases.html)
- [security](https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/Security.html)
- [IAM: authnz](https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/IAM.html)
- [redis: auth](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/auth.html)

## best practices

### anti patterns

## features

- Realize microsecond response times across hundreds of millions of operations per second and up to 1 pebibyte of data (with data tiering).
- 99.99% SLA with Multi-AZ deployments and bolster disaster recovery in less than a minute through cross-Region replication.
- Cache your data and offload database I/O to reduce operational burden, lower costs, and improve performance of both the database and the application.
- Real-time session stores
- application development with ElastiCache built-in data structures.

### pricing

- charged hourly based on the number of nodes, node type, and pricing model
- on demand: pay for memory capacity by the hour
  - per node-hour consumed, from the time you launch a node until you terminate it
- reserved: save up to 75 percent over On-Demand rates by committing to using ElastiCache for a 1- or 3-year term.
- backup storage: one database snapshot at no charge
  - Each additional snapshot is charged per gigabyte per month
- data transfer within or across regions
  - charged for the data transfer in or out of the Amazon EC2 instance
  - no ElastiCache data transfer charge for traffic in or out of the ElastiCache node itself.
- AWS Outposts

## terms

## basics

- general workflow
  - ElastiCache sits between an application and a database
    - the cached data is distributed and scales u/d independently from the application and database.
  - the apoplication queries ElastiCache to see if it contains the data it needs
  - If not, the application sends the request to the database which returns the content to both ElastiCache and the application
    - next time this content is requested, it will be in the cache

### architecture

- redis vs memcached: compliance, backup and replication, and automatic failover dictate which engine you should implement

#### redis

- supports complex data types, data replication, and high availability
- ideal for session caching, full-page caching, message queue applications, leaderboards, etc
- Using the Redis AUTH feature, ElastiCache can also authenticate clients

#### memcached

- for data that is relatively small and static, e.g. html/css/js

### security

- authnz: IAM

#### encryption

- at rest
  - Apply optional encryption using either service-managed encryption at rest or customer-managed AWS KMS keys using AWS KMS.

## considerations

## integrations

### IAM

### VPC

- On-premises servers can use ElastiCache provided that there is connectivity between your VPC and data center through either a VPN or AWS Direct Connect.
