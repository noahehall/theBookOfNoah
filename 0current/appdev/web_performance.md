# web performance

- web performance in action
  - jeremy L wagner
  - reading: done
  - copying: top of 36
- todo
  - consolidate the old perf into this file
  - figure out http3

## links

- [wikipedia http3](https://en.wikipedia.org/wiki/HTTP/3)
- [wikipedia http2](https://en.wikipedia.org/wiki/HTTP/2)
- [web technology surveys](https://w3techs.com/)
- tools
  - [image optimizatin: tinypng](https://tinypng.com)
  - [analysis: pagespeed insights](https://pagespeed.web.dev/)
  - [analysis: webhints](https://webhint.io/)
  - [analysis: firefox profiler](https://profiler.firefox.com/docs/#/)

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

- web performance: refers primarily to the speed at which a website loads, and [IMO] reacts to user interactions once loaded
- Above The Fold: ATF: content the user sees without scrolling

### browser rendering process

- high level
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

- head of line blocking: the browser limits the number of requests it will make at a single time per batch
  - generally 6 requests per batch, and batch 1 must finish before batch 2 starts

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

### browsers

- safari: i'm not a fan
  - i know thats a bad way to think, but chrome + firefox is a good enough proxy for all browsers
    - with that being said, your users are 80% of safari, use that
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
- dns caching
  - in chrome: chrome://network-internals#dns

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

## tactics

- todo: tactics without a section
  - reduce the amount of data transffered
  - reducing the # of requests (for http1, anti pattern in http2)

```sh
# tactic copypasta

### tactic name
- FYI
- gotchas
- directly impacts
```

### asset minification

- FYI
  - basically the process by which all whitespace & unnecessary characters are stripped from text-based assets without affect behavior
- gotchas
  - always verify the behavior is still correct, as this is a destructive process which always has a % of unintended side effects
- directly impacts
  - load times

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

### image optimization

- FYI
- gotchas
  - always compare the pre- and post- image as too much compression can reduce the quality
  - depending on the device capabilities, e.g. High DPI Screens (like retina on apple) need large dimension images
- directly impacts
  - load times
  -

### critical CSS in Above The Fold Content

- FYI
- gotchas
  - antipattern in http2, use server-push instead
- directly impacts

### http2 server push

### reducing Jank

- jank: top of page 36
