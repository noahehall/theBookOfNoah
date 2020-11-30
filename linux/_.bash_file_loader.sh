#!/usr/bin/env bash

# clone this repository to ~/git/theBookOfNoah
# update your ~/.bashrc
## if [ -f ~/git/theBookOfNoah/linux/_.bash_file_loader.sh ]; then
##    . ~/git/theBookOfNoah/linux/_.bash_file_loader.sh
## fi


# exit on failure
#set -e

# load bash functions
. "$( cd "$( echo "${BASH_SOURCE[0]%/*}" )"; pwd )"/_.bash_functions.sh

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
