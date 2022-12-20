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

nmd_agent() {
  case $1 in
  dev)
    echo -e "starting dev mode"
    nomad agent -dev -bind 0.0.0.0 -log-level INFO
    ;;
  *) echo -e "dev | ..." ;;
  esac
}

nmd_job() {
  case $1 in
  init)
    echo -e "creating nomad.example in the current dir"
    nmd job init
    ;;
  run)
    # todo: check that file exists before running
    echo -e "running job $2"
    nmd job run ${2}.nomad

    ;;
  *) echo -e 'init | run ..' ;;
  esac
}
