#!/usr/bin/env bash

# https://stackoverflow.com/questions/592620/how-can-i-check-if-a-program-exists-from-a-bash-script
if hash neofetch &> /dev/null; then neofetch
else 
	echo 'neofetch not installed'
fi