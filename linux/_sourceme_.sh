#!/usr/bin/env bash

# todos
## implement getops everywhere
## implement -h
## switch on uname
echo "when the fk are you going to clean up your bash scripts?"

THISDIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]%/}")" &>/dev/null && pwd)

source_bash_files() {
	# @see https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html#The-Shopt-Builtin
	# fail if no files are found
	shopt -s failglob

	for file in "$THISDIR"/bash_cli_fns/*.sh; do
		# echo "sourcing $file"
		source "$file"
	done

	shopt -u failglob
}

source_bash_files

# update path
USER_LOCAL_BIN="$HOME"/.local/bin
mkdir -p "$USER_LOCAL_BIN"
export PATH=/opt:$USER_LOCAL_BIN:$PATH
