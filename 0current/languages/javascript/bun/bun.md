# bun

- alternative JS/TS runtime based on safari's JavaScriptCore engine and developed in zig
- aims to be the #1 runtime outside of browsers focusing on edge computing and low-memory environments

## links

### bun docs

- [AAA docs](https://bun.sh/docs)
- [build](https://bun.sh/docs/cli/build)
- [bundle: esbuild migration](https://bun.sh/docs/bundler/migration)
- [bundle: loaders](https://bun.sh/docs/bundler/loaders)
- [configuration](https://bun.sh/docs/project/configuration)
- [console](https://bun.sh/docs/api/console)
- [create](https://bun.sh/docs/cli/create)
- [dns](https://bun.sh/docs/api/dns)
- [ffi](https://bun.sh/docs/api/ffi)
- [files](https://bun.sh/docs/api/file-io)
- [filesystemrouter](https://bun.sh/docs/api/file-system-router)
- [globals](https://bun.sh/docs/api/globals)
- [hot reloading](https://bun.sh/docs/runtime/hot)
- [htmlrewriter](https://bun.sh/docs/api/html-rewriter)
- [http server](https://bun.sh/docs/api/http)
- [module resolution: bun resolution](https://bun.sh/docs/runtime/modules#bun-style-resolution)
- [module resolution: path remapping](https://bun.sh/docs/runtime/modules#path-re-mapping)
- [module resolution](https://bun.sh/docs/runtime/modules)
- [node-api](https://bun.sh/docs/api/node-api)
- [nodejs](https://bun.sh/docs/ecosystem/nodejs)
- [plugins](https://bun.sh/docs/bundler/plugins)
- [plugins](https://bun.sh/docs/runtime/plugins)
- [react](https://bun.sh/docs/ecosystem/react)
- [spawn](https://bun.sh/docs/api/spawn)
- [sqlite](https://bun.sh/docs/api/sqlite)
- [tcp sockets](https://bun.sh/docs/api/tcp)
- [test: intro](https://bun.sh/docs/cli/test)
- [test: api](https://bun.sh/docs/test/writing)
- [transpiler](https://bun.sh/docs/api/transpiler)
- [typescript](https://bun.sh/docs/ecosystem/typescript)
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
- make sure to `bun add bun-types` and add it to tsconfig.json.compilerOptions.types
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

#### other file types

- `.txt` can be imported as strings
- .`json/toml` can be imported directly and will be converted to objects
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

- `bun --hot somefile`
- bun builds a registry of all impoirted source files (including node_module) and watches for changes
- all files are reevaluated, however global state is peristed
  - this idfferes from watchers like nodemon which restart the entire process
- for typescript & http servers, be sure to review the hot reloading docs (see link)

## bun api

### http

- i.e. Bun.serve: idiomatic http servers
- see http docs
  - The Bun.serve server can handle roughly 2.5x more requests per second than Node.js on Linux.

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
