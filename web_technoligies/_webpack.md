# about
  - module bundler
  - vs grunt/gulp/rollup
    - no task runner needed
    - webpack is used by facebooks reactapp
    -
  - it:
    - turns all of your dependences into a module
      - css javascript html fonts images svgs etc

# loaders
  - per-file processing
    - babel: esnext -> js
    - css modules: postcss/sass/etc -> css3
    - url loader
    - file loader

# plugins
  - commonschunkplugin: seperate code into distinct bundles
  - lodash
  - prefetchplugin
  - service workers
  - dedupe plugin
  - babel
  - extracttextwebpackplugin

# config properties
    - entry: main method of your app
      - responsible for requiring all deps
      - webpack outputs a bundle base on the entry file
