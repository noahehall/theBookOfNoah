# TLDR
  - technology supporting API 

# links
  - [http mdn](https://developer.mozilla.org/en-US/docs/Web/HTTP)
  - [api doc & description guide stoplight](https://stoplight.io/api-documentation-guide/basics/)
  - [tcp mdn](https://developer.mozilla.org/en-US/docs/Glossary/TCP)
  - [http authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication)
  - [http headers](https://developer.mozilla.org/en-US/docs/Glossary/HTTP_header)
    - [authorization](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization)
  - http status codes
    - response status codes
      - [401 unauthorized](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401)
      - [www-authenticate](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/WWW-Authenticate)
        - [authentication schemes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#authentication_schemes)


# terminology
  - user agent: any tool that acts on behalf of the user
  - load balancing: a collection of servers sharing the load of client requests. appears as a virtual single server from the client perspective

# headers
  - header: field of an http request/response that provides additional context and metadata about the request/response
  
  - response headers:
    - www-authenticate: defines the authentication method that should be used to gain access to a resource. always sent along with a 401 unauthorized response
  - representation headers: ...
    - Content-Type:
  - simple headers: request headers that are always considered authorized and not explicitly listed in responses to preflight request
  
  - request headers: provide context about the request in order for the server to tailor its response
    - Host: (required for http 1.1) specifies the host and port number of the server tow hich teh request is being sent
      - if no port is specified, the default for the protocol is used (80, 443, etc)
    - Accept-*: various headers indicate the allowed & preferred formats of the response
    - Authorization: contains the credentials to authenticate a user agent with a server
      - can be used after a server responds with `401 unauthorized` status and `WWW-Authenticate` header
      - however, you can supply this on the initial request as well
    - caching headers


# CORS
  - cross-origin resource sharing is a system, consisting of transmitting http headers, that determines whether browsers block frontend javascript code from accessing responses for cross-origin request
  - 
# ip

# tcp: transmission control protocol
  - network protocol that lets two hosts connect and exchange data streams
  - role: 
    - guarantees the delivery of data and packets in the same order as they were sent
    - ensure packats are delivered error free


# udp
# security
## tls: transport layer security
  - encrypted TCP, formally known as SSL
    - client-server protocol that ensures communication privacy by using cryptographic protocols to provide security over a network
  - role:
    - prevent tampering and eavesdropping on email, web browsing, messaging, etc
    - 
## ssl 
  - old standard security for creating an encrypted network link between as erver and a client
    - use TLS instead
  - role
    - ensure all data between client and server is private and secure

# dns

# http
  - client-server protocol for the fetching of resources
    - request are initiated by the recipient(client) and responses sent from the server
    - communication between parties are exchanged via individual messages (as opposed to a stream of data like http2)
    - applicationn layer protocol sent over TCP/TSL 
  - components of http based systems
    - client >< proxy >< proxy >< proxy >< server
    - client: the user agent; primarily performed by the web browser
      - the browser
        - is always the netity initiating the request
          - sends an original request to fetch an HTML doc representing a page
          - parses this file
          - makes additioanl requests corresponding to the execution scripts, layout (CSS), and sub resources contained within the page (images/videos/etc)
    - web server: serves resources requested by clients
    - 
## http2

## speedy


```sh
  # GET request with common headers
    # METHOD URI PROTOCOL
    # HEADER... one per line
    GET poop.com/some/uri HTTP/1.1
    Host: poop.com
    User-Agent: Mozilla/5.0 ........
    Accept: text/html, application/xml;q=0.9,.......
    Accept-Language: en-US, en;q=0.5
    Accept-Encoding: gzip, dflate, br
    Referrer: someother.page.com/asdf
    Connection: keep-alive
    Upgrade-Insecure-Requests: 1
    If-Modified-Since: Mon, 18 Jul 2016 
    If-None-Match: "12332vasdfduash352w4c"
    Cache-Control: max-age=0
    Authorizaton: TYPE CREDENTIALS


  # response
    # to an authorized request:
    # +the client should respond with an Authorization header
    HTTP/1.1 401 Unauthorized
    Date: .....
    WWW-Authenticate: Basic realm="some desc of the protected env|hostname", charset="UTF-8"
  # headers
    # Host: host:port
      Host: developer.mozilla.org:80
  

```