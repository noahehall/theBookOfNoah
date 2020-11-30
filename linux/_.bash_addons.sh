#!/usr/bin/env bash

# https://stackoverflow.com/questions/592620/how-can-i-check-if-a-program-exists-from-a-bash-script
if hash neofetch 2>/dev/null; then neofetch
else 
	echo 'neofetch not installed'
fi

# https://github.com/rgburke/grv
if ! hash grv; then 
	echo 'thinking about installing grv to your path'
fi

sourceifexists $(getpath qfc/bin/qfc.sh)

GITCOMPLETION=$(getpath _.git-completion.sh)
if [ ! -f ${GITCOMPLETION} ]; then
	(wget -qO ${GITCOMPLETION} \
		https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.bash \
		 )
fi
. $GITCOMPLETION


