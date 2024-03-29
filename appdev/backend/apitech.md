# TLDR

- technology supporting API

# TODO

## do first

- [MDN recommendations for secure web applications](https://infosec.mozilla.org/guidelines/web_security)
- [same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)
- [content negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation)
- [http authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication)
- [compression in http](https://developer.mozilla.org/en-US/docs/Web/HTTP/Compression)
- [conditional requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Conditional_requests)
- [http messages](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages)
- [http sessions](https://developer.mozilla.org/en-US/docs/Web/HTTP/Session)
- [http connection management](https://developer.mozilla.org/en-US/docs/Web/HTTP/Connection_management_in_HTTP_1.x)
- [protocol upgrade mechanism](https://developer.mozilla.org/en-US/docs/Web/HTTP/Protocol_upgrade_mechanism)
- [http range request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Range_requests)
- [redirections in http](https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections)
- [feature policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Feature_Policy)
- [osi model](https://www.networkworld.com/article/3239677/the-osi-model-explained-and-how-to-easily-remember-its-7-layers.html)
- [load balancing algorithms](https://kemptechnologies.com/load-balancer/load-balancing-algorithms-techniques/)
  
- CSP
  - [content security policy header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy)
  - [content security policy explanation](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
  
- caching
  - [cache control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control)
  - [http caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching)
  - [caching tutorial](https://www.mnot.net/cache_docs/)
  - [cache control for civilians](https://csswizardry.com/2019/03/cache-control-for-civilians/)
  
- cookies
  - [set-cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
  - [using http cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)

- CORS/CORB
  - [cors](https://developer.mozilla.org/en-US/docs/Glossary/CORS)
    - [cors explanation](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
    - [preflight request](https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request)
  - [corb](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/services/network/cross_origin_read_blocking_explainer.md#determining-whether-a-response-is-corb_protected)
  
- too many tabs
  - <https://developer.mozilla.org/en-US/docs/Glossary/Proxy_server>
  - <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade>
  - <https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP>
  - <https://developer.mozilla.org/en-US/docs/Web/HTTP/Status>
  - <https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview>
  - <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers>
  - <https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP>
  - <https://github.com/stoplightio/prism>
  - <https://github.com/Redocly/redoc>
  - <https://github.com/Redocly/openapi-cli/graphs/contributors>
  - <https://github.com/isa-group/oas-tools>
  - <https://github.com/isa-group/oas-generator>
  - <https://openapi-generator.tech/>

## do next

- [all this shit](https://cheatsheetseries.owasp.org/Glossary.html)
  - generally check ^ for a refresher before deciding on which/whose/wtf best practice you should follow
  
- HSTS
  - [hsts on mdn](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security)
  - [hsts owasp](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html)
  
- headers
  - [x-frame-options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options)
  - [range request header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range)
    - askholz: generally about this

# links

- [cdn vs load balancer](https://victorops.com/blog/cdns-vs-load-balancers-for-uptime-and-user-experience)
- [practical censorship evasion leveraging content delivery networks](https://www.freehaven.net/anonbib/cache/cdn-ccs2016.pdf)
- [http mdn](https://developer.mozilla.org/en-US/docs/Web/HTTP)
- [api doc & description guide stoplight](https://stoplight.io/api-documentation-guide/basics/)
- [tcp mdn](https://developer.mozilla.org/en-US/docs/Glossary/TCP)

- [http headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
  - [registry of all headers](https://www.iana.org/assignments/message-headers/message-headers.xhtml)
  - response headers
    - [www-authenticate](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/WWW-Authenticate)
    -
  - [request headers](https://developer.mozilla.org/en-US/docs/Glossary/Request_header)
    - [authorization](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization)
    - [proxy authorization](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Proxy-Authorization)
- [http status codes](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
- [mime types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_Types)
  - check this before deciding which mime type to use
  - [using the correct mime type](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Configuring_server_MIME_types)
  - [list of all mime types](https://www.iana.org/assignments/media-types/index.html)
  
## RFCs & specs

- [HUGE list of resources and specifications](https://developer.mozilla.org/en-US/docs/Web/HTTP/Resources_and_specifications)
- [http authentication: RFC 7235](https://tools.ietf.org/html/rfc7235)
- [http authentication schemes](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml)
- [fetch](https://fetch.spec.whatwg.org/)
- [mime types](https://tools.ietf.org/html/rfc6838)
- [mime sniffing standard](https://mimesniff.spec.whatwg.org/)
- [media types](https://www.iana.org/assignments/media-types/media-types.xhtml)
- [http2](https://datatracker.ietf.org/doc/html/rfc7540#section-8.1.2.20)

## online security testing

- [public-key-pins test](https://projects.dm.id.lv/Public-Key-Pins_test)
- [ssl/tls browser test](https://clienttest.ssllabs.com:8443/ssltest/viewMyClient.html)
- [various browser tests](https://badssl.com/)
- [revocation awareness test](https://www.grc.com/revocation.htm)
- [observatory by mozilla](https://observatory.mozilla.org/)

# terminology

- user agent: any tool that acts on behalf of the user
- load balancing: a collection of servers sharing the load of client requests. appears as a virtual single server from the client perspective
- iana: responsible for the glboal coordination of the DNS Root, ip addressing and other internet protocol resources
- proxy server:

## CDN

- CDN: content delivery network; network of servers spread across a wide eographic area
  - each server within a CDN hosts the same application/data, or certain parts of the service
- responsibilities
  - optimize the experience of end-users in disparate geographic regions
  - response time: shorten the time required for a server to communicate with a client by reducing the geographical distance between the server and clients
    - modern fiber optic cables travel at the speed of light
    - however, the greater the distance between a sever and its client, the greater number of orutes & repeats that separate them
      - this all introduces delay
  - uptime: if any server goes down, automatic failover to other servers in the CDO will be able to serve the content
  - enduser access restrictions: e.g. if a firewall blocks a users machine from access a server in one country, a CDN network can provide copies of the content in another country
    - its all about battling digital censorship

## load balancer

- automatically distributes network traffic across a cluster of servers (usually in close proximity to each other)
  - usually the servers are in the same data center
  - could be an actual stand device, or software app tha runs on other networking hardware
- responsibilities
  - request handling: ensure requests for an application/data are spread evenly across the network of servers that hosts the application/data
    - e.g. if you have multiple servers each with a copy of an application, you want to ensure each server receives a fair share of network requests
    - uses various [types of algorithms and strategies](https://kemptechnologies.com/load-balancer/load-balancing-algorithms-techniques/) in deciding where data is sent
  - optimizing uptime & performance: redirecting traffic to servers that provide the fastest/appropriate response
  - OSI layer routing
    - layer 4: filtering traffic based on Ip address
    - layer 7: filtering traffic based on http header data

  -

## encodings

- chunked: dat is sent in a series of chunks
  - `content-length` cant be used
    - at the beginning of each chunk you
      - specify the length of the current chunk in hexadecimal format
      - followed by `\r\n`
      - then the chunk itself
      - followed by another `\r\n`
      - until the terminating chunk with a length of 0
      - followed by the trailer (may contain a sequence of header fields)
- compress: using LZW algorithm. not used by browsers today due to a patent issue
- deflate: compression algorithm (RFC 1951) using zlib (RFC 1950)
- gzip: uses LZ77 with a32-bit CRC. servers supporting this enoding should also recognize `x-gzip` as an alias for compatibility
- identity: i.e. no compression/modification. should always be deemd acceptable unless explicity specified
  - askholz: so if this is included, dont accepted? wtf?
    - <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Transfer-Encoding>

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
  
- 3xx: indicates that further actino needs to be taken by the user agent in order to fullfil the request
  - doesnt require user interaction ONLY IF the second request will be a GET or HEAD
  - 300 multiple choices:
  - 301 moved permanently:
  - 302 found:
  - 303 see other:
  - 304 not modified:
  - 305 use proxy:
  - 306 unused: never use this status code (its deprecated)
  - 306 temporary redirect:

- 4xx: indicates the client has erred, e.g. bad formatted request, requires authorization, unallowed request type, etc
  - the server should ALWAYS explain the error, and whether it is a temporary/permanent condition
    - not required in response to a HEAD request
  - 400 bad request:
  - 401 unauthorized:
  - 402 payment required:
  - 403 forbidden:
  - 404 not found:
  - 405 method not allowed:
  - 406 not acceptable:
  - 407 proxy authentication required:
    - indicates the request was rejected because it lacks valid auth credentials for a proxy server that is between the client and the server that can access the requested resource
    - always include a `Proxy-Authenticate` header containing information on how to authorize
  - 408 request timeout:
  - 409 conflict:
  - 410 gone:
  - 411 length required:
  - 412 preconditin failed:
  - 413 request entity too large:
  - 414 request-urei too long
  - 415 unsupported media type:
  - 416 requested range not satisfiable:
  - 417 expectation failed
  - 429 too many requests
- 5xx: indicates the server has erred/incapapble of performing the request
  - the server should ALWAYS explain the error, and whether it is a temporary/permanent condition
    - not required in response to a HEAD request
  - 500 internal server error:
  - 501 not implemented:
  - 502 bad gateway:
  - 503 service unavailable:
  - 504 gateway timeout:
  - 505 http version not supported:

## mime types

- choose wisely
  - a web browser has not way of knowing the authors intention which may cause unexpected behavior when providing the resource to the user
  - loss of control: if the browser ignores the reported mime type, the author loses control over how hteir content is to be processed
  - security: some content types (e.g. executables) are inherently unsafe. thus certain mime types are usually restricted in terms of what actions a browser will take when given that type of contexts
  -
- media type: a standard that indicates the nature and format of a document, file, or assortment of bytes
  - browsers use the MIME type, not the file extension to detemrine how to aprocess a url
  - is set in the `content-type  header
- TYPE/SUBTYPE;param=value
  - type: the general category into which the datt aype falls, e.g. video or text
    - discreet type: represent a single file/medium
      - **application**: any kind of binary data that doesnt fall into one of the other types
        - any type of data that is executed/interpreted/binary data that requires a specific application to use[range request header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range)
  - askholz: generally about this
          - subtypes: octet-stream, pdf, pkcs8, zip, ogg

    - **example**: reserved for use as a palceholder in examples showing how to use mime types
      - should never be used outside of sample co listings and documentation

    - **font**: font/typeface data
      - subtypes: woff, ttf, otf

    - **image**: image/graphical data including both bitmap and vector still images as well as animated versions of still image formats
      - subtypes: jpeg, png, svg+xml, apng, avif gif, webp,

    - **model**: data for a 3d object or scene
      - subtypes: 3mf, vrml

    - **text**: text-only data including any human-readable content, source code or textual data such as CSV
      - subtypes: plain, csv, html, css, javscript,

    - **video**: video data or files
      - subtypes: mp4, webm, ogg

    - **audio**: audio/music dat
      - subtypes: mpeg, vorbis, wave, wav, webm, ogg,

    - multipart: has TWO types with their own subtypes

      - **message**: a message that encapsulates other messages, e.g. to represent an email that includes a forwarded message as part of its dat, or to allow sending very large message in chunks as if it were multiple messages
        - subtypes: rfc822, partial

      - **multpart**:  document comprised of multiple component parts, each of which may have its own individual mime type, or encapsulating multiple files being sent together in one transaction
        - subtypes: form-data, byteranges
  - subtype: the exact kind of data of the specified type the MIME represents e.g. text/plain|html|calendar
  - param: provide additional details, e.g. `charset=UTF-8`

## headers

- header: field of an http request/response that provides additional context and metadata about the request/response
- custom headers generally start with `X-` but was deprecated in 2012
- hop-by-hop headers: for a single transport-level connection
  - MUST NOT be retransmitted by proxies/cached
  - set using the `connection` header
- end-to-end headers: MUST be transmitted to the final recipient (server/client)
  - intermediate proxies must retransmit these headers unmodified
  - caches must store these headers
  
### general headers

- can be used in multipel settings, e.g. both request + response
- Keep-Alive: informs the receiver how the connection can be used to set a timeout and a maximim amount of requests
  - cant be used with http2
  - `Connection` header must be set for this header to have any meaning
- Connection: controls whether the network connection stays open after the current transaction finishes
  - cant be used with http2
- Content-Disposition:
  - response (main body): indicating the content is expected to be displayed inline in the browser, i.e. as a webpage or part of a webpage, or as an attachment to be downloaded
  - request/response: in `multipart/form-data` bodyl must be used one ach subpart of a multipart body to give information about the field it applies to
    - the subpart is dilimited by the boundary defined in the content-type header
  - email: defined in the context of MIME message
  
### hop-by-hop header

- used by proxy servers
- Transfer-Encoding: the form of encoding used to safely transfer the payload-body to the user
  - applied to a message between two nodes, not to a resource itself
  - each segment of a multi-node connection can use different transfer-encoding values
  - use `content-encoding` header to tcompress the data over the whole connection from end-to-end

### response headers

- provides context about the response/server providing the response but doesnt related to the content of the message
- www-authenticate: defines the authentication method that should be used to gain access to a resource. always sent along with a 401 unauthorized response
- proxy-authenticate: contains information on how to authenticate to gain access to a resource behind a proxy server
  - the proxy server authenticates the request before transmitting the request any further
  - sent with a `407 proxy authentication required`
- x-content-type-options: informs the client that `content-type` headers should not be changed and must be followed
  - a way for servers to opt out of mime sniffing, e.g. when the mime type is deliberately configured
  - requesting blocking due to nosniff for script and style
  - enables CORB protection for html,txt,json and xml files
- retry-after: how long (seconds|HTTP Date) the client should wait before making a follow up request
  - with 503: how long the service is expected to be unavailable
  - with 429: how long to wait before making a new request
  - with a redirect (e.g. 301): minimum time to wait before issueing the redirect request
- Age:
- Location:
- Server:
- Trailer: permits the sender to include additional fields/headers at the end of chunked messages in order to supply metadata that might be dynamically generated while the message body is sent
  - e.g. message integrity check, digital signature, post-processing status
    - CANT INCLUDE
      - message framing headers: e.g. transfer-encoding, content-length
      - routing headers: e.g. host
      - request modifiers: e.g. controls and conditionals like cache-control, max-forwards, TE
      - authentication headers: e.g. authorization, set-cookie
      - other headers: content-encoding, content-type, content-range, and trailer itself
  - requires the `TE` request header to be set to *trailers*
  - askholz: use cases and best practices
- X-XSS-Protection: stop  pages from loading when browsers detect reflected cross-site scripting (XSS) attacks
  - largely unnecessary in modern rowsers when sites implement strong CSP policies that disable the use of inline javascript
  - if not supporting legacy browsers, dont use this header
    - instead use a **strong content-security-policy** without allowing `unsafe-inline` scripts
  
### request headers

- provide context about the request (or the client) in order for the server to tailor its response
- Host: (required for http 1.1) specifies the host and port number of the server tow hich teh request is being sent
  - if no port is specified, the default for the protocol is used (80, 443, etc)
- Accept: advertises which content types (as mim types) the client is able to understand
  - the server then uses `Content Negotiation` logic and selects one of the proposals as the `Content-Type` in the response
- Accept-*: various headers indicate the allowed & preferred formats of the response
- Authorization: contains the credentials to authenticate a user agent with a server
  - usually after a server responds with `401 unauthorized` status and `WWW-Authenticate` header
  - however, you can supply this on the initial request as well
- Proxy-Authorization: the credentials to authenticate a user to a proxy server
  - usually after the server responds with a `407 proxy authentication required` and the `proxy-authenticate` header
- TE: specifies the transfer encodings the client is willing to accept
  - the server then uses `Trailer` in response
  - TE and Trailer regulate the use of trailers
  - askholz for example use case

### representation headers

- provide context about the body of the resource (representation), e.g. the mime type, encoding/compression etc
  - representation: a particular version of a resource. e.g. a resource may be available in multiple formats (xml/json) or encodings (gzip, br)
- Content-Type: indicate the original media type of the resource (prior to any contentn encoding applied for sending)
  - in response: the content type of the returned content
    - some clients do MIM sniffing and wont respect this value
      - set `X-Content-Type-Options: nosniff` to prevent this
  - in requests: informs the server what type of data the client is sending
- Content-Encoding: encodings that have been applied to the message body, and in what order
  - informs the recipient how to decode the payload in order to obtain the original format
  - the original media type is psecified in the `content-type` header
  - compressing acompressed media type (e.g. zip, jpeg) may not be appropriate, as this can make the payload larger
- Content-Language
- Content-Location

### simple headers

- request headers that are always considered authorized and not explicitly listed in responses to preflight request (defind by CORS)

### caching headers

# CORS

- cross-origin resource sharing is a system, consisting of transmitting http headers, that determines whether browsers block frontend javascript code from accessing responses for cross-origin request
- preflight request:

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
  
- Methods
  - GET: request a representation of a specific resource
  - POST: sends data to a server (usually to be created), not idempotent (because it has side effects if called multiple times with the same data)
    - use cases:
      - annotation of existing resources
      - creation of new resources
      - providing blocks of data
      - extending a database
    - with a form: put the data in the `enctype` attribute of the form, or `formenctype` attribute of the input|button
      - content types
        - application/x-www-form-urlencoded: keys + values encoded in key-value tuples separated by `&` with `=` between key and value
        - multipart/form-dat: each value is sent as a block of data (body part) with a client defined elimiter (boundary) separating each part
          - keys are specified in the `Content-Disposition` header of each part
        - text/plain
  - PUT: sends data to a server (usually to be updated), IS idempotent (because it has NO side effects if called multiple times with the same data)

## http authentication schemes

- basic
- bearer
- digest
- HOBA
  - used with http servers/proxies
- mutual
- negotiate
  - violates
    - http semantics (being connection-oriented)
    - HTTP syntax (use of syntax incompatible with ww-authneticate and authorization header field)
- oauth
- SCRAM-SHA-1
- SCRAM-SHA-256
- vapid

## http2

- doesnt support
  - http1 chucked transfer encoding mechanism
  - http1 keep-alive header

## speedy

# examples

- various examples for items copypasta into this document

```sh
  # REQUEST SYNTAX
    # METHOD URI PROTOCOL
    # HEADER... one per line
    # blank line, then body
  # GET
    # get a resource
      GET poop.com/some/uri HTTP/1.1
      Host: poop.com
      User-Agent: Mozilla/5.0 ........
      Accept: text/html, application/xml;q=0.9,.......
      Accept-Language: en-US, en;q=0.5
      Accept-Encoding: gzip, dflate, br
      Content-Type: text/html; charset=UTF-8
      Referrer: someother.page.com/asdf
      Connection: keep-alive
      Upgrade-Insecure-Requests: 1
      If-Modified-Since: Mon, 18 Jul 2016 
      If-None-Match: "12332vasdfduash352w4c"
      Cache-Control: max-age=0
      Authorizaton: TYPE CREDENTIALS
    
    # inform the server the content-types we understand
      GET something/please HTTP/1.1
      Accept: <MIME_type>/<MIME_subtype> #specific type
      Accept: <MIME_type>/* #any type belonging to this class
      Accept: */* #everything
    # Multiple types, weighted with the quality value syntax:
      Accept: text/html, application/xhtml+xml, application/xml;q=0.9, image/webp, */*;q=0.8


  # POST
    # askholz: when to use x-www-form-urlencoded vs multipart/form-data
    # send as application/x-www-form-urlencoded
      POST /test HTTP/1.1
      Host: foo.example
      Content-Type: application/x-www-form-urlencoded
      Content-Length: 27

      field1=value1&field2=value2
    
    # send as multipart/form-data
      POST /test HTTP/1.1
      Host: foo.example
      Content-Type: multipart/form-data;boundary="boundary"

      --boundary
      Content-Disposition: form-data; name="field1"

      value1
      --boundary
      Content-Disposition: form-data; name="field2"; filename="example.txt"

      value2
      --boundary--



  # responses
    # to a general request informing the client the max duration of the persistent connection
      HTTP/1.1 200 OK
      Connection: Keep-Alive
      Content-Encoding: gzip
      Content-Type: text/html; charset=utf-8
      Date: Thu, 11 Aug 2016 15:23:13 GMT
      Keep-Alive: timeout=5, max=1000
      Last-Modified: Mon, 25 Jul 2016 04:32:39 GMT
      Server: Apache

    # to an request that requires authorization:
    # +the client should respond with an Authorization header
      HTTP/1.1 401 Unauthorized
      Date: .....
      WWW-Authenticate: Basic realm="some desc of the protected env|hostname", charset="UTF-8"

    # to a request we refuse to authorize
    # +there is nothing the client can do(unlike a 401)
      HTTP/1.1 403 Forbidden
      Date: ....
    
    # to a request a proxy server refuses to pass on to another server for handling the request
    # +the client must respond with a correct Proxy-Authorization header
      HTTP/1.1 407 Proxy Authentication Required
      Date: Wed, 21 Oct 2015 07:28:00 GMT
      Proxy-Authenticate: Basic realm="Access to internal site"

    # to too many requests
    # +uses the retry-after header specifying how long(seconds) to wait
    # + can be used with 429, or 503
      HTTP/1.1 429 Too Many Requests
      Content-Type: text/html
      Retry-After: 3600

    # to a request for a file; should trigger a save-as dialog
      200 OK
      Content-Type: text/html; charset=utf-8
      Content-Disposition: attachment; filename="cool.html"
      Content-Length: 21

      <HTML>Save me!</HTML>
  
  # other header examples
    Host: developer.mozilla.org:80
    Content-Disposition: inline # inside a webpage|as a webpage
    Content-Disposition: attachment # should be downloaded
    Content-Disposition: attachment; filename="filename.jpg" #downloaded with this name
    # as a header for a multipart body, each subpart requires a name
    Content-Disposition: form-data; name="fieldName"; filename="filename.jpg" 

    # only if you support legacy browsers 
    X-XSS-Protection: 0 # disable filtering
    X-XSS-Protection: 1 # enables filtering + sanitize page
    X-XSS-Protection: 1; mode=block # enable + prevent rendering
    X-XSS-Protection: 1; report=<reporting-uri> # enable + sanitize + report
  

```
