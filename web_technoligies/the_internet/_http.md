# MUST DO:
  - https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching
  - https://www.w3.org/2005/MWI/BPWG/techs/CachingWithETag.html
  - https://devcenter.heroku.com/articles/increasing-application-performance-with-http-cache-headers
  - https://classroom.udacity.com/courses/ud884/lessons/1464158641/concepts/14734291220923#

## links
  - https://en.wikipedia.org/wiki/Tim_Berners-Lee
  - https://www.w3.org/People/Berners-Lee/
  - https://www.ted.com/speakers/tim_berners_lee
  - https://en.wikipedia.org/wiki/Standard_Generalized_Markup_Language
  - https://en.wikipedia.org/wiki/HTML
  - https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol
  - http://www.restapitutorial.com/lessons/httpmethods.html
  - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  - https://developers.google.com/web/updates/2015/03/introduction-to-fetch?hl=en
  - http://nc110.sourceforge.net/
  - https://en.wikipedia.org/wiki/Netcat
  - https://en.wikipedia.org/wiki/List_of_HTTP_header_fields
  - https://badssl.com/
  - https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content
  - https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content/How_to_fix_website_with_mixed_content
  - http://httparchive.org/trends.php?s=All&minlabel=Nov+15+2010&maxlabel=May+15+2016
  - http://dev.chromium.org/spdy/spdy-whitepaper
  - https://http2.github.io/http2-spec/compression.html
  - https://www.w3.org/Security/wiki/Same_Origin_Policy
  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS#Preflighted_requests
  - https://en.wikipedia.org/wiki/Cross-site_scripting


# background
## The Web
  - is just a small part of the internet
  - is a platform for web developers to publish ideas to the world
  - it is clients (browsers) communicating with servers
  - its all about publishing and accessing documents/information
  - history:
    + tim berners lee created the web in order for researchers to easily transfer documents between each other
    + he created a subset of SGML and called it HTML
    + he created HTTP, which is designed to transfer HTML
  - architecture
    - HTTP > TCP > IP > ethernet
      + TCP: impacts how we format our requests for best performance
        - allows us to have multiple streams of data between connections
        - each stream is distinguished by PORT numbers
        - 3 way handshake to make a new connection on http
          1. i ask you: i want to talk
          2. you ask me: you heard i want to talk
          3. i tell you: yes, that is correct
          4. for https, and additional TLS handshake must be executed
      + IP: determines how we talk to other machines on the net


# HTTP Requests and Responses:
#### Requests
  - request structure: only requires method and host header
    + method: GET, POST, etc, tells the server what the client wants to do
      - GET /path/to/document.jpg HTTP/1.1
      - method, document path, http version
    + Headers
      - Host: where the server is located
      - User Agent: type of client
      - Connection:
      - Accept: what type of document format the client accepts
      - If-None-Match: the version already available in client
  -
##### Request Methods
  + GET: retriev stuff
  + POST: create new stuff
    - the response should redirect to the newly created stuff
  + PUT: update existing stuff
  + DELETE: duh!
  + HEAD: get the headers of a file, without the actual file
    - useful for:
      + checking if there is enough space to store the response
      + if your cached version is still up to date
      + only useful for very large files, as you will incur two round trips
  + OPTIONS: get a list of methods that are accepted on the current URL
    - Post: you should respond to post requests with a redirect so that reloading the page doesnt cause an additional post
##### Request Headers
  - Connection: Keep Alive
    + informs the server to keep the connection open after it returns the response
    + this allows you to send multiple requests to the same server, without having to go through the TCP 3 way handshake each time
#### Responses
  - response structure: only requires http version line and content-length header
    + HTTP/1.1 200 OK
      - http version, status code, status text
    + Headers
      - Content-Length:
      - Server:
      - Etag:
      - Content-Type:
      - Date:
    + Binary data: the actual data
##### Response Headers
  - https://en.wikipedia.org/wiki/List_of_HTTP_header_fields
  - Content-Length
    + is a header that must be contained in every response and tells the browser the size of the body in the response. This way the browser knows how many bytes it can expect to receive after the header section and can show you a meaningful progress bar when downloading a file.
  - Content-Type
    + is also a non-optional header and tells you what type the document has. This way the browser knows which parsing engine to spin up. If it's an image/jpeg, show the image. It’s text/html? Let’s parse it and fire off the necessary, additional HTTP requests. And so on.
  - Last-Modified
    + is a header that contains the date when the document was last changed. It turned out that the Last-Modified date is not very reliable when trying to figure out if a document has been changed. Sometimes developers will uploaded all files to the server after fixing something, resetting the Last-Modified date on all files even though the contents only changed on a subset. To accommodate this, most servers also send out an ETag.
  - ETag
    + stands for entity tag, and is a unique identifier that changes solely depending on the content of the file. Most servers actually use a hash function like SHA256 to calculate the ETag.
      1. enables efficient resource update checks - no data is transferred if the resource has not changed

  - Cache-Control
    + is exactly what it sounds like. It allows the server to control how and for how long the client will cache the response it received. Cache-Control is a complex beast and has a lot of built-in features. 99% of the time, you only need the “cacheability“ and the “max-age”.

  - If-Modified-Since
    + permits the server to skip sending the actual content of the document if it hasn’t been changed since the date provided in that header. Is there something similar for ETags? Yes there is! The header is called If-None-Match and does exactly that. If the ETag for the document is still matching the ETag sent in the If-None-Match header, the server won’t send the actual document. Both If-None-Match and If-Modified-Since can be present in the same request, but the ETag takes precedence over the If-Modified-Since, as it is considered more accurate.


