# about
## [modules](https://nodejs.org/api/modules.html)
  - importing
    - commonjs: used by node for module loading
    - AMD
  - exporting: add properties to the `exports` object
    ```javascript
      // you can export multiple things
        exports.blah = () => 'blah'

      // once you do this you cant export anything else
        module.exports = () => ({
          blah: () => 'blah',
        })
    ```
  - peer dependencies: if you install module X, be sure that it's alongside module Y" We call this relationship a peer dependency.
    - when to use
      + Both your project and some module you are using depend on the same other module.
      + The three modules have to talk to each other.

# build tools
  - main goals are to compile, bundle, and minify scripts and stylesheets,
  - build tools: grunt, gulp, broccoli, brunch, mimosa, jake, webpack, rollup,
  - criteria
      - [requirements for a buildtool](http://walkercoderanger.com/blog/2015/06/state-of-js-build-tools-2015/)
      - [more build tools](http://jster.net/category/build-utilities)
      [webpack analysis](http://survivejs.com/webpack/webpack-compared/)
    1. complexity in configuration
    2. speed to build
    2. Transcompiling JavaScript: CoffeeScript, Dart, Babel, Traceur etc.
    3. JavaScript Transforms: wrapping in modules or ng-annotate etc.
    4. Bundling/Concatenation: combining of scripts and styles into multiple files
    5. Minification: scripts, styles and html
    6. Source Maps: for both scripts and styles
    7. CSS Preprocessor: Less, Sass, Stylus etc.
    8. Style Transforms: Autoprefixer, PostCSS etc.
    9. Cache Busting: renaming files with a hash to prevent incorrect caching
    10. Image Optimization
    11. Compiling Templates: Mustache or HandlebarsJS, Underscore, EJS, Jade etc.
    12. Copying Assets: html, fav icon etc.
    13. Watching for Changes / hot reload
    14. Incremental Rebuild
    15. Clean Build: deleting all files at start or preferably cleaning up files as needed
    16. Injecting References: generating script and style tags that reference the bundled files
    17. Build Configurations: separate Dev, Test and Prod configuration, for example to not minify html in dev build
    18. Serve: running a development web server
    19. Running Unit Tests
    20. Running JavaScript and CSS Linters: jshint, csslint etc.
    21. Dependencies: handle dependencies on npm and Bower packages, Browserfy etc.
    22. eaisly syncs with deploy process
