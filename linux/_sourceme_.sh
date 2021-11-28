#!/bin/sh
# ^ you really want that to point to /bin/dash, but whatev
# ^ https://wiki.ubuntu.com/DashAsBinSh

THISDIR="$(
	cd "$(echo "${BASH_SOURCE[0]%/*}")" || exit
	pwd
)"

[ -f "$THISDIR"/.bash_functions.sh ] && . "$THISDIR"/.bash_functions.sh
[ -f "$THISDIR"/.bash_aliases.sh ] && . "$THISDIR"/.bash_aliases.sh
[ -f "$THISDIR"/.bash_variables.sh ] && . "$THISDIR"/.bash_variables.sh
[ -f "$THISDIR"/.bash_addons.sh ] && . "$THISDIR"/.bash_addons.sh

# update path
USER_LOCAL_BIN="$HOME"/.local/bin

mkdir -p "$USER_LOCAL_BIN"

export PATH=/opt:"$USER_LOCAL_BIN":"$PATH"

# AWS ----------------------------------
# ^ enable command completion
complete -C '/usr/local/bin/aws_completer' aws
