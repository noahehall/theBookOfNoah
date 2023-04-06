#!/usr/bin/env bash

bun_repl() {
  bun x bun-repl
}
bun_info() {
  echo $(bun pm bin)
  echo $(bun pm cache)
}
bun_cache_clear() {
  bun pm cache rm
}
bun_run() {
  bun run ${1:?cmd or file required}
}

bun_dev() {
  bun --hot "${1:?file required}"
}
bun_pkg_info() {
  echo $(bun run)
  echo $(bun pm ls)
}

bun_install() {
  # use add for a specific pkg
  bun install
}

bun_install_prod() {
  bun install --production
}

bun_add() {
  bun add "$@"
}
bun_rm() {
  bun remove "$@"
}
bun_test() {
  bun test
}

bun_upgrade() {
  bun upgrade
}
