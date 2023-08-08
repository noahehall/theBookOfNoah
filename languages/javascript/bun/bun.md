# bun

- alternative JS/TS runtime based on safari's JavaScriptCore engine and developed in zig
- aims to be the #1 runtime outside of browsers focusing on edge computing and low-memory environments

## links

### bun docs

- [AAA docs](https://bun.sh/docs)
- [hot reloading](https://bun.sh/docs/runtime/hot)
- [build: intro](https://bun.sh/docs/bundler)
- [build: esbuild migration](https://bun.sh/docs/bundler/migration)
- [build: loaders](https://bun.sh/docs/bundler/loaders)
- [build: macros](https://bun.sh/docs/bundler/macros)
- [build: bun vs esbuild](https://bun.sh/docs/bundler/vs-esbuild)
- [plugins](https://bun.sh/docs/bundler/plugins)

### bun runtime API

- [http server](https://bun.sh/docs/api/http)

### categorize these

- [configuration](https://bun.sh/docs/project/configuration)
- [console](https://bun.sh/docs/api/console)
- [create](https://bun.sh/docs/cli/create)
- [dns](https://bun.sh/docs/api/dns)
- [ffi](https://bun.sh/docs/api/ffi)
- [files](https://bun.sh/docs/api/file-io)
- [filesystemrouter](https://bun.sh/docs/api/file-system-router)
- [globals](https://bun.sh/docs/api/globals)
- [htmlrewriter](https://bun.sh/docs/api/html-rewriter)
- [module resolution: bun resolution](https://bun.sh/docs/runtime/modules#bun-style-resolution)
- [module resolution: path remapping](https://bun.sh/docs/runtime/modules#path-re-mapping)
- [module resolution](https://bun.sh/docs/runtime/modules)
- [node-api](https://bun.sh/docs/api/node-api)
- [nodejs](https://bun.sh/docs/ecosystem/nodejs)
- [plugins](https://bun.sh/docs/runtime/plugins)
- [react](https://bun.sh/docs/ecosystem/react)
- [react & jsx](https://bun.sh/docs/runtime/jsx)
- [spawn](https://bun.sh/docs/api/spawn)
- [sqlite](https://bun.sh/docs/api/sqlite)
- [tcp sockets](https://bun.sh/docs/api/tcp)
- [test: intro](https://bun.sh/docs/cli/test)
- [test: api](https://bun.sh/docs/test/writing)
- [transpiler](https://bun.sh/docs/api/transpiler)
- [typescript](https://bun.sh/docs/runtime/typescript)
- [utils](https://bun.sh/docs/api/utils)
- [web sockets](https://bun.sh/docs/api/websockets)

### issues

- [typescript document not found issue](https://github.com/oven-sh/bun/issues/463)
  - remove `bun-types` from tsconfig and add it to a declaration file
- [uncaught syntaxerror: ambiguous indirect export](https://github.com/oven-sh/bun/issues/2878)
  - delete node_modules.bun (its deprecated)

### ecosystem

- [bun templates](https://github.com/bun-community/create-templates)

## basics

- design goals:
  - fast startup for cloud native apps
  - fast runtime perf
  - fullstack developer experience with builtin toolchain for bundling, transpilating and package management

### bun overview

- bun understands js, jsx, ts, tsx, mjs, cjs, json, etc
- the bun cli is the single executable you need for all JS development
- native jest-like test runner
- npm compatible package manager

#### nodejs && bun

- bun is mostly a dropin replacement for nodejs
  - implements ~90% of nodejs native modules
- esm (default) and commonjs supported
- implements many web APIs
- auto transpiles typescript & jsx
  - supports tsconfigs
  - loads .env file automatically
- builtin sqlite3 client
- provides `bun:ffi` for calling native code from javascripts

#### typescript && bun

- frontend apps
  - you still need to transpile to JS to remove the type definitions
- backend apps
  - bun executes typescript directly, no need to transpile
- consumes existing tsconfig.json
- make sure to `bun add bun-types@canary` and add it to tsconfig.json.compilerOptions.types
  - TODO: check if this works, was throwing in the react project
- does not typecheck files, so `tsc --noEmit` is still required
  - typechecking should be offloaded to your IDE/tests
- supports `compilerOptions.paths` for imports

#### react && bun

- j/tsx files are natively supported in bun
  - will internally transpile then execute
- supports
  - prop punning (haha see docs)
  - SSR
- supports additional react features, read the docs
  - you can `console.log(<div>any react element</div>)`
  - supports prop pruning

#### other file types

- `.txt` can be imported as strings
- `json/toml` can be imported directly and will be converted to JSON objects
- additional plugins exist for other filetypes

## bun basics

### package.json

- bun executes package.json scripts in a subshell
  - the first found: bash > sh > zsh
- if package.json.script conflicts with a bun internal cmd, the internal cmd takes precedence
  - use `bun run` to explicitly call package.json scripts
- utilizes script pre/post lifecycle hooks

### bunfig.toml

- configure bun, similar to npmrc

### env files

- bun automatically loads .env files before running a file, script or executable
  - `.env.local`
  - NODE_ENV === production `.env.production` else `.env.development`
  - `.env`

### module resolution

- if node_modules exist, use node's module resolution algorithm
  - you can import from node_modules using a bare specifier
- else use buns module resolution
  - all packages auto installed into a global module cache
- import paths are case insensitive
- but permits both subpath exports & imports in package.json
  - as well as a `bun` condition for shipping typescript by directly importing and executing typescript source files

### workspaces

- monorepo support via package.json.workspaces
- local packages can be added via `bun add`
- circular dependencies resolved via symlinks
- dependencies across packages de-duped by hoisting to parent node_modules

### plugins

- extend buns runtime for supporting additional file types using plugins
  - based on a subset of esbuilds API
- plugins intercept imports & perform custom loading logic
  - e.g. reading files, trnapsiling, etc
- you load plugins via:
  - the `preload = [blah.ts]` in bunfig.toml configuration
  - or importing directly in your apps entrypoint file

### bun configuration

- configure bun via `package/bunfig.toml`

## cli

### bun

- `bun filex filey`
- bundle dependencies into `.bun` files

### dev

- `bun dev somefil`
- start a frontend dev server

### run

- `bun run SCRIPT/FILE`
- execute file / package.json scripts
- examples
  - `bun run env` see resolved env (in the following order)
    - .env.local
    - .env.production/development based on NODE_ENV
    - .env

### bunx

- `bunx WOOP`
- auto install and run a local/remote package

### install

- `bun install PKG`
- npm-compatible installer designed for nodejs compatibility
- used to install all deps (sans peerDependencies) in a pkg.json and create a bun.lockb

### add

- `bun add PKG` add a specific package
- flags
  - --development | -d
  - --optional
  - --global
- [add packages from git](https://bun.sh/docs/cli/install#git-dependencies)
  - you basically `bun add theGitCloneUrl`

### remove

- `bun remove PKG`
- remove a specific package

### link

- `bun link`
- registers the current local package as a linkable package which can be added to other local packages as dependencies

### pm

- set of utilies for working with buns package manager

### test

- `bun test`
- supports JS and typescript
- provides a jest-like api supporting bdd flavor
  - describe, expect, test, before/after/EachAll
- filtering tests with globs not yet supported
  - only file / directory names
- recursively searches the working dir for supported file extensions prefixed with test/spec
- create snapshots using `toMatchSnapshopt()` and `--update-snapshots`

### create

- `bun create --no-git TEMPLATE DEST`
  - no git: so it doesnt add the .git directory
  - template: community template, github repo or local path
- create a new bun app based on a template
- if adding to an existing monorepo, make sure to delete the .git dir thats added

### init

- `bun init`
- scaffold a new project by follo0wing the interactive prompts

### hot reloading

- --watch vs --hot
  - watch is intended for use with running tests, typescript, jsx and javascriptfiles
    - bun tracks all imported files and watches them for changes
  - hot is for executing code with bun, e.g. a server
    - all files are re-evalated, but all global state is persisted
- `bun --hot somefile`
- bun builds a registry of all impoirted source files (including node_module) and watches for changes
- all files are reevaluated, however global state is peristed
  - this idfferes from watchers like nodemon which restart the entire process
- for typescript & http servers, be sure to review the hot reloading docs (see link)

### building

- entrypoint: []
  - bun generates a new bundle for each file
  - unknown filetypes are treated as external files as copied to the outdir
    - the import is resolved to the output path of the outfile based on `naming` and `publicPath`
- outdir: ./build
  - dont include an outdir and the bundled files will be returned to you
- targets:
  - browser
  - bun: intended for bun runtime
  - node: intended for node
- format: only `esm` is supported
- splitting: `true` enable code splitting for multiple entrypoints
- plugins: [] see docs
- sourcemap:
  - none:
  - inline: generated and appended to the end of the file as a base64 payload
  - external: a `*.js.map` is generated for each bundle
- minify: true || {}
  - whitespace: true
  - identifiers: true
  - syntax: true
- external: [] import paths to consider external and not to include in the final bundle
  - e.g. `react`, `react-dom`
  - this should help get around the peerDependency issue
- naming: customize the names of generated bundles based on teh associated entrypoint
  - `[dir]/[name].[ext]` can also include `[hash]`
  - or with an object
    - entry: for the entrypoint
    - chunk: for chunks
    - asset: for unknown file types
- root: e.g. `.` else the first common ancestor of all entyrpoint files
  - determines the folder hierarchy of the output directory
- publicPath: prefix to append to any import paths in bundled code
  - asset imports: i.e. unrecognized file types. copies file into the outdir as is
  - external modules: i.e. anything in `external: []`
  - chunking: when `splitting` is enabled
- define: {} maps KEYS in code to the VALUES in bundled output

#### plugins

- buns plugin system is based on esbuild and many esbuild plugins should work

#### macros

- running javascript functions at bundle-time

## bun runtime api

- `Bun` is a global object you do not need to import
- the goal is to have parity with nodejs api
- but bun also adds additional Bun specific APIs for server-side tasks

### http

- i.e. Bun.serve: idiomatic http servers
  - [all options](https://bun.sh/docs/api/http#reference)
- see http docs
  - The Bun.serve server can handle roughly 2.5x more requests per second than Node.js on Linux.
- theres bunches of options, check nirvlife/dev.tsx
- Bun.serve vs export default with fetch handler
  - the latter is automatically hot reloadable via `bun run yorufile.tsx --hot` without restarting the process
  - use `--watch` to restart the process
- streaming files: return `new Response(Bun.file(./somefile))`
  - check the docs for stream slices for large files

### web sockets

- see docs

### tcp sockets

- see docs

### files

- see docs

### sqlite

- see docs

### filesystemrouter

- see docs

### spawn

- see docs

### transpiler

- see docs

### console

- see docs

### ffi

- see docs

### htmlrewriter

- see docs

### utils

- see docs

### dns

- see docs

### node-api
