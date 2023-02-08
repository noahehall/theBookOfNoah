#!/usr/bin/env bash

nim_file_required='file.nim required'

########################## choosenim
nim_c() {
  choosenim "$@"
}
nim_c_current() {
  nim_c show
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
nim_b_install() {
  nim_b install
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
nim_b_upgrade() {
  nimble install nimble
}

########################## OPTS nim
# TODO: pretty sure we can have a single nim_c_or_r
# ^ that way we can reduce the duplication

# TODO: unsure if this is only for C, or also objcpp
read -r -d '' c_opts <<'EOF'
--lineDir:on
--lineTrace:on
--stackTrace:on
EOF

read -r -d '' doc_opts <<'EOF'
--docInternal
--project
EOF

# TODO
# --experimental:$1 think $1 should be a specific feature
# --define:nodejs js backend targets nodejs instead of browser
read -r -d '' nim_prod_opts <<'EOF'
--assertions:on
--debugger:native
--define:nimStrictDelete
--define:release
--define:ssl
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
  c) nim r -b:$backend $nim_prod_opts $c_opts $filepath ;;
  cpp) nim r -b:$backend $nim_prod_opts $filepath ;;
  js) nim r -b:$backend $nim_prod_opts $filepath ;;
  objc) nim r -b:$backend $nim_prod_opts $filepath ;;
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
  # generates poop.{deps,dot,png}
  # use vscode graphviz ext > preview to view poop.dot within editor
  nim genDepend $nim_dev_opts ${1:?$nim_file_required}
}
nim_lint() {
  nim check $nim_dev_opts ${1:?$nim_file_required}
}
nim_dev_run() {
  filepath=${1:?$nim_file_required}
  backend=${2:-c}

  case $backend in
  c) nim r -b:$backend $nim_dev_opts $c_opts $filepath ;;
  cpp) nim r -b:$backend $nim_dev_opts $filepath ;;
  js) nim r -b:$backend $nim_dev_opts $filepath ;;
  objc) nim r -b:$backend $nim_dev_opts $filepath ;;
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
  c) nim doc -b:$backend $doc_opts $filepath ;;
  cpp) nim doc -b:$backend $doc_opts $filepath ;;
  js) nim doc -b:$backend $doc_opts $filepath ;;
  objc) nim doc -b:$backend $doc_opts $filepath ;;
  *) echo "invalid backend: @see https://nim-lang.org/docs/nimc.html" ;;
  esac
}
nim_docs_json() {
  # creates htmldocs/poop.json
  nim jsondoc ${1:?$nim_file_required}
}
nim_docs_index() {
  # TODO: this doesnt seem to work
  nim buildIndex ${1:?$nim_file_required} || echo -e "\n\ndid you run nim_docs first?"
}
nim_docs_ctags() {
  # check/lint doesnt catch the indentation errs causing this to throw
  nim ctags ${1:?$nim_file_required}
}
