
# loaders
  - per-file processing
    - babel: esnext -> js
    - css modules: postcss/sass/etc -> css3
    - url loader
    - file loader

# important concepts
  - manifest file: keeps track how all the input modules (src files) map to the output bundles
    - good place to start for manaing webpack's output


# config properties
  - entry: main method of your app
    - responsible for requiring all deps
    - webpack outputs a bundle base on the entry file
  - output: where to save your bundled files
  - module: specify how to handle & include any type of file for which there is a loader
    - webpack uses a regular expression to determine which files it should look for and serve to a specific loader.
    - rules: specify the regex test, and which modules to use
      - rules: [ {test: regex, use:[ 'loader', 'names']}]

# getting started tutorial catchall
## todo: now
  - [entry points](https://webpack.js.org/concepts/entry-points/)
  - [output](https://webpack.js.org/concepts/output/)
  - [configuration](https://webpack.js.org/concepts/configuration/)
  - [dependency graph](https://webpack.js.org/concepts/dependency-graph/)
  - [code splitting](https://webpack.js.org/guides/code-splitting/)
### todo: next
  - [cli](https://webpack.js.org/api/cli/)
  - [module-api](https://webpack.js.org/api/module-methods/)
  - [output](https://webpack.js.org/configuration/output/)
  -
## basic
  - need to specify a /src and /dist directory
    - src: where you write and edit your code
    - dist: the minimized and optimized code, i.e. the bundle

## plugins
### loaders
  - [style-loader](https://webpack.js.org/loaders/style-loader/)
    - add CSS to the DOM by injecting a style tag
  - [css-loader](https://webpack.js.org/loaders/css-loader/)
    - interprets @import and url() like import/require() and will resolve them
  - [file-loader](https://webpack.js.org/loaders/file-loader/)
    - resolves import/require() on a file into a url and emits the file into the output directory
      - allows you to import files, e.g. images directly into your js files
### html plugins
  - [html webpack plugin](https://webpack.js.org/plugins/html-webpack-plugin/)
    - simplifies creation of html files to serve your webpack bundles, especially for those tha tinclud a hash in the filename which changes every compilation
    - by default it generates its own index.html and places it in your dist directory
  - [html webpack template](https://github.com/jaketrent/html-webpack-template)
    - adds a default html template for use with the htmlwebpackplugin


### directory plugins / output
  - [clean webpack plugin](https://github.com/johnagan/clean-webpack-plugin)
    - cleans your build folders
  - [webpack manifest plugin](https://github.com/danethurber/webpack-manifest-plugin)
    - exports webpacks manifest as a json file for consumption