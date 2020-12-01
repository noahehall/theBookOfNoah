#!/usr/bin/env bash

# use bashtop if its installed
if hash bpytop 2>/dev/null; then
	alias oldtop='/usr/bin/top'
	alias top='/usr/local/bin/bpytop'
else echo 'should really use bpytop > top'
fi

alias g='git'
alias lessbashrc='less ~/.bashrc'
alias nanobashrc='nano ~/.bashrc'
alias sourcebashrc='source ~/.bashrc'

# show just file names
alias grepfilenames='grep -iRl'
# see installed packages
alias dpkgi='grep " install " /var/log/dpkg.log'
alias apti='grep " install " /var/log/apt/history.log'
alias installed='(dpkgi;apti) | less'

########### docker aliases ###########
alias dockerps="docker ps --no-trunc -a --format 'table {{.Names}}...{{.Image}}...{{.Status}}...{{.Command}}\n'"
alias dockerdremoteurl="sudo netstat -lntp | grep dockerd"
#echo image1 image2 three | xargall docker pull


alias xargall='xargs -p -t -n 1'
alias copyssh='pbcopy < ~/.ssh/id_rsa.pub'
alias getwifi='sudo iwlist wlp3s0 scan | grep ESSID'
alias listallsystemusers='cut -d: -f1 /etc/passwd'
alias myubunturelease='lsb_release -cs'
alias npmglobals='npm list -g --depth=0'
alias numberofcores='cat /proc/cpuinfo | grep processor | wc -l'
alias pbcopy='xclip -selection clipboard'
alias seessh='cat ~/.ssh/id_rsa.pub'
# alias ufwstatus='ufw status verbose'
# alias whatsmyip="ip addr show eth0 | grep inet | awk '{ print $2; }' | sed 's/\/.*$//'"

# can also add on a path at the end `sizeit ~/some/path`
alias sizeit='du -ahc'
# e.g. curl get/some/json | prettyjson
alias prettyjson='python -m json.tool | less'


# get all ufw firewall config files
alias ufwconfigs='sudo find / -name "*.rules" -exec ls -l {} \; | grep ufw'

# groupmembers docker
alias groupmembers='getent group'
