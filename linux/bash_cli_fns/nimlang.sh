#!/usr/bin/env bash

## FYI
# ive only tested the c backend for nim compile & run cmds

## TODO:
# add stuff from tools: @see https://github.com/nim-lang/Nim/blob/devel/tools
# rewrite this entire thing in nimscript
# nim_docs doesnt set the `edit` link correctly
# add support for envar CC which sets compiler when --cc:env is used

nim_file_required='file.nim required'

########################## choosenim
nim_c() {
  choosenim "$@"
}
nim_c_use() {
  # install then select
  nim_c ${1:-stable}
}

nim_c_current() {
  nim_c show
}
nim_c_remote() {
  nim_c versions
}
nim_c_update() {
  nim_c update self
  nim_c update ${1:-stable}
  # updating via branches is known to be slow, pass a version instead
  # nim_c update devel --latest
}
nim_c_installed() {
  nim_c versions --installed
}
########################## nimble
nim_b() {
  nimble "$@"
}
nim_b_init() {
  # create a .nimble package in the curdir
  nim_b init
}
nim_b_push() {
  # publish package in curdir to nim's package repository
  # requires your github to be associated with an ssh token
  # nimble will retrieve and store your ssh token in $nimbleDir/github_api_token
  nim_b publish
}
nim_b_build() {
  # build a .nimble package in debug mode
  nim_b build
}
nim_b_compile() {
  # compile individual modules inside a package
  backend=${1:-c}
  case $backend in
  c | compile | js | cc | cpp) nim_b $backend "${@:2}" ;;
  *) echo 'invalid backend: @see https://github.com/nim-lang/nimble#nimble-c' ;;
  esac
}
nim_b_run() {
  # any binary in a packages bin list
  # nim_b_run somepkg NIMC_FLAGS thisbinary BIN_FLAGS
  nim_b --package:${1:?package name required} "${@:2}"
}
nim_b_task_list() {
  # list curdir package tasks
  nim_b tasks
}
nim_b_task_run() {
  # nim_b_task_run NIMC_FLAGS taskname TASK_ARGS
  nim_b "$@"
}
nim_b_pkg_info() {
  # info about curdir/specific pkg
  nim_b dump ${1:-''}
}
nim_b_add() {
  ## a remote package
  # specify a version via somepkg@x.y.z

  ## a local package
  # dont pass a package name and it will build the curdir in release mode & install it
  # install only pkg deps via --depsOnly
  # nimc flags are forwarded to nimc
  nim_b install "$@"
}
nim_b_del() {
  nim_b uninstall --inclDeps "$@"
}
nim_b_installed() {
  nim_b list --installed
}
nim_b_remote() {
  nim_b list
}
nim_b_search_remote() {
  nim_b search ${1:?pkg name or tags required}
}
nim_b_search_local() {
  nim_b path ${1:?pkg name required}
}
nim_b_refresh() {
  ## update package list
  nim_b refresh
}
nim_b_validate() {
  # checks curdir .nimble file and dependencies against the lock file
  nim_b check
}
nim_b_update() {
  nim_b install nimble
  nim_b_refresh
}
nim_b_dev_mode() {
  # put cur package in development mode and upsert nimble.develop
  # @see https://github.com/nim-lang/nimble#nimble-develop
  nim_b develop
}
nim_b_lock() {
  # upsert cur package nimble.lock file
  nim_b lock
}
nim_b_sync() {
  nim_b_lock

  # syncs dev mode dependencies with lock file
  nim_b sync
}
nim_b_setup_paths() {
  # creates a nimble.paths with paths to dependencies
  # adds nimble.{paths,develop} to .gitignore
  nim_b setup
}
########################## OPTS nim
## FYI
# opts are used with nim_dev_* and nim_doc cmds
# prod opts are here as an example and should be specified in your config.nims

## TODO
# --experimental:$1 think $1 should be a specific feature
# --define:nodejs js backend targets nodejs instead of browser
# --define:futureLogging # @see https://github.com/nim-lang/Nim/issues/21447
read -r -d '' nim_base_opts <<'EOF'
--assertions:on
--debugger:native
--deepcopy:on
--define:nimStrictDelete
--define:ssl
--define:threadsafe
--hints:on
--mm:orc
--multimethods:on
--opt:speed
--parallelBuild:0
--stackTraceMsgs:on
--styleCheck:hint
--threads:on
--tlsEmulation:on
--warnings:on
EOF

read -r -d '' c_opts <<'EOF'
--lineDir:on
--lineTrace:on
--stackTrace:on
EOF

# FYI: errorMax = throw after N/more errors, not allow N errors
read -r -d '' nim_prod_opts <<'EOF'
--verbosity:0
--errorMax:1
--forceBuild:on
--define:release
EOF

# TODO
# --hotCodeReloading:on throws err
# be cautious of --incremental:on as it tends to throw randomly on subsequent runs

# FYI: errorMax:0 = dont throw on errors
read -r -d '' nim_dev_opts <<'EOF'
--checks:on
--colors:on
--debuginfo:on
--declaredLocs:on
--errorMax:0
--excessiveStackTrace:on
--opt:size
--showAllMismatches:on
--verbosity:2
EOF

########################## prod nim

