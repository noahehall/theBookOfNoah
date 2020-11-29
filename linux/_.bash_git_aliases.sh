#!/usr/bin/env bash

[alias]
# log
## oneline commits with date
l = log --pretty=format:"%C(yellow)%h\\ %ad%Cred%d\\ %Creset%s%Cblue\\ [%cn]" --decorate --date=short
## show changed files with each commit
ll = log --pretty=format:"%C(yellow)%h%Cred%d\\ %Creset%s%Cblue\\ [%cn]" --decorate --numstat
# # show branch graph 
lg = log --oneline --all --graph --decorate
## find commit by message 
lfm = "!f() { git log --all --grep=$1; }; f"
## shorter status 
sb = status -sb

# diffing 
dw = diff --word-diff

# adding/commiting
al  = "!f() { git diff --name-status --diff-filter=U | cut -f2 ; }; git add `f`"
ac = !git add . && git commit -am
## undo previous commit but keep changes
rlc = reset --soft HEAD^
rh = reset --hard


# pulling 
## pull latest from master and rebase 
#gprm = pull --rebase -i origin master
## pull latest from master and merge 
gpmm = pull origin master


# branches
dl = !git ll -1
feature = "!f() { git checkout -b feature/$1; }; f" 
b = "!git for-each-ref --sort='-authordate' --format='%(authordate)%09%(objectname:short)%09%(refname)' refs/heads | sed -e 's-refs/heads/--'"
# find git branch by name
bfn = !git branch | grep -i

#list all aliases 
la = "!git config -l | grep alias | cut -c 7-"
