# ESBUILD

## plugins

- super rudimentary notes to get through my esbuild popcopy plugin

- @see https://esbuild.github.io/plugins/

- namespace: every module is assigned a namespace
  - file: the defualt; i.e. files on the file syste
  - virtual moduels: e.g. a module provided via stdin, or a via an esbuild plugin
- filters: every callback provides a filter, so esbuild knows which module is associated with which plugin
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
