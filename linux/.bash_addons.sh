#!/usr/bin/env bash

# I always forget how to do this #######
# posix compliant
# if ! type poop &> /dev/null; then
# then
#     echo "poop could not be found"
#     exit
# fi
########################################
# other ways, but use the one above
# https://stackoverflow.com/questions/592620/how-can-i-check-if-a-program-exists-from-a-bash-script
# https://unix.stackexchange.com/questions/86012/what-is-the-purpose-of-the-hash-command
# $ command -v foo >/dev/null 2>&1
# $ type foo >/dev/null 2>&1
# $ hash foo 2>/dev/null
########################################


#https://github.com/dylanaraps/neofetch
if type neofetch 2>/dev/null; then neofetch
else
	echo 'neofetch not installed'
fi

# https://github.com/rgburke/grv
# if ! hash grv; then
# 	echo 'thinking about installing grv to your path'
# fi
