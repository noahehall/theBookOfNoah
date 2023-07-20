# OpenSearch Service

- log analytics tool for realtime search, monitoring and analysis

## my thoughts

## links

- [landing page](https://aws.amazon.com/opensearch-service/?did=ap_card&trk=ap_card)

## best practices

### anti patterns

## features

### pricing

## terms

## basics

- opensearch server: derived from elasticsearch 7.10.2
- opensearch dashboard: derived from kibana 7.10.2

## considerations

## integrations

### eks

- general workflow
  - something like fluentbit/fluentd agents run on each worker collecting and shipping log data to an opensearch server
  - logging data is ingested by opensearch for log analytics
  - opensearch provides dashboards to vizualize and query log data
