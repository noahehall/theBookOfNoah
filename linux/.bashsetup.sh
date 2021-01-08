#!/usr/bin/env bash

# enable this for a shit ton of debugging
# set -Eouvx pipefail

# clone this repository to ~/git/theBookOfNoah
# update your ~/.bashrc
# if [ -f ~/git/theBookOfNoah/linux/.bashsetup.sh ]; then
#    . ~/git/theBookOfNoah/linux/.bashsetup.sh
# fi


# https://intoli.com/blog/exit-on-errors-in-bash-scripts/
# keep track of the last executed command
# trap 'last_command=${current_command:=true}; current_command=${BASH_COMMAND}' DEBUG
# echo an error message before exiting
# trap 'echo -e ${BASH_COMMAND} command failed with exit code ${?}' EXIT




# load bash functions
# BASHFUNCS='_.bash_functions.sh'
THISDIR="$(cd "$( echo "${BASH_SOURCE[0]%/*}" )"; pwd)"
MYLINUXBIN="${THISDIR}/bin"
TMPINSTDIR="${THISDIR}/_tmp_install"
OSTYPE=$(uname -s)
shopt -s dotglob

installneofetch() {
	local installdir="${THISDIR}/installneofetch"
	if type -a neofetch 2>/dev/null; then neofetch
	else 
		echo 'installing neofetch from git'
		git clone --single-branch -- https://github.com/dylanaraps/neofetch $installdir
		pushd $installdir
		make PREFIX="$THISDIR" install 
		pushd $THISDIR
		if hash neofetch 2>/dev/null; then
			echo 'neofetch successfully installed'
			rm -Rfd $installdir
			rm -Rfd ./share
		else
			echo "could not install neofetch inside ${installdir}"
		fi
	fi

}

installhub() {
	local latesthuburl='https://github.com/github/hub/releases/download/v2.14.2/hub-darwin-amd64-2.14.2.tgz'
	local installdir="${THISDIR}/installhub"
	if type -a hub 2>/dev/null; then hub --version
	else 
		#https://github.com/github/hub/releases/tag/v2.14.2
		echo 'downloading hub from git'
		mkdir -p $installdir
		pushd $installdir
		curl -fLsS -o hub.tgz $latesthuburl
			
		tar zxvf hub.tgz -C . --strip-components=1
		mv ./bin/hub ${MYLINUXBIN}/hub
		mv ./etc/hub.bash_completion.sh ${THISDIR}/hub.bash_completion.sh
	fi
	eval "$(hub alias -s)"
	# add hub tab completion scripts
	cd $THISDIR
	[[ -f "./hub.bash_completion.sh" ]] && . "./hub.bash_completion.sh" || echo 'unable to setup hub bash completion'
	rm -Rfd $installdir

}

# . "${THISDIR}/${BASHFUNCS}"
#add our linux bin folder to path
if [[ "$PATH" =~ "$MYLINUXBIN" ]]
then
	echo "$PATH setup, assuming bash is configured"
	exit 0
else 
	echo "updating $PATH to include $MYLINUXBIN"
	export PATH=${MYLINUXBIN}:$PATH
	installhub
	installneofetch
fi


# sourceifexists "$(getpath '_.bash_aliases.sh')"
# sourceifexists "$(getpath '_.bash_variables.sh')"
# sourceifexists "$(getpath '_.bash_addons.sh')"
# sourceifexists "$(getpath '_.docker_daemon.sh')"


# GITALIASES="$(getpath '_.git_aliases')"
# [ -f "$GITALIASES" ] && git config --global include.path "$GITALIASES"
# sourceifexists "$(getpath '_.git-prompt.sh')"


# # sets up bash git completion
# complete -o default -o nospace -F _git g
# for al in $(git --list-cmds=alias); do
#     alias g$al="git $al"

#     complete_func=_git_$(__git_aliased_command $al)
#     function_exists ${complete_func} && __git_complete g$al $complete_func
# done