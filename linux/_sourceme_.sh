#!/usr/bin/env bash
# ^ you really want that to point to /bin/dash, but whatev

[ -f .bash_aliases.sh ] && . .bash_aliases.sh
[ -f .bash_functions.sh ] && . .bash_functions.sh
[ -f .bash_variables.sh ] && . .bash_variables.sh
