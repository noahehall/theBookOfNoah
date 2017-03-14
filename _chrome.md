# chrome Links
  - [Net Intrnals](chrome://net-internals)
    - manage settings around https, proxy, dns, sockets, HSTS, etc.
  - [All internal pages](Chrome://About)
  - [chrome dev tools](http://discover-devtools.codeschool.com/chapters/1/challenges/1)

# dev tools
  - color codes
    1. blue: html
    2. js: orange
    3. css: green
    4. images: purple
  - light and dark colors on bars
    1. light: the time it took waiting for a response after the request was made
    2. dark: the time it took to load the resource after receiving the first byte
## best practices
- disable cache when doing any debugging
- disable all chrome extensions

## network panel
  - resource info: size, type, etc
  - timeline of network requests
  - at the bottom it shows various metrics

## timeline
  - shows you the amount of time each part of your application is taking up
  - colors:
    1. scripting/javascript: yellow
    2. rendering/style/layout: purple
    3. painting/composite: green
### rendering performance:
  - FPS: frames per second; the number of images that are drawn on screen per second
    1. html loading
    2. js execution
    3. styling
    4. painting to screen
# profile
  - CPU profiling: shows you how much CPU time each function in your JS takes
# memory leaks
  - when an application takes more and more memory to the point it starts slowing things down
  - healthy applications dont continuously grow in memory
  -
##  heap snapshots
  - shows you the current snapshot of the javascript objects in memory
  - steps
    1. start program and take snapshot
    2. do some action that you think is causing a memory leak
    3. take another snapshot
    4. switch the profile heap snapshot from summary to compare to see what new nodes are added and if they are being garbage collected efficiently
