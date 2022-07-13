# Kafka

- open-source stream-processing software for collecting, processing, storing, and analyzing data at scale
- Most known for its excellent performance, low latency, fault tolerance, and high throughput
- allows organizations to modernize their data strategies with event streaming architecture

## links

- [introduction](https://kafka.apache.org/intro)
- [quickstart](https://kafka.apache.org/documentation/#quickstart)
- [kafka configuration docs](https://kafka.apache.org/documentation/#configuration)

## files
- should do
  - update the data dir so its not stored in /tmp by editing {zookeeper,server}.properties
- base dir
  - mac silicon: /opt/homebrew/Cellar/kafka/3.2.0/libexec
  - mac intel: ...
  - \*nix: ...
  - /opt/homebrew/Cellar/kafka/3.2.0/libexec/data
- basedir/config: contains various config files
  - zookeeper.properties: required for starting zookeeper
  - server.properties: required for starting kafka
  - producer.properties
  - consumer.properties

## quickies

```sh
# start zookeper
export KAFKA_DIR=/opt/homebrew/Cellar/kafka/3.2.0/libexec
zookeeper-server-start $KAFKA_DIR/config/zookeeper.properties
# start kafka broker
kafka-server-start  $KAFKA_DIR/config/server.properties

#CRUD

## create topics
kafka-topics --create --topic quickstart-events --bootstrap-server localhost:9092
## create event in a topic
kafka-console-producer --topic quickstart-events --bootstrap-server localhost:9092
## read events in topic
kafka-console-consumer --topic quickstart-events --from-beginning --bootstrap-server localhost:9092
# inspection
## describe a topic
kafka-topics --describe --topic quickstart-events --bootstrap-server localhost:9092

```
