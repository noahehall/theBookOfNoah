#!/usr/bin/env bash


# https://intoli.com/blog/exit-on-errors-in-bash-scripts/
# keep track of the last executed command
trap 'last_command=$current_command; current_command=$BASH_COMMAND' DEBUG
# echo an error message before exiting
trap 'echo "\"${last_command}\" command filed with exit code $?."' EXIT


# returns current dir or concats string to create absolute path
function getpath() {
    # https://stackoverflow.com/questions/59895/how-to-get-the-source-directory-of-a-bash-script-from-within-the-script-itself
    local THISDIR="$( cd "$( echo "${BASH_SOURCE[0]%/*}" )"; pwd )"

    if [ -n $1 ]; then
        echo "${THISDIR}/$1"
    else
        echo "${THISDIR}"
    fi

}

function sourceifexists() {
    if [ -n $1 ] && [ -f $1 ]; then
        . $1
    fi
}


# completation aware g<alias bash aliases for each git alias
# https://gist.github.com/mwhite/6887990
function_exists() {
     declare -f -F $1 > /dev/null
     return $?
}