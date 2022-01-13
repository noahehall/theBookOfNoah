# web security

- reading: done
- copying: PAGE 83 brute force attacks

## links

- envs
  - [kali linux](https://www.kali.org/)
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
  - always good to dos no matter what
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
  - limiting network access between & too applicatins and processes
    - via firewalls and access control lists on the network

### terminology

- hash: the output of a one-way encryption algorithm that makes it easy to generate a unique fingerprint for a set of input data (really difficult to take the output and revert it to the input data)
  - should be quick to calculate (but not too quick)
  - bcrypt: allows you to add extra iterations to the hashing function to make it strong and more time-consuming
- salting hashes: i.e. adding an element of randomness to the hashing algorithm so the input data doesnt solely determine the output hash
  - protects you against rainbow tables
- rainbow tables: commonly usd passwords that have been put through a known hashing algorithm
  - matching hashes against precalculated values yield a very good return for an attacker
- cookie: small pieces of text passed back n forth between clients & servers in HTTP headers
- exploit: a piece of code that illustrates how to take advantage of a secuirty flaw
- 0 day: type of exploit that has be publicized for less than a day/not publicized at all
- white hat: discovery security holes and will advise owners of the exploits before making them public
- black hat: hoard exploits to maximize the time windows during which they can use vulnerabilities
- dark web: websites available oly via special network nodes that anonymize incoming IP address
- worm: a recursive exploit that tricks other computers into recursively tricking other computers to execute some code

- REST: representational state transfer; design philosophy for mapping website operatins to the appropriate HTTP method according to their intention

  - GET: read
  - POST: create
  - PUT: update
  - DELETE: delete

- ICANN: internet corporation for assigned names and numbers

  - alotts blocks of IP addresses to regional authorities

- regional authorities

  - grant blocks of addresses to internet service prviders and hosting companies within their region
  - when you connect to the net, your ISP assigned an IP to your computer
    - however the IP is rotated periodically
  - similary: companies that host content are assigned an IP for each server they connect to the network

- serialization: the process of converting an in-memory data structure into a stream of binary data

  - usually for the purpose of passing the data structure across a network
  - deserialization: the reserve process that occurs at the other end, when the binary data is converted back into a data structure

- web shell: an executable script that will take ana rgument fomr an HTTP reques,t execute on te command line and output the result

- URI: uniform resource identifier
  - protocol: http://
  - domain: google.com
  - path: /poop
  - query string: ?then=wippe
  - fragment: #then-flush
    - used for
      - intra-page navigation, i.e. linking dirctly to h-tags
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

- UDP: User Dataram Protocol
  - newer than TCP
  - commonly used with video/situations where dropped data packets are expected/msg guarantee isnt required, but the data packets can be streamed at a constant rate

##### Application Layer Protocols

- TLS: transport layer security

  - arguable what fkn layer this is actually in
  - method of encryption that provides both privacy and data integry
  - ensures that

    - privacy: packets intercepted by a third party can be decrypted without the appropriate encryption keys
    - data integrity: any attempt to tamper with the packets will be detectable

  - workflow
    - HTTP conversations using TLS are called HTTP secure
    - HTTPS requires the client & server to perform a TLS handshake
    - both parties agree on an encyption method (cypher) and exchange encryption keys
    - any subsequent data packets (request & responses) will be opaque to outsiders

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
      - to present an authentication challenge, a web server returns a 01 status code in the HTTP respone and adds a `WWW-Authneticate` header describing the preferred authentication method
      - basic authentication scheme:
        - the user agent (e.g. a browser) requests a username & password from the user
        - the browser concatenates the username + password separeted by a colon, e.g. `myname:mypw`
        - uses the base64 algorithm to encode this strng and sends it back to te server in the `Authorization` header of the http request
      - Digest authenetication scheme:
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
      - enable multiple domain names to point ot the same IP address
    - MX: mail exchange records
      - help route email

## http focus

- http requests

  - method: akak verb; the action that the user agent wants the server to perform

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

  - Headers: metadata; e.g. type of content the user agent is epcting/whether it accepts compressed responses

  - Body: optional component contains any extra data that needs to be sent to the server

- HTTP responses

  - protocol:
  - code: 3 digit status code

    - 2xx: understood, accepted, and responded to
    - 3xx: redirect
    - 4xx: client error; user agent genreated an invalid request
    - 5xx: server error; request was valid, but the server was unable to fullfil the request

  - msg: status msg
  - headers: instruct the user agent how to treat the content

    - content-type
    - cache-control

  - body: if a resource was requested

- stateful connections:

  - when a client and server perform a handhsake and continue to send packets back n fourth until one of the communicate parties decides to terminate

- encryption:
  - method of desguising the contents of messages from prying eyes by encoding them during transmission

### servers

- web servers: computer program (e.g. HAproxy) that validates & routes HTTP requests to application servers
- application server: computer program (e.g. node) that hosts application code, and responds to HTTP requests from web servers

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
    - often the code loads data from a databae in order to populate the http response
    - security issues
      - the dynamic interpoation of content can e vulnerable to attack

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
    - caching refers to the process of storing a copy of data kept elseware in an easily retrievable form to speed up retrieval of that data

- URL resolution
  - enable any URL to be mapped to a particular static resource
  - by unlinking the URL from a filepath, you have more freedom in organizing your code
    - e.g. having each user have a different profile image on disk, using the same URL path /user/profile/image

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
          - start new processes/access exisitng process
          - read arbitrary chunks of system memmory
          - access the local disk
          - access the operating systems network layer
          - call operating system functions
        - enabling the following actions
          - read & manipulate the DOM of hte current page
          - listen & respond to user actions via event listeners
          - http http calls on behalf ot he user
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

## People & their prcoesses

- programmers: need to roll out changes in an orderly and discplined fashion

  - however, its common for security vulnerabilities and bugs to creep i over time because of shortcuts taken in the face of deadlines
  - most security vulnerabilites are introduced not through a lack of develpment knowedlge, but because of a lack of attention to detail

- SDLC: software development life cycle

  - the process a devleopment team follows when designing new software & software features, writing code, testing it and pushing out changes
  - phase 1: design and analysis

    - analye the features you need to add and design their implementation
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
  - session cookies
    - enables an attacker to impersonate a user agent to a web server
  - man in the middle attacks
    - plain text msgs an be read by anyone intercepting the data packets
  - comprimising authentication
  - permissions
  - information leaks
  - encryption
  - third-party code
  - unwitting accessories
  - the process of resolving a URL to a file can introduce vulnerabilities
    - ensure you have access control rules defined on the web server

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

- brute force attacks: rapidly guesing credentials through automated scripts that depend on commonly used phrases

- exposure

- falout

  - hijack accounts to sprea clibait/commit financial fraud

- mitigation

  - use third-party authnetication from a trusted service, e.g. Facebook/Google login
  - integrate with SSO e.g. Okta, OneLogin, Centrify which centralizes authentication across enterprise systems so employees can log in seamlessly to third-party applications using their business email

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

    -

### session hijacking

- exposure

  - ...

- fallout

### XML attacks

- exposure

  - ...

- fallout
  - ...

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