# REST: REpresentational State Transfer
## Basics
  - basic entitires are collections and entities inside those collections
    + GET <collection name>/<item name>


# http
  - is public, and anyone can eaves drop on your requests and responses
  - https://en.wikipedia.org/wiki/Firesheep


# https
  - is secured, no one can eaves drop on your requests or responses
    + it encrypts the requests and responses between server and client
    + authentication: this stops man in the middle attacks
  - man in the middle attacks
    + someone inserts their server in between you and the server you want
    + even though its https, there intercept, and relay to your requested server, and still hijack your requests and responses
  - HTTPS = http + TSL (formerlly ssl)
## TLS (formerlley ssl)
  + TLS: transport layer security, can be use with any protocol, e.g. FTP has FTPS
    - encrypts communcation via a certificate issued by a certificate authority
      + metadata about the server
      + an encrypted fingerprint to decode communication
      + certificates validates a server, and the owner of the server
  + see all certificates: chrome://settings/search#Certificates
  + Encryption
    - symetric encryption (i.e. public key encryption): you encrypt some data with a key, pass the data to someone else, who has a symetrical key for unlocking the data
      + http://hitachi-id.com/concepts/asymmetric_encryption.html
    - browser encryption:
      + encryption key: is public (i.e. the public key), so anyone can send an encrypted message
      + decryption key: is private (i.e. the private key), so only the client can decrypt the message
  + Hashing
    - the process of transforming data into a short representation of the original data
      + the smallest change in the original data will have enormous changes in the hash
        - if two documents yield the same hash, it is a super high probability they are the same document
    - hashing requirements:
      1. should be impossible to undo the hash transformation
      2. should be impossible to create two identical hashes from distinct documents
    - types of hashing:
      + the number says how big the hash is in bits
        - no matter how big the document is that you pass in, you will always get the # of bits indicated
      + SHA1:
      + SHA256:
      + SHA512:
### TLS handshake
  1. server sends client the certificate
    - public key
    - domain the certificate is for
    - signature by the certificate authority
  2. client confirms information
    - is domain correct?
    - is the authority signature valid?
      - all browsers have a collection of a certificate authorities including their public keys
  3. client generates a random key for symmetric encryption to be used from here forward
    - the browser encrypts the random key with the servers public key
    - symmetric is faster than assymetric encryption
    - only the server can decrypt the random key with the  private key and access the information
### TLS (ssl) errors
  - certificate authority signature is invalid
  - server is unable to communicate after switching to ssymetric encryption
  - certificate expires (they have expiration dates)
  - certificate is valid, but the server is invalid
### Certificates
  - An invalid certificate is where the URL for the certificate does not match the URL in the browser's address bar
  - an invalid signature, is when the decrypted hash does not match the one signed by the certifcate
  - Certificate Authorities: sign (validate) certificates
  - To speed up the encrypting and decrypting process, only the HASH is encrypted,
  - Self signed certificates:
    + these certificates refer to themselves as their own certificate authority
    + browsers will complain
### Mixed Content
 - when a TLS secure origin requests non secure content
 - you can get pass this by only consuming securing content


# HTTP2
  - head of line requests: when one request is blocking others from completing
    + a browser will open at most 6 simultaneous connections to a server
    + you will have to wait for a round trip (req + res) to complete before another request can happen
  - benefits
    + header compression
      - all streams share the browser compressor, so headers never have to be sent twice
    + multiplexing: combining multiple connections into a single connection via streams
      - streams are split up into frames
      - resolves head of line blocking
    + concatenating JS/CSS files is no longer necessary since head of line blocking is gone
      - its also worse to serve one big file, vs a lot of small files, for sites that use caching
        + you are forcing your users to download the concated files, instead of the single file that changed

# Proxy
  - these are servers that sit between you and some other server
  - useful for:
    1. adding additinoal compression
    2. downsampling images
    3. doing aggressive caching

## CDN
  - content delivery network: system of distributed servers that deliver assets to a user based on geographic locations of the user, the origin of the assets, and a content delivery server
    + the closer the CDN server to the user geographically, the faster the content will be dleivered to the user.
    s
