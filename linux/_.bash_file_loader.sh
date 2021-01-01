#!/usr/bin/bash

# enable this for a shit ton of debugging
# set -Eouvx pipefail

# clone this repository to ~/git/theBookOfNoah
# update your ~/.bashrc
## if [ -f ~/git/theBookOfNoah/linux/_.bash_file_loader.sh ]; then
##    . ~/git/theBookOfNoah/linux/_.bash_file_loader.sh
## fi



# https://intoli.com/blog/exit-on-errors-in-bash-scripts/
# keep track of the last executed command
# trap 'last_command=${current_command:=true}; current_command=${BASH_COMMAND}' DEBUG
# echo an error message before exiting
trap 'echo -e ${BASH_COMMAND} command failed with exit code ${?}' EXIT

# load bash functions
BASHFUNCS='_.bash_functions.sh'
THISDIR="$(cd "$( echo "${BASH_SOURCE[0]%/*}" )"; pwd)"
. "${THISDIR}/${BASHFUNCS}"

sourceifexists "$(getpath '_.bash_aliases.sh')"
sourceifexists "$(getpath '_.bash_variables.sh')"
sourceifexists "$(getpath '_.bash_addons.sh')"
sourceifexists "$(getpath '_.docker_daemon.sh')"


GITALIASES="$(getpath '_.git_aliases')"
[ -f "$GITALIASES" ] && git config --global include.path "$GITALIASES"
sourceifexists "$(getpath '_.git-prompt.sh')"


# sets up bash git completion
complete -o default -o nospace -F _git g
for al in $(git --list-cmds=alias); do
    alias g$al="git $al"

    complete_func=_git_$(__git_aliased_command $al)
    function_exists ${complete_func} && __git_complete g$al $complete_func
done