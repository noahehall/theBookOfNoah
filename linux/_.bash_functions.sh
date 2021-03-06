#!/usr/bin/env bash


# returns current dir or concats string to create absolute path
function getpath() {
    # https://stackoverflow.com/questions/59895/how-to-get-the-source-directory-of-a-bash-script-from-within-the-script-itself
    local THISDIR="$( cd "$( echo "${BASH_SOURCE[0]%/*}" )"; pwd )"

    if [[ $# -lt 1 ]]; then
        # no filename
        echo "$THISDIR"
    else
        # with filename
        echo "${THISDIR}/$1"
    fi

}

function sourceifexists() {
    if [[ $# -eq 1 && -f "$1" ]]; then
        . "$1"
    fi
}


# completation aware g<alias bash aliases for each git alias
# https://gist.github.com/mwhite/6887990
function_exists() {
     declare -f -F "$1" > /dev/null
     return $?
}