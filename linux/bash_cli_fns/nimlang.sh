#!/usr/bin/env bash

# TODO:
# add stuff from tools: @see https://github.com/nim-lang/Nim/blob/devel/tools
# rewrite this entire thing in nimscript
# nim_docs doesnt set the `edit` link correctly
# pretty sure we can have a single nim_c_or_r to keep things dry
# i think the c_opts should work for any c-like backend
# add support for CC sets compiler when --cc:env is used

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
  nim_b init
}
nim_b_build() {
  nim_b build
}
nim_b_add() {
  nim_b install "$@"
}
nim_b_del() {
  nim_b uninstall "$@"
}
nim_b_installed() {
  nim_b list --installed
}
nim_b_pkgs() {
  nim_b list
}
nim_b_refresh() {
  nim_b refresh
}
nim_b_update() {
  nimble install nimble
}

########################## OPTS nim
read -r -d '' c_opts <<'EOF'
--lineDir:on
--lineTrace:on
--stackTrace:on
EOF

## dont add --multimethods:on -> safe to ignore any ambiguous call errors
read -r -d '' doc_opts <<'EOF'
--docInternal
--hints:off
--index:on
--project
--threads:on
--verbosity:0
EOF

# TODO
# --experimental:$1 think $1 should be a specific feature
# --define:nodejs js backend targets nodejs instead of browser
read -r -d '' nim_prod_opts <<'EOF'
--assertions:on
--debugger:native
--deepcopy:on
--define:nimStrictDelete
--define:release
--define:ssl
--define:threadsafe
--errorMax:1
--forceBuild:on
--hints:on
--mm:orc
--multimethods:on
--opt:speed
--parallelBuild:0
--stackTraceMsgs:on
--styleCheck:hint
--threads:on
--tlsEmulation:on
--verbosity:0
--warnings:on
EOF

# TODO
# --hotCodeReloading:on throws err
# --mm:orc throws err
# be cautious of --incremental:on as it tends to throw randomly on subsequent runs

read -r -d '' nim_dev_opts <<'EOF'
--assertions:on
--checks:on
--colors:on
--debugger:native
--debuginfo:on
--declaredLocs:on
--define:nimStrictDelete
--define:ssl
--define:threadsafe
--errorMax:0
--excessiveStackTrace:on
--hints:on
--incremental:off
--multimethods:on
--opt:size
--parallelBuild:0
--showAllMismatches:on
--stackTraceMsgs:on
--styleCheck:hint
--threads:on
--tlsEmulation:on
--verbosity:2
--warnings:on
EOF

########################## nimscript
nims() {
  # TODO: @see https://nim-lang.org/docs/nimc.html#introduction
  # TODO: @see https://nim-lang.org/docs/nims.html
  nim e ${1:?file.nims required}
}

########################## prod nim

nim_compile() {
  filepath=${1:?$nim_file_required}
  backend=${2:-c}

  case $backend in
  c | compileToC) nim c $nim_prod_opts $c_opts $filepath ;;
  cpp | compileToCpp) nim cpp $nim_prod_opts $filepath ;;
  js) nim js $nim_prod_opts $filepath ;;
  objc | compileToOC) nim objc $nim_prod_opts $filepath ;;
  *) echo "invalid backend: @see https://nim-lang.org/docs/nimc.html" ;;
  esac
}
nim_run() {
  filepath=${1:?$nim_file_required}
  backend=${2:-c}

  case $backend in
  c | cpp | js | objc) nim r -b:$backend $nim_prod_opts $c_opts $filepath ;;
  *) echo "invalid backend: @see https://nim-lang.org/docs/nimc.html" ;;
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
  nim genDepend $nim_dev_opts ${1:?$nim_file_required}
}
nim_lint() {
  nim check $nim_dev_opts ${1:?$nim_file_required}
}
nim_dev_run() {
  filepath=${1:?$nim_file_required}
  backend=${2:-c}

  case $backend in
  c | cpp | js | objc) nim r -b:$backend $nim_dev_opts $c_opts $filepath ;;
  *) echo "invalid backend: @see https://nim-lang.org/docs/nimc.html" ;;
  esac
}
nim_dev_compile() {
  filepath=${1:?$nim_file_required}
  backend=${2:-c}

  case $backend in
  c | compileToC) nim c $nim_dev_opts $c_opts $filepath ;;
  cpp | compileToCpp) nim cpp $nim_dev_opts $filepath ;;
  js) nim js $nim_dev_opts $filepath ;;
  objc | compileToOC) nim objc $nim_dev_opts $filepath ;;
  *) echo "invalid backend: @see https://nim-lang.org/docs/nimc.html" ;;
  esac
}
########################## docs
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
  *) echo "invalid backend: @see https://nim-lang.org/docs/nimc.html" ;;
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

########################## catchall

nim_update() {
  echo -e 'updating choosenim and nim'
  nim_c_update ${1:-stable}

  echo -e 'updating nimble'
  nim_b_update
}
