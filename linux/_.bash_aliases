# system
alias numberofcores="cat /proc/cpuinfo | grep processor | wc -l"

# networking
alias whatsmyip="ip addr show eth0 | grep inet | awk '{ print $2; }' | sed 's/\/.*$//'"
## an alternative to the above: curl http://icanhazip.com
alias ufwstatus="sudo ufw status verbose"
#tips
#lsof -i :3000 see process on port 3000

#helpers
alias lessbashrc='less /git/theBookOfNoah/linux/_.bashrc'
alias nanobashrc='nano /git/theBookOfNoah/linux/_.bashrc'
alias sourcebashrc='source /git/theBookOfNoah/linux/.bashrc'

# ssh
# see your private key
alias seessh="cat ~/.ssh/id_rsa.pub"
# copy your key if you have pbcopy
alias copyssh="pbcopy < ~/.ssh/id_rsa.pub"

#mongo
alias mongocheck='ps -aux | grep mongo'
alias mongoport='netstat -nap | grep 27017'
alias mongostart='mongod --auth --port 27017 --dbpath /data/db'
alias mongosudo='sudo mongod -f /etc/mongod.conf'
alias mongomod='sudo chown -R mongodb:mongodb /var/lib/mongodb && sudo chown -R mongodb:mongodb /data/db'

# users
alias listallsystemusers='cut -d: -f1 /etc/passwd'
alias listallhumanusers='awk -F':' '$2 ~ "\$" {print $1}' /etc/shadow'

#misc
alias pbcopy='xclip -selection clipboard'
alias getwifi='sudo iwlist wlp3s0 scan | grep ESSID'
