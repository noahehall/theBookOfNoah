#!/bin/env bash

regolith_version() {
  local file=/etc/regolith/version
  test -f $file && cat $file
}

pack() {
  if ! type nomad-pack 2>/dev/null; then
    echo -e 'install nomad pack: https://github.com/hashicorp/nomad-pack/releases/tag/nightly'
    return 1
  fi

  nomad-pack "$@"
}
