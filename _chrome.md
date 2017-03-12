# chrome Links
  - [Net Intrnals](chrome://net-internals)
    - manage settings around https, proxy, dns, sockets, HSTS, etc.
  - [All internal pages](Chrome://About)

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

## network panel
  - resource info: size, type, etc
  - timeline of network requests
  - at the bottom it shows various metrics

## timeline
  - shows you the amount of time each part of your application is taking up
  - colors:
    1. yellow: scripting
    2. rendering: purple
    3. painting: green
### rendering performance:
  - FPS: frames per second; the number of images that are drawn on screen per second
    1. html loading
    2. js execution
    3. styling
    4. painting to screen
# profile
  - CPU profiling: shows you how much CPU time each function in your JS takes
# memory
