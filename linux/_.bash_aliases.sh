#!/usr/bin/env bash

alias lessbashrc='less ~/.bashrc'
alias nanobashrc='nano ~/.bashrc'
alias sourcebashrc='source ~/.bashrc'

# show just file names
alias grepfilenames='grep -iRl'
# see installed packages
alias dpkgi='grep " install " /var/log/dpkg.log'
alias apti='grep " install " /var/log/apt/history.log'
alias installed='(dpkgi;apti) | less'


alias dockerps="docker ps --no-trunc -a --format 'table {{.Names}}...{{.Image}}...{{.Status}}...{{.Command}}\n'"
#echo image1 image2 three | xargall docker pull
alias xargall='xargs -p -t -n 1'
alias copyssh="pbcopy < ~/.ssh/id_rsa.pub"
alias getwifi='sudo iwlist wlp3s0 scan | grep ESSID'
alias listallsystemusers='cut -d: -f1 /etc/passwd'
alias myubunturelease="lsb_release -cs"
alias npmglobals='npm list -g --depth=0'
alias numberofcores="cat /proc/cpuinfo | grep processor | wc -l"
alias pbcopy='xclip -selection clipboard'
alias seessh="cat ~/.ssh/id_rsa.pub"
alias ufwstatus="sudo ufw status verbose"
alias whatsmyip="ip addr show eth0 | grep inet | awk '{ print $2; }' | sed 's/\/.*$//'"

alias sizeit="du -ahc" # can also add on a path at the end `sizeit ~/some/path`
# e.g. curl get/some/json | prettyjson
alias prettyjson='python -m json.tool | less'

# fetch and merge a branch without leaving your current branch
# git fetch upstream develop:develop