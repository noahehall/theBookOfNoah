alias lessbashrc='less ~/.bashrc'
alias nanobashrc='nano ~/.bashrc'
alias sourcebashrc='source ~/.bashrc'

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
