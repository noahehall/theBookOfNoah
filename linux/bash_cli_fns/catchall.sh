############
# likely all of these only works for apple silicon due to hardcoding
# theres a todo to fix that
###########

# bash
redirectALL () {
    echo "redirecting stdout & err to ./redirectALL.log"
    # Note: & (in 2>&1) specifies that 1 is not a file name but a file descriptor.
    $@ > .redirectALL.log 2>&1
}

#https://github.com/dylanaraps/neofetch
if type neofetch &>/dev/null;
	# --config /path/to/config
	# --config none
	then neofetch \
		--config none \
		--cpu_temp F \
		--gpu_type all \
		--memory_unit gib \
		--os_arch on \
		--stdout



# --disk_percent on --disk_subtitle name --disk_show /

else
	echo 'neofetch not installed'
fi


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
alias whatsmyipmac='ifconfig -a | grep inet'
alias whatsmyip="hostname -I | cut -d' ' -f1"
alias whatsmyipexternal='curl -s http://ipecho.net/plain'
alias whatsmyipextended='curl http://ipinfo.io'
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


# gpg|ssh keys -------------------------
# @see https://docs.github.com/en/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key
alias gpglistkeys='gpg --list-keys'
alias gpglistkeyslong='gpg --list-keys --keyid-format=long'
