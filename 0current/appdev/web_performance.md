# web performance

- web performance in action
  - jeremy L wagner
  - reading: done
  - copying: top of 223
    - boosting performance with service works
    - FYI theres an entire file on service workes somewhere in this repo
- todo
  - consolidate the old perf into this file
  - figure out http3

## links

- [wikipedia http3](https://en.wikipedia.org/wikiclear/HTTP/3)
- [wikipedia http2](https://en.wikipedia.org/wiki/HTTP/2)
- [web technology surveys](https://w3techs.com/)
- tools
  - [google mobile friendly tester](https://search.google.com/test/mobile-friendly)
  - [image optimizatin: tinypng](https://tinypng.com)
  - [analysis: pagespeed insights](https://pagespeed.web.dev/)
  - [analysis: webhints](https://webhint.io/)
  - [analysis: firefox profiler](https://profiler.firefox.com/docs/#/)
  - [loadCss](https://github.com/filamentgroup/loadCSS)
  - [unocde range charts](https://unicode.org/charts/)
  - [fonttools: manipulate fonts with python](https://github.com/fonttools/fonttools)
  - [mdn font loading API](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Font_Loading_API)
  - [fontface observer tool](https://fontfaceobserver.com/)

## basics

### long list of goals

- improving the user experience
- major factor contributing to ranking in search results
- speeding up the delivery of content
- decreasing load times across all devices

### gotchas

- response websites have different performance characteristics based on the screen/agent type/capabilities, be sure to test those relavant to your rules & user profile
- link tags that load css blocks th rendering of the page until the stylesheet loads
  - style tags dont
- style tags cut down on http requests, but limits your ability to cache css and may verywell break the caching of the html file

### terms

- unicode: standard for normalizing the way characters for all languages are represented
  - each language gets a range out of the unicode map
- web performance: refers primarily to the speed at which a website loads, and [IMO] reacts to user interactions once loaded
- Above The Fold: ATF: content the user sees without scrolling
- frame: the amount of work the browser does in one frame per second of display time
  - work: loading, scripting, painting and rendering, etc
- framerate: # of frames a browser renders in a second; the optimal rate for a typical display is 60 FPS (frames per second)
- raster images: bitmap images; jpg, png and gif; generally used for logos, icons, phtos, etc
- lossy images: use compression algorithms that discard data from an uncompressed image source;
  - too much compression is noticable
  - jpg, ...
- lossless images: use compression algorithms that dont discard data from the original image source
  - 8-bit (256 color images): e.g. gif and 8bit png; only support 256 colors and 1 bit transparency
    - great for icons/pixel art
  - full color images: fully color png and lossless webp; support like 16 million colors + transparency
    - great for line art, iconography and photography
- SVG: scalable vector graphics can be scaled to any size because their composed of mathematically calculated shapes and sizes
  - browser rendering process: parsed > properties evaluated > mapped to the pixel-based display through rasterization; repeat on resize
  - generally any image not a photograph thats comprised of solid colors and geometric shapes should be an svg, e.g. logos, iconogrpahy, line art

### browser rendering process

- high level
  - parse:
    - render blocking: when browsers find any links/scripts/etc to external resources are found, the browser stops doing whatever its doing to fetch them
    - parse HTML to DOM
      - a hierarchical representation of the HTML documents structure
    - parse CSS to CSSOM
      - presents the way CSS rules are applied to the document
  - layout elements
    - CSSOM + DOM are combined to create a render tree
    - start the layout process: CSS rules are applied and elements are laid out on the page
  - paint
    - cosmetic aspects of the page are applied from CSS and media
    - then the output is converted into pixels and displayed on screen
- re-render triggers: occurs when the user interacts with the page that forces a re-render

## protocols

### HTTP/1

```sh
# basic anatomy of a request
GET /index.html HTTP/1.1 # VERB RESOURCE PROTOCOL
Host: example.com # long list of headers
Poop: flush
```

### HTTP/2

- solves many issues inherint to http1
  - head of line blocking
- characteristics
  - falls back to http/1

### HTTP/3

## performance analysis tools

### javascript console timing logs

- console.timeStamp
  - sends arbitrary events to the browsers timeline, e.g. the start and stop of some javascript fn
  - useful for marking the start / stop of something to pintpoint what part of some logical process is causing performance issues
- benchmarking via console.time() and console.timeEnd()
  - enables you to compare implementation approaches
  - compare the execution time between pieces of code

```js
/// console.timeStamp
const someFn = () => {
  console.timeStamp("someFn start");
  // do bunches of things
  console.timeStamp("someFn end");
};

/// benchmarking with time and timeEnd
// the elapsed time between time & timeEnd will be logged in dev tools
const someFn = () => {
  const eventName = "someFn";
  console.time(eventName);
  // do bunches of things
  console.timeEnd(eventName);
};
```

### browsers

- safari: i'm not a fan
  - i know thats a bad way to think, but chromium + firefox is a good enough proxy for all browsers
    - with that being said, if your users are 80% of safari, use that
- dev tools > network tab
  - simulating a network connection & latency via throttling
  - disabling cache: to ensure you experience the site as a first time user would
  - waterfall chart: record of asset-load start & asset-load end times, as well as breakdown of each asset
  - general page statistics, e.g. page weight
- devtools > performance (timeline tool)
  - profile: recording the requests & and viewing the metrics related to loading a website and all the assets therein
    - loading: network-related events, e.g. http requests; includes activities like parsing of HTML, CSS and image decoding
    - scripting: javascript-related events range from DOM-specific activity, garbage collection, site-specific javascript, etc
    - rendering: all events related to page rendering; applying css, re-rendering events (e.g. triggered by javascript)
    - painting: events related to drawing the layout to the screen, e.g. layer compositing and resterizations
    - system
    - idle
  - flame chart: represents the events that occur in a callstack
    - call stack: hierarchical representation of recorded page activity
- devtools > network tab > capture screenshots: useful way to determine when FOIT occurs, and the exact momemt when custom fonts are donwloaded especially on localhost
- dns caching
  - in chrome: chrome://network-internals#dns
- simulating & monitoring devices
  - simulate a specific UA/viewport
    - device presets: e.g. different types of phones/tables/etc
    - width & height
    - scale
    - device pixel ratio
  - debugging websites remotely on android/ios devices
    - just google how people are doing this, theres always an easier way to do it vs me just copying it from a book
- custom network throttling profiles
  - simulate certain internet connections, e.g. 3G/4G
  - throughput: the connection speed in kilobytes
  - latency: the connection latency in milliseconds

### google PageSpeed Insights

- analyzes a website across device types & sizes and gives tips on how ot improve performance & user experience

### google anaytics

- provides stats on site visitors and other metrics
- can be used to retrieve PageSpeed insights data for more than one page
  - gives you a broader perspective of your entire applications performance

## metrics

- metric without a section
  - page views: number of hits a page receives
  - Avg Page Load Time: the average seconds some page takes to load
  - PageSpeed Score: a range from 1 to 100 (higher better)

### Connection setup

- browser request queuing
- DNS lookup,
- SSL handshake
- etc

### Time to First Byte: TTFB

- the amount of time between the moment a request and the arrival of the first byte
- factors
  - network conditions like distance between server & user, server performance, application backend issues

### Latency

- the amount of time spent waiting for something,
  - a request to reach the server
  - the server to collect and send its response
  - the browser to download the response
- includes TTFB + connection setup tasks

### load time

- the time between a request and the FULL download of the response
  - i.e. TTFB + time it takes to download the full response
- factors
  - http/1 head of line blocking

## performance issues

- FOIT: flash of invisible text; similar to FOUC; only instead your dealing with text becoming visible before the font files are donwloaded; thus being shown in the browsers default fonts, and then rerendering to use the fonts once there fetched
- FOUC: flash of unstyled content: occurs when css is loaded after content and the browser is forced to repaint
- jank: the effect of interactions and animations that stutter/fail to render smoothly
  - generally always caused by suboptimal programming techniques
    - when too much CPU time is consumed during a single frame
    - scripts that fire too often
    - loading events that take too long
    - i.e. any activity that causes inefiicient/superfluous rendering and painting operations
- low frame rate
  - chromes timeline tool represents time in seconds:
    - thus the optimal framerate (60 FPS) is 16.66 ms per frame
    - but the developer budget is 10 ms per frame to account for browser overhead
    - you can graphical see jank in the timeline tool,
      - janky frames are denoted with red markes in the ativity overview,
      - and highlighted red and clickable in the flame chart
- head of line blocking: the browser limits the number of requests it will make at a single time per batch
  - generally 6 requests per batch, and batch 1 must finish before batch 2 starts
- render blocking: any activity that keeps the browser from painting content to the screen ona pages initial load
  - render blocking due to CSS is [sometimes] acceptable; else you risk FOUC
  - render blocking due to script tags is less acceptable, but stil required in certain contexts
  - filter the event log by paint events, and look at the first Paint activities start time, thats the delay before painting occurs

## performance tactics

- todo: tactics without a section
  - reduce the amount of data transffered
  - reducing the # of requests (for http1, anti pattern in http2)

### in general

- always use progressive enhancement implementation patterns
- always use noscript for users with JS disabled

### image techniques

#### format use cases

| format         | colors | type   | compression  | best fit                                                                                                                                                   |
| -------------- | ------ | ------ | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PNG            | FULL   | RASTER | LOSSLESS     | - content requiring full range of colors<br>- some quality loss is acceptable;<br>- content requires full trnasparency<br>- doesnt compress as well as JPG |
| PNG-8BIT       | 256    | RASTER | LOSSLESS     | - content not requiring full range colors<br>- only requires single-bit transparency<br>- icons/pixel art                                                  |
| GIF            | 256    | RASTER | LOSSLESS     | - same as png 8-bit use case<br>- lower compression performance<br>- supports animation                                                                    |
| JPEG           | FULL   | RASTER | LOSSY        | - content requiring full range of colors<br>- quality loss is acceptable<br>- no transparency<br>- good for photographs                                    |
| SVG            | FULL   | VECTOR | UNCOMPRESSED | - content not requiring full range of colors<br>- content requiring HIGH quality when scaled<br>- good for non photographic content                        |
| WEBP (LOSSY)   | FULL   | RASTER | LOSSY        | - same as jpeg<br>- supports the full range of colors<br>- better compression performance                                                                  |
| WEBP (LOSSLESS | FULL   | RASTER | LOSSLESS     | - same as full-color png<br>- better compression performance                                                                                               |

#### delivery

- see the languages/htmlcss file in this repository
  - generally all require some mix of:
    - media queries (resolution, screen with, device-pixel-ration)
    - picture element
    - srcsets + sizes,
    - responsive images,
    - background image + background-size
    - etc: google for the latest tricks if none of the above work (e.g container queries is about to drop)
- resolution problem: picking the right same image based on screen dimensions/qualities like high DPI
- art direction problem:: when resolution problem cant be resolved with simple scaling, but requires cropping/content changes
- image sprites: combining multiple images (e.g. a bunch of logos) into one, then using css background-position to display only a portion
  - anti pattern in http2
- compression
  - generally raster images can handle some degree of compression
- minification
  - generally SVGs can handle some degree of minification
- encoding
  - generally convert raster image formats into googles WebP if your users are generally on browser verisons that support it
    - lossy raster formats > lossy webp
    - lossless raster formats > lossless webp
- lazy load images
  - generally an image shouldnt be fetched until its some % from the viewport


#### image optimization

- in general
  - maintaining multiple sets of images for different screen sizes to ship right sized image based on device dimensions
    - rescaling oversized images to fit small sizes takes time
    - rescaling undersized images to fit large devices takes time & distorts the image
  - depending on the device capabilities, e.g. High DPI Screens (like retina on apple) need large dimension images
- always compare the pre- and post- image as too much compression can reduce the quality

### font techniques

- see the csshtml file in this repo for more in depth discussion
- font types: generally you can find tools to convert from older formats to newer formats
  - standard: wide support but uncompressed; compress server side before shipping to clients
    - TrueType: .tff
    - Embedded OpenType: .eot
  - modern: compressed; optimal for embedding
    - WOFF: .woff
    - WOFF2: .woff2
- in general
  - use @font-face cascading (i.e multiple values in src attribute) from modern (most compressed) to standard (least compressed) types; browsers will pick the first they support
    - then you can style specific sections via the font-family declaration pointing to a font-face
  - use font-dislay to control how fonts are displayed: auto, block, swap (preferred?), fallback, optional values
  - font variants are largely determined by the font-weight; thus choose wisely to whats actually being used and only ship those to the browser
    - you should map font weight numbers to categories, e.g. 300 = light, 400 = regular, etc
- subsetting fonts: the practice of selecting only the characters you need ina font file and discarding the rest
  - e.g. subsetting by language (do you really need the zulu dictionary on your engish site?)
- use unicode-range to serve fonts for multilingual websites; make sure to set the html.lang prop in html
- use the font loading API (or fontface observer tool on github) to control how fonts are loaded

### CSS techniques

- prefer mobile-first over desktop-first when appropriate
  - if there is a mobile webapp version of some site, start there as its usually the most minimal, then build ontop of that to a large desktop
  - if you do the opposite, it becomes increasingly complex to ensure youve removed all the fluff from a desktop version when implementing the mobile version
- keep it DRY
  - use CSS shorthand properties
  - use a tool (e.g. uncess) to remove unused selectors
  - use a tool (e.g. cscss) to remove redundant selectors (two/more selectors doing the same thing)
- keep it WET
  - sometimes combining your CSS into one huge file is suboptimal for those users who wont visit all the pages
    - instead you could create per page css that only delivers whats needed for that screen
- use shallow CSS selectors
  - i.e. be as general as possible because overly specific selectors that are many levels deep generally take up more space
- use fast css selectors
  - tag selectors
  - pretty much same speed
    - descendant selectors
    - class selectors
    - direct child selectors
    - overqualified selectors: i.e. super long selectors like multiple classes
  - pretty much same speed
    - sibling selecgtors
    - Pseudo selectors
  - slow azzzzzz f
    - Attribute selectors
- animations
  - use css transitions when appropriate, generally for all simple/linear animations; being native to the browser they incur no overhead
    - widely supported even in older browsers via prefixes
    - more efficient PCU usage when reflowing complex DOMS, because of hte reduction in thrashing during DOM reflows and dont incur any scripting overhead
      - more efficient than anything javascript timer based
- avoid `@import` declarations in external css files
  - they arent processed until the entire stylesheet is downloaded
  - causes a delay in total load time due to sequential fetches
  - importing external things in css are fetched serially instead of in parallel
  - embed the import within an inline style tag or preferably an html link tag (where atleast its fetched in parallel)
- place CSS as early in the html file as possible to prevent the flash of unstyled content
  - usually this means within the head tag
    - use an html link tag, all fetches (e.g. @imports) occur in parrallel as their found in the html source
  - speeds up the rendering of pages; if a stylesheet is loaded after html conent, the browser has to re-render and re-paint the content when styles are applied
- use flexbox where possible as it performs better than box model layout techniques, e.g. `margin 0 auto`
- inline CSS is the fastest way to construct the CSSOM,
  - tradeoffs
    - it increases the total page weight and thus load time
    - CSS that changes often will cache-bust the html
    - loss of portability
    - etc, all the other logical conclusions
- use loadCss library for link tags fetching external stylesheets
- critical css
  - inline critical CSS/svgs for Above The Fold Content for http1
  - antipattern in http2, use server-push instead
    - inlining anything in html when served via http2 protocol is an antipattern
    - optimize for max networ requests as thats where http2 shines
- the user senses a perceived decrease in page-load time owing to faster page rendering

```html
<!-- loadCss -->
<link
  rel="stylesheet"
  href="/path/to/my.css"
  media="print"
  onload="this.media='all'; this.onload=null;"
/>
```


### javascript techniques

- animations
  - when css transitions dont meet your needs, always use requestAnimationFrame and will-change
    - will-change is the propery way (vs the translateZ 0 hack) to inform the browser this thing will animate, and to have that animation handled by the GPU instead of the CPU
    - requestAnimationFrame will always be faster than setTimout/setInterval techniques
- script tags:
  - placement: hiden rendering if placed within head, put as as low in the body as possible unless required to be in head
  - loading behavior: different script attributes affect loading behavior
    - without async: script donwloads > browser waits for other scripts > browser executes scripts
    - with async: script donwloads > browser executes script
      - race conditions: issues with when one script depends on another, e.g. depending on react to be available
        - AMD modules get around this issue; but dont use requirejs just use webpack
        - es6 modules is the more modern approach
- DOM perf: generally native DOM API (e.g. querySelectorAll, classList, etc) will always be faster that whatever your library/framework provides

#### service workers

### asset minification & customization

- FYI
  - basically the process by which all whitespace & unnecessary characters are stripped from text-based assets without affect behavior
- gotchas
  - always verify the behavior is still correct, as this is a destructive process which always has a % of unintended side effects
- directly impacts
  - load times
- slim frameworks
  - many frameworks enable you to customize & download only the features you need, always do & prefer these types of frameworks

### server side compression

- FYI
  - can occur during development, or as part of the request-response cycle
  - reducing file sizes via some algorithm, before sending it to the user-agent which will decompress it before rendering
  - http headers: request tells server what it accepts, response tells UA what it used
    - request: Accept-Encoding: gzip, deflate, etc
    - response: Content-Encoding: gzip
- gotchas
  - too much compression can affect the user experience
  - youre reducing load times by shipping less data but increasing server compute
  - dont compress already compressed files, e.g. mpg, jpg png, gif, woff, woff2 without knowing what you're doing
- directly impacts
  - load times

### http2

- in general
  - all inlining and bundling of assets should not be used with HTTP2 and considered an anti pattern

#### server push

### reducing Jank
