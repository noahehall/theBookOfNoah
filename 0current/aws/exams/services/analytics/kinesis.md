# Kinesis

- service for dealing with streaming data
- useful for ingesting and transforming large volumes of data destinated for storage services

## links

- [landing page](https://aws.amazon.com/kinesis/data-firehose/)
- [faqs](https://aws.amazon.com/kinesis/data-streams/faqs/?da=sec&sec=prep)
- [terminology and concepts](https://docs.aws.amazon.com/streams/latest/dev/key-concepts.html)
- [data streams dev guide](https://docs.aws.amazon.com/streams/latest/dev/introduction.html)
- [data firehose dev guide](https://docs.aws.amazon.com/firehose/latest/dev/what-is-this-service.html)
- [data firehose data transformation](https://docs.aws.amazon.com/firehose/latest/dev/data-transformation.html)
- [data analytics for sql apps](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/what-is.html)
- [data anlaytics + lambda](https://docs.aws.amazon.com/en_pv/kinesisanalytics/latest/dev/lambda-preprocessing.html)
- [lambda integration](https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html)
- [data streams data retention period](https://docs.aws.amazon.com/streams/latest/dev/kinesis-extended-retention.html)

## best practices

- firehose vs data streams
  - firehose: simplified use cases
    - potential for duplicate deliveries and no guarantee of message order
    - retry mechanism for each target
    - you set the data volume and kinesis manages the number of shards
    - streams are associated with a single target
  - data streams: advanced use cases
    - exactly once delivered and guaranteed order of delivery
    - failing messages block the shard until success/expires
    - write custom consumers with multiple targets
    - you set the number of shards
- on failure destination vs dead letter queue
  - OFD:
    - provide additional data than just the event object
    - change/modify the on failure behavior
  - DLQ:
    - can only send the event object
    - is part of a functions version configuration; you need to update the function to change the behavior

### anti patterns

## features

- integrates with 30+ AWS services and streaming destinations like s3 and redshift
- ingest and process large volumes of data in near-real time

### pricing

## basics

- kcl: kinesis consumer libary
- kpl: kinesis producer library
- kal: kinesis aggregation library (for use with lambda)
- producers: Producers add data records to the stream.
- consumers: retrieve and process records from streams

### Shards

- each stream scales horizontally via shards, which are a sequence uniquely identified data records
- data record: contains a sequence number, partition key and data blob
- partition key: groups data by shard within a stream;
- sequence numbeR: unique per partition key within a shard
- limits:
  - write: rate 1k per second, size 1mb per second
  - reads: 5 transactions per second, size 2mb per second
- data capacity: depends on the number of shards configured on the stream
  - increase throughput by increasing the number of shards or by aggregating/batching the data sent per API call
- aggregation: store multiple records in a stream
  - consumers must de-aggregate the data before processing

### Data Firehose

- Data Firehose: capture, `transform` and load streaming data into lakes, stores, and analytics services
- you dont need to manage shards: just configure producers to send data, setup transformations in firehose, and set the backend consumers

### Data Streams

- Video Streams: stream video from connected devices into aws for analytics, ML, playback and other processing
- Data Streams: serverless streaming service; capture, `process` and store data streams
- you need to configure the amount of shards per stream

### Data analytics

- Data Analytics: transform and analyze streaming data in real time using sql/apache flink before persisting it to storage
- you perform analysis across a sliding window of the data stream
- optionally you can use lambda to pre-process the stream before it hits the anlaytics stream

### error handling

- can be used in conjuction to create an error workflow: make sure to handle duplicate records being retried that are part of a failed batch in your function logic
  - bisect batch on funciton error: split a batch in two and retry each batch separately
  - maximum retry attempts
  - maximum record age in seconds: the max duration a record can be in a failed state
  - on failure destination: send failed records to
    - async event sources: SNS/SQS/EventBridge/Lambda
    - streaming event sources: SNS/SQS

## considerations

## integrations

- other kinesis streams can be consumers of other kinesis streams

### Api Gateway

- front for kinesis; proxies incoming records and loads data onto a stream

### lambda

- kinesis stream consumer; proces data and persist to s3/dynamodb/redshift/etc
- preprocesser for data analytics

### athena

- analyze data stored in s3

### s3

- built in integration to persist raw data

### sns

### redshift
