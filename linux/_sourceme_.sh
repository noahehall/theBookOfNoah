#!/bin/sh
# ^ you really want that to point to /bin/dash, but whatev

[ -f ./.bash_aliases.sh ] && source ./.bash_aliases.sh
[ -f ./.bash_functions.sh ] && source ./.bash_functions.sh
[ -f ./.bash_variables.sh ] && source ./.bash_variables.sh
