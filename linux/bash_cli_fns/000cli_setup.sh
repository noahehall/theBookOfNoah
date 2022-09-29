#!/bin/env bash

# TODO
# @see https://bashrcgenerator.com/

# check windows size if windows is resized
shopt -s checkwinsize 2>/dev/null
# ensure SIGHUP is sent to all jobs when an interactive login shell exits
shopt -s huponexit 2>/dev/null
# force ssh connections to close after some time
export TMOUT=3000

export TERM=linux
export EDITOR=nano

# history stuff
history -a          # record each line as it gets issued
shopt -s histappend # append to the history file, don't overwrite it
shopt -s cmdhist    # save multi-line commands as one command
export HISTSIZE=500000
export HISTFILESIZE=100000
export HISTCONTROL="erasedups:ignoreboth"        # avoid duplicate entries
export HISTIGNORE="&:[ ]*:exit:ls:bg:fg:history" # don't record some commands
export HISTTIMEFORMAT='%F %T '                   # useful timestamp format

# matching/globbing
# tells Readline to perform filename completion in a case-insensitive fashion
bind "set completion-ignore-case on"
# filename matching during completion will treat hyphens and underscores as equivalent
bind "set completion-map-case on"
# will get Readline to display all possible matches for an ambiguous pattern at the first <Tab> press instead of at the second
bind "set show-all-if-ambiguous on"
# include .files when globbing.
shopt -s dotglob 2>/dev/null
# case insensitive globbing
shopt -s nocaseglob 2>/dev/null
# colorized completion
bind "set colored-stats on"
bind "set visible-stats on"
bind "set mark-symlinked-directories on"
bind "set colored-completion-prefix on"
bind "set menu-complete-display-prefix on"

# git stuff
# @see https://github.com/git/git/blob/master/contrib/completion/git-prompt.sh
export GIT_PS1_SHOWDIRTYSTATE=true             # * unstaged + staged
export GIT_PS1_SHOWSTASHSTATE=true             # $ stashed
export GIT_PS1_SHOWUNTRACKEDFILES=true         # % untracked
export GIT_PS1_SHOWUPSTREAM='auto verbose git' # < behind > ahead <> diverged = equal
export GIT_PS1_SHOWCONFLICTSTATE=yes           # unresolved conflicts
export GIT_PS1_DESCRIBE_STYLE=branch           # identitify of commits checked out as a detached HEAD
export GIT_PS1_HIDE_IF_PWD_IGNORED=true
export GIT_PS1_SHOWCOLORHINTS=true
# GIT_PS1_COMPRESSSPARSESTATE

function color_my_prompt {
  local BLACK='\[\033[0;30m\]'
  local BLUE='\[\033[0;34m\]'
  local BROWN='\[\033[0;33m\]' #Orange
  local CYAN='\[\033[0;36m\]'
  local DEFAULT='\[\033[0m\]'
  local GRAY='\[\033[1;30m\]'
  local GREEN='\[\033[0;32m\]'
  local LIGHTBLUE='\[\033[1;34m\]'
  local LIGHTCYAN='\[\033[1;36m\]'
  local LIGHTGRAY='\[\033[0;37m\]'
  local LIGHTGREEN='\[\033[1;32m\]'
  local LIGHTRED='\[\033[1;31m\]'
  local PINK='\[\033[1;35m\]' #Light Purple
  local PURPLE='\[\033[0;35m\]'
  local RED='\[\033[0;31m\]'
  local VIOLET='\[\033[01;35m\]'
  local WHITE='\[\033[1;37m\]'
  local YELLOW='\[\033[1;33m\]'

  local __git_branch_color="$GREEN"
  local __prompt_tail="$VIOLET$"
  local __git_branch='$(__git_ps1)'

  # colour branch name depending on state
  if [[ "$(__git_ps1)" =~ \< ]]; then # The branch is behind remote
    __git_branch_color="$RED"
  elif [[ "$(__git_ps1)" =~ \<\> ]]; then # The branch & remote have diverged & needs merge
    __git_branch_color="$RED"
  elif [[ "$(__git_ps1)" =~ \+ ]]; then # branch has staged changes
    __git_branch_color="$RED"
  elif [[ "$(__git_ps1)" =~ % ]]; then # if there are untracked files
    __git_branch_color="$YELLOW"
  elif [[ "$(__git_ps1)" =~ \* ]]; then # The branch has unstaged changes
    __git_branch_color="$YELLOW"
  elif [[ "$(__git_ps1)" =~ \> ]]; then # The branch is ahead of remote
    __git_branch_color="$YELLOW"
  elif [[ "$(__git_ps1)" =~ \$ ]]; then # something is stashed
    __git_branch_color="$YELLOW"
  elif [[ "$(__git_ps1)" =~ = ]]; then # The branch is equal with the remote
    __git_branch_color="$GREEN"
  fi

  PS1="\n\[$(tput sgr0)\]\[\033[38;5;1m\]\u\[$(tput sgr0)\]\[\033[38;5;11m\]@\[$(tput sgr0)\]\[\033[38;5;1m\]\H\[$(tput sgr0)\]:\w\n\[$(tput sgr0)\]\[\033[38;5;1m\]\@\[$(tput sgr0)\]$__git_branch_color$__git_branch \[$(tput sgr0)\]\n\[$(tput sgr0)\]$__prompt_tail "
}

# force colours
export force_color_prompt=yes
# use colour prompt
export color_prompt=yes
# configure PROMPT_COMMAND which is executed each time before PS1
export PROMPT_COMMAND=color_my_prompt
