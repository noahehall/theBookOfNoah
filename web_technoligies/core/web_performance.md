
# random at work with youtube in background
  - functional programming:
    + is using functions to complete tasks (without relying on objects)
    + utilizing pure functions (as opposed to functions relying on side effects)
    + using higher order functions
    + avoid mutating data (i.e. changing stuff in place)
      - use persistent datastructures to get around copying huge objects everytime you need to create a new object
      - e.g. if you have a huge array, but you need to change a single item, you'll have to create a new array (because its immutable)

# boomshakala
  - [Analyzing performance](http://w3c.github.io/navigation-timing/#introduction)
  - [understanding performance](https://developers.google.com/web/fundamentals/performance/)

# TODO!
  -[rendering perforance and jank](https://developers.google.com/web/fundamentals/performance/rendering/)
  - [understanding layout boundaries](http://wilsonpage.co.uk/introducing-layout-boundaries/)
  - [how to use timeline tool](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/timeline-tool?utm_source=dcc&utm_medium=redirect&utm_campaign=2016q3#rendering-event-properties)
  - [css triggers](https://csstriggers.com/)
  - [what forces layout/reflow](https://gist.github.com/noahehall/653b52dceab1f5474712391689666b09)
  - [js triggers](http://alistapart.com/article/scripttriggers)
  - [reflows and repaints](http://www.stubbornella.org/content/2009/03/27/reflows-repaints-css-performance-making-your-javascript-slow/)
  - [hardware accelerated css](http://blog.teamtreehouse.com/increase-your-sites-performance-with-hardware-accelerated-css)
  - [device emulation](https://developers.google.com/web/tools/chrome-devtools/device-mode/?utm_source=dcc&utm_medium=redirect&utm_campaign=2016q3)
  - [remote debugging with android devices](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/?hl=en)
  - [ios webkit debugging](https://github.com/google/ios-webkit-debug-proxy)
  - [testing mobile](https://www.smashingmagazine.com/2014/09/testing-mobile-emulators-simulators-remote-debugging/2/)
  - [optimize js execution](https://developers.google.com/web/fundamentals/performance/rendering/optimize-javascript-execution)
  - [hydra](http://mrale.ph/irhydra/2/)
  - [using web workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
  - [another web worker walkthrough](https://www.html5rocks.com/en/tutorials/workers/basics/)
  - [optimizing js memory](https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/_)
  - [garbage collection](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)
  - [garbage collection best practices](http://buildnewgames.com/garbage-collector-friendly-code/)
  - [performance holy grail](https://developer.mozilla.org/en-US/docs/Mozilla/Performance)
  - [using compositor only props and layers](https://developers.google.com/web/fundamentals/performance/rendering/stick-to-compositor-only-properties-and-manage-layer-count)
  - [how to do flip](https://aerotwist.com/blog/flip-your-animations/)
# timeline
  - best practices
    - use in incognito
    - disable all extensions
    - focus on cause of bottlencks, not symptoms
    - measure before and after
  - click an event in the main thread, and see the bottom section change
  - make sure you capture all items
    + Network
    + js profile
    + memory
    + paint
  - in the main thread
    + items on top trigger the items below them
    + left to right is the rendering pipeline
  - right click and save/load a timeline
  - identify jank:
    - look in the timeline that anything that is above the 60fps line
    - anything with LONG layouts are janky
  - paint profile
    +

# [browser rendering optimization](https://classroom.udacity.com/courses/ud860/lessons/4138328558/concepts/41366985950923#)
  - juddering: i.e. jank, when you scroll/animation is jumpy
  - frames: any visual change (scroll/animation) the browser puts up a new screen for the user 60 times a second
    + 60 Hertz: browsers refresh 60 times a second
    + 60 Fps: 60 frames per second we must put up to match the browsers 60 refreshes
      - anything that requires movement/finger interaction requires 60fps
    + you have to render all your frames in 10-12 ms, as the browser needs about 4 frames per second
  - what creates a frame:
    1. visual change via js / css
      - goes through the entire flow
    2. change a paint property, e.g. background img, shadows, etc
      -goes through the entire flow except layout)
    3. changing something that changes compositing
      - JS > style > composite
  - frame rendering pipeline: javascript > style > layout > paint > composite
      + css flexbox does not require changes to style
      + opacity and transform only trigger composite when the elements are on their own layers
  - whats required to make a frame:
    + specifically:
      1. browser makes a request for a webpage (e.g. get request)
      2. browser receives HTML and assets
      3. browser pauses to *Parse HTML* to create the DOM
      4. browser creates CSSOM
      5. browser combines DOM and CSSDOM you see it as *Recalculate Styles*
      6. Browser now has the Render tree containing only visible elements
        + no head, no scripts, no elements with display:none, pseudo elements are added
      7. browser constructs boxes on the page, i.e. the *Layout* or *Reflow*
      8. browser rasterizes the Layout, i.e. *Paint*
        - the flow contains multiple steps, e.g.: save, translate, drawRectangle, drawText, save, clipPath, clipRoundedRectangle, etc.
        - it pretty much creates the visual CSS styling
      9. browser displays all the images, i.e. *Image Decode + Resize*
      10. browser applies all layers, i.e. *Composite Layers*
        - each layer requires its own paint
        - the layers are computed via the CPU and then uploaded to the GPU
        - the GPU puts the layers o the screen
  - web app lifecycle: RAIL
    1. load: should be complete <1 second
      - download and render critical resources
    2. idle: waiting for user interaction,
      - usually lasts around 50ms at a time
      - do all non essential work, e.g. getting ready for user interaction
    3. response: reacts to user input/action without delay
      - your site must respond within 100ms or users experience 'lag'
    4. animation: you must hit 60 fps, which is 1 frame every 16ms
      + FLIP: first, last, invert, play
        - first: get starting position
        - last: get end position
          + use getBoundingClientRect
          + calculations should be no longer than 100ms
        - invert: apply transform and opacity changes
        - play: replay the animation
        - [example code](https://github.com/udacity/devsummit/blob/master/src/static/scripts/components/card.js)
  - Javascript Compilers:
    + JIT: just in time compilers takes your code and optimizes it bit by bit
    + best practices:
      - avoid micro optimizations as it all depends on the javascript engine used to compile it
        - dont spend your time on this, until you've exhusted all other options
      - JS can trigger every part of the rendering pipeline, it makes sense to run it as early as possible each frame.
      - always use requestAnimationFrame: schedules your javascript to run as early as possible in each frame
      - run long running scripts in the web worker thread if possible that do not require dom access
        + [example code](https://github.com/udacity/web-workers-demo/tree/solution)
        + [example code 2 with web worker](https://github.com/udacity/web-workers-demo)
      - memory management: when the garbage collector runs, the JS engine stops all other code from running:
        + look in timeline by switching on memory profiler
          1. when the saw tooth hits the bottom, thats the garbage collector happens
            + if the garbage collector does not go to 0, you have a memory leak
  - css best practices:
    + dont use complex selectors, BEM type selectors are the fastest
    + reduce the number of DOM elements effected
    + avoid layout thrashing (i.e. forced synchronous layout): avoid retrieving layout informaton e.g. offsetWidth) and then styling after
      - instead, Batch your style changes and avoid running layout as much as possible.
      - [example code](http://gent.ilcore.com/2011/03/how-not-to-trigger-layout-in-webkit.html)
    + dont mix dimension reads and style writes, group them
  -
# [High Performance Browser Networking](https://hpbn.co/primer-on-latency-and-bandwidth/#speed-of-light-and-propagation-latency)

  - WPO: web performance optimization (WPO) industry
  - Need For Speed:
    + Faster sites lead to better user engagement.
    + Faster sites lead to better user retention.
    + Faster sites lead to higher conversions.
  - Content delivery network (CDN): distributes content around the globe, and serving that content from a nearby location to the client, enables us to significantly reduce the propagation time of all the data packets.
  - Measures
    + bps: Bits Per Second
      - Network data rates are typically measured in bits per second (bps)
      - there are 8 bits for every byte
    + Bps: Bytes Per Second
      - data rates for non-network equipment are typically shown in bytes per second (Bps). This is a common source of confusion, pay close attention to the units.
      - there is 1 byte for every 8 bits
        + For example, to put a 10 megabyte (MB) file "on the wire" over a 1Mbps link, we will need 80 seconds. 10MB is equal to 80Mb because there are 8 bits for every byte!
    + speed of light: 299,792,458 meters per second, or 186,282 miles per second.
    + Lag: but studies have shown that most of us will reliably report perceptible "lag" once a delay of over 100–200 milliseconds is introduced into the system. Once the 300 millisecond delay threshold is exceeded, the interaction is often reported as "sluggish," and at the 1,000 milliseconds (1 second) barrier, many users have already performed a mental context switch while waiting for the response

## Network Traffic
  - Latency: the time it takes for a message, or a packet, to travel from its point of origin to the point of destination
  - Bandwidth: Maximum throughput of a logical or physical communication path
  - Router: responsible for relaying a message between the client and the server
  - Distance between client and server is the sum of:
    + Propagation delay: Amount of time required for a message to travel from the sender to receiver, which is a function of distance over speed with which the signal propagates.
      - Propagation time is dictated by the distance and the medium through which the signal travels
      - propagation speed is usually within a small constant factor of the speed of light.
    + Transmission delay: Amount of time required to push all the packet’s bits into the link, which is a function of the packet’s length and data rate of the link.
      - transmission delay is dictated by the available data rate of the transmitting link and has nothing to do with the distance between the client and the server.
      - As an example, let’s assume we want to transmit a 10 Mb file over two links: 1 Mbps and 100 Mbps. It will take 10 seconds to put the entire file "on the wire" over the 1 Mbps link and only 0.1 seconds over the 100 Mbps link.
    + Processing delay: Amount of time required to process the packet header, check for bit-level errors, and determine the packet’s destination.
    + Queuing delay: Amount of time the packet is waiting in the queue until it can be processed.
      -  if the packets are arriving at a faster rate than the router is capable of processing, then the packets are queued inside an incoming buffer. The time data spends queued inside the buffer is, not surprisingly, known as queuing delay.
      - Bufferbloat: is a term that was coined and popularized by Jim Gettys in 2010, and is a great example of queuing delay affecting the overall performance of the network.
        + The underlying problem is that many routers are now shipping with large incoming buffers under the assumption that dropping packets should be avoided at all costs. However, this breaks TCP’s congestion avoidance mechanisms (which we will cover in the next chapter), and introduces high and variable latency delays into the network.

# image optimization
  - [best practices:](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization)
    1. eliminate and replace images:
      - if you can eliminate an image resource, which often requires a large number of bytes relative to HTML, CSS, JavaScript and other assets on the page, then that is always the best optimization strategy.
      - can you achieve this effect without images?
      - is there an alternative tech that could deliver the desired results but in a more efficient manner?
        1. css effects: gradients, shadows, animations, etc
        2. web fonts:
    2. decide on vector vs raster images
      - vector images ideal for geometric shapes, vector images are also zoom and resolution-independent (i.e. svgs)
        + use lines, points, and polygons to represent an image.
        + make sure the SVG is minified
        + make sure the SVG is compressed with GZIP
      - raster images (i.e. jpg) are better for complex scenes with lots of irregular shapes and details
        + represent an image by encoding the individual values of each pixel within a rectangular grid.
        +  make sure to compress (reduce bits per pixel) whether lossy (better compression) or lossless (better looking)
          - lossy: eliminates pixel data
          - lossless: compresses pixel data
    3. decide on right raster image
      + questions to ask when picking
        + need animation === gif
        + need fine detail with high resolution === png
          - large (256+) color palette ? === png-8
        + use JPEG if the above dont matter, make sure to experiment with various quality settings
    4. deliver scaled image assets

# TOPICS

## performance
  - javascript is not run on the CPU, there is a javascript VM that takes your code and runs it on the CPU
    - it is a black box, you must be sure you've written your code in a way that does not hinder the VM
  - types of tools
    - caching
    - network analyzes: delivery of assets, combining assets, etc
      1. yslow, pagespeed, devtools
    - profilers: measure runtime execution of scripts during life of app
      1. yui profiler, pagespeed, devtools
    - cdns
# Measuring performance
  1. lighthouse: identify obvious CRP optimization opportunities
  2. RUM: real user monitoring: instrument your code with the *navigation timing API* to monitor how your app performs out in the wild
  - navigation timing API
    1. domloading: this is the starting timestamp of the entire process, the browser is about to start parsing the first received bytes of the HTML document.
    2. dominteractive: marks the point when the browser has finished parsing all of the HTML and DOM construction is complete.
      - marks when DOM is ready.
    3. domcontentloaded: marks the point when both the DOM is ready and there are no stylesheets that are blocking JavaScript execution - meaning we can now (potentially) construct the render tree.
      - typically marks when both the DOM and CSSOM are ready.
      1. domcontentloadeventstart
      2. domcontentloadedeventend
    4. domcomplete: all of the processing is complete and all of the resources on the page (images, etc.) have finished downloading - in other words, the loading spinner has stopped spinning.
      - marks when the page and all of its subresources are ready.
    5. loadevent: as a final step in every page load the browser fires an onload event which can trigger additional application logic.
      1. loadeventstart
      2. loadeventend
  - notes
    1. propagation latency: network round trips for requesting and receiving resources
### application performance
  - record a start time, do stuff, record an end time
  - node performance
    1. set the content length header:
      - aggregate the result, convert to buffer, set content-length header, and do a single res.end() call
      - if you dont do this you will get about 50% fewer requests per second
  - js performance
    1. string manipulation is costly
### browser performance
#### best practices
  - browser performance steps
    1. understand your users interaction on the page
    2. measure current app performance
    3. eliminate unnecessary downloads
    4. add compression
  - the end goal isn't to make your site perform fast on any device, it is to make users happy
    1. the majority of time users spend in your site isnt waiting for it to load, but waiting for it to respond to their actions
  - respond to users immediately; acknowledge user input in under 100ms
    1. applies to most inputs, anything clickable/toggles/animations
      - does not apply to touch drags/scrolls
    2. always provide feedback for actions that take longer than 500ms to complete
  - when animating/scrolling, produce a frame in under 10ms
  - maximize main thread idle time
  - keep users engaged; deliver content in under 1000ms or users attention will start to wander, and their perception of dealing with the task is broken
  - use idle time to complete deferred work
    1. keep preloaded data to a minimum so that your app loads fast, and use idle time to load remaining data
    2. deferred work should be grouped into blocks of about 50ms - should  user begin interacting - then the highest priority is to respond to the user
      - to allow for <100 ms response, the app must yield control back to main thread every 50ms so that it can execute its pixel pipeline, react to user input, etc.
  - eliminate/defer uneccesary downloads on app load
  - ensure each resource has compression, caching, minification, etc.
    1. inventory your content into content types and determine what content-specific optimizations can be performed
  - ensure you understand your user behavior on your page
    1. the frequency in which they interact with each element
  - GZIP performs best on text-based assets: CSS, javascript, html
  - The combination of ETag, Cache-Control, and unique URLs allows you to deliver the best of all worlds: long-lived expiration times, control over where the response can be cached, and on-demand updates.
  - optimize the critical rendering path for progressive rendering
  - if not using http2: minimize requests by combining files
  - critical path optimizations
    1. eliminate render-blocking javascript and css
    2. optimize javascript user
    3. prefer async javascript resources
    4. avoid synchronous server calls
    5. defer parsing javascript
    6. avoid long running javascript
    7. optimize css use
    8. put css in the document head
    9. avoid css imports
    10. inline render-blocking css
    11.
#### notes
  - time frames
    1. 0-16ms: users perceive animations as smooth so long as 60 new frames are rendered ever second; thats 16ms per frame (including the time it takes the browser to paint the new frame to the screen), your app has 10ms to produce a frame
    2. -100ms : respond to user action within this time frame and it will feel immediate, else the connection between action and reaction will be broken
    3. 100-300ms: users experience a slight perceptible delay
    4. 300 - 100ms: things feel part of a natural and continuous progression of tasks; loading/changing views represents a tasks
    5. 1000+ms: the user is frustrated and likely to abandon the task
##### 60 frames per second
  - 60 frames per second:
    1. 1000ms budget / 60 fps - 6ms = 10.66ms per frame
  - browsers need at most 6fps to paint each frame
  - your code should finish executing in under 10ms
  - take advantage of the first 100ms time frame to do expensive pre-calculation so that you can maximize your chances of hitting 60fps
  - always produce 60 frames per second, and every frame goes through the following steps
    1. javascript
    2. style
    3. layout
    4. paint
    5. composite
##### animations (including scrolling and touch drags)
##### HTML optimizations
  1. define as many async tags as possible
  2. minification and gzip
##### css optimizations
  1. reduce the number & complexity of css selectors
    - use specific classes as much as possible
    - avoid parent > child > blah css selectors, pseudo classes, etc.
  2. reduce the number of elements on which the style calculation must be calculated
    - typically the more important factor for many style updates
    - e.g. refrain from changing the Body/HTML tag styles
  3. keep your CSS lean, deliver it quickly as possible, and use media types and queries to unblock rendering
    - When declaring your style sheet assets, pay close attention to the media type and queries; they greatly impact critical rendering path performance.
      ```
        used on everything
          <link href="style.css" rel="stylesheet">
        only on print media type
          <link href="print.css" rel="stylesheet" media="print">
        on all media types with specific dimensions
          <link href="other.css" rel="stylesheet" media="(min-width: 40em)">
      ```
  3. measure your style recalculation costs
    - devtools > timeline > record your action> find `Recalculation` events, focus on those events that take longer than 60 FPS
  4. use BEM (or something similar): block element modifier to structure your CSS classes
  5. use transform and opacity changes for animations
    - pixel to screen pipeline: JS > style > composite
    - The caveat for the use of transforms and opacity is that the element on which you change these properties should be on its own compositor layer.
  6. investigate implementing the *FLIP Principle* for those animations violating item 5 above
  7. avoid CSS imports: The CSS import (@import) directive enables one stylesheet to import rules from another stylesheet file. However, avoid these directives because they introduce additional roundtrips into the critical path: the imported CSS resources are discovered only after the CSS stylesheet with the @import rule itself is received and parsed.
  8. inline render blocking css: For best performance, you may want to consider inlining the critical CSS directly into the HTML document. This eliminates additional roundtrips in the critical path and if done correctly can deliver a "one roundtrip" critical path length where only the HTML is a blocking resource.
  9. avoid large/complex layouts and layout thrashing
    - avoid triggering layout/reflow wherever possible
      1. avoid changes to geometric properties (e.g. width, height, top, etc)
    - assess layout model performance: flexbox > older flexbox/float-based layout models
    - avoid forced synchronous layouts and layout thrashing by reading style values before making style changes
    - reduce paitn areas through layer promotino and orchestration of animations
    - use chrome devtools paint profiler to asses paint complexity and cost; reduce where you can
  10. use devtools to identify paint bottlenecks: rendering > show paint rectangles
    - chrome will flash teh screen green whenever painting happens
    - if you see the whole screen flash green, or areas of the screen that you think shouldnt be painted, you should dig alittle further
    - you can also use the *paint profiler* to get more in-depth information
  11. promote elements that move/fade to a new layer
    - reduces the impact and complexity of repainting those elements
    - be careful, as each layer requires both memory and management
      - use DevTools to confirm that doing so has given you a performance benefit. Don't promote elements without profiling.
      - On High DPI screens elements that are fixed position are automatically promoted to their own compositor layer. This is not the case on low DPI devices because the promotion changes text rendering from subpixel to grayscale, and layer promotion needs to be done manually.
        + only promote to new layer on **low-dpi** devices
      ```
        // chrome, opera, firefox
          .moving-element {
            will-change: transform;
          }
        // safari, mobile safari
          .moving-element {
            transform: translateZ(0);
          }
      ```
  15. simplify paint complexity: changing any property apart from transforms/opacity always trigger paint
    - anything that involves blur (e.g. shadow) costs more than other painting resources
    - paint is often the longest-running of all tasks in the pipeline, and one to avoid if at all possible.
    - Ask yourself if it’s possible to use a cheaper set of styles or alternative means to get to your end result.
    - Where you can you always want to avoid paint during animations in particular,
##### javascript optimizations
  1. minimize, mangle, and remove dead code
  2. make your JavaScript async and eliminate any unnecessary JavaScript from the critical rendering path.
  3. JavaScript execution blocks on the CSSOM.
  4. JavaScript blocks DOM construction unless explicitly declared as async.
  5. executing our inline script blocks DOM construction, which also delays the initial render.
  6. When the browser encounters a script tag, DOM construction pauses until the script finishes executing.
    - in the case of an external JavaScript file the browser must pause to wait for the script to be fetched from disk, cache, or a remote server, which can add tens to thousands of milliseconds of delay to the critical rendering path.
  7. avoid setTimeout/setInterval for visual updates, always use `requestAnimationFrame` instead
    ```
      function updateScreen(time) {
        // Make visual updates here.
      }
      requestAnimationFrame(updateScreen);
    ```
  8. move long-running Javascript  off the main thread to web workers
    - you can move pure computation work to web works if it doesn't require DOM access
    - any data manipulation/traversal (E.g. sorting/searching)
    ```
      var dataSortWorker = new Worker("sort-worker.js");
      dataSortWorker.postMesssage(dataToSort);
      // The main thread is now free to continue working on other things...
      dataSortWorker.addEventListener('message', function(evt) {
         var sortedData = evt.data;
         // Update data on screen...
      });
    ```
  9. use micro-tasks to make DOM changes over several frames
    ```
      var taskList = breakBigTaskIntoMicroTasks(monsterTaskList);
      requestAnimationFrame(processTaskList);
      function processTaskList(taskStartTime) {
        var taskFinishTime;
        do {
          // Assume the next task is pushed onto a stack.
          var nextTask = taskList.pop();
          // Process nextTask.
          processTask(nextTask);
          // Go again if there’s enough time to do the next task.
          taskFinishTime = window.performance.now();
        } while (taskFinishTime - taskStartTime < 3);
        if (taskList.length > 0)
          requestAnimationFrame(processTaskList);
      }
    ```
  10. use chrome devtools timeline and javascript profile to assess the impact of javasacript
    - be very wary of micro-optimizations because they won’t typically map to the kind of application you’re building.
  11. know your javascript's frame tax: assess how much it costs to run your JS on a frame-by-frame basis, e.g. DevTools JS Profiling
    1. transitioning
    2. scrolling
  12. avoid forced synchronous layouts
    - use requestAnimationFrame to retrieve geometric values (e.g. width) at the beginning of the frame, and modify geometric values (e.g. height) after you've retrieved the values
  13. avoid layout thrashing: when you make a lot o forced synchronous layout changes in quick succession
    ``` example of layout thrashing
      function resizeAllParagraphsToMatchBlockWidth() {
        // Puts the browser into a read-write-read-write cycle.
        for (var i = 0; i < paragraphs.length; i++) {
          // read offsetWidth, the write, then read, (the second read is bad)
          paragraphs[i].style.width = box.offsetWidth + 'px';
        }
      }
    ```
    ``` fix the above example
      // Read
      var width = box.offsetWidth;
      function resizeAllParagraphsToMatchBlockWidth() {
        for (var i = 0; i < paragraphs.length; i++) {
          // Now write.
          paragraphs[i].style.width = width + 'px';
        }
      }
    ```
  13. debounce your input handlers: fixes the issue of having long running input handlers that can block scrolling, and making style changes in input handlers that cause forced syncrhonouse layouts
    - debounce visual changes to the next requestAnimationFrame callback:
    ``` example of debounced input handler
      function onScroll (evt) {
        // Store the scroll value for laterz.
        lastScrollY = window.scrollY;
        // Prevent multiple rAF callbacks.
        if (scheduledAnimationFrame)
          return;
        scheduledAnimationFrame = true;
        requestAnimationFrame(readAndUpdatePage);
      }
      window.addEventListener('scroll', onScroll);
    ```
#### image optimizations
  1. images often account for most of the downloaded bytes on a page
  2. when to use which image type
    - need animation ? *gif*
    - can you recreate this image with an SVG ? use *SVG*
    - need to preserve fine detail, with highest resolution ?
      - large (256+) color palette ? *png-24*
        - *png-8*
    - use *jpg* and experiment with quality settings
  3. image formats:
    - Vector graphics: use lines, points, and polygons to represent an image
    - raster graphics: represent an image by encoding individual values of each pixel within a rectangular grid
    - WebP: developed by google
    - JPEG-XR
  4. understand CSS vs Device pixels and the implications for high-resolution screens:
    - a single CSS pixel may contain multiple device pixels
      0. HiDPI:
      1. the more device pixels per css pixels, the finer the detail of the displayed content on screen (looks sharper)
      2. image assets require more detail (pixels) in order to take advantage of higher pixel counts
  5. optimize images by type
    - raster images:
      - reduce bit depth
        1. 8 bits per channel = 256 values per channel (16m colors)
      - lossy compression:
        1. eliminates some pixel data
      - lossless compression:
        1. compresses the pixel data
      - enable [delta encoding](https://en.wikipedia.org/wiki/Delta_encoding)
    - vector images: minify
  6. deliver scaled images
#### font optimizations
  1. pick the right font
    1. server WOFF 2.0 to browsers that support it
    2. server WOFF to majority of browsers
    3. server TTF to old android (below 4.4)
    4. server EOT to old IE(<9)
  2. compress the font
    - EOT and TTF require compression
    - WOFF and WOFF2.0 should already be compressed
    - use `zopfli` compression > gzip for fonts to get around 5% more compression
  3. use `@font-face` in css files
    - use `format()` to specify different formats that are available
    - use `unicode-range` to specify which characters you need from the font so that the entire font isnt downloaded
  4. reduce the font variants used in app to reduce font synthesis
    - if an exact font match isnt available (e.g. `font-weight: 900`), the browser substitutes the closest match
    - if no match is found (i.e. the `@font-face` declaration doesnt include an *italic* font), then the browser synthesizes its own font variant
  5. optimize loading and rendering
    - font requests are delayed until the render tree is constructed which can result in *delayed text rendering* which is part of the *critcal render path*
    - use the font loading API for lazy loading
    - use a standard font on the initial page load to unblock rendering and inject a new style that uses a web font
    - inline font data (instead of using font api) in all other cases
      1. the brwoser auto downloads with high priority CSS style sheets with matching media queries because constructing the CCSOM requires them
      2. inlining font data into CSS style sheets forces the browser to download the font with high priority without waiting for the render tree
  6. cache fonts for long periods
    - long max-age expiry
    - conditional ETag header
    - cache control policy
#### measuring performance
  1. RAIL: Response > Animation > Idle > Load
    - user-centric performance model that splits an application life cycle into four distinct steps:
      1. Response
        - input latency from tap to paint < 100ms
        - e.g. user taps a button (e.g. opening navigation)
      2. Animation
        - each frame's work (from js to paint) completes < 16ms
        - scrolling page, drags finger (e.g. to open a menu), sees an Animation
        - drags: this applies to nly the continuous phase of drags, not to start
      3. Idle
        - main thread JS work chunked no larger than 50ms
        - whenever the user isn't interacting with the page
        - the main thread should still be available enough to handle the next user input
          1. chunk work in 50ms, then check main thread before doing the next idle task
      4. load
        - page considered ready to use in 1000ms
        - user loads the page and sees the critical path content
    - use the chrome DevTools Timeline tool to record user actions and check the recorded times against these key rail metrics
      1. response: input
#### optimizing data users download
  - improving performance process starts with minimizing and optimizing the data that users download
  1. eliminate unnecessary downloads
    - inventory your & third party assets
    - measure the performance of each asset: its value and technical performance
    - determine if each resource is providing sufficient value relative to performance
      1. does the resource deliver consistent performance?
      2. is the resource in the critical path ? does it need to be?
      3. if the resource fails - does the site file ?
  2. optimize encoding and transfer size of text-based assets
    - compression: the process of encoding information using fewer bits
  3. optimize images
    - eliminate uneccesary images
    - leverage CSS3 effects: grandiest, shadows, animations, etc. can be used to produce resolution independent assets
    - use web fonts instead of encoding text in images
  4. optimize fonts
    - unicode fonts can contain thousands of glyphs
    - five font formats: no single one works on all devices
      1. WOFF2
      2. WOFF: widest support but not available on older browsers
      3. EOT: IE only
      4. TTF
      5. SVG font container: not supported by many, dont use it
    - webfont: collection of glyphs, each glyph is a vector shape that describes a letter/symbol
    - the race between the first page of page content (after the *Render tree* is built), and the request for the font resource is what creates the 'blank text problem' where the browser might render the page layout but omits any text
      1. each browser has a different method for handling this issue,
  5. use HTTP caching
    - every browser ships with an implementation of http cache
    - add relevant headers: `@see http.md`
      1. cache-control
      2. content-length
      3. etag
##### critical rendering path
  - only concerned with html markup, css and javascript
  - to optimize the CRP, minimize the following three variables
    1. critical resource: resource that could block intitial rendering of the page
    2. critical path length: number of roundtrips, or total time required to fetch all of the critical resources
      - a function of the dependency grapth between the critical resources and their bytesize: some downloads can only be initiated after a previous resources has been processed
      - the larger the resource the more roundtrips it takesto download
    3. critical bytes: total number of byte required to get to first render of the page
      - the sum of the transfer filesizes of all critical resources
  - steps to optimize the CRP
    1. analyze and characterize the critical path: the number of resources, bytes, length
    2. minimize number of critical resources: eleminate them, defer their download, mark them as async, etc
    3. optimize the number of critical bytes to reduce the download time (i.e. number of round trips)
    4. optimize the order in which the remaining critical resources are loaded:
      - download all critical assets as early as possiblet o shorten the critical path length
  - the set of steps browsers must take to convert HTML, CSS and JS into a living, breathing application
    1. optimizing the critical rendering path is the process of minimizing the total amount of time spent performing each step in browser rendering process
    2. render content to screen as quickly as possible
    3. reduce the amount of time between screen updates after the initial render
      - i.e. achieve higher refresh rates
  - browser rendering process
    1. process html markup and build DOM tree
    2. process CSS markup and build CSSOM tree
    3. combine the DOM and CSSOM into a render tree
    4. run layout on the render tree to compute geometry of each node
    5. paint the individual nodes to the screen
  - DOM Tree: captures the properties and relationships of the DOM
    1. bytes
    2. chars
    3. tokens
    4. nodes
    5. DOM
  - CSSOM: CSS object model: tells the browser how the elements in the DOM Tree will look when rendered
    1. bytes
    2. chars
    3. tokens
    4. nodes
    5. CSSOM
  - Render Tree: combines  the CSSOM and DOM trees which i used to compute the layout of each visible element and serves as an input to the paint process that renders the pixels to screen
    1. contains only the nodes required to render the page
    2. captures all the visible DOM content on the page and all the CSSOm style information for each node
    - steps.
      1. start at root of DOM Tree, travers each visible node
        - only visible tags (e.g. no `metatags`)
        - no CSS hidden elements, e.g. (no `display:none` yes `visible:none`)
      2. for each vsiible node, find the appropriate matcing CSSOM rules and apply them
      3. render vsiible nodes with conten tand their computed stules
    - Layout/reflow: is where the browser figures out the geometric information for elements: their size and location in the page.
      1. computes the exact position and size of each object
  - Paint/rasterizing: takes in the final render tree and renders pixels to screens
    1. complex styles take longer, e.g. `drop-shadow` >`color`
  - Optimizing the critical rendering path refers to
    1. prioritizing the display of content that relates to the current user action.
    2. improving the time to first render of web pages
    3. developing well-performing interactive applications
  - progressive rendering: the page is loaded with minimal content at first, and then progressively re-painted as new content is ready
    1. significantly improves the time to first render
  - unoptimized rendering: the page is not loaded until all content is ready to be displayed
  - technical explanation
    1. conversion: browser reads raw bytes of HTML and translates them to individual chars based on specified encoding ofthe file (e.g. utf-8)
    2. tokenizing: browser convers strings of chars into distinct tokens, e.g. `<html>` into an HTML dom node
    3. lexing: the emitted tokens are converted into *objects* which define their properties and rules
    4. DOM construction: the HTML markup that defines relationships between tags (e.g. some tags are parents of other tags) - the created objects are linked in a tree data structure that captures this relationship
    5. the final output of this                              is the document object model
  - non-technical explanation
    1. request HTML document
      - parse the response
      - construct DOM
      - browser discovers CSS, JS, and other resources and dispatches requests
    2. request CSS files
      - browser constructs CSSOM after all of the CSS content is received and combines it with the DOM tree to construct the *render tree*
    3. get fonts
      - font requests are dispatched after the *render tree* can tell the browser which font variants are needed to render teh specified text on the page
    4. first paint
      - if fonts are not available, the browser may not render any text pixels
    5. paint text
  - to find out how long the CSS processing takes
    1. record a timeline in DevTools
    2. look for *Recalculate style* event
  - CSS: is treated as a render blockign resource
    1. the browser wont render any processed content until the CSSOM is constructed
##### rendering performance
  - most devices refresh their screens 60x a second
    1. each of those frames has a budget of 16ms - 10ms = 10ms per frame
  - jank: when you fail to meet 10ms of your code runtime per frame, the frame rate drops and the content judders on the screen
  - pixel pipeline/pixel to screen pipeline
    1. javascript: e.g. animation, sorting, DOM modifications, css animations/transitions, etc.
    2. style: figuring out which css rules apply to which elements based on matching selectors, once rules are knonwn they are applied and the final styles for each element are calculated
      - changing the dom through adding/removing elements, changing attributes/classes, animations, will cause the browser to recalculate element styles
      - style calculations process
        1. create a set of matching selectors: browser figures out which classes, pseudo-selectors and IDs apply to any given element
        2. take all the style rules from the matching selectors and figure out what final styles the element has
    3. layout/Reflow in firefox: once the browser knows which rules to apply to an element it can begin to calculate how much space it takes up and where it is on screen
      - the web's layout model means one element can affect others, e.g. the width of the body can affect its children
      - each element will have ex/implicit sizing info based on the CSS that was used, the contents of the element or the parent element
      - triggering layout will always trigger paint
        1. any changes to **geometric properties** e.g. width, height, left, top, etc
      - Layout cost:
        1. # of elements that require layout
        2. complexity of those layouts
    4. paint: process of drawing out text, colors, images, borders, shadows, etc. that eventually get composited to the users' screen: every visual part of the element;
      - typically involves multiple *layers*
      - this is usually the longest running of all all tasks in the *pixel-to-screen* pipeline
      - changing any property apart from transforms/opacity always triggers paint
      - paint/rasterizing process
      1. create a list of draw calls
      2. filling in pixels
    5. compositing: taking the multiple layers from the paint process and drawing them to the screen in the correct order so that the page renders correctly
      - where the painted parts of the page are put together for displaying on screen.
      - two key factors in this area that affect page performance: the number of compositor layers that need to be managed, and the properties that you use for animations.
  - impact of various modification types
    1. layout property changes: i.e. modification to an element's geometry; width, height, position (e.g. left, top)
      - JS/CSS > style > layout > paint > composite
    2. paint property changes: e.g. background image, text color, shadows, etc., any property that does not affect the layout of the page
      - JS/CSS > style > paint > composite
    3. changes not requiring layout/paint:
      - JS / CSS > style > composite
  - requestAnimationFrame: any visual modifications need to occur at the start of each frame - the only way to guarantee this is to use the `requestAnimationFrame` api
  - forced synchronous layout: when you force a browser to perform *Layout* before before *Style*
    1. normal frame process: javascript > style > layout > paint > composite
    2. forced synchronous layout: javascrcript > Layout > ...
      ```
        // Schedule our function to run at the start of the frame.
          requestAnimationFrame(logBoxHeight);
        // good
          function logBoxHeight() {
            // Gets the height of the box in pixels and logs it out.
            console.log(box.offsetHeight);
            // modify style/layout properties
            box.classList.add('super-big');
          }
        // bad
          function logBoxHeight() {
            // this changes the style and modifies its Layout properties
            box.classList.add('super-big');
            // Gets the height of the box in pixels
            // and logs it out.
            console.log(box.offsetHeight);
          }
        // even worse
          function resizeAllParagraphsToMatchBlockWidth() {
            // Puts the browser into a read-write-read-write cycle.
            for (var i = 0; i < paragraphs.length; i++) {
              paragraphs[i].style.width = box.offsetWidth + 'px';
            }
          }
        // FIX for the *even worse* case
          // Read.
          var width = box.offsetWidth;
          function resizeAllParagraphsToMatchBlockWidth() {
            for (var i = 0; i < paragraphs.length; i++) {
              // Now write.
              paragraphs[i].style.width = width + 'px';
            }
          }
      ```
  - if you trigger Layout you will always trigger Paint: changing the geometry of an element means it pixels need fixing
  - you will trigger paint if you change any non-geometric properties, e.g. backgrounds, color, shadows
  - To get an understanding of the layers in your application, and why an element has a layer you must enable the Paint profiler in Chrome DevTools’ Timeline:
    1. When the recording has finished you will be able to click individual frames, which is found between the frames-per-second bars and the details:
  - avoid long running input handlers:
    + input handlers (e.g. touchstart, touchmove, touchend, etc)
      - calling preventDefault() in these input handlers will cause the compositor thread to wait until the handler has finished executing
    + input handlers (e.g. those for scroll/touch) are schedule to run just before any *requestAnimationFrame* callbacks
      - if you make visual changes in input handlers,  then at the start of the requestAnimationFrame, there will be pending style changes
      - if you then read visual properties at the start of the requestAnimationFrame callback, you will trigger a forced synchronous layout
        1. input handlers > js > style > layout > paint> composite
          - input handler = style write
          - js = style read
          - ===== forced synchronous layout
##### low bandwidth & high latency
  - emulate networking throttling to ensure adequate performance in a variety of connectivity conditions
  - skipped: check javascript_performance.md for extensive information on this section
##### PRPL
  - PRPL: pattern that takes advantage of modern web platform features to granularly deliver mobile web expieriences more quickly
    1. PUSH: critical resources for the initial uRL router
    2. RENDER: initial route
    3. PRE-CACHE: remaining routes
    4. LAZY-LOAD: and create remaning routes on demand
  - benefits of PRPL
    1. minimum time to interactive
    2. maximum caching efficiency, espcially overtime as updates are released
    3. simplicity of development and deployment
  - requirements to use PRPL
    1. single page app
    2. the main entry pont of the app is served from every valid routes
      - all resource urls in the entrypoin tneed to be absolute, since it may be served from non-top-level urls
    3. the app-shell: which includes the top-level applogic, router, etc
    4. lazy loaded fragments of the app: a fragment can represent the code for a particular view, or other code that can be loaded lazily
    5.
##### [Chrome DevTools](https://developers.google.com/web/tools/setup/)


# need to file
  - time to first byte: TTFB: the it takes to receive the first byte after making a request
  - head of line blocking: when subsequent requests need to wait on prior requests TTFB before being made
    + i.e.  request to / will eventually request css, images, etc., those css images are blocked until / is parsed
    + in HTTP/1.1, browsers open up to 6 paralel connectinos to handle this problem
