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
  - identiy jank:
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
      
