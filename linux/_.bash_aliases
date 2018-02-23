alias lessbashrc='less /git/theBookOfNoah/linux/_.bashrc'
alias nanobashrc='nano /git/theBookOfNoah/linux/_.bashrc'
alias sourcebashrc='source /git/theBookOfNoah/linux/.bashrc'

alias copyssh="pbcopy < ~/.ssh/id_rsa.pub"
alias getwifi='sudo iwlist wlp3s0 scan | grep ESSID'
alias listallhumanusers='awk -F':' '$2 ~ "\$" {print $1}' /etc/shadow'
alias listallsystemusers='cut -d: -f1 /etc/passwd'
alias myubunturelease="lsb_release -cs"
alias npmglobals='npm list -g --depth=0'
alias numberofcores="cat /proc/cpuinfo | grep processor | wc -l"
alias pbcopy='xclip -selection clipboard'
alias seessh="cat ~/.ssh/id_rsa.pub"
alias ufwstatus="sudo ufw status verbose"
alias whatsmyip="ip addr show eth0 | grep inet | awk '{ print $2; }' | sed 's/\/.*$//'"
