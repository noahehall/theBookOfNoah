# web security

- reading: done
- copying: PAGE 152 dont be an accessory
  - categorized as unwitting accomplice

## links

- blogs
  - [krebs on security](https://krebsonsecurity.com/)
  - [schneier on security](https://www.schneier.com/)
- envs
  - [kali linux](https://www.kapageli.org/)
  - [caine](https://www.caine-live.net/)
  - [blackbox](https://www.backbox.org/)
  - [parrot](https://www.parrotsec.org/)
  - [demon](https://www.demonlinux.com/)
- tools
  - [metasploit](https://www.metasploit.com/)
  - [samurai](https://owasp.org/www-project-samuraiwtf/#SamuraiWTF_Project)
  - [nessus](https://www.tenable.com/products/nessus)
  - [portswigger](https://portswigger.net/burp)
  - [wireshark](https://www.wireshark.org/)
  - [cobalt strike](https://www.cobaltstrike.com/)
  - [test browser compliance to web standards](http://acid3.acidtests.org/)
  - wmap
  - nmap
  - [sans institut opensource](https://www.sans.org/cloud-security/tools/)
  - [center for internet security](https://www.cisecurity.org/)
    - TODO: review their prehardened OS images
- stuff
  - [checksums](https://en.wikipedia.org/wiki/Checksum)

## basics

### best practices

- these are part of ever mitigation strategy
- test code in a dedicated and isolated test environment that resembles prod as close as possible
- have reliable, reproducible, and revertible release processes.
- after each release, execute penetration testing to identify vulnerabilities before their exploited
- logging, monitoring & error reporting in your runtime environment
- stay ahead of security advisories for any third-party code
- dont rely on any type of header validation
- dont use microsoft windows servers (haha IMO!)
  - or just dont use microsoft windows!
- defense in depth: secure your application with redundancies
  - consider and enforce security at every level of the stack
  - enabling failures at one level to be mitigated by other strategies
  - remove uneeded software from your server
- principle of least privilege: demands that every process and appliation run only with the permissions it needs to perform their assigned tasks
  - so if an attacker compromises component A, they shouldnt be able to compromise component B
  - uses different roles for admin, dev, and runtime usecases, even at the service level
    - e.g roles for an SQL database
      - admin: can perform DDL & DML
      - app: cant perform DDL, but can perform DML
      - dev: admin in development
  - limiting the directories a process can read/write from/to
    - e.g. via a `chroot` jail
  - limiting network access between & too applications and processes
    - via firewalls and access control lists on the network

### terminology

- safeframe: allows ad network publishers to specify that ads must be run in an iframe, and offers an API that allows the advertiser to overcome some of the native limitations of frames
- exploit kits: determine whether a particular user agent/operating system is vulnerable before delivering the actual malicious code (the payload)
  - payload: include scripts that may redirect/lock the browser, viruses, ransomware delivered via vulnerabilities in plugins, or javascript that mines cryptocurrency, etc
    - generally hosted at dynamically generated URLs and avoid automated scans by triggering only sporadically
- webhook: when a service provider needs to make calls to your server, e.g. to send notifications; a reverse API on your website that the service provider will send HTTP requests when an event happens
- attack vectors: the methods that adversaries use to breach or infiltrate your network
- attack surface: the sum of the different points (for "attack vectors")
- checksum: a small-sized block of data derived from another block of digital data for the purpose of detecting errors that may have been introduced during its transmission or storage. By themselves, checksums are often used to verify data integrity but are not relied upon to verify data authenticity.
  - digital fingerprints that are calculated when a resource is created, and can be reused to recalculate checksum upon download to ensure the uploaded version matches the downloaded version
- subresource integrity checks: checksums for the browser
- security through obscurity: relying on an attacker being unable to guess something; i.e. relying on an attackers ignorance/obscurity of the system
- embargo resources: enable access to sensitive resources only at a certain point in time, e.g. financial reports are often embargoed
- digital signature: acts as a unique fingerprint for some input data; that can be easily recalculated as long as they have the signing key originally used to generate the signature
- hash: the output of a one-way encryption algorithm that makes it easy to generate a unique fingerprint for a set of input data (really difficult to take the output and revert it to the input data)
  - should be quick to calculate (but not too quick)
  - bcrypt: allows you to add extra iterations to the hashing function to make it strong and more time-consuming
- salting hashes: i.e. adding an element of randomness to the hashing algorithm so the input data doesnt solely determine the output hash
  - protects you against rainbow tables
  - you need to store the salt value securely, and reuse it when validating hashes
- rainbow tables: commonly used passwords that have been put through a known hashing algorithm
  - matching hashes against precalculated values yield a very good return for an attacker
- cookie: small pieces of text passed back n forth between clients & servers in HTTP headers
- exploit: a piece of code that illustrates how to take advantage of a secuirty flaw
- 0 day: type of exploit that has be publicized for less than a day/not publicized at all
- white hat: discovery security holes and will advise owners of the exploits before making them public
- black hat: hoard exploits to maximize the time windows during which they can use vulnerabilities
- dark web: websites available only via special network nodes that anonymize incoming IP address
- worm: a recursive exploit that tricks other computers into recursively tricking other computers to execute some code
- REST: representational state transfer; design philosophy for mapping website operatins to the appropriate HTTP method according to their intention
- ICANN: internet corporation for assigned names and numbers
  - alotts blocks of IP addresses to regional authorities
- regional authorities
  - grant blocks of addresses to internet service prviders and hosting companies within their region
  - when you connect to the net, your ISP assigned an IP to your computer
    - however the IP is rotated periodically
  - similary: companies that host content are assigned an IP for each server they connect to the network
- serialization: the process of converting an in-memory data structure into a stream of binary data
  - usually for the purpose of passing the data structure across a network
  - deserialization: the reverse process that occurs at the other end, when the binary data is converted back into a data structure
- web shell: an executable script that will take elements from an HTTP request & execute them as a command line script and retun the result
- URI: uniform resource identifier
  - protocol: http://
  - domain: google.com
  - path: /poop
  - query string: ?then=wipe
  - fragment: #then-flush
    - used for
      - intra-page navigation, i.e. linking directly to h-tags
      - record & reload state: i.e. keeping state across browser refreshes
        - e.g. in infinite-scroll, you can store the current position in the URI fragment and load & then scroll to the thing

#### internet protocol suite

- internet protocol suite: dictates how computers exchange data over the web
  - there are over 20 protocols collectively under this umbrella
- internet protocol layers
  - network layer
    - ARP
    - MAC
    - NDP
    - OSPF
    - PPP
  - internet layer
    - IPv4
    - IPv6
  - transport layer
    - TCP
    - UDP
  - application Layer
    - TLS
    - SSL
    - SSL
    - DNS
    - FTP
    - HTTP
    - IMAP
    - POP
    - SMTP
    - SSH
    - XMPP

##### internet layer

- IP: internet protocol addresses
  - destination for data packets
  - unique binary numbers assigned to individual internet-connected computers
  - IPv4: 2x32 addresses
  - IPv6: represented as 8 groups of 4 hexadecimal digits separated by colons

##### Transport Layer Protocols

- TCP: transmission control protocol
  - enables two computers to reliably exchange data over the internet
  - created in response to ARPANET (predecessor to the internet)
  - the first msg sent (was on ARPANET) was a LOGIN command destined for a remote computer at stanford university, but crashed after the first two letters (reason for TCP)
  - high level workflow
    - messages sent via TCP are split into data packets
    - the servers that make up the internet push these packets from sender to receiver without having to read the entire msg
    - the receiver reassembles all the data packets into a usable order according to the sequence number on each packet
      - each packet the receiver gets, it responds with a receipt back to the sender
      - without the receipt, the sender will resend the packet
        - possibly along a different network path
        - possibly at an adjusted speed based on the speed of consumption by receiver
    - this send & receipt workflow guarantees msg delivery
    - TCP doesnt dictate how the data being sent is meant to be interpreted, that occurs at a higher level protocol (e.g. HTTP)
      - unencrypted TCP data are vulnerable to man in the middle attacks, see TLS for more info
- UDP: User Datagram Protocol
  - newer than TCP
  - commonly used with video/situations where dropped data packets are expected/msg guarantee isnt required, but the data packets can be streamed at a constant rate

##### Application Layer Protocols

- TLS: transport layer security

  - arguable what fkn layer this is actually in (some say its not the application layer, but a lower layer)
    - makes sense it would be in the transport layer, (because of the name)
  - method of encryption that provides both privacy and data integrity
  - ensures that
    - privacy: packets intercepted by a third party cant be decrypted without the appropriate encryption keys
    - data integrity: any attempt to tamper with the packets will be detectable
  - workflow
    - HTTP conversations using TLS are called HTTP secure
    - HTTPS requires the client & server to perform a TLS handshake
      - both parties agree on an encyption method (cipher) and exchange encryption keys
    - any subsequent data packets (request & responses) will be opaque to outsiders
  - TLS Handshake: consists of assymetric and symmetric encryption, and Message Authentication Codes for fingerprinting (see cipher suites)
    - selection of the cipher used for encryption & decrypting all data packets
      - user agents will inform servers which cipher suites it supports
      - and the server replies with the best cipher suite that it also supports, the servers digital certificate and the encryption (public) key
      - the user agent verifies the authenticity of the certificate with the issueing certificate authority
      - the user agent generates a session key, encrypts it with the servers public key using the key-exchange algorithm from the chosen cipher suite and sends it to the server
        - the session key (another large random integer) is used to encrypt all subsequent TLS conversation (data packets) with the block cipher from the cipher suite chosen by the server
      - now data packets can finally be sent over TLS efficiently using the symmetric block cipher
      - additional info
        - the initial phase is to use assymetric encryption to encrypt the block cipher key before passing it to the recipient
        - this is to prevent theft of the single key used to encrypt & decrypt symmetrically encrypted data
        - block ciphers: most data packets will be symmetrically encrypted for efficiency, the recipient should already have the encryption & decryption key from the first phase of the handshake
        - the block ciphers are also tagged with a MAC; so both parties can authenticate messages & detect if ANY packets have been tampered with (data integrity)
  - cipher suites: each suite is a set of 3 algorithms used to secure communication; always use the latest TLS cipher suite
    - key-exchange algorithm: the first algorithm; assymetric; used by communicating computers to exchange secret keys
    - symmetric block cipher: the second algorithm; used for encrypting the content of TCP packets
    - MAC algorithm: for authenticating the encrypting messages havent been tampered with
    - e.g. TLS 1.3 offers numerous cipher suites, one of them being ECDHE-ECDSA-AES128-GCM-SHA256
      - ECDHE-RSA: the key exchange algorithm
      - AES-128-GCM: the block cipher
      - SHA-256: the message authentication algorithm
  - digital certificates: aka public-key certificate; an electronic document issued by third-party certificate authorities to prove which internet domain owns which public encryption key
    - contains: server domain name, the issueing certificate authority, an encryption public key
    - that way user agents can confirm the server (some IP) they are communicating with is valid for this domain (e.g. google.com) and this certificate
    - that way an attacker cant impersonate a domain or a certifcate the UA checks with the certificate authority in the initial phases of the TLS handshake
    - self signed certificates: digital certs not issued by a certificate authority; useful for internal domains and development environments
    - Certificate Signing Request: CSR; contain info about the applicant & domain that is all useful in verifying authenticity; often created with openssl on the cli
      - domain name: distinguished name (DN) or the fully qualified domain name (FWDN)
      - organizations legal name
      - physical location
    - domain verification: process by which a ceritficate authority verifies that someone applying for a certificate for an internet domain does indeed have control of that domain
      - domain verification is what protects against DNS spoofing attacks; an attacker cnanot apply for a cerificate unless they also have DNS access rights to that domain
      - Extended validation (EV) certificates: require the certificate authority to collect and verify information about hte legal entity applying for a certificate; popular with large organizations because the name of the org is often displayed alongside the padlock in the browser url
      - certificates have a finite lifespan (years/months) and can be voluntarily revoked by the owner
    - general process: is all about having the certificate authority verify ownership of a particular domain, and then giving you a certificate you canbe used to decrypt traffic sent to thta domain,
      - generate a key pair: digital file containing randomly generated public and private encryption keys
      - use the key pair to generate a Certificate Signing Request (CSR) that contains the pulic key and domain your requesting the certificate for
      - upload the CSR to the certificate authority, and the cert authority will then require you to validate ownership by making some DNS change with values they specify
      - once ownership is proven: you will be given a digital cert for use on your domain server along with the key pair previously created
  - HTTP Strict Transport Security: HSTS; policy that ensures sensitive data (e.g. cookies) will not be sent during any initial connection over HTTP, and must wait for the TLS handshake to be completed
    - when a user agent visits a site it has seen previously, it will automatically send back any cookies the website previously supplied in the Cookie header
    - if the initial connection was insecure, then the cookies will be sent back insecurely, even if subseqent requests were handled over HTTPS

- SMTP: simple mail transport protocol
  - for sending emails
- XMPP: extensible messaging and presence protocol
  - instant messaging
- FTP: file transfer protocol
  - downloading files from servers
- HTTP: hypertext transfer protocol
  - transport webpages and their resources to user agents like web browsers
  - workflow: general
    - user agents generate requests for specific resources
    - web servers expecting those requests, return responses containing either the requested resource, or an error code
    - both requests & responses are plain text msgs, but can be delivered as compressed &/ encrypted
    - the majority of web exploits use http in some fashion
  - authentication: the process of identifyng users when they return to your application
    - http native authentication is rarely used since you cant customize the login form presented by the browser
      - to present an authentication challenge, a web server returns a 401 status code in the HTTP respone and adds a `WWW-Authneticate` header describing the preferred authentication method
      - basic authentication scheme:
        - the user agent (e.g. a browser) requests a username & password from the user
        - the browser concatenates the username + password separeted by a colon, e.g. `myname:mypw`
        - uses the base64 algorithm to encode this strng and sends it back to te server in the `Authorization` header of the http request
      - Digest authentication scheme:
        - requires the browser to generate a hash consisting of the username, password, and URL
    - non-native authentication: generally presented through a custo HTML form, whose action is to POST to some bff
- DNS: domain name system
  - a global directory that translated IP addrs to unique human readable domains e.g. nirv.ai
  - domain registrars: private organizations that register domains before they can be used in DNS
  - workflow
    - when a browser encounters a domain for the first time
      - check the local domain name server (typically hosted by an ISP) to get the associated IP (and various other data) and cache the result
  - terms
    - TTL: time to live: how long a domain name server will cache the IP addr associated with a domain
      - i.e. DNS caching
    - CNAME: canonical name records
      - i.e. aliases for domain names
      - enable multiple domain names to point to the same IP address
    - MX: mail exchange records
      - help route email

## http focus

- http requests
  - method: aka verb; the action that the user agent wants the server to perform
    - GET: fetch
    - POST: create/update
    - PUT: update/upload
    - PATCH: edit
    - DELETE: delete
    - HEAD: retrieves same info as GET, but instructs the server to return the response without a body
    - CONNECT: initiates two-way comms; e.g. connecting through a proxy
    - OPTIONS: lets a user agent ask what other methods are supported by a resource
    - TRACE: will contain an exact copy of the original HTTP request, for the user agent to see what (if any) alterations were made by intermediate servers
  - URL: universal resource locator: describes the resource being manipulated/fetched
  - Headers: metadata; e.g. type of content the user agent is expecting/whether it accepts compressed responses
  - Body: optional component contains any extra data that needs to be sent to the server
- HTTP responses
  - protocol:
  - code: 3 digit status code
    - 2xx: understood, accepted, and responded to
    - 3xx: redirect
    - 4xx: client error; user agent generated an invalid request
    - 5xx: server error; request was valid, but the server was unable to fullfil the request
  - msg: status msg
  - headers: instruct the user agent how to treat the content
    - content-type
    - cache-control
  - body: if a resource was requested
- stateful connections:
  - when a client and server perform a handhsake and continue to send packets back n fourth until one of the communicate parties decides to terminate

### encryption

- method of desguising the contents of messages from prying eyes by encoding them during transmission
- HTTPS: hypertext transfer protocol secure: the most widely used form encryption on the web
  - obtain a certificate from a ceriticate authority and install it on your server
- cryptography: the study of methods of encrypting and decrypting data
- encryption key: a secret used to scramble data
- decryption key: the corresponding key required to unscramble data
- encryption algorithm: takes input data and scrambles it by using an encryption key
  - symmetric encryption: uses the same key to encrypt and decrypt data
    - usually operate as block ciphers: break the input data into fixed-size blocks that can be individually encrypted
    - ^ if the last block of input data is undersized, it will be padded to fill out the block size
    - since there is only one key for both encrypting & decrypting the key must be shared before secure communication can occur
    - use cases
      - suitable for processing streams of data, e.g. TCP data packets
      - suitable for speed
  - asymmetric encryption: aka public-key cryptography; uses distinct keys for encryption & decryption
    - developed in response to symmetric algorithms, since they're vulnerable to key theft
    - encryption key: aka public key; available to the public and enables any user agent to send encrypted messages to any server containing the decryption key
    - decryption key: aka private key;
  - hash functions: encryption algorithms whose output cannot be decrypted
    - hash value: the output of the hash function; is always a fixed size regardless of the size ofth einput data
    - use cases
      - data integrity: since you cant decrypt the data, it servers as a fingerprint of the input data and enables you to determine if two separate inputs are the same without storing the raw values, by recalculating the hash value and comparing the results
      - storing passwords in a db, you store the hash value, and validate against the the stored hash everytime a user reauthenticates
  - message authentication codes: MAC; map input data of an arbitrary length to a fixed-sized output same as hash functions
    - messaging authentication code: the output of the MAC function
    - requires a secret key to compute unlike hash functions; thus only the parties with the secret key can generate/check the validity of messaging authentication codes
    - both parties exchange the secret key (which should also be encrypted) as part of a TLS handshake
    - the sender will then generate a MAC for each data packet being sent, and send both the packet & the MAC to the receiver
    - the receiver (which also has the secret key) will then recalculate the MAC using the data packet as input, and if both MACs match the receiver can be sure the data packet hasnt been tampered with
    - use cases
      - ensure that the data packets transmitted cannot be forged or tampered with

### servers

- web servers: computer program (e.g. HAproxy) that validates & routes HTTP requests for dynamic content to application servers, responds directly with static content, and performs low-level TCP functions like HTTPS termination
  - all HTTP traffic should be rerouted to HTTPS
  - web server handling HTTPS should terminate (strip, decrypt) the request before proxying the request to application servers
  - application servers should not be reachable by the public
  - the application server will fullfil the request, and reply to the web server with the content, and the web server will forward the content back to the user agent that made the request
- application server: computer program (e.g. nodejs) that hosts application code, and responds to HTTP requests from web servers, generally handles all requests for dynamic http content
- CDN: content delivery network
  - will store duplicated copies of static resources in data centers around the world
  - enables prouction of responsive websites without a massive server expenditure
  - security issues:
    - allows a third party to serve content under your security certicate
- CMS: content management systems
  - provide authoring tools requiring little/no technial knowedlge to wriet content
  - cms plugins provide additional tooling, e.g. anlytics
  - security issues
    - using a cms/plugins makes you more secure if you utilize high fidelity packages from reputable vendors
    - but also makes them a high profile target for hackers, e.g. wordpress is always getting fkn hacked
- http session: the entire conversation (stateless/stateful) between a specific user agent & server
  - server could send a set-cookie header in the initial HTTP response containing data that identifies the user agent
    - the user agent will store & send back the same cookie on each subsequent response
- resources
  - static: an object thats returned unaltered in HTTP responses
  - dynamic: an object thats executed/interpreted based on data in HTTP requests and computed before returned in HTTP responses
    - often the code loads data from a database in order to populate the http response
    - security issues
      - the dynamic interpolation of content can be vulnerable to attack
- databases
  - database technology predates the web, since the 1960s
  - SQL databases
    - are relational, storing data in one/more tables that related to each other in formally prescribed ways
    - DDL: data definition language
      - any statement using CREATE, DROP or MODIFY to create, drop and modify table structures
    - DML: data manipulation language
      - any statement using SELECT, INSERT, UPDATE, and DELETE for CRUDing records
  - NoSQL databases
    - sacriface the strict data integrity requirements of SQL databases to achieve greater scalability
    - often schemaless, allowing you to add fields to new records with having to upgarde any data structures
  - distrubed caches
    - in-memory databases, that load data from disk and stores it in cache
    - caching refers to the process of storing a copy of data in an easily retrievable form to speed up responding to requests for that data
- URL resolution
  - enable any URL to be mapped to a particular static resource
  - by unlinking the URL from a filepath, you have more freedom in organizing your code
    - e.g. having each user have a different profile image on disk, but using the same URL path /user/profile/image

### user agents

- web browsers
  - javascript engine
  - rendering pipeline
  - connect with operating system to resolve and cache DNS addresses
  - interpret and verify security certificates
  - encode requests in HTTPS
  - store and transmit cookies according to the web servers instructions
  - browser security model
    - dictates
      - js code must be executed within a sandbox,
        - disabling the following actions
          - start new processes/access existing process
          - read arbitrary chunks of system memory
          - access the local disk
          - access the operating systems network layer
          - call operating system functions
        - enabling the following actions
          - read & manipulate the DOM of the current page
          - listen & respond to user actions via event listeners
          - make http calls on behalf of the user
          - open new webpages/refresh the URL of the current page ONLY in response to user actions
          - write new & navigate between entries in the browser history
          - ask for users location
          - ask permission to send desktop notifications
    - rendering pipeline: software component within a web browser responsible for transforming HTML into its visual representation
      - parse the HTML
        - tokenize
      - generate the DOM
        - an in-memory data structure that represents the browsers understanding of how the page is structured,
          - a series of nested elements called DOM nodes, each roughly equivalent to an HTML tag
        - parse the HTML into a DOM
          - whenever an external resource is encountered, stop an retrieve it
            - i.e. script, style, image, font, video, etc tags all stop the rendering pipeline to retrieve the external thing
          - script tags
            - ensure the `defer` attribute is added so the script tag doesnt execute until the rendering pipeline is completed
      - generate the CSSOM
        - styling rules applied to each DOM element
          - which correspond to onscreen elemnts
          - how to paint each element relative to eachother
          - what styling to apply to each
      - DRAW/PAINT
        - draws the webpage on screen
      - EXECUTE JS
        - this step is actually interwoven between generation of the DOM and DRAW
        - the browser will load & execute any JS it comes across as it constructs the DOM
        - and the JS can dynamically make changes to the DOM and styling rules, either before the page is rendered or in response to user actions

### sessions

- session: HTTP conversation in which the browser sends a series of HTTP requests corresponding to a specific user, and the web server recognizes them as corresponding to the same user; the initial request is usually tagged with an ID, and that ID is sent back in the response
- session ID: typically a large, randomly generated number: the minimal information the browser needs to transmit with each subsequen tHTTP request so the server can continue the HTTP conversation from the previous request
  - remember, these are generally just random integers
  - can be transmittd via URL, http header, body of requests
  - but best practice is to send as a session cookie via the `Set-Cookie` header of the http response
    - the browser will natively send this cookie & value back on subsequent requests automatically to the server that set it
- server side sessions: the web server keeps the session state in locally/remotely (e.g. in file/cache/db/etc), and both the server & user agent pass the session ID back n forth
  - the server stores & retrieves other session state data in a remote/local DB/cache/file of some sort
  - scalability issues: requires that backend servers have access to other servers session information (e.g. in a load balanced architecture)
- client side sessions: web servers send the serializes entire session state (and not just the session ID) in the cookie, this alleviates the need to share session state amongst BFF servers
  - security issues: attackers can manipulate/forge the data stored in the cookie and your BFFs will be none the wiser

### access control

- authentication: correctly identifying a user when they return to th site
- authorization: deciding which actions a user should and shouldnt be able to perform after they've identified themselves
- permission checking: evaluating authorization at the point in time when a user attmpts to perform an action
- a good access control strategy consists of three stages
  - designing an authorization model
    - acess control lists: create a list of permissions that are
      - gates to each object in your system
      - assigned to users
      - e.g. the linux filesystem is the canonical example: each user is granted read,write or execute permissions on each file and directory
    - white/blacklists: users that can vs cant access each object in your system
      - e.g. spam filters: you white/black list specific email accounts
    - role based access control:
      - grants roles to users or adds users to groups that grant specific roles
      - policies in the system define how each role can interact with seicfic subjects
      - subjects are the resources in your system
      - e.g. AWS IAM and Microsoft Active Dirctory are the canonical RBAC implementation
    - ownership based access control:
      - each user has full control over their resources & granting access to other users in the system
      - e.g. social media platforms
  - implementing access control
    - centralize whatever authorization model youve chosen
    - dont rely on anything in the HTTP request besides the session cookie (an attacker can meddle with everything else)
    - audit trails: log files or database entries that are recorded whenever a user performs an action
      - especially important for resources that arent designed to be discoverable
      - i.e. audit everything whether or not there are inbound links to the resources
      - useful for troubleshooting and forensic analysis
  - testing the access control
    - test authorization via properly vetted identity data in your system
    - unit tests should make assertions about who can and CANT access every resource type in your system
    - penetration testing: probin for missing/errneous access control rules that can be abused

## People & their prcoesses

- programmers: need to roll out changes in an orderly and discplined fashion
  - however, its common for security vulnerabilities and bugs to creep in over time because of shortcuts taken in the face of deadlines
  - most security vulnerabilites are introduced not through a lack of develpment knowedlge, but because of a lack of attention to detail
- SDLC: software development life cycle
  - the process a devleopment team follows when designing new software & software features, writing code, testing it and pushing out changes
  - phase 1: design and analysis
    - analyze the features you need to add and design their implementation
    - identifying the requirements the code is trying to address
  - phase 2: writing code
    - source control is the number one tool all dev teams need to use
      - four eyes principle: requires two people to see every code change before a release
      - distrubted source control
        - every copy of the code kept is a fully fledged repository
      - centralized source control
  - phase 3: pre-release testing
    - release code only after youve tested it throroughly to catch any potential bugs an densure that it works correctly
    - unit tests: should be simple and non brittle
    - CI: continuous integration
      - connects to your sourc ecotorl repository and whenever code changes are made checks out a fresh version of the coe and runs the build process while executing your tests
      - build processes should minify/obfuscate code
    - test enviornments: e.g. staging, pre-prod, QA
      - should be a fully operational copy of the application
      - essential for detecting software defects
      - pose security risks if they are not properply managed
        - must be 100% segegrated and isolated from production env vars and workflows
  - phase 4: release
    - taking code from source control, deploying it to its final destination, and making it accessible to end users
    - reliable release process: means that you can guarantee what code, deps, rsources and configuration files get deployed during the release
      - release scripts typically use checksums (fingerprints) that ensure that the files copied onto the server are identical to those held in source control
    - reproducibe release process: one that you can rerun with the same results in different environments or with different versions of the code
    - revertible release process: allows you to roll back/undo releases
  - phase 5: post-rlease testing & observation
    - smoke testing: ensure the release process correctly deployed the latest version, and the way the code executs in prod matches expectations
    - penetration testing: tests for security vulnerabilities by externally probing a website
      - useful in both pre-rlease and post-rleases testing
      - utilize automated testing tools that probe for common security vulnerabilities
    - observability: ensuring your environment is observable at compile and runtime
      - helps spot unusual and potentially malicious behavior and diagnose issues as they occur
      - logging: having code write to a log file as the software performs actions
        - every http request with a timestamp, URL and the http response code
        - any signficant actions performed by user,
        - log files should be available at runtime & archived for later analysis
      - monitoring: practice of measuring response times and other metrics at runtime
        - helps admins spot high-load scnearios or degraded perf by firing alerts when network speeds slow/db queries take a long time
      - error reporting: capture and record unexpected errors in the code
        - establish error conditions by picking them out of logs/catpuring & recording them in the code itself
        - many security intrusions exploit badly handled error conditions
  - dependency management: just as important and integral as the SDLC and should be monitored at every phase of the SDLC

## attack vectors

- need to flush out
  - TRACE requests
    - can allow javascript injected into a page to access cookies that have been deliberately made inaccessible to javascript
  - session cookies: enables an attacker to impersonate a user agent to a web server
  - comprimising authentication
  - permissions
  - information leaks
  - encryption
  - third-party code
  - unwitting accessories
  - the process of resolving a URL to a file can introduce vulnerabilities
    - ensure you have access control rules defined on the web server
  - replay attacks: an attacker resends an HTTP request in an attempt to repeat an action, e.g. duplicate a payment
  - subdomain takeovers: attackers scan the internet for DNS entries describing subdomains that point to the IP addresses for uninitialized/deactivated services
    - then they swuat on one of hte listed IP addresses, enabling them to create links to their malicious content by using the domain of the victim

### injection attacks

- when the attacker injects external cpde into an application in an effort to take control of the application or read sensitive data
- server-side code has no reliable way of telling whether a crit or a browser generated an http request
  - waste of time checking the `User-Agent` header

#### SQL Injection attacks

- target websites that use an underlying SQL database whereby the aplication constructs data queries in an insecure fashion
  - i.e. code that doesnt security construct SQL strings when communication with a SQL database
- allowing an HTTP request to pass data into sql queries that cause the db driver to perform arbitrary actions
- i.e. use control characters that have special meaning in SQL statements to jump out of context and change the whole semantics of the SQL statement

- exposure

  - any SQL statement that permits SQL control characters in variables used as parameters in db queries
    - `'` single quote closes the statement
    - `--` comment causes db driver to ignore any subsequent text
    - `'' or 1=1` often used to bypass truthy checks, like checking passwords for matches
    - `someExpectedTExt;DROP TABLE users;--`
      - end statement, start new statement to drop table, end statement, ignore subsequent text
  - while its called SQL injection: any web server that talks to a DB in its native language (e.g. redis, mongodb) are vulnerable to injection
  - blind SQL injection: when you rapplication providings generic informationl the attacker gets nonspecific feedback
    - `youve entered the wrong information`
    - `if this email exists, we'll send you an email`
  - nonblind sql injection: when your application leaks sensitive information; the attacker gets immediate feedback while probing
    - `password is incorrect`
    - `email already exists`

- fallout

  - generally a crafty person can run arbitrary queries against your db
  - bypass authentication; read, donwload and delet data at will
  - inject malicious JS (especially if you use db data in HTML templates)

- mitigation

  - parameterized statments & bind parameters: placeholder characters that the db driver will safely replace

    - bind parameters will automatically prefix control characters with escape characters that causes the db driver to treat the control characters as INPUT to the SQL statement, rather than PART of the sql statement

  - use an ORM: object-relational mapping
    - all ORMS (or any that you would ever think about using) abstract away the explicit construction of SQL statements
    - instead you use database access objects for queries
      - becareful, because even ORMs allow devs to use raw queries, so you still need to be careful

#### Command Injection Attacks

- attackers exploit an application that makes insecure command line calls to the underlying operating system

- exposure

  - if command line calls are executed with external input that hasnt been sanitized
  - http requests to the server that interact with the OS
    - `GET/poop.com?expectedThing=expectedValue%3Becho%20%22gothacked%22`
    - `server.getExpectedThing(queryString) -> doThisCli && echo "got hacked`

- fallout

  - attakers execute arbitrary OS commands and seize contorl of your runtime

- mitigation
  - properly escpaing inputs from HTTP requests, especially sensitive control chars like `&`

#### Remote Code Execution Attacks

- attackers inject malicious code to be executed in the language of the application itself (e.g. a web servers native language)
- when an application has a vulnerability that permits external parties to execute internal runtime commands as if they were coming from within the application itself

  - exploit scripts incorporate malicious code in the body of an HTTP request, encoded in a such a way that the server will read and execute the code when the request is handled

- exposure

  - not staying up to date on appliation (especially web server) dependencies
    - e.g. using an old version of express/nodejs
  - using executing code during deserialization of http requests bodies & headers
  - invalid web server configuration

- fallout

  - trick your application (e.g. web server) into executing arbitrary code by injecting malicioius code directly into your applications's runtime process

- mitigation
  - disable code execution during deserialization
    - complete the deserialization process first, then sanitze the resulting code for control characters
  - stay aware of security advisories for any web servers/serialization pkgs your application uses

#### File Upload Exploits

- vulnerabilities in file upload fns, e.g.

  - letting users add images to their profile/posts
  - adding attachments to messages
  - submitting paperwork
  - sharing documents with other users
  - etc

- exposure

  - relying on the default browser upload functionality/client side validation of file contents
    - browsers dont run (if) any checks on the file contents
    - attackers can go around client side validation checks by posting directly to the backend endpoints
  - webservers that treat uploaded files like large blobs of binary data
  - not ensurig file contents meets file type
    - e.g. letting a user upload image.php as an image, when the file contents is clearly a web shell
      - now they can request their image from your server, `site.com/image.php?cmd=cat+/etc/passwd` and your server will execute image.php if it has a php runtime installed
      - ^ php files are typically treated as executables by OS, which is key to making this attack work

- fallout

  - giving attackers a backdoor for executing arbitrary code on your webserver
  - the attacker would have the same access to your OS as they would with a command injection attack

- mitigation
  - ensure any uploaded files cant be executed as code
    - files should be treated as inert rather than as executable objects
    - separating uploaded files into a partiular directory/partition (so they arent intermingled with code/executables)
  - hardening your servers so that only the minimally require dsoftware is installed
  - rename files as you upload them so you dont write files with darious file extensions to disk
  - analyze uploaded files and reject any that appear to be corrupt or malicious
  - use a CDN/cloud-based storage to offload this responsibility

### cross-site scripting attacks

- malicious code is injected into webpages while the user is on the site

- fallout
  - read credit card details/credentials
  - add script tags that inject even more malicious code
  - hijack a users session (if htey can read HTTP session)

#### stored cross-site scripting attacks

- exposure

  - any page content rendering javascript stored in a database;
    - the js is stored in the db, but rendered in the browser
    - e.g. via any end-user controlled content / SQL injections
  - not escaping injected scripts when rendering HTML

- fallout

  - see above

- mitigation

  - escaping HTML control characters e.g. `" & ' < >`tags with their entity coding

    - this includes when inserting raw HTML to bypass templating languages, e.g. react

  - implement a content security policy via HTTP response headers
    - specify limitations of javascript execution
    - ^ especially inline script tags (i.e. via `<script>`)

#### reflected cross-site scripting attacks

- an attacker sends the malicious code in the HTML request, and the server reflects it back in the HTTP response & the browser renders it on the page

- exposure

  - rendering content from HTTP requests in the DOM without scaping it (this includes queryString params)

- fallout

  - see above

- mitigation
  - i.e. everything you would do for stored cross-site scripting attacks
  - escape dynamic content from HTTP requests
  - ^ especially search pages, error pages, anything page that renders part of the query string in the browser

#### DOM-based cross-site scripting attacks

- smuggling malicious code into webpages via the URI fragment (thing after the # in urls)

- exposure

  - rendering content URI fragment content in pages

- fallout

  - see above

- mitigation
  - securing server side code **Cant** mitagate this attack, as its largely based on the URI fragment (browsers strip the URI fragment from requests)
    - thus it cant be detected in server logs
  - client-side code needs to manage the parsing & escaping of URI fragments if fragment content is used in rendering

### cross-site request forgery: CSRF

- CSRF: pronounced sea-surf; an attacker tricks a user into clicking a maliscious link that triggers a request to your application
- predominatly used with GET requests, but any HTTP method can be exploited
- anti-CSRF cookie: randomized string token that the web server writes out to a named cookie parameter

- exposure

  - using GET requests with side effects; if it the GET doesnt anything accept READ, your vulnerable
  - GET requests are the only HTTP method that contain the entirety of the requests contents in the url
  - not using anti-csrf cookies for HTTP methods that modify resource state

- fallout

  - tricking your webserver into thinking a request was made by a USER coming from your frontend, but really its coming from their frontend
  - your webserver will then fetch sensitive info/modify resource (e.g. db) state and send the info back to the attacker
  - anything you permit users to do on your site, will be done from the attackers site

- mitigation

  - ensure GET requests dont have side effects (affect any resource state)
  - utilize more appropriate HTTP methods following REST
  - always set an anti-csrf cookie in the response to ANY request to your server, e.g. `Set-Cookie: _xsrf=12345` and never modify any resource state unless that cookie is present on subsequent requests in the HTTP header
  - always include anti-csrf cookies in forms of HTML pages generated by your webserver e.g. `<input type='hidden' name='_xsrf' value='1234'>
    - the browser will send the required cookie **only** the page is loaded from the same domain
    - your webserver should confirm that the token in the html page and the token in the return cookie header match
    - the browser security model will return cookies according to the `same-origin policy` so the cookie can have only been set by your web server
    - without the `SameSite` attribute, attackers can inspect & steal your anti-csrf token and use it
  - always include anti-csrf cookies in HTTP requests originating from client-side javascript
    - you query the anti-csrf token from the html page and pass it back to the server with the request
  - always specify `SameSite` attribute when setting any cookies
    - e.g. `Set-Cookie: _xsrf=1234; SameSite=strict|Lax;`
    - ^ strict: for inbound links will force a user to relogin if using HTTP sessions (as the session cookie will be stripped)
    - ^ lax: doesnt force relogin if using HTTP sessions
    - when a browser generates a request to your site, by default it will attach the last known cookies that the site set regardless of hte source
    - i.e. a request from attacker site A to your site B will use the last known cookies that were attachd to site B, even the request originated from attacker site A
    - ^ if you specific the `SameSite` attribute, the cookies will only be attached if the request originates from your site B
  - force users to reauthenticate for sensitive actions

### compromising authentication

#### brute force attacks

- rapidly guesing credentials through automated scripts that depend on commonly used phrases
- enumerating a list of usernames to see which exist in an application
- timing attacks to different good/bad username vs password

- exposure

  - having insecure user authentication: login, logout, and reset all need to be secure

- falout

  - attackers have access to & can hijack your user accounts and personal (e.g. financial) data

- mitigation

  - use third-party authnetication from a trusted service, e.g. Facebook/Google login
  - integrate with SSO e.g. Okta, OneLogin, Centrify which centralizes authentication across enterprise systems so employees can log in seamlessly to third-party applications using their business email

  - prevent user enumeration: ensure attackers cant test each username from a list to see whether it exists on your site

    - ensure invalid logins dont leak whether the username/password was incorrect
      - timing attacks can be used to numerate users by measuring HTTP response times
        - hashing a pw is time consuming, so even on incorrect username, you should always hash the pw so users can different the time between a bad PW and a bad USERNAME
      - PW reset screens shouldnt indicate if a username/email doesnt exist, but instead say 'if it exists, weve sent an email'
    - implement CAPTCHA: asks web users to perform various image recognition tasks that are trivial for humans but tricky for computers

  - require multifactor authentication: require returning users to identify with a t least two of the following three categories

    - something they know: e.g. password
    - something they have: e.g. mobile device
    - something they are: i.e. biometrics (e.g. fingerprint)

  - implementing & securing the logout function: is super important for your users on shared devices

    - clear the sessio cookie in the browser
    - invalidate the session identifer if stored on the server side

  - secure your own authentication system: useful if a subset of your users dont use social media/oauth providers

    - requiring usernames, email addresses, or both; but using email addresses for display names is a bad practice as it invites harassment

    - validating email addresses:

      - ensure every users email address corresponds to a working email account
      - ensure emails contain only valid characters
      - DNS must contain an MX (mail exchange) record for the email address domain (e.g. gmail.com),
        - you should be able to query for the MX record in your BFF
      - always send an email verificaiton link when a user signs up
        - include a validation token that links back to a record in your DB, that you can reference when a user clicks the email in their inbox
      - banning disposable email accounts: there are blacklists you can d/l from the net

    - securing password resets: only send pw resets to email addresses youve previously validated; and the they should be shortlived (e.g. expires in 60 seconds)

    - requiring complex passwords: include numbers, symbols, and mix-case letters with a minimum length

      - studies have shown password length is more important than anything else

    - securely storing passwords: i.e. never plain text db records

      - hashing passwords: cryptographic hash algorithm before being stored in the DB
        - converts the raw tring of input into a bitstring of fixed length that maes it computationally unfeasible to revers the process

### session hijacking

- when an attacker steals a current & valid session, enabling them real-time access while the session is in progress

- cookie theft: staling the value of a cookie header from an authenticated users

  - cross-site scripting: injecting malicious JS onto a page while the user interacts with it

    - the attacker will harvest cookies as they appear in the web servers log file, then reuse them in a script/new browser session to perform action sunder the hacked users session

  - man in the middle attack: sniffing network traffic in order to intercept HTTP headers

    - the attacker finds a way to sit between the rowser & webserver and read network traffic as it passes back n forth
      - any unencrypted HTTP requests are prime targets
      - wireless routers: contain a barebones installation of some linux distro thats never updated with security patches; route traffic to a local ISP
      - wi-fi hotspots: attackers setup their own wifi hotspots (often with a similar name as a real hotspot) and routes requests to a real ISP to provide internet connections

  - downgrade attacks: interfering wiht the initial TLS handshake so that user agents opted to use weaker encryption/no encryption at all

  - cross-site request forgery: triggering unintended HTTP requests to a site when they've already authenticated
    - attackers trick your users into clicking a link to your site; if they already have a session open with your server, the browser will resend the cookie along with the http request triggered from the attackers site but your server will be none the wiser

- session fixation: attackers creates & appends a predetermined session ID to a request to your server from an external site, triggering your server to force the user to authenticate

  - after the user authenticates, your server will reuse the session ID (which was created by the attacker)
  - this `fixed` session ID can then be used elseware by the attacker since the user authenticated the fixed session id
  - basically the victim authenticates the fake session ID, now the attacker can use it to perform actions under their account

- exposure

  - passing session IDs in the URL
  - logging session IDs
  - inscure cookies
  - allowing cookies to be sent with inbound requests to your server from external sites
  - servers that support URL rewriting to append session IDs to urls are subject to session fixation
  - servers with weak session IDs are subject to brute force attacks where attackers guess the session ID numbers

- fallout

  - if an attacker can access/forge session information, they can access any user account on your site

- mitigation

  - encrypt the serialized client side session cookie before sending it via the `Set-Cookie` header and decrypt it on each subsequent request
  - digitally sign sessin cookies before they are sent; then you an easily detect if the cookie has been modified on subsequent requests

    - signing cookies rather than encrypting them allows an attacker to read th session data in a browser debugger

  - secure your cookies when setting them in the servers HTTP response by appending three keywords:
    - HttpOnly: ensure cookies are inaccessible to jS code
    - Secure: never send the uncrypted cookies with unencrypted HTTP traffic; requires you to add https
    - SameSite: only send cookies with requests triggered from the same site
      - SameSite=Strict: strip all cookies from all requests triggered from external sites to your server; disable social media sharing tho (use LAX instead)
      - SameSite=Lax: only allow sending cookies with inbound GET requests from external sites

### Permissions

#### privilege escalation

- a malicious user usurps the permissions of another user
- vertical escalation: an attacker gets access to an account with a broader permissions than their own
- horizontal escalation: an attacker accesses another account with similar privileges as their own

- exposure

  - if an attacker can deploy a web shell on your server and escalate to root privilege

- fallout

- mitigation
  - securely implement access controls for all sensitive resources

#### directory traversal

- an attacker manipulates URL parameters in order to access sensitive files that you never intended to be accessible
- usually involve replacing a URL parameter with a relative file path, e.g. `../../` to climb out of the hosting directory

- exposure

  - if any of your website URLs contain paramters describing paths to files
  - if server side code permits an attacker to pass and evaluate relative filepaths in place of filenames
  - using opaque IDs in url parameters, e.g. `poop.com/item?id=1234`, a user can just increment/test with random strings

- fallout

  - attackers can probe your filesystem for interesting files
  - break access control and download any file on your system

- mitigation
  - use a secure web server that provides a secure method for resolving static URLs to filesystem resources (e.g. images, css, files, etc)
  - use a hosting service: instead of serving files from disk, host them via a third party (e.g. CDN, CMS, cloud storage, etc) and disable all filesystem access
  - use indirect file references: assign each file an opaque ID that corresponds to a filepath, and have all URLs reference each file by ID
  - sanitize file references: ban any file reference that includes path separator characters, and check for characters that are encoded

### information leaks

#### zero day vulnerabilities

- security flaws that have been made public for less than 24 hours

- exposure

  - web servers that leak information about the type of software stack being used

- fallout

  - attackers can exploit the zero day vulnerabilities if they know your using vulnerable software

- mitigation
  - disable any server headers that reveal the technology, language or version of your web/application server
  - always use clean urls: remove any file suffixes e.g. php, asp or jsp
  - use generic cookie params: e.g. never use something like a JESSIONID common in java web servers (or just dont use fkn java)
  - use generic clientside error reporting: e.g. never print stack traces/routing/database information in an HTML error page
  - minify javascript files: remove extranous characters (e.g. whitespace) and replace appropriate code statements with shorter, semantically identical ones
  - obfuscate javascript files: replace method & function names with short meaningless tokens
  - sanitize client-side files via code reviews and static analysis tools that search for comments and sensitive data

#### third-party code

- most of the code in software is written by others
- ^ thus its far easier for an attacker to scan for insecure sites than to target a particular site

- exposure

  - malvertising: deploying malware through ad networks
  - insecure dependencies: all third-party code, and all third-party liraries are liable to have securty issues
  - trusting anything from third party code, to services, to content
  - imported third-party code, e.g. GTM/support bots, can read anything in the DOM, including sensitive data the user types in; can be subvertised by the third party or attackers that have infiltered the third party

- fallout

- mitigation

  - know precisely what dependencies (app & OS level) you're consuming, and which deps they are consuming (etc) and always specify specific version numbers (instead of ranges)
  - ability to quickly update/replace dependencies
  - staying alert of security issues
  - check the integrity of all third party code, e.g. via checksums & subresource integrity checks
  - ability to deploy changes quickly via an orderly & automated release process
  - ability to deploy patches to dependencies without upgrading source code
  - utilize software tools to scan dependencies for vulnerabilities, e.g. npm audit, OWASP dependency-check, github source code scans
  - ensure no dependencies run with default configuration/login credentials/etc, e.g. db name & password, server file location e.g. /etc/certs
  - disable open directory listings: so if hackers penetrate your system, they are unable to search ofr sensitive files and encryption keys
  - keep private shiz external from souce code: db credentials, api keys, private encryption keys, certs, etc
  - encryption at rest: shiz stored on the server should be encrypted
  - harden test envs: test envs often repliate prod envs; if attackers gain access to test envs they can learn valuable infomraiton about prod envs
  - never shae/reuse keys/creds across envs
  - secure administrative frontends: e.g. db login screens
  - treat third party services (e.g. facebook login) as you would third-party code; they are all vulnerable and high-target attack surfaces
  - use web components to wrap client-side thirdparty codes, as it provides more granular permissions for code and page elements relative to the existing browser security sandbox model
  - host third-party code in a iframe, since code in an iframe cannot access the DOM of the containing page

  -

### XML attacks

- just dont fkn use XML, its not 1990
- attack vectors
  - xml bombs
  - xml external entity attacks
  - xml parsers

### unwitting accomplice

- page 152

### denial-of-service attacks

- exposure

  - ...

- fallout
  - ...

### DNS poisoning

- a local DNS cache is deliberately corrupted

- exposure

  - ...

- fallout
  - data is routed to a server controlled by an attacker

#### spoofing attacks

- direct internet traffic away from a legitimate server to an IP address controlled by an attacker
- an attacker that can spoof a domain name, can issue their own encryption key and user agents will be fooled into communicating with the attackers server

- mitigation
  - user agents need to always check with a third-party certificate authority that they trust to validate the servers certificate with the info on file
