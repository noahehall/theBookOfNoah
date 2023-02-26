#!/usr/bin/env bash

pack() {
  if ! type nomad-pack 2>/dev/null; then
    echo -e 'install nomad pack: https://github.com/hashicorp/nomad-pack/releases/tag/nightly'
    return 1
  fi

  nomad-pack "$@"
}
