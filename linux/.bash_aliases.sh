#!/usr/bin/env bash

# use bashtop if its installed
if hash bpytop 2>/dev/null; then
	alias oldtop='/usr/bin/top'
	alias top='/usr/bin/bpytop'
else echo 'should really use bpytop > top'
fi

# random cli ---------------------------
alias echopath='echo $PATH | tr -s ":" "\n"'
alias lessbashrc='less ~/.bashrc'
alias nanobashrc='nano ~/.bashrc'
alias sourcebashrc='source ~/.bashrc'
alias treedir='tree --dirsfirst --charset=ascii'

# grep ---------------------------------
alias grepfilenames='grep -iRl'

# pkgs ---------------------------------
alias dpkgi='grep " install " /var/log/dpkg.log'
alias apti='grep " install " /var/log/apt/history.log'
alias installed='(dpkgi;apti) | less'
alias whatsmyip="hostname -I | cut -d' ' -f1"
#alias whatsmyip="ip addr show eth0 | grep inet | awk '{ print $2; }' | sed 's/\/.*$//'"

# docker -------------------------------
alias dockerseeme="$(echo docker run --rm -it alpine ping -c4 $(whatsmyip))"
alias dockerps="docker ps --no-trunc -a --format 'table {{.Names}}...{{.Image}}...{{.Status}}...{{.Command}}\n'"
alias dockerdremoteurl="sudo netstat -lntp | grep dockerd"
alias dockerdlog="$(echo journalctl -u docker.service)"
# get netstats (use ss on ubuntu)
alias dockerdss="(sudo ss -asmpex | grep dockerd)"
#echo image1 image2 three | xargall docker pull
alias dockerinspect="docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}'"

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

# can also add on a path at the end `sizeit ~/some/path`
alias sizeit='du -ahc'
# e.g. curl get/some/json | prettyjson
alias prettyjson='python -m json.tool | less'


# get all ufw firewall config files
alias ufwconfigs='sudo find / -name "*.rules" -exec ls -l {} \; | grep ufw'

# groupmembers docker
alias groupmembers='getent group'

# node ---------------------------------
alias npmglobals='npm list -g --depth=0'
alias nvminstalled='nvm ls'
alias nvmlatest='nvm ls-remote | grep -i latest'
alias nvmlatestinstall='nvm install node --reinstall-packages-from=node'
alias nvmlatestnpm='nvm install-latest-npm'
alias nvmdefualtsystem='nvm alias default system'
alias nvmstop='nvm deactivate' # only for current shell

# terraform ----------------------------
alias tfplan='terraform plan -out tfplan'
alias tfplandestroy='terraform plan -destroy -out destroy.tfplan'
alias tfapply='terraform apply tfplan'
alias tfshow='terraform show tfplan'
alias tfgraph='terraform graph -plan tfplan'
alias tfdestroy='terraform apply destroy.tfplan'
alias tffmt='terraform fmt'
alias tfvalidate='terraform validate'
alias tfstatelist='terraform state list'
alias tfstatepull='terraform state pull'
alias tfstateshow='terraform state show'
alias tfrefresh='terraform apply -refresh-only'

# git ----------------------------------
alias gitb='git branch'
alias gitc='git commit -a -m'
alias gitl='git log --oneline'
alias gitp='git push'
alias gitpf='git push --force'
alias gitpl='git pull'
alias gitplf='git pull --force'
alias gits='git status -sb'
alias gitdiffmaster='git diff origin/master --stat'
alias gitdiffmasterv='git diff origin/master'
alias gitdiffdevelop='git diff origin/develop --stat'
alias gitdiffdevelopv='git diff origin/develop'
alias gitloglast='git log -1 HEAD --stat'
alias gitstash='git stash -u'
alias gitstashpop='git stash pop'
alias gitstashlist='git stash list'
