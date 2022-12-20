#!/usr/bin/env bash

nmd() {
  nomad $@
}

nmd_s() {
  nmd status
}

nmd_node_s() {
  nmd node status
}

nmd_team() {
  if [ "$1" = "d" ]; then
    nmd server members -detailed
  else
    nmd server members
  fi
}

nmd_job() {
  case $1 in
  init)
    nmd job init
    ;;
  *) echo -e 'init | ..' ;;
  esac
}
