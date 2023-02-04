#!/usr/bin/bash bash

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
