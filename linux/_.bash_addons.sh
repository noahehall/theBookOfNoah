#!/usr/bin/env bash

# https://stackoverflow.com/questions/592620/how-can-i-check-if-a-program-exists-from-a-bash-script
if hash neofetch 2>/dev/null; then neofetch
else 
	echo 'neofetch not installed'
fi

# use bashtop if its installed
if hash bashtop 2>/dev/null; then
	alias top='bashtop'
else echo 'should really use bashtop > top'
fi

if [ -f ~/git/theBookOfNoah/linux/qfc/bin/qfc.sh ]; then
    . ~/git/theBookOfNoah/linux/qfc/bin/qfc.sh
fi

if [ ! -f ~/git/theBookOfNoah/linux/_.git-completion.sh ]; then
	(wget -qO ~/git/theBookOfNoah/linux/_.git-completion.sh \
		https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.bash \
		 )
fi
. ~/git/theBookOfNoah/linux/_.git-completion.sh

