# locations
alias githost='cd ~/git/githost'

#random
alias getjson='curl http://jsonplaceholder.typicode.com/posts/1'

#dns
#sudo killall -HUP mDNSResponder #flush dns after making changes
#sudo nano /etc/hosts #modify hosts file, make sure to flush dns
#sudo nano /private/etc/hosts #modify hosts file

#NETCAT
# nc google.com 80 #open interactively connect to it
# GET / HTTP/1.1 #press enter twice, to download the path

#mac
# "sudo chown -R $(whoami) /usr/local "; #take ownership of a directory
# ifconfig and ipconfgi
## windowS: ipconfig #see your ip stuff
## mac: ifconfig -a #ee your ip stuff

#redis
alias redistart='redis-server /usr/local/etc/redis.conf'

#notes
#git stash save "guacamole sauce WIP"
#git stash apply stash^{/guacamo}
#git grep className -- './*' ':(exclude)*.test.js' #in all files except test.js files
#git push -f <remote> <branch>
#check git connection ssh -vT git@github.com
#// eslint-disable-line no-use-before-define
#zip -r archive_name.zip folder_to_compress
#unzip archive_name.zip
#git archive --format=zip HEAD > <myapp>.zip #most recent commit on current branch
#resolve peer depenends: peer-dependencies-resolve
#cd ~/.nvm/versions/node/v1.2.3/lib > npm install npm #update npm, replace v with your version number

#linux
#see your path$ echo "$PATH"
#update your path by modify your .bash_profile with
	# export PATH=$PATH:/new/dir/location1

#helpers
alias nanobashrc='nano ~/.bashrc'
alias sourcebashrc='source ~/.bashrc'
alias lessbashrc='less ~/.bashrc'
alias sudohosts='sudo nano /etc/hosts'
alias port4474='lsof -i tcp:4474'

#mdn-docs
#requires https://github.com/CMTegner/mdn
alias mdnarray='mdn array#Methods'
alias mdnstring='mdn string#Methods'

#node/npm
alias npmglobal='npm -g ls --depth=0'
alias npmoutdated='npm outdated -g --depth=0'

#GIT
export GIT_TRACE_PACKET=1
export GIT_TRACE=1
export GIT_CURL_VERBOSE=1
alias gitrebcon='git rebase --continue'
alias gitrebski='git rebase --skip'
alias gitstat='git status'
alias gitclearlocal='git reset --hard' #clears all local changes to current branch

#DARCI > DOCKER
alias dmeval='eval $(docker-machine env default)'

#MY CONFIG
#export PS1="\! \u@ \w> \$? $ "

# NVM
if [ -s ~/.nvm/nvm.sh ]; then
	NVM_DIR=~/.nvm
	source ~/.nvm/nvm.sh
fi

# GIT-PROMPT
if [ -s ~/.git-prompt.sh ]; then
	source ~/.git-prompt.sh
fi

# RBENV
export PATH="$HOME/.rbenv/bin:$PATH"
eval "$(rbenv init -)"


#ALIASES
alias dic='cd ~/git'
alias intel='dic && cd intelligence'
alias udacity='dic && cd udacity'
alias cddocker='dic && cd docker'
alias darci='cd ~/git/darci'
alias docset='cd ~/git/docs/dictionary'
alias realapps='cd ~/git/real'
alias gitcomps='cd ~/git/real/comps'


## NISHANT
# Pretty prompt for git
red=$(tput setaf 1) # \e[31m
yellow=$(tput setaf 3) # \e[33m
reset=$(tput setaf 2) # \e[32m
PS1="[\u@\h]\[$red\]\w\[$yellow\]\$(__git_ps1)\[$reset\]\$ "

#SYSTEM
export PATH=$PATH:/Users/halln/git/udacity/projects/ct-fletcher-eslint/.eslintrc.js
