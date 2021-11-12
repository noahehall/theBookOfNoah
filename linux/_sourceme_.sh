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
