# kafka stuff
# @see https://kafka.apache.org/quickstart
# TODO: this will only work on apple + brew install
export KAFKA_DIR=/opt/homebrew/Cellar/kafka/3.2.1/libexec
export KAFKA_DATA_DIR=$KAFKA_DIR/data

# copypasta some of these
## https://gist.github.com/sahilsk/d2a6ec384f5f2333e3fef40a581a97e1
## https://github.com/lensesio/kafka-cheat-sheet
## and definitely this: https://medium.com/@TimvanBaarsen/apache-kafka-cli-commands-cheat-sheet-a6f06eac01b

# required by kafka
## ^ however 3.2 doesnt require the --zookeeper arg
zoo_start () {
    ## make sure you update zookeeper properties when updating kafka versions
	zookeeper-server-start $KAFKA_DIR/config/zookeeper.properties
}

kafka_start () {
	kafka-server-start $KAFKA_DIR/config/server.properties
}

kafka_stop () {
    kafka-server-stop
}

kafka_create_topic () {
    if [[ $# -eq 1 ]]; then
        KAFKA_BOOTSTRAP_SERVER="${KBS:-localhost:9092}"
        kafka-topics --create --topic $1 --bootstrap-server $KAFKA_BOOTSTRAP_SERVER
    else
        echo "\$1 === topic_name"
    fi
}

kafka_describe_topic () {
    if [[ $# -eq 1 ]]; then
        KAFKA_BOOTSTRAP_SERVER="${KBS:-localhost:9092}"
        kafka-topics --describe --topic $1 --bootstrap-server $KAFKA_BOOTSTRAP_SERVER
    else
        echo "\$1 === topic_name"
    fi
}

kafka_list_topics () {
    KAFKA_BOOTSTRAP_SERVER="${KBS:-localhost:9092}"
    kafka-topics --list --bootstrap-server $KAFKA_BOOTSTRAP_SERVER
}

kafka_list_group_ids () {
    KAFKA_BOOTSTRAP_SERVER="${KBS:-localhost:9092}"
    kafka-consumer-groups  --list --bootstrap-server $KAFKA_BOOTSTRAP_SERVER
}

kafka_send () {
    if [[ $# -eq 1 ]]; then
        # echo -e "sending\n---\n${@:2}\n---"
        # echo "to this topic: $1"
        KAFKA_BOOTSTRAP_SERVER="${KBS:-localhost:9092}"
        kafka-console-producer --topic $1 --bootstrap-server $KAFKA_BOOTSTRAP_SERVER
    else
        echo "\$1 === topic_name, then paste in events, ctrlD exit"
    fi
}

kafka_list_topic_partitions () {
    if [[ $# -eq 1 ]]; then
        KAFKA_BOOTSTRAP_SERVER="${KBS:-localhost:9092}"
        kafka-run-class kafka.tools.GetOffsetShell --broker-list $KAFKA_BOOTSTRAP_SERVER --topic $1
    else
        echo "\$1 === topic_name, then paste in events, ctrlD exit"
    fi
}

kafka_listen_for_topic_events () {
    if [[ $# -eq 2 ]]; then
        # echo -e "sending\n---\n${@:2}\n---"
        # echo "to this topic: $1"
        KAFKA_BOOTSTRAP_SERVER="${KBS:-localhost:9092}"
        kafka-console-consumer --bootstrap-server $KAFKA_BOOTSTRAP_SERVER --topic $1 --offset 20 --partition $2

    else
        echo "\$1 === topic_name, \$2 === partition"
    fi
}

kafka_clean () {
    if [ -z ${KAFKA_DATA_DIR+x} ]
        then
            echo "KAFKA_DATA_DIR is not set; exiting"
        else
            echo "removing files $KAFKA_DATA_DIR/{kafka,zookeeper}/*"
            rm -rf $KAFKA_DATA_DIR/{zookeeper,kafka}/*
    fi
}
