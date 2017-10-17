# basics
  - By stating what dependencies a module needs, webpack can use this information to build a dependency graph. It then uses the graph to generate an optimized bundle where scripts will be executed in the correct order.



# terminology
  - entry point: the entry into a javascript bundle that will be the starting point for a dependency graph
    - multi-main entry: uses an array as the entry point: useful when you would like to inject multiple dependent fiels together and graph their dependencies into one chunk
      - useful for bundling files separately, e.g. in a multiple page application
  - output: tells webpack how to write the compiled files to disk, there can only be one output
  - publicpath: useful if its different than the output path, e.g. if you need to prepend a cdn url
  - dependency graph: every module now explicitly states its dependencies and we'll avoid bundling modules that aren't in use.
  - loaders: allow you to use any type of file with webpack;
    - the same benefits listed above for JavaScript (e.g. explicit dependencies) can be applied to everything used in building a website or web app.
  - code splitting: split your code into various bundles which can then be loaded on demand or in parallel. It can be used to achieve smaller bundles and control resource load prioritization which, if used correctly, can have a major impact on load time.
    - entry points: manually split code using entry configuration
    - prevent duplication: use the CommonChunksPlugin to dedupe and split chunks
    - dynamic imports: split code via inline function calls within modules
  - source maps: In order to make it easier to track down errors and warnings, JavaScript offers source maps, which maps your compiled code back to your original source code. If an error originates from b.js, the source map will tell you exactly that.

# top loaders
  - [dll plugin](https://webpack.js.org/plugins/dll-plugin/)
    - The DllPlugin and DllReferencePlugin provide means to split bundles in a way that can drastically improve build time performance.
  - css: postcss, sass, less, style=loader, css-loader
    - css-loader: process will occur for url('./my-image.png') within your CSS. The loader will recognize this is a local file, and replace the './my-image.png' path with the final path to the image in your output directory
  - images
    - image-webpack-loader
    - url-loader
    - file-loader: for images/svg/etc
      - when you import MyImage from './my-image.png', that image will be processed and added to your output directory and the MyImage variable will contain the final url of that image after processing
  - html loader: handles <img src="./my-image.png" /> in the same manner.
  - fonts: The file and url loaders will take any file you load through them and output it to your build directory. This means we can use them for any kind of file, including fonts
  - json: works automatically
  - csvs/tsvs:
    - csv-loader
  - xml: xml-loader

# examples
  ```js
    // specify fonts and images
    @font-face {
      font-family: 'MyFont';
      src:  url('./my-font.woff2') format('woff2'),
            url('./my-font.woff') format('woff');
      font-weight: 600;
      font-style: normal;
    }

      .hello {
        color: red;
      font-family: 'MyFont';
        background: url('./icon.png');
      }
  ```
