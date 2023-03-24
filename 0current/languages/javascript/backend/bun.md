# bun

- alternative JS runtime based on safari's JavaScriptCore engine developed in zig

## links

### bun docs

- [bun create](https://bun.sh/docs/cli/create)
- [bun test](https://bun.sh/docs/cli/test)
- [docs](https://bun.sh/docs)
- [module resolution](https://bun.sh/docs/runtime/modules)
- [module resolution: path remapping](https://bun.sh/docs/runtime/modules#path-re-mapping)
- [module resolution: bun resolution](https://bun.sh/docs/runtime/modules#bun-style-resolution)
- [nodejs](https://bun.sh/docs/ecosystem/nodejs)
- [plugins](https://bun.sh/docs/runtime/plugins)
- [react](https://bun.sh/docs/ecosystem/react)
- [typescript](https://bun.sh/docs/ecosystem/typescript)
- [hot reloading](https://bun.sh/docs/runtime/hot)
- [http server](https://bun.sh/docs/api/http)
- [web sockets](https://bun.sh/docs/api/websockets)
- [tcp sockets](https://bun.sh/docs/api/tcp)
- [files](https://bun.sh/docs/api/file-io)
- [sqlite](https://bun.sh/docs/api/sqlite)
- [filesystemrouter](https://bun.sh/docs/api/file-system-router)
- [globals](https://bun.sh/docs/api/globals)
- [spawn](https://bun.sh/docs/api/spawn)
- [transpiler](https://bun.sh/docs/api/transpiler)
- [console](https://bun.sh/docs/api/console)
- [ffi](https://bun.sh/docs/api/ffi)

### ecosystem

- [elysia: webframework optimized for bun](https://elysiajs.com/quick-start.html)
- [hono](https://github.com/honojs/hono)
- [bun templates](https://github.com/bun-community/create-templates)
-

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

- bun compiles typescript automically: use the same cmd to run js and ts files
  - transpilation occurs automatically and doesnt require any configuration
- consumes existing tsconfig.json
- make sure to `bun add bun-types` and add it to tsconfig.json.compilerOptions.types
- does not typecheck files, so `tsc --noEmit` is still required
  - however, typechecking (IMO) should be dev only
  - hence, typechecking shoud occur in IDEs and tests
- supports `compilerOptions.paths` for imports

#### react && bun

- j/tsx files are natively supported in bun
  - will internally transpile then execute
- supports
  - prop punning (haha see docs)
  - SSR

## bun basics

### package.json

- bun executes package.json scripts in a subshell
  - the first found: bash > sh > zsh
- if package.json.script conflicts with a bun internal cmd, the internal cmd takes precedence
  - use `bun run` to explicitly call package.json scripts
- utilizes script pre/post lifecycle hooks

### bun.toml

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
  - the `preload = [blah.ts]` in bun.toml configuration
  - or importing directly in your apps entrypoint file

### bun configuration

- configure bun via `package/bun.toml`

## bun cli

### run

- `bun run CMD`
- execute system / package.json scripts

### install

- `bun install PKG`
- npm-compatible installer designed for nodejs compatibility
- used to install all deps (sans peerDependencies) in a pkg.json and create a bun.lockb

### bun add

- `bun add PKG` add a specific package
- flags
  - --development | -d
  - --optional
  - --global

### bun remove

- `bun remove PKG`
- remove a specific package

### bunx

- `bunx WOOP`
- auto installa nd run a local/remote package

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

### create

- `bun create TEMPLATE DEST`
  - template: community template, github repo or local path
- create a new bun app based on a template
- if adding to an existing monorepo, make sure to delete the .git dir thats added

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
