# books
  - nodejs in practice
    - alex young, marc harter, ben noordhuis
  - nodejs in action
    - mike cantelon, marc harter, tj holoway-chuk, nathan rajlich,


# nodejs architecture
  - platform for building netwoork applications
  - built on v8, googles javascript runtime engine
  - embraces non-blocking i/o as a way to improve performance in certain types of applicatioons
  - use cases
    - downloading/extracting content from web pages
    - producing/consuming JSON APIs
    - creating TCP/IP/UDP servers
    - advertising distributioon
    - game servers
    - content management systems, blogs
  - architecture stack
    - app.js
    - V8
      - core modules
      - C++ bindings
      - libuv, C-Ares, Http
    - the opeprating system

## globals
  - process
    - pipe data into and out of a node program by accessing standard i/o streams
  -  console
  - module system
    -
## standard library: binaries
### libuv
  - provides a fast run loop and non-blocking i/o for networking and the file system

### C-Ares

### http

## standard library: core modules
  - mostly written in javascript

### EventEmitter
  - basis for most of nodes core modules
  - streams netowrking and file system APIs derive from it

#### Streams
  - the basis for scalable i/o
  - used to model data with unprediticable throughput, e.g. networking connections
  -

### fs
  - reading and writing files using non-blocking i/o
```js
  // get info about files
    // fs.stat
    // fs.statSync

  // process the contents of a file
    // fs.createReadStream


```

### net
  - basis for the http module
  - can be used to create generalized network clients and servers
  -
