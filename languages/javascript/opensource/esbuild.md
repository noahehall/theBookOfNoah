# ESBUILD

```js
todo: put this somewhere
// easy to forget stuff
// bundling: takes an input file, inlines all statically imported deps (that arent externalized) and outputs a single file
// ^ asynchronous imports need to be marked as external, and made available in the runtime environment
// concateting: passing multiple input files will create multiple bundles
// external
// ^ require for the iife and cjs formats, import for the esm format
// ^ can use * as wildcard path to mark entire filepaths as external
// ^^ both before & after path resolution,
// ^^ import path in sourcecode, e.g. @foo/bar/* or /somedir/*
// ^^ absolute filepath of the resolved file, e.g. ./node_modules/*

```

## plugins

- super rudimentary notes to get through my esbuild popcopy plugin

- @see https://esbuild.github.io/plugins/

- namespace: every module is assigned a namespace
  - file: the defualt; i.e. files on the file syste
  - virtual moduels: e.g. a module provided via stdin, or a via an esbuild plugin
- filters: every callback provides a filter, so esbuild knows which module is associated with which plugin
  - all filters use Go's regex: look-ahead|behind|backreferences are not supported
  - ^ i.e. basic js regular expressions should work
- caching: esbuild is super fast, you want to cache your plugin results from previous builds so as not to slowdown esbuild

```js
const somePlugin = {
  name: "my plugin name",
  setup(build) {
    // build object has bunches of stuff
    // e.g. below to use esbuilds builtin resolve for retrieving contents
    // const flush = await build.resolve('./poop', { esbuildResolveOptions })

    // the config object passed to esbuild
    const esbuildConfig = build.initialOptions;

    build.someCallback({ callbakcOptions }, async () => {
      //your logic here
    });
  },
};
```

### callbacks

#### 1. onstart

- triggered when a new build starts, including the initial build

#### 2. onresolve

- runs on each import path in each module that esbuild builds
- customizes how esbuid does path resolution
  - intercept import paths and redirect them somewhere else
  - mark paths as external (and shouldnt be part of the resulting bundle)

#### 3. onload

- runs for each unique path/namespace pair htat has not been makred as external
- takes the path resolution result from `onresolve` and loads the module content into the bundle

#### 4. onend

- triggered when a build ends, including the initial
