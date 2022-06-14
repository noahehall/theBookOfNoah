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
alias catbashrc='cat ~/.bashrc'
alias treedir='tree --dirsfirst --charset=ascii'
alias tree1='tree -L 1'
alias tree2='tree -L 2'
alias tree3='tree -L 3'
alias cdmedia="cd /media/$(whoami)/"

# grep ---------------------------------
alias grepfilenames='grep -iRl'

# pkgs ---------------------------------
alias dpkgi='grep " install " /var/log/dpkg.log'
alias apti='grep " install " /var/log/apt/history.log'
alias installed='(dpkgi;apti) | less'
alias whatsmyip="hostname -I | cut -d' ' -f1"
alias whatsmyipexternal='curl -s http://ipecho.net/plain'
alias untar='tar -xvf'

# networking
alias getwifi='sudo iwlist wlp3s0 scan | grep ESSID'
alias whatsonport='sudo netstat -tulpn' # | grep 8080

# random
alias xargall='xargs -p -t -n 1'
alias copyssh='pbcopy < ~/.ssh/id_rsa.pub'
alias listallsystemusers='cut -d: -f1 /etc/passwd'
alias myubunturelease='lsb_release -cs'
alias npmglobals='npm list -g --depth=0'
alias numberofcores='cat /proc/cpuinfo | grep processor | wc -l'
alias pbcopy='xclip -selection clipboard'
alias seessh='cat ~/.ssh/id_rsa.pub'
alias groupmembers='getent group'
alias ufwstatus='sudo ufw status verbose'

# can also add on a path at the end `sizeit ~/some/path`
alias sizeit='du -ahc'
# e.g. curl get/some/json | prettyjson
alias prettyjson='python -m json.tool | less'


# get all ufw firewall config files
alias ufwconfigs='sudo find / -name "*.rules" -exec ls -l {} \; | grep ufw'

# inspection -------------------------------------------------------------------
alias listallgroups='cat /etc/group'
alias listallmounts='mount'
alias listallnetworks='netstat -tulanp'
alias listallports='netstat -tulanp | grep LISTEN'
alias listallprocesses='ps -ef'
alias listallservices='systemctl list-unit-files --type=service'
alias listallsymlinks='find . -type l -ls'
alias listalltimers='systemctl list-units --type=timer'
alias listallusers='cat /etc/passwd'
alias listram='free -h'
alias listramfull='vmstat -s'
alias listrampretty='vmstat -S M | grep -v "procs -----------memory---------- ---swap-- -----io---- --system-- ------cpu----"'
alias listmemoryvideo='lspci -v -s 00:02.0'

alias listcpus='lscpu'
alias listcpusfull='cat /proc/cpuinfo'
alias listdisks='duf -all'
alias listfilesystem='df -ha'

# docker -------------------------------
alias dockerseeme="$(echo docker run --rm -it alpine ping -c4 $(whatsmyip))"
alias dockerps="docker ps --no-trunc -a --format 'table {{.Names}}...{{.Image}}...{{.Status}}...{{.Command}}\n'"
alias dockerdremoteurl="sudo netstat -lntp | grep dockerd"
alias dockerdlog="$(echo journalctl -u docker.service)"
# get netstats (use ss on ubuntu)
alias dockerdss="(sudo ss -asmpex | grep dockerd)"
#echo image1 image2 three | xargall docker pull
alias dockerinspect="docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}'"

# node ---------------------------------
alias npmglobals='npm list -g --depth=0'
alias nvmaliasnode='nvm alias default node'
alias nvmdefualtsystem='nvm alias default system'
alias nvminstalled='nvm ls'
alias nvmlatestinstall='nvm install node --reinstall-packages-from=default --latest-npm'
alias nvmlatestlts='nvm ls-remote | grep -i latest'
alias nvmlatestnpm='nvm install-latest-npm'
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
# @see https://gist.github.com/chrismccoy/8775224
## quick
alias gita='git add -A'
alias gitb='git branch'
alias gitba='git branch -a'
alias gitc='git commit -a -m'
alias gitl='git log --oneline'
alias gitp='git push'
alias gitpf='git push --force'
alias gitpl='git pull'
alias gitplf='git pull --force'
alias gitprune=' git fetch --prune'
alias gitprunecheck='git prune --dry-run --verbose'
alias gitrmcache='git rm --cached -r .'
alias gits='git status -sb'

