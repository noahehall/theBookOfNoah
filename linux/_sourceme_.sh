#!/bin/sh
# ^ you really want that to point to /bin/dash, but whatev
# ^ https://wiki.ubuntu.com/DashAsBinSh

THISDIR="$(
	cd "$(echo "${BASH_SOURCE[0]%/*}")" || exit
	pwd
)"
for file in $THISDIR/bash_cli_fns/\.bash_*; do source $file; done

# update path
USER_LOCAL_BIN="$HOME"/.local/bin

mkdir -p "$USER_LOCAL_BIN"

export PATH=/opt:"$USER_LOCAL_BIN":"$PATH"

# AWS ----------------------------------
# ^ enable command completion
complete -C '/usr/local/bin/aws_completer' aws
