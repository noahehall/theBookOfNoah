# dynamodb

- fully managed nosql (document/key-value) db providing durability high availability and autoscaling
- designed for OLTP with known query patterns

## links

- [accelerator (DAX)](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.html)
- [change data capture](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/streamsmain.html)
- [client and server side encryption](https://docs.aws.amazon.com/dynamodb-encryption-client/latest/devguide/client-server-side.html)
- [data model partitioning](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.Partitions.html)
- [data protection](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/data-protection.html)
- [direct kms materials provider](https://docs.aws.amazon.com/dynamodb-encryption-client/latest/devguide/direct-kms-provider.html)
- [encryption client: how it works](https://docs.aws.amazon.com/dynamodb-encryption-client/latest/devguide/how-it-works.html)
- [encryption client: intro](https://docs.aws.amazon.com/dynamodb-encryption-client/latest/devguide/what-is-ddb-encrypt.html)
- [pagination](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.Pagination.html)
- [query (guide)](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html)
- [query (ref)](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Query.html)
- [Scan](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Scan.html)
- [streams and lambda triggers](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.Lambda.html)
- [streams and lambdas (tut)](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.Lambda.Tutorial.html)
- [streams](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.html)
- [tables](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html)

## best practices

- determine your consistent pattern for each request
  - the default is eventually consistent, but you can choose strongly consistency
  - strongly consistency costs more than eventually
- design your data model for requests that are evenly distributed across partitions
  - updating a single attribute in an item requires rewriting the entire item
- read through the architecture section below, then read through it again

### anti patterns

## features

- JSON document / key-value data structures
- event driven programming
- fully managing sharding enables horizontal scaling
- bursts: an adaptive capacity to borrow read throughput from less active keys to more demanding keys

## terms

- RCU: read capacity unit; 1 RCU = 1 item (4kb/less) per second
- WCU: write capacity unit; 1 WCU = 1 (1kb/less) write per second

## basics

### architecture

#### instance

- dynamodb replicates (copies) of your data in fault-independent zones within a region
  - replication usually occurs within 1 second
  - availability SLA is four 9s
- request throughput: you specify the requirements and dynamodb will manage the rest ensuring your limits are met
  - read and writes are managed separately
  - updating a single attribute in an item requires rewriting the entire item, so a balance must be met
  - a single item cannot be read greater than 3k RCU, or written at more than 1k WCU
  - eventually consistent reads are levied at half the cost of strongly consistent reads
- streams: similar to kensis streams and compatible with the kinesis client library
  - all writes are recorded in the stream like a changelog
    - you can specify the level of detail recorded
  - streams are durable and kept for up to 24 hours
  - shards are created with the stream as the data grows

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
- secondary indexes
  - can only be defined when the base table is created, and cannot be deleted
  - have a max size of 10gb
  - allow you to query data based on attributes other than the tables primary key
  - consumption of throughput is based on secondary index for scanning
  - sparse indexes: subset of base table items that contain a particular attribute
  - indexes can contain
    - alternate key attributes
    - primary key attributes
    - projected attributes: optional subset of other attributes form the base table
  - secondary indexes can be of two types
    - local secondary index: LSI; index that is local to a partiion key;
      - i.e. queriy items with the same partition key that is specified with the query
        - e.g. base table (pkey = name, sortkey = id, attr = date)
        - e.g. LSI (pkey = name, sortkey = date, attr = id)
      - i.e. the LSI must live in the same partition, it cannot be part of another patition
      - often used for sorting on a different attribute of the base table
    - global secondary index: GSI;
      - not local to a partition key and can query over the entire table across all partitions
      - do not provide strong consistency like LSIs
      - are not subject to the size limitation of LSIs
      - can be created and deleted dynamically unlike LSIs
      - do not require unique primary keys
      - have their own provisioned throughput managed separately from the table
      - logically its a replication of the base table with an entirely different primary key (partition and/or sort)
      - e.g. take a base table, and define a completely different primary key over the same data
        - then when your done with the GSI, delete it

### api

- in general
  - batchBLAH is more efficient than multiple non batches
  - deleteBLAH costs the same WCU as creation
  - scan should be avoided unless required, and then effectively filtered as to not read the entire table
    - even when filtered, you are stilled charged for the total amount retrieved before filtering
  - query can only be used on tables with partitioned composite keys
  - remember by default reads are eventually consistent, unless strongly is requested on each READ request
- writes
  - putItem: upsert single item
  - updateItem: upsert item attributes
  - batchWriteItem: upsert multiple items
  - deleteItem: single item; costs the same amount of WCU as putItem
- reads
  - getItem: single item
  - batchGetItem: multiple items
  - query: retrieve items matching sort key expression for specific partition
  - scan: retrieve items across all partitions in table

### data types

- key value model: string, number, boolean, binary, null, and unordered sets of the aforementioned
- json model: unordered maps (i.e. object) and unordered lists (i.e. array) of any JSON data type
  - a single item can be a json document
  - or each item in a JSON can be attributes of a json document

## considerations

### configuration

- consistency: eventually or strongly per request
- request throughput: read and write capacity per second
