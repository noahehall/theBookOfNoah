# general
alias getfns='declare -F'

# kafka stuff
export KAFKA_DIR=/opt/homebrew/Cellar/kafka/3.2.0/libexec
export KAFKA_DATA_DIR=$KAFKA_DIR/data

zoostart () {
	zookeeper-server-start $KAFKA_DIR/config/zookeeper.properties
}

kafkastart () {
	kafka-server-start $KAFKA_DIR/config/server.properties
}

kafkacreatetopic () {
    if [[ $# -eq 1 ]]; then
        kafka-topics --create --topic $1 --bootstrap-server localhost:9092
    else
        echo "\$1 === topic_name"
    fi
}
