# nodejs notes: v16.6.1

# justjs notes: latest

  <https://github.com/noahehall/docs>
  <https://github.com/just-js/docs>
  <https://github.com/noahehall/examples>
  
bookmarks
  
  <https://nodejs.org/api/packages.html#packages_subpath_imports>

## TLDR

- nodejs and justjs
  
## links

- js
  - [ecma versions: man did they fk this up](https://en.wikipedia.org/wiki/ECMAScript)
  - [javascript spec](https://262.ecma-international.org/)
  - [javascript compatibility tables](https://github.com/kangax/compat-table)
- node
  - [commonjs modules](https://nodejs.org/api/modules.html)
  - [esm](https://nodejs.org/api/esm.html)
  - [module api](https://nodejs.org/api/module.html)
  - [packages](https://nodejs.org/api/packages.html)
  - [performance hooks](https://nodejs.org/api/perf_hooks.html)
  - [errors spec](https://nodejs.org/api/errors.html)
  - [list of node versions nodejs foundation supports](https://github.com/nodejs/Release)

## terms

- package: a folder tree described by a package.json
  - consists of the folder containing the package.json, and all subfolders until
    - another package.json is found
    - a folder named node_modules
- module system
  - esm
    - anyfile ending in `.mjs` regardless of `package.json.type=`
    - all `.js` files in a package with `package.json.type='module'`
    - Strings passed in as an argument to --eval, or piped to node via STDIN, with the flag `--input-type=module.`
  - commonjs
    - anyfile ending in `.cjs` regardless of `package.json.type=`
    - all `.js` files in a package with `package.json.type='commonjs'` or `type` not specified
    - Strings passed in as an argument to --eval or --print, or piped to node via STDIN, with the flag `--input-type=commonjs`

# node

## packages

- entry points
  - `package.json.main='somefile.js'`
    - legacy: supported in all version of node
    - use it as a fallback pointing to a `.cjs` file for envs that do not support `export`
      - it is NOT a fallback for commonjs, you still have to define commonjs in exports config
  - `package.json.exports={exportconfig}`
    - modern approach and an alternative to `main`
    - prevents importing any file not defined in exportconfig
    - enable conditional exports to define entry points per env (e.g. esm vs commonjs)

## examples

- node examples

  ```js
    // eval string as a module
    // the defualt behavior is --input-type=commonjs
      node --input-type=module --eval "import { sep } from 'path'; console.log(sep);"
      echo "import { sep } from 'path'; console.log(sep);" | node --input-type=module

    // example exports config
      "exports": {
        ".": "./lib/index.js", // subpath export, required to enable all the other exports
        "./importThis": "and/return/this.js" // syntax: e.g. import { someThingExported } from 'packageNAme/importThis'
        "./lib": "./lib/index.js",
        "./lib/*": "./lib/*.js", // export all files in lib folder
        "./lib/index": "./lib/index.js",
        "./lib/index.js": "./lib/index.js",
        "./feature": "./feature/index.js",
        "./feature/index.js": "./feature/index.js",
        "./package.json": "./package.json"
        "./internalfile": null, // disable importing this file
      }
    // disable encapsulation & tooling benefits by exporting every file in the package
    // forces consumers to provide the full specifier path (i.e. ./lib/index.js)
      "exports": {
        "./*": "./*"
      }

    // conditional exports
    // node endorsed: browser, development, production, node, import, require, default
    // however, you can define any condition you want
    // ^ node --conditions=development main.js
    // should always be specified in this order
      "main": "./main-require.cjs",
      "exports": {
        "import": "./main-module.js",
        "require": "./main-require.cjs"
        "node": "somefile.js" // for all node envs, commonjs/esm
        "default": "somefile.js" // the generic fallback
      },
    
    // mixing conditional and subpath exports
    // you have to put the conditional under a subpath or node errs
      "exports": {
        ".": "./main.js",
        "./feature": {
          "node": "./feature-node.js",
          "default": "./feature.js"
        }
      }
    
    // conditional export 
    // dual entry points for node, but a single entrypoint for browsers
      "main": "./main.js",
      "exports": {
        "node": { // these are only for node
          "import": "./feature-node.mjs",
          "require": "./feature-node.cjs"
        },
        "default": "./feature.mjs",
      }

  ```

# justjs

- supporting justjs/docs @ noahehall/docs
  - review existing examples and create documentation
    1. [validate existing examples to get up to speed](https://github.com/noahehall/examples)
    2. [update docs with your new knowledge & create PR to upstream](https://github.com/noahehall/docs)
  - create new examples and create documentation
    - repeat 1. and 2.
ssets/[name]-[hash]',
  bundle: true,
  define: envproto.syncEnv(pkgJson).processEnv,
  entryNames: isDev ? '[name]-[hash]' : '[name]',
  entryPoints: [appId],
  external: builtinModules,
  metafile: true,
  minify: false,
  outdir,
  outExtension: { '.js': '.cjs' },
  platform: 'node',
  plugins: [ esproto.popCopy(popCopyConfig), manifestPlugin(manifestPluginConfig) ],
  resolveExtensions: ['.mjs', '.js', '.cjs', '.json'],
  sourcemap: true,
  target: ['node14.17.0'], // LTS
  write: tru
