#!/bin/bash bash

function kill_service_on_port() {
    if [ "$#" -eq 0 ]; then
        echo -e 'syntax: kill_service_on_port 8080'
    else
        fuser -k $1/tcp
    fi
}

function kill_service_by_name() {
    if [ "$#" -eq 0 ]; then
        echo -e 'syntax: kill_service_by_name poop'
    else
        # sudo kill -9 $(pidof $1)
        killall $1
    fi
}

get_service_by_name() {
    if [ "$#" -eq 0 ]; then
        echo -e 'syntax: get_service_by_name poop'
    else
        ps -aux | grep $1
    fi
}

function sourceifexists() {
    if [[ $# -eq 1 && -f "$1" ]]; then
        . "$1"
    fi
}

# completation aware g<alias bash aliases for each git alias
# https://gist.github.com/mwhite/6887990
# TODO: doesnt work like expected
function_exists() {
    declare -f -F "$1" >/dev/null
    return $?
}

cmdtime() {
    time "$@"
}
