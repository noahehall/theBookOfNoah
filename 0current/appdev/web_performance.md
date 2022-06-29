# web performance

- web performance in action
  - jeremy L wagner
  - reading: done
  - copying: 0

## links

- [wikipedia http3](https://en.wikipedia.org/wiki/HTTP/3)
- [wikipedia http2](https://en.wikipedia.org/wiki/HTTP/2)
- [web technology surveys](https://w3techs.com/)

## basics

### terms

- web performance: refers primarily to the speed at which a website loads, and [IMO] reacts to user interactions once loaded
- latency: the amount of time spent waiting for something,
  - a request to reach the server
  - the server to collect and send its response
  - the browser to download the response
  - etc

### main concepts

- long list of goals
  - improving the user experience
  - speeding up the delivery of content
  - major factor contributing to position in search results
- load times:

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

## metrics

### load time

- the time between the instant a user requests a website and the instant it appears on their screen
  - the time it takes for the servers response to reach the user after the user requests content
- factors of load time
  - http/1 head of line blocking