## extended
alias gitcontributors='git log --format="%ae" | sort -u'
alias gitconfig='git config --list'
alias gitconfigedit='git config --global -e'
alias gitdiffdevelop='git diff origin/develop --stat'
alias gitdiffdevelopv='git diff origin/develop'
alias gitdiffmaster='git diff origin/master --stat'
alias gitdiffmasterv='git diff origin/master'
alias gitloglast='git log -1 HEAD --stat'
alias gitstash='git stash -u'
alias gitstashlist='git stash list'
alias gitstashpop='git stash pop'
alias gitprune='git fetch --prune && git prune'
alias gitamend='git log -n 1 --pretty=tformat:%s%n%n%b | git commit -F - --amend'

# apt ----------------------------------
alias aptrefresh='sudo apt update && sudo apt upgrade'
alias aptupgradable='sudo apt list --upgradable'
alias aptfixbroken='sudo apt install --fix-broken'
alias aptfixconfigure='sudo dpkg --configure --force-overwrite -a'
alias aptsearchi3='apt search ^i3xrocks'
alias aptsearchlooks='apt search ^regolith-look-'
alias aptsearchpkgs='apt-cache search --names-only '
alias aptaddppa='sudo add-apt-repository'
alias aptremoveppa='sudo add-apt-repository --remove'
# aws ----------------------------------
alias awsconfig='sudo aws configure'
alias awsconfiglist='aws configure list'
alias awsconfigprofiles='aws configure list-profiles'
alias awsaccounts='aws iam list-account-aliases'
alias awswhoami='aws sts get-caller-identity'
alias awspgversions='aws rds describe-db-engine-versions --default-only --engine postgres'
alias nanoconfig='sudo nano ~/.aws/config'
alias nanocreds='sudo nano ~/.aws/credentials'

# virtualbox
# --help will always console help, even if invalid for the cmd
alias vb='VBoxManage'
alias vbctrl='VBoxManage controlvm'
alias vbctrolcmds='\vbctrl nameOfMachine pause|resume|reset|poweroff|savestate|etc'
alias vbguest='VBoxManage guestcontrol'
alias vbguestcmds='VBoxManage guestcontrol --help' # execute cmds in guest from host cli, e.g. to run a program
alias vbhostcmds='VBoxManage hostonlyif --help'
alias vblistall='VBoxManage list vms'
alias vbrunning='VBoxManage list runningvms'
alias vbstart='VBoxManage startvm'

# vagrant, overriding vg i'll never use it

alias vgt='vagrant'
alias vgtdestroy='vagrant destroy' # delete everything, but keep vagrantfile
alias vgtlistboxes='vagrant box list'
alias vgtlistsnapshots='vagrant snapshot list'
alias vgtprovision='vagrant provision'
alias vgtprune='vagrant global-status --prune'
alias vgtreload='vagrant reload' # like restarting your comp
alias vgtreloadprovision='vagrant reload --provision'
alias vgtrestart='vagrant reload'
alias vgtresume='vagrant resume' # like waking up your comp
alias vgtrunning='vagrant status'
alias vgtrunningall='vagrant global-status'
alias vgtssh='vagrant ssh'
alias vgtstart='vagrant up'
alias vgtstartandprovision='vagrant up --provision'
alias vgtstartdontprovision='vagrant up --no-provision'
alias vgtstop='vagrant halt'
alias vgtsuspend='vagrant suspend' # like hibernating your comp

# nim
alias cnim='choosenim'
alias cnimlist='choosenim show'
alias nimbuild='nimble build' # same as nimprodbuild
alias nimdebugrun='nim c -r'
alias nimdevbuild='nim c --verbosity:2'
alias nimdevrun='nim c -r --verbosity:0'
alias nimi='nimble install'
alias niminit='nimble init'
alias nimlist='nimble list'
alias nimlistinstalled='nimble list --installed'
alias nimprodbuild='nim -d:release c --verbosity:2'
alias nimprodrun='nim -d:release c -r --verbosity:0'
alias nimrefresh='nimble refresh'

# gpg|ssh keys -------------------------
# @see https://docs.github.com/en/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key
alias gpglistkeys='gpg --list-keys'
alias gpglistkeyslong='gpg --list-keys --keyid-format=long'
