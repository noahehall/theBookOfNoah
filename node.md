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
    - creating TCP/IP servers
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

## standard library: binaries
### libuv
  - provides a fast run loop and non-blocking i/o for networking and the file system

### C-Ares

### http
## standard library: core modules
  - mostly written in javascript
  - includes features like networki