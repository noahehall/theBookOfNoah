# TLDR
  - technology supporting API 

# links
  - [http mdn](https://developer.mozilla.org/en-US/docs/Web/HTTP)
  - [api doc & description guide stoplight](https://stoplight.io/api-documentation-guide/basics/)
  - [tcp mdn](https://developer.mozilla.org/en-US/docs/Glossary/TCP)
  - [http authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication)
  
  - [http headers](https://developer.mozilla.org/en-US/docs/Glossary/HTTP_header)
    - [authorization](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization)
    - [www-authenticate](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/WWW-Authenticate)
  
  - [http status codes](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
    - response status codes
      - [401 unauthorized](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401)
      - [403 Forbidden](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403)
## RFCs
  - [http authentication: RFC 7235](https://tools.ietf.org/html/rfc7235)

# terminology
  - user agent: any tool that acts on behalf of the user
  - load balancing: a collection of servers sharing the load of client requests. appears as a virtual single server from the client perspective

## status codes 
  - before using ANY of the status codes, 
    - [make sure to read this information](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html) 
    - understand any security issues (there are many) with each status code
    - understand any ambiguety (there are many) between similary worded statuses
  - 1xx: indicates a provisional response
    - servers must not send this class of response codes to an HTTP/1.0 client as that protocol did dot define this class of codes
    - proxies must forward these type of response (unless the proxy itself genereated it)
  - 2xx: indicates the clients request was successfully received, understood and accepted
    - 200 ok:
    - 201 created:
    - 202 accepted:
    - 203 non-authoritative information:
    - 204 no-content:
    - 205 reset content:
    - 206 partial content:
    - 
  - 3xx: indicates that further actino needs to be taken by the user agent in order to fullfil the request
    - doesnt require user interaction ONLY IF the second request will be a GET or HEAD
    - 300 multiple choices:
    - 301 moved permanently:
    - 302 found:
    - 303 see other:
    - 304 not modified:
    - 305 use proxy:
    - 
  - 4xx
  - 5xx
## headers
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
  - authentication: how to restrict access to resources and challenge client requests
    - challenge a client request by forcing the client to provide authentication
      - client requests a protected resource
      - server responds with a `401` and `www-authenticate` header containing atleast one challenge
      - client request the previous resource with the `authorization` header including the credentials to satisfy the servers challenge
      - server checks credentials and permits access, or resonds with `403 forbidden`
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
    # to an request that requires authorization:
    # +the client should respond with an Authorization header
      HTTP/1.1 401 Unauthorized
      Date: .....
      WWW-Authenticate: Basic realm="some desc of the protected env|hostname", charset="UTF-8"

    # to a request we refuse to authorize
    # +there is nothing the client can do(unlike a 401)
      HTTP/1.1 403 Forbidden
      Date: ....
  
  # headers
    # Host: host:port
      Host: developer.mozilla.org:80
  

```