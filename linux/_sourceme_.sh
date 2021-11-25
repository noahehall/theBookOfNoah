#!/bin/sh
# ^ you really want that to point to /bin/dash, but whatev
# ^ https://wiki.ubuntu.com/DashAsBinSh

THISDIR="$(
	cd "$(echo "${BASH_SOURCE[0]%/*}")" || exit
	pwd
)"

[ -f "$THISDIR"/.bash_aliases.sh ] && . "$THISDIR"/.bash_aliases.sh
[ -f "$THISDIR"/.bash_functions.sh ] && . "$THISDIR"/.bash_functions.sh
[ -f "$THISDIR"/.bash_variables.sh ] && . "$THISDIR"/.bash_variables.sh
[ -f "$THISDIR"/.bash_addons.sh ] && . "$THISDIR"/.bash_addons.sh

mkdir -p "$HOME"/.local/bin

export PATH=/opt:/"$HOME"/.local/bin:"$PATH"

# AWS ----------------------------------
# ^ enable command completion
complete -C '/usr/local/bin/aws_completer' aws
