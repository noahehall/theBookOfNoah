# bookmark - https://webpack.js.org/guides/production

# other things to know
  - [source maps](https://blog.teamtreehouse.com/introduction-source-maps)


# loaders
  - per-file processing
    - babel: esnext -> js
    - css modules: postcss/sass/etc -> css3
    - url loader
    - file loader

# important concepts
  - manifest file: keeps track how all the input modules (src files) map to the output bundles
    - good place to start for manaing webpack's output
  - source maps: (via config.devtool) maps compiled code back to the original source code; if an error orginates in bundle.js, and can be mapped back to someSourcefile.js, it will tell you that
  - tree shaking: dead-code elimination
  - development env:
    - strong source mapping
    - local server for live reloading / hot module replacement
  - production env:
    - minified bundles
    - lighter weight source maps
    - optimized assets to improve lload time

## watching files for changes
  - webpack watch mode:
    - instruct webpack to watch all files within your dependency graph for changes
    - if any of these files i updated, the code will be recompiled so you dont have to run the build manually
      - ```webpack --watch --config ....etc```
  - webpack-dev-server:
    - provides you with a simple web server  to be and the ability to use live reloading
  - webpack-dev-middleware: allows for more custom compilation (via a custom server) than webpack-dev-server (webpacks server)
    - requires webpack hot middleware package for HMR

### HMR: hot module replacement
  -[HMR](https://webpack.js.org/guides/hot-module-replacement/)
  - allows all kinds of modules to be updated at runtime without the need for a full refresh

# config properties
  - mode: activate different types of built-in optimizations
  - context: the base directory for resolving entry poitns and loaders from configuration
  - entry: main method of your app
    - responsible for requiring all deps
    - webpack outputs a bundle base on the entry file
  - output: where to save your bundled files
  - devtool: the type of sourcemap algorithm to use
  - module: specify how to handle & include any type of file for which there is a loader
    - webpack uses a regular expression to determine which files it should look for and serve to a specific loader.
    - rules: specify the regex test, and which modules to use
      - rules: [ {test: regex, use:[ 'loader', 'names']}]
  -


# todo: now
  - [entry points](https://webpack.js.org/concepts/entry-points/)
  - [output](https://webpack.js.org/concepts/output/)
  - [configuration](https://webpack.js.org/concepts/configuration/)
  - [dependency graph](https://webpack.js.org/concepts/dependency-graph/)
  - [code splitting](https://webpack.js.org/guides/code-splitting/)
  - [mode](https://webpack.js.org/concepts/mode/#mode-development)
  - [devtool](https://webpack.js.org/configuration/devtool/)
  - [building for production](https://webpack.js.org/guides/production/)
## todo: next
  - [cli](https://webpack.js.org/api/cli/)
  - [module-api](https://webpack.js.org/api/module-methods/)
  - [output](https://webpack.js.org/configuration/output/)
  - [entry and context](https://webpack.js.org/configuration/entry-context/)
  - [hot module replace](https://webpack.js.org/guides/hot-module-replacement/)


# basic
  - need to specify a /src and /dist directory
    - src: where you write and edit your code
    - dist: the minimized and optimized code, i.e. the bundle

# plugins
## loaders
  - Note that the order of adding these loaders is important. First, we need to resolve the CSS files before adding them to the DOM with the style-loader. By default, webpack uses the loaders from the right (last element in the array) to the left (first element in the array).
  - [style-loader](https://webpack.js.org/loaders/style-loader/)
    - add CSS to the DOM by injecting a style tag
  - [css-loader](https://webpack.js.org/loaders/css-loader/)
    - interprets @import and url() like import/require() and will resolve them
  - [file-loader](https://webpack.js.org/loaders/file-loader/)
    - resolves import/require() on a file into a url and emits the file into the output directory
      - allows you to import files, e.g. images directly into your js files
## html plugins
  - [html webpack plugin](https://webpack.js.org/plugins/html-webpack-plugin/)
    - simplifies creation of html files to serve your webpack bundles, especially for those tha tinclud a hash in the filename which changes every compilation
    - by default it generates its own index.html and places it in your dist directory
  - [html webpack template](https://github.com/jaketrent/html-webpack-template)
    - adds a default html template for use with the htmlwebpackplugin
  - [html-loader](https://github.com/webpack-contrib/html-loader)
    - exports HTML as a string


## directory plugins / output
  - [clean webpack plugin](https://github.com/johnagan/clean-webpack-plugin)
    - cleans your build folders
  - [webpack manifest plugin](https://github.com/danethurber/webpack-manifest-plugin)
    - exports webpacks manifest as a json file for consumption


# complimentary packages
## development
  - [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
    - serves a webpack app: updates the browser on changes
      - webpack-dev-server doesn't write any output files after compiling. Instead, it keeps bundle files in memory and serves them as if they were real files mounted at the server's root path
      -  If your page expects to find the bundle files in different path, you can change this with the publicPath option in the dev server's configuration.
    - setup in config.devServer
    - [additional docs](https://webpack.js.org/configuration/dev-server/#devserver-publicpath-)
  - [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware)
    - used by webpack-dev-server internally
    - wrapper that emits files processed by webpack to a server s
    - allows for more custom setup (e.g. serve files via an express server)
  - [webpack hot middleware](https://github.com/webpack-contrib/webpack-hot-middleware)
    - webpack hot reloading you can attach to your own server