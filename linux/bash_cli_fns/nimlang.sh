#!/usr/bin/env bash

# nim
alias nim_c='choosenim'
alias nim_c_list='choosenim show'
alias nim_build='nimble build'
alias nim_i='nimble install'
alias nim_init='nimble init'
alias nim_list='nimble list' # same as nimprodbuild
alias nim_list_installed='nimble list --installed'
alias nim_prod_build='nim -d:release c --verbosity:2'
alias nim_prod_run='nim -d:release c -r --verbosity:0'
alias nim_refresh='nimble refresh'

nim_compile() {
  nim c --verbosity:1 ${1:?somefile required}
}
nim_dev_run() {
  nim c -r --verbosity:0 ${1:?somefile required}
}