nim_compile() {
  filepath=${1:?$nim_file_required}
  backend=${2:-c}
  opts="${@:3:-''}"

  case $backend in
  c | cc | compileToC | cpp | compileToCpp | objc | compileToOC | js)
    nim $backend $opts $filepath
    ;;
  *) echo -e "invalid backend: @see https://nim-lang.org/docs/nimc.html\n$(type nim_compile)" ;;
  esac
}
nim_run() {
  filepath=${1:?$nim_file_required}
  backend=${2:-c}
  opts="${@:3:-''}"

  case $backend in
  c | cpp | objc | js) nim r -b:$backend $opts $filepath ;;
  *) echo -e "invalid backend: @see https://nim-lang.org/docs/nimc.html\n$(type nim_run)" ;;
  esac
}

########################## dev nim

nim_dump() {
  # list search paths for auto imported modules & included files
  # @see https://nim-lang.org/docs/nimc.html#compiler-usage-search-path-handling
  nim dump
}
nim_graph() {
  # generates parent/poop.deps && project/poops.{dot,png}
  # use graphviz ext > preview to view poop.dot within vscode
  nim genDepend $opts ${1:?$nim_file_required}
}
nim_lint() {
  opts="${@:2:-''}"
  nim check $opts ${1:?$nim_file_required}
}

nim_dev_run() {
  filepath=${1:?$nim_file_required}
  backend=${2:-c}

  case $backend in
  c | cpp | objc) nim r -b:$backend $nim_base_opts $nim_dev_opts $c_opts $filepath ;;
  js) nim r -b:$backend $nim_base_opts $nim_dev_opts $filepath ;;
  *) echo -e "invalid backend: @see https://nim-lang.org/docs/nimc.html\n$(type nim_dev_run)" ;;
  esac
}
nim_dev_compile() {
  filepath=${1:?$nim_file_required}
  backend=${2:-c}

  case $backend in
  c | cc | compileToC | cpp | compileToCpp | objc | compileToOC)
    nim $backend $nim_base_opts $nim_dev_opts $c_opts $filepath
    ;;
  js) nim js $nim_base_opts $nim_dev_opts $filepath ;;
  *) echo -e "invalid backend: @see https://nim-lang.org/docs/nimc.html\n$(type nim_dev_compile)" ;;
  esac
}
########################## docgen
## be cautious of ambiguous calls: sometimes doc gen fails
## --multimethods:on has no affect on doc generation
read -r -d '' doc_opts <<'EOF'
--multimethods:on
--docInternal
--hints:off
--index:on
--project
--threads:on
--verbosity:0
EOF

nim_docs() {
  filepath=${1:?$nim_file_required}
  backend=${2:-c}

  # creates htmldocs/htmlfiles matching nims html manpages
  case $backend in
  c | cpp | js | objc)
    prevHtmlDocs="$(pwd)/$(dirname $filepath)/htmldocs"
    if test -d "$prevHtmlDocs"; then
      echo "deleting previous htmldocs dir $prevHtmlDocs"
      rm -rf "$prevHtmlDocs"
    fi

    local giturl=$(git config --get remote.origin.url | sed 's/\(git@github.com:\|\.git\)//g')
    if test -n "$giturl"; then
      gitswitch="--git.url:https://github.com/${giturl} --git.commit:$(basename $(git symbolic-ref --short refs/remotes/origin/HEAD))"
    fi

    nim_graph $filepath
    nim doc -b:$backend $doc_opts $gitswitch $filepath
    ;;
  *) echo -e "invalid backend: @see https://nim-lang.org/docs/nimc.html\n$(type nim_docs)" ;;
  esac
}
nim_docs_json() {
  # creates htmldocs/poop.json
  nim jsondoc ${1:?$nim_file_required}
}
nim_docs_index() {
  # throws, dunno, ignoring
  nim buildIndex ${1:?htmldocs directory required} || echo -e "\n\ndid you run nim_docs first?"
}
nim_docs_ctags() {
  # check/lint doesnt catch the indentation errs causing this to throw
  nim ctags ${1:?$nim_file_required}
}

########################## nimscript
nims() {
  # TODO: @see https://nim-lang.org/docs/nimc.html#introduction
  # TODO: @see https://nim-lang.org/docs/nims.html
  nim e ${1:?file.nims required}
}

########################## testament
# @see https://nim-lang.org/docs/testament.html
# TODO: NIM_TESTAMENT_REMOTE_NETWORKING=1 enables tests with remote network (as in ci)

# FYI: this is no longer use
# prefer setting disabled: true in the test specs
read -r -d '' nim_test_opts <<'EOF'
--skipFrom:tests/skip
EOF

nim_test() {
  local what=${1:-a}

  case $what in
  all | a)
    testament all "${@:2}"
    nim_test html
    ;;
  c | cat | category | r | run | p | pattern)
    testament $what ${2:?glob/category/testfile required} "${@:3}"
    nim_test html
    ;;
  html) testament $what ;;
  *)
    testament # echos help
    echo -e 'docs: https://nim-lang.org/docs/testament.html'
    echo -e "\n$(type nim_test)"
    ;;
  esac
}

########################## catchall

nim_update() {
  echo -e 'updating choosenim and nim'
  nim_c_update ${1:-stable}

  echo -e 'updating nimble'
  nim_b_update
}
