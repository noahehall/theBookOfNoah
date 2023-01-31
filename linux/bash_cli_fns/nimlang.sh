#!/usr/bin/env bash

# nim
# TODO: you dont need both c and -r in *_run cmds
# ^ unless you explicitly want to compile it, just use r cmd
# TODO: check nim --fullhelp and setup some good defaults
alias nim_b='nimble'
alias nim_b_build='nimble build'
alias nim_b_i='nimble install'
alias nim_b_nit='nimble init'
alias nim_b_installed='nimble list --installed'
alias nim_b_pkgs='nimble list'
alias nim_b_refresh='nimble refresh'
alias nim_c_current='choosenim show'
alias nim_c='choosenim'
alias nim_prod_build='nim -d:release c --verbosity:2'
alias nim_prod_run='nim -d:release r --verbosity:0'

nim_compile() {
  nim c \
    --verbosity:0 \
    --stackTrace:on \
    ${1:?somefile.nim required}
}
nim_dev_run() {
  # verbosity:2 gets us errors & line numbers
  nim r \
    --assertions:on \
    --checks:on \
    --lineTrace:on \
    --showAllMismatches:on \
    --stackTrace:on \
    --threads:on \
    --verbosity:2 \
    ${1:?somefile.nim required}
}
