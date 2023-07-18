# Aurora

- cloudnative managed mysql/postgresql special built by AWS to take advantage of aws cloud scalability and durability

## my thoughts

- costs more than RDS, but is worth it if the marketing specs are realistic

## links

- [landing page](https://aws.amazon.com/rds/aurora/?did=ap_card&trk=ap_card)

## best practices

- 3-5 times faster than mysql/postgres on regular RDS

### anti patterns

## features

- high perf and multi-az availability
- distributed storage for durability, perfromance and fast recovery
- flexible and auto scaling compute: up to 128 tbibytes (TiB) per instance
- low latency, cross region replication
- dropin compatible with mysql/postgres

### pricing

## terms

## basics

### storage

- uses elastic block store like RDS but:
  - data is stored in cluster volumes: single, virtual volumes that use SSDs
    - data is replicated across 3 availability zones in a single region
  - for non persistent, temporary files local storage is used instead

## considerations

- engine type: make sure you select Amazon Aurora

## integrations
