# Kinesis

- service for dealing with streaming data
- Data Firehose: capture, `transform` and load streaming data into lakes, stores, and analytics services
- Data Streams: serverless streaming service; capture, `process` and store data streams
- Data Analytics: transform and analyze streaming data in real time using apache flink
- Video Streams: stream video from connected devices into aws for analytics, ML, playback and other processing

## links

- [landing page](https://aws.amazon.com/kinesis/data-firehose/)

## best practices

- integrate with dynamodb streams and lambda triggers
  - when change data occurs, use kinesis firehose + lambda to write the data to s3

### anti patterns

## features

- integrates with 30+ AWS services and streaming destinations like s3 and redshift

## terms

## basics

## considerations
