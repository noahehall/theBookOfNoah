#!/usr/bin/env bash

# clone this repository to ~/git/theBookOfNoah
# update your ~/.bashrc
## if [ -f ~/git/theBookOfNoah/linux/_.bash_file_loader.sh ]; then
##    . ~/git/theBookOfNoah/linux/_.bash_file_loader.sh
## fi


# exit on failure
#set -e

# https://intoli.com/blog/exit-on-errors-in-bash-scripts/
# keep track of the last executed command
trap 'last_command=$current_command; current_command=$BASH_COMMAND' DEBUG
# echo an error message before exiting
trap 'echo "\"${last_command}\" command filed with exit code $?."' EXIT


# returns current dir or concats string to create absolute path
function getpath() {
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

sourceifexists $(getpath _.bash_aliases.sh)
sourceifexists $(getpath _.bash_variables.sh)
sourceifexists $(getpath _.bash_addons.sh)


GITALIASES=$(getpath _.git_aliases)
[ -f ${GITALIASES} ] && git config --global include.path ${GITALIASES}


sourceifexists $(getpath _.docker_daemon.sh)
sourceifexists $(getpath _.git-prompt.sh)



alias g='git'
complete -o default -o nospace -F _git g

for al in `git --list-cmds=alias`; do
    alias g$al="git $al"

    complete_func=_git_$(__git_aliased_command $al)
    function_exists $complete_fnc && __git_complete g$al $complete_func
done


sourceifexists $(getpath _.bash_finale.sh)
