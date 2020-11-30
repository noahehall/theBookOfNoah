#!/usr/bin/env bash

# clone this repository to ~/git/theBookOfNoah
# update your ~/.bashrc
## if [ -f ~/git/theBookOfNoah/linux/_.bash_file_loader.sh ]; then
##    . ~/git/theBookOfNoah/linux/_.bash_file_loader.sh
## fi

if [ -f ~/git/theBookOfNoah/linux/_.bash_aliases.sh ]; then
    . ~/git/theBookOfNoah/linux/_.bash_aliases.sh
fi

if [ -f ~/git/theBookOfNoah/linux/_.bash_variables.sh ]; then
    . ~/git/theBookOfNoah/linux/_.bash_variables.sh
fi

if [ -f ~/git/theBookOfNoah/linux/_.bash_addons.sh ]; then
    . ~/git/theBookOfNoah/linux/_.bash_addons.sh
fi


if [ -f ~/git/theBookOfNoah/linux/_.git_aliases ]; then
    git config --global include.path ~/git/theBookOfNoah/linux/_.git_aliases
fi

if [ -f ~/git/theBookOfNoah/linux/_.git-prompt.sh ]; then
    . ~/git/theBookOfNoah/linux/_.git-prompt.sh
fi



# completation aware g<alias bash aliases for each git alias
# https://gist.github.com/mwhite/6887990
function_exists() {
     declare -f -F $1 > /dev/null
     return $?
}

alias g='git'
complete -o default -o nospace -F _git g

for al in `git --list-cmds=alias`; do
    alias g$al="git $al"

    complete_func=_git_$(__git_aliased_command $al)
    function_exists $complete_fnc && __git_complete g$al $complete_func
done
