# dynamodb

- fully managed nosql (document/key-value) db providing durability high availability and autoscaling
- designed for OLTP with known query patterns

## links

- [dynamodb accelerator (DAX)](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.html)
- [dynamodb change data capture](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/streamsmain.html)
- [dynamodb client and server side encryption](https://docs.aws.amazon.com/dynamodb-encryption-client/latest/devguide/client-server-side.html)
- [dynamodb data protection](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/data-protection.html)
- [dynamodb direct kms materials provider](https://docs.aws.amazon.com/dynamodb-encryption-client/latest/devguide/direct-kms-provider.html)
- [dynamodb encryption client: how it works](https://docs.aws.amazon.com/dynamodb-encryption-client/latest/devguide/how-it-works.html)
- [dynamodb encryption client: intro](https://docs.aws.amazon.com/dynamodb-encryption-client/latest/devguide/what-is-ddb-encrypt.html)
- [dynamodb pagination](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.Pagination.html)
- [dynamodb query (guide)](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html)
- [dynamodb query (ref)](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Query.html)
- [dynamodb Scan](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Scan.html)
- [dynamodb streams and lambda triggers](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.Lambda.html)
- [dynamodb streams and lambdas (tut)](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.Lambda.Tutorial.html)

## best practices

- determine your consistent pattern for each request
  - the default is eventually consistent, but you can choose strongly consistency
  - strongly consistency costs more than eventually

### anti patterns

## features

- JSON document / key-value data structures
- event driven programming
- fully managing sharding enables horizontal scaling

## terms

## basics

### architecture

#### instance

- dynamodb replicates (copies) of your data in fault-independent zones within a region
  - replication usually occurs within 1 second
  - availability SLA is four 9s
- consistency:

#### data

- tables: the core data structure
- items: i.e. records in a table
- attributes: i.e. columns in an item
  - for all items
    - primary key: must be unique across all items
      - partition key: is always required
      - sort key: if provided, its required in all items and makes the primary key a compose key
      - FYI:
        - the partition and the sort key (if provided) must be string, number or binary
        - to use maps/lists as part of a primary key, you must expose a copy of the entry directly as an attribute
  - all other attributes are item-specific

### data types

- key value model: string, number, boolean, binary, null, and unordered sets of the aforementioned
- json model: unordered maps (i.e. object) and unordered lists (i.e. array) of any JSON data type
  - a single item can be a json document
  - or each item in a JSON can be attributes of a json document

## considerations

### consistency

- strongly vs eventual consistency

### throughput

-
