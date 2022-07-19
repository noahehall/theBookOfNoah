############
# likely all of these only works for apple silicon due to hardcoding
# theres a todo to fix that
###########

# git
gitundolastcommit () {
    git reset HEAD~
}

# bash
redirectALL () {
    echo "redirecting stdout & err to ./redirectALL.log"
    # Note: & (in 2>&1) specifies that 1 is not a file name but a file descriptor.
    $@ > .redirectALL.log 2>&1
}

# kafka stuff
#@ see https://kafka.apache.org/quickstart
export KAFKA_DIR=/opt/homebrew/Cellar/kafka/3.2.0/libexec
export KAFKA_DATA_DIR=$KAFKA_DIR/data

# required by kafka
## ^ however 3.2 doesnt require the --zookeeper arg
zoostart () {
	zookeeper-server-start $KAFKA_DIR/config/zookeeper.properties
}

kafkastart () {
	kafka-server-start $KAFKA_DIR/config/server.properties
}

kafkastop () {
    kafka-server-stop
}
kafkacreatetopic () {
    if [[ $# -eq 1 ]]; then
        KAFKA_BOOTSTRAP_SERVER="${KBS:-localhost:9092}"
        kafka-topics --create --topic $1 --bootstrap-server $KAFKA_BOOTSTRAP_SERVER
    else
        echo "\$1 === topic_name"
    fi
}
kafkadescribetopic () {
    if [[ $# -eq 1 ]]; then
        KAFKA_BOOTSTRAP_SERVER="${KBS:-localhost:9092}"
        kafka-topics --describe --topic $1 --bootstrap-server $KAFKA_BOOTSTRAP_SERVER
    else
        echo "\$1 === topic_name"
    fi
}
kafkalisttopics () {
    KAFKA_BOOTSTRAP_SERVER="${KBS:-localhost:9092}"
    kafka-topics --list --bootstrap-server $KAFKA_BOOTSTRAP_SERVER
}
kafkalistgroupids () {
    KAFKA_BOOTSTRAP_SERVER="${KBS:-localhost:9092}"
    kafka-consumer-groups  --list --bootstrap-server $KAFKA_BOOTSTRAP_SERVER
}

kafkasend () {
    if [[ $# -eq 1 ]]; then
        # echo -e "sending\n---\n${@:2}\n---"
        # echo "to this topic: $1"
        KAFKA_BOOTSTRAP_SERVER="${KBS:-localhost:9092}"
        kafka-console-producer --topic $1 --bootstrap-server $KAFKA_BOOTSTRAP_SERVER
    else
        echo "\$1 === topic_name, then paste in events, ctrlD exit"
    fi
}

kafkalisttopicpartitions () {
    if [[ $# -eq 1 ]]; then
        KAFKA_BOOTSTRAP_SERVER="${KBS:-localhost:9092}"
        kafka-run-class kafka.tools.GetOffsetShell --broker-list $KAFKA_BOOTSTRAP_SERVER --topic $1
    else
        echo "\$1 === topic_name, then paste in events, ctrlD exit"
    fi
}

kafkalisttopicevents () {
    if [[ $# -eq 2 ]]; then
        # echo -e "sending\n---\n${@:2}\n---"
        # echo "to this topic: $1"
        KAFKA_BOOTSTRAP_SERVER="${KBS:-localhost:9092}"
        kafka-console-consumer --bootstrap-server $KAFKA_BOOTSTRAP_SERVER --topic $1 --offset 20 --partition $2

    else
        echo "\$1 === topic_name, \$2 === partition"
    fi
}
kafkaclean () {
    if [ -z ${KAFKA_DATA_DIR+x} ]
        then
            echo "KAFKA_DATA_DIR is not set; exiting"
        else
            echo "removing files $KAFKA_DATA_DIR/{kafka,zookeeper}/*"
            rm -rf $KAFKA_DATA_DIR/{zookeeper,kafka}/*
    fi
}

#######
# docker

# startup a registry
# @see https://docs.docker.com/registry/deploying/
dockerstartregistry () {
    docker run -d -p 5001:5001 --restart=always --name registry registry:2
}
dockerbashup () {
    docker run --rm -it ubuntu:trusty bash
    # ip addr show eth0 # get container ip
    # route # get host IP
}
dockerbashuphost () {
    docker run --rm -it --network host ubuntu:trusty bash
}
