# pkgs for nodejs

- bookmarks
  <https://docs.npmjs.com/cli/v7/using-npm/developers>
  <https://web.dev/serve-modern-code-to-modern-browsers/>
  
  <https://github.com/marcelmokos/eslint-config-with-prettier/blob/master/.eslintrc.yml>
  <https://eslint.org/docs/user-guide/getting-started>
  <https://github.com/gajus/eslint-plugin-flowtype>
  <https://eslint.org/docs/developer-guide/nodejs-api>
  <https://eslint.org/docs/user-guide/configuring/>

- babel
  - [babel-preset-env](https://babeljs.io/docs/en/babel-preset-env)
  - [babel-preset-react](https://babeljs.io/docs/en/babel-preset-react)
  - [babel-preset-flow](https://babeljs.io/docs/en/babel-preset-flow)
  - [babel parser](https://babeljs.io/docs/en/babel-parser)
  - [babel provided plugins](https://babeljs.io/docs/en/plugins-list)
  - [babel handbook](https://github.com/jamiebuilds/babel-handbook)
  - [babel assumptions](https://babeljs.io/docs/en/assumptions)
  - [config files](https://babeljs.io/docs/en/config-files)
  - [options](https://babeljs.io/docs/en/options)
  - [configuring babel and merge logic](https://babeljs.io/docs/en/configuration)
  - [presets](https://babeljs.io/docs/en/presets)
  - [babel env to plugin mapping](https://github.com/babel/babel/blob/main/packages/babel-compat-data/data/plugins.json)
  - [electron to chromium mapping](https://github.com/Kilian/electron-to-chromium)
- swc/spack
  - [why you should use swc > babel](https://blog.logrocket.com/why-you-should-use-swc/)
  - [swc core api](https://swc.rs/docs/usage-core/)
  - [swc landing screen](https://swc.rs/)
  - [configuring spack](https://swc.rs/docs/spack-basic/)
  - [swc for alpine linux](https://www.npmjs.com/package/@swc/core-linux-musl)
    - TODO: review this whenever we convert @nodeproto to cloudnative via docker
  - [swc - babel comparison](https://swc.rs/docs/comparison-babel/)
  - [swc register](https://github.com/swc-project/register)
  - [swc preset-env](https://swc.rs/docs/preset-env/)
  - [swc cli](https://swc.rs/docs/usage-swc-cli)
  - [configuring swc](https://swc.rs/docs/configuring-swc)
- terser
  - [compress options: for swc, webpack](https://terser.org/docs/api-reference.html#compress-options)
- eslint
  - [getting started guide](https://eslint.org/docs/user-guide/getting-started)
  - [really good eslint yaml example](https://github.com/marcelmokos/eslint-config-with-prettier/blob/master/.eslintrc.yml)
  - [the correct @babel/eslint-parser, never use babel-eslint](https://github.com/babel/babel/tree/main/eslint/babel-eslint-parser)
  - [configuration files](https://eslint.org/docs/user-guide/configuring/configuration-files)
  - [cli interface](https://eslint.org/docs/user-guide/command-line-interface)
  - [rules](https://eslint.org/docs/rules/)
  - [linting output formatters](https://eslint.org/docs/user-guide/formatters/)
  - [integrations](https://eslint.org/docs/user-guide/integrations)
  - [precommit hook](https://coderwall.com/p/zq8jlq/eslint-pre-commit-hook)
  - [recommit hook: only staged changes](https://gist.github.com/dahjelle/8ddedf0aebd488208a9a7c829f19b9e8)
  - [sharable configs](https://eslint.org/docs/developer-guide/shareable-configs)
  - [nodejs api mainly for plugin authors](https://eslint.org/docs/developer-guide/nodejs-api)
  - [eslint + flow getting started](https://github.com/amilajack/eslint-plugin-flowtype-errors/wiki/Getting-Started)
  - [eslint default.yml](https://github.com/eslint/eslint/blob/master/packages/eslint-config-eslint/default.yml)
  - [shareable configs](https://github.com/eslint/eslint/blob/master/docs/developer-guide/shareable-configs.md)

- pnpm
  - [pnpm workspaces & settings](https://pnpm.io/workspaces)
  - [pnpm packagejson hooks](https://pnpm.io/pnpmfile)
  - [pnpm add](https://pnpm.io/cli/add)

- npm
  - [package.json](https://docs.npmjs.com/files/package.json)
  - [developer guide](https://docs.npmjs.com/cli/v7/using-npm/developers)
  - [npm config](https://docs.npmjs.com/cli/v6/using-npm/config)

- ultra runner
  - [github](https://github.com/folke/ultra-runner)

# babel

## config

- config files
  - types
    - super important
      - impacts which configs are located for which files
      - especially considering extensions, auto loadig configs, monorepos, and packages (folders with package.jsons)
    - project wide config
      - `babel.config.[json|js|cjs|mjs]`
      - can be overriden via `configFile`
      - are separated from the physical location of the config file
        - ideal for configuration that must apply broadly, e.g. plugins/presets that need to apply to
          - node_modules
          - symlinked packages
          - subpackages/modules
    - file-relative config
      - .babelrc[.json|.js|.cjs|.mjs]`
        - `.babelrc` === `json5`
      - `package.json.babel`
      - babel finds these by searching up the directory structure starting from the file being compiled
        - file being compiled must be inside of `babelrcRoots`
        - searching stops once a directory containing a `package.json` is found
      - enables creation of independent configurations for subsections of a package
      - merged on top of project-wide config values
        - ideal for overrides
  - config extension distinctions
    - `json`
      - parsed as JSON5
      - recommended wherever possible
    - `js`
      - recommended for complex configuration that is conditional/computed at build time

- config options
  - via `@abel/cli` requires kebab-case the names
    - `npx babel --root-mode upward file.js`
      - equivalent of passing the rootMode config option
  - programmatic options
    - for tools that:
      - wrap babel
      - calling `babel.transform` directly
    - not for integrations, e.g. `babel-loader` or `@babel/register`
    - `cwd: process.cwd()`
    - `caller: {name, ...}` @see babel options link
    - `filename: string`
    - `filenameRelative: string`
    - `code: true`
    - `ast: true`
    - `cloneInputAst: true`
    - `root: opts.cwd`
    - `rootMode: root`
    - `envName: process.env.BABEL_ENV || process.env.NODE_ENV || "development"`
    - `configFile: path.resolve(opts.root, "babel.config.json")`,
      - if it exists, `false` otherwise
      - This option does not affect loading of .babelrc.json files, so while it may be tempting to do configFile: "./foo/.babelrc.json", it is not recommended. If the given .babelrc.json is loaded via the standard file-relative logic, you'll end up loading the same config file twice, merging it with itself.
  - base options: `programmatic/config.OPTION`
    - generally anywhere options are overriden by matching options specified programmatically
    - `assumptions: {}`
      - set of assumptions babel can make in order to produce smaller output
    - `sourceType: module`
      - doesnt affect files ending in `.mjs` as they are hardcoded as modules
      - Type: "script" | "module" | "unambiguous"
        - script: i.e. commonjs
        - module: i.e. esm
        - unambiguous: if `import/export` is in file, module, else, commonjs
    - `babelrc: true`
      - true if filename option has been specified
      - `.babelrc` files are only loaded if the current "filename" is inside of a package that matches one of the "babelrcRoots" packages.
    - `babelrcRoots: opts.root`
      - Type: boolean | MatchPattern | Array<MatchPattern>
      - provide a list of other packages that should be considered "root" packages when considering whether to load .babelrc.json files
    - `targets: {}`
      - Type: string | Array<string> | { [string]: string }
      - e.g. `chrome, opera, edge, firefox, safari, ie, ios, android, node, electron.`
      - recommended to always set to reduce output code size
        - else babel will assume you are targeting the oldest browsers possible
      - `targets.esmodules: true`
        - targeting browsers supporting esmodules
        - if true: babel will ignore the browsers field
        - use this approach in combination with `script type=module` to conditionally serve smaller scripts to users
    - `browserslistConfigFile: true`
      - type: string|boolean
      - whether browserslist config sources are used
      - useful for projects that use a browserslist config for files that wont be compiled wih babel
    - `browserslistEnv: undefined`
      - the browserslist environment to use
    - `extends: string`
      - not allowed in presets
        - but permitted in plugins?
      - the current config will be merged on top of the extended files configuration
    - `env: {}`
      - Type: { [envKey: string]: Options }
      - cant be nested inside of another `env` block
      - these options are only enabled if the `envKey` matches the `envName` option
    - `overrides: []`
      - may not be nested inside of another `overrides` or `env` block
      - options that will be merged into the current configuration one at a time
      - best used alongside `test|include|exclude` options
    - conditions for which the current configuration object is ignored/activated
      - none affect the programmatic/config-loading options in earlier sections
      - `test: filepath`
        - Type: MatchPattern | Array<MatchPattern> (MatchPattern)
        - if filepath|every array item matches
          - all sibling options are enabled
      - `include: filepath`
        - @see `test` synonym
      - `exclude: filepath`
        - Type: MatchPattern | Array<MatchPattern> (MatchPattern)
        - if any patterns match:
          - all sibling options are disabled
      - `ignore: []`
        - Type: Array<MatchPattern> (MatchPattern)
        - not permitted in `presets`
        - disables all processing of a file
          - consider `exclude` as a less aggressive option
      - `only: []`
        - Type: Array<MatchPattern> (MatchPattern)
        - not permitted inside pres`ets
        - if all patterns match: babel will only process matching files and ignore all others
          - consider `test` as a less aggressive alternative
    - sourcemaps
      - `inpurtSourceMap: true`
        - `true` load sourcemap from the file itself
        - `sourceMap{}` use this as the sourcemap object
      - `sourceMaps: false`
        - Type: boolean | "inline" | "both"
          - true: generate srcmap and include it in result object
          - inline: generate sourcemap and append as dataurl to end of code (but not in the result object)
          - both: inline + true
      - `sourceMap: false`
        - synonym for `sourceMaps`
          - use `sourceMaps` instead
      -
    - plugin and preset options
      - `plugins: []`
        - run
          - before plugins
          - fist item applied first
        - types
          - transform: plugins that transform your code
        - syntax: plugins enable babel to
          - parse specific tynax
          - preserve source code for analysis/codemodes
        - babel-parser: name of plugin provided by babel-parser
      - `presets: []`
        - last item is applied first
        - are groups of plugins

## babel examples

  ```js
    {
      babelrcRoots: [
        // Keep the root as a root
        ".",
        // Also consider monorepo packages "root" and load their .babelrc.json files.
        "./packages/*",
      ],
      // as string with multiple options
      "targets": "> 0.25%, not dead"
      // as string using browserslist defaults
      "targets": "defaults"
      // support the oldest browsers possible
      "targets": {},
      // as object: specifying the MINIMUM version, not the only version
      "targets": {
        "chrome": "58",
        "ie": "11"
      }
      overrides: [{
        // enable th compact option for this single file
        // tells babel not to try to print the file nicely
        test: "./vendor/large.min.js",
        compact: true,
      }],
      // disable all processing of files within lib
      ignore: ["./lib"],
      // only process src files and ignore all others
      only: ["./src"],
      // set the name for a plugin/preset
      // enables you to specify the item more than once without throwing error
      plugins: [
        ["./plug", { one: true }, "first-instance-name"],
        ["./plug", { two: true }, "second-instance-name"],
      ],
      // copypasta configuration
      presets: [
        [
          // @see babel mappings link
          // uses browserslist unless targets/inoreBrowserslistConfig are specified
          "@babel/preset-env", {

          }
        ]
      ]
    }

  ```

# eslint

- tool for identifying and reporting on patterns found in js code
- configuration files
  - extensions (in order of precedence)
    - .eslintrc.js
    - .esliintrc.cjs - required inside an esm module (doesnt support .mjs)
    - .eslintrc.yaml -> .yml
    - .eslintrc.json - permit json comments
    - package.json.eslint
  
  - config loading strategy
    - eslint automatically loads and merges all config files
    - will take the first file found in the current dir of the current file being linted
    - then load & merge each parent config file until it reaches one of
      - root dir of filesystem
      - config file with `root: true`
        - a priori: these configs are applied to all files in all subdirs
          - but child eslint configs will override parent ones
    - assumptions, parserOpts and generatorOpts, objects are merged, rather than replaced.
    - plugins and presets, they are replaced based on the identity of the plugin/preset object/function itself combined with the name of the entry.
      - thus ensure you are using the same name across files
        - `["pluginname", "options"]`
  
  - complete configuration hierarchy (in order of precedence)
    - `/* eslint-disable */` && `/* eslint-enable */`
    - `/* global */`
    - `/* eslint */`
    - `/* eslint-env */`
    - --global
    - --rule
    - --env
    - -c && --config
    - then the config loading stratey
  
  - extending config files
    - behavior
      - inherits all the traits of another config file
      - can override any trait
    - types
      - base: the config being extended from
      - derived: the consumer(s) in case of multiple extend trains
      - result: the result of overlaying derived configs ontop of base configs
        - `{ ...base, ...derivedX }`
      - sharable
        - any package that exports a configuration object
        - e.g. in extends property: `eslint-config-standard` || `standard` (identical)
        - wtf?
          - sharable configs must start with `eslint-config-POOP`
          - and the extends name must include `@SCOPE/eslint-config-POOP` for scoped modules (like ours)
          - unless you use the full path e.g. `extends: './node_modules/@nodeproto/configproto/eslint/base.eslintrc.yml'`
      - plugins
        - any package that adds extensions to eslint
          - adding new rules
          - exporting a sharable ocnfig
          - etc
        - e.g. in plugins property: `eslint-plugin-react` || `react` (identical)
        - e.g. in extends `plugin:react/recommended`
  
  - overrides
    - derived configs overriding base configs
      - enabling rules
      - changing severity without changing options
        - keeps options but changes seveiryt
      - changing options but keeping severity
        - i.e. you cant change the options without specifying the severity,
        - but once you override options in a derived config it replaces it
    - overrides[] property
      - overide objects are applied in index order: 0 < 1 < 2
        - can contain any config property except `root` and `ignorePatterns
      - dont use `--ext` cli arg if you want to sanely use overrides property
      - overrides.files[]: is relative from derived.config > base config
        - have higher precedeance than other override types

## examples

- eslint examples

  ```yaml
    # cli flags
      -c someconfig.json
      --no-eslintrc # disable loading of any additional .eslintrc files
    # options
      root: true # always place this in the root of the project

      # base config on top
      # paths are relative to the config file where they appear
      extends:
       - path/to/.eslintrc.yml
       - eslint:recommended
       - some-sharable-config-name
       - eslint-config-airbnb
       - airbnb # same as above

      # plugins use settingsto share data across all of its rules
      settings:

      env:

      rules:
        semi: ['error', 'always']
        quotes: ['error', 'double']


  ```

# ultra runner

## about

- hijacks any npm run, yarn, npx calls, interprets shell operators
  - including pre & post scripts (maybe add jsync back to pre script?)
- detects packages automatically, or recrusively searches for them
- keeps track of file changes, and only rebuilds when needed
- builds packages concurrently by default
- workspace deps automaticlaly resolved and used for parallel builds
- execute anything recursively
- optional configuration
- node process monitoring (how did rush miss this?)
- doesnt err on missing scripts

```bash
  ultra -r --filter "@scope/app" pwd

```

# nvm

```bash
  nvm install 16.5
  nvm alias default 16.5

```

# pnpm

- todo: copypasta from some other file

  ```bash
      # see global installed pkgs
        npm ls --global

      # installs the local @nodeproto/wtf packahr
        pnpm add @nodeproto/wtf
      # todo convert to bash comments
      # /**
      #  * @see https://pnpm.io/pnpm-cli
      #  * @see https://pnpm.io/cli/exec
      #  * @see https://pnpm.io/filtering
      #  * @see https://docs.npmjs.com/cli/v7/using-npm/config
      #  * @see https://medium.com/pnpm/pnpm-vs-lerna-filtering-in-a-multi-package-repository-1f68bc644d6a

      #   npm install -g pnpm // install pnpm
      #   pnpm add -g pnpm // upgrade
      #   pnpm add NAME // install a pkg
      #   pnpm CMD // run a cmd (use ultra instead)
      #   pnpm exec CMD // specifically run a node_modules/.bin
      #   pnpm i // install all pkgs from package.json
      #   pnpm config ls -l // see config values
      #   // TODO
      #     - the filtering link
      #     - pnpm uses npm config + all pnpm options can be set, see npm/config link


      #   // TLDR
      #     // general options
      #       -r // exec CMD in each pkg
      #       --parallel // ignore concurrency & topological sorting, and immediatley invoke cmd in each pkg
      #     // install
      #       --offline // grab pkgs from store
      #       --prefer-offline // use store if available, else fetch
      #       --frozen-lockfile // dont update pnpm-lock.yaml
      #       --lockfile-only // only pnpm-lock.yaml is updated
      #     // add specific pkgs
      #       pnpm add ./someDir
      #       pnpm add ./someZipTypeFile.(tar|gz|tgz)
      #       pnpm add react@">=0.1.0 <0.2.0"
      #       pnpm add some_git_remote_url
      #     // install/add related cli options
      #       -D // devDependencies
      #       -O // optionalDependencies
      #       --save-peer
      #       -W // save to workspace root
      #       --global
      #       --workspace // only add the dep if its found in the workspace
      #       -E // save-exact, always do this

      #   // examples
      #     - prune node_modules installations for all packages
      #     pnpm -r exec -- rm -rf node_modules
      #     - view package information for all packages
      #     pnpm -r exec -- pnpm view $PNPM_PACKAGE_NAME
      #     - fetch & run a pkg binary without installing it (i.e. np)
      #     pnpx PKG ...


      #  */
  ```

# yarn

- Starting a new project
    `yarn init`
- Adding a dependency

    ```
      yarn add [package]
      yarn add [package]@[version]
      yarn add [package]@[tag]
    ```

- Adding a dependency to different categories of dependencies

    ```
      yarn add [package] --dev
      yarn add [package] --peer
      yarn add [package] --optional
      Upgrading a dependency
    ```

- upgrading a dependency

    ```
      yarn upgrade [package]
      yarn upgrade [package]@[version]
      yarn upgrade [package]@[tag]
    ```

- Removing a dependency
    `yarn remove [package]``
- Installing all the dependencies of project

    ```
      yarn
      yarn install
    ```
