#!/usr/bin/env bash

# nim
alias nim_b='nimble'
alias nim_b_build='nimble build'
alias nim_b_i='nimble install'
alias nim_b_init='nimble init'
alias nim_b_list_installed='nimble list --installed'
alias nim_b_list='nimble list'
alias nim_b_refresh='nimble refresh'
alias nim_c_list='choosenim show'
alias nim_c='choosenim'
alias nim_prod_build='nim -d:release c --verbosity:2'
alias nim_prod_run='nim -d:release c -r --verbosity:0'

nim_compile() {
  nim c --verbosity:1 ${1:?somefile required}
}
nim_dev_run() {
  nim c -r --verbosity:0 ${1:?somefile required}
}
