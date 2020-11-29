#!/usr/bin/env bash

# clone this repository to ~/git/theBookOfNoah
# update your ~/.bashrc
## if [ -f ~/git/theBookOfNoah/linux/_.bash_file_loader.sh ]; then
##    . ~/git/theBookOfNoah/linux/_.bash_file_loader.sh
## fi


if [ -f ~/git/theBookOfNoah/linux/_.bash_aliases.sh ]; then
    . ~/git/theBookOfNoah/linux/_.bash_aliases.sh
fi

if [ -f ~/git/theBookOfNoah/linux/qfc/bin/qfc.sh ]; then
    source ~/git/theBookOfNoah/linux/qfc/bin/qfc.sh
fi

if [ -f ~/git/theBookOfNoah/linux/_.bash_addons.sh ]; then
    source ~/git/theBookOfNoah/linux/_.bash_addons.sh
fi

alias g='git'

function_exists() {
     declare -f -F $1 > /dev/null
     return $?
}


if [ -f ~/git/theBookOfNoah/linux/_.bash_git_aliases ] && [ -f ~/git/theBookOfNoah/linux/_.git-completion.bash ]; then
    . ~/git/theBookOfNoah/linux/_.git-completion.bash
    complete -o default -o nospace -F _git g
    git config --global include.path ~/git/theBookOfNoah/linux/_.bash_git_aliases

    for al in `__git_aliases`; do
     alias g$al="git $al"

     complete_func=_git_$(__git_aliased_command $al)
     function_exists $complete_fnc && __git_complete g$al $complete_func
    done
fi
