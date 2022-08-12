#!/usr/bin/env bash

# ^ you really want that to point to /bin/dash, but whatev
# ^ https://wiki.ubuntu.com/DashAsBinSh
echo "when the fk are you going to clean up your bash scripts?"

THISDIR="$(
	cd "$(echo "${BASH_SOURCE[0]%/*}")" || exit
	pwd
)"

for file in $THISDIR/bash_cli_fns/*; do
	# echo "sourcing $file"
	source $file
done

# update path
USER_LOCAL_BIN="$HOME"/.local/bin
mkdir -p "$USER_LOCAL_BIN"
export PATH=/opt:"$USER_LOCAL_BIN":"$PATH"
