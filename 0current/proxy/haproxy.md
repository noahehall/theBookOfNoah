# haproxy

- if something is in `# DEFAULTS`
  - it can go anywhere
- if something is in `# FRONTEND`
  - it can NOT go in backend
- if something is in `# BACKEND`
  - it cannot go in frontend
- if something can go in frontend / backend but not defaults
  - havent figured where to put this shiz yet

## links

- [haproxy docs (start at configuration manaul and ctrl f it)](https://docs.haproxy.org/)
  - hide the sidebar taking up too much real estate: `document.getElementById('sidebar').style.display = 'none' `
  - a sorted list of links somewhere on that screen: likely where you want to be for exploration
- [haproxy enterprise docs](https://www.haproxy.com/documentation/hapee/)
- [haproxy community](https://www.haproxy.org/)
- [haproxy community docs](https://www.haproxy.org/#docs)
- docker
  - [haproxy intel docker](https://hub.docker.com/r/bitnami/haproxy-intel/)
  - [haproxy official docker](https://hub.docker.com/_xxxxxxxxxxxxxxxxx_/haproxy)
  - [haproxy ubuntu](https://hub.docker.com/r/haproxytech/haproxy-ubuntu)
- interwebs
  - [server hostnames are static](https://serverfault.com/questions/771477/haproxy-dynamic-server-address-based-off-of-header-value)
- configuration
  - [basic configuration guide](https://www.haproxy.com/blog/the-four-essential-sections-of-an-haproxy-configuration/)
  - [dynamic configuration](https://www.haproxy.com/blog/dynamic-configuration-haproxy-runtime-api/)
  - [configuration guide](https://cbonte.github.io/haproxy-dconv/2.4/configuration.html)
  - [defaults](https://www.haproxy.com/documentation/hapee/latest/configuration/config-sections/defaults/)
  - [globals](https://www.haproxy.com/documentation/hapee/latest/configuration/config-sections/global/)
  - [example configurations](http://git.haproxy.org/?p=haproxy-2.3.git;a=tree;f=examples)
  - [haproxy load balancing](https://www.haproxy.com/blog/haproxy-configuration-basics-load-balance-your-servers/)
  - [dns service discovery](https://www.haproxy.com/blog/dns-service-discovery-haproxy/)
  - [seamless reloads](https://www.haproxy.com/blog/truly-seamless-reloads-with-haproxy-no-more-hacks/)
  - [load balancing with haproxy service discovery integration & consul](https://learn.hashicorp.com/tutorials/consul/load-balancing-haproxy)
  - [example configurations](http://git.haproxy.org/?p=haproxy-2.3.git;a=blob;f=examples/acl-content-sw.cfg;h=1872789ac2d1198f4321e77c0dad4f382cc8f206;hb=HEAD)
  - [multithreading in haproxy](https://www.haproxy.com/blog/multithreading-in-haproxy/)
- observability
  - [log formats](https://www.sumologic.com/blog/haproxy-log-format/)
  - [stats page](https://www.haproxy.com/blog/exploring-the-haproxy-stats-page/)
  - [logging](https://www.haproxy.com/blog/introduction-to-haproxy-logging/)
  - [observability types with haproxy](https://www.dotconferences.com/2018/06/willy-tarreau-observability-tips-with-haproxy)
- acls
  - [intro](https://www.haproxy.com/blog/introduction-to-haproxy-acls/)
  - [acl basics](https://docs.haproxy.org/2.7/configuration.html#7.1)
  - [acl fetching samples](https://docs.haproxy.org/2.7//onepage/#7.3)
  - [acl converters](https://docs.haproxy.org/2.7/configuration.html#7.3.1)
  - [haproxy acls overview](https://www.haproxy.com/documentation/hapee/latest/configuration/acls/overview/)
  - [path based routing](https://www.haproxy.com/blog/path-based-routing-with-haproxy/)
- protocols
  - [haproxy http/s same port](https://timjrobinson.com/haproxy-how-to-run-http-https-on-the-same-port/)
  - [haproxy and websockets](https://www.haproxy.com/blog/websockets-load-balancing-with-haproxy/)
- ssl
  - [ssl tut by mozilla](https://wiki.mozilla.org/Security/Server_Side_TLS)
  - [ssl cipher suite generator](https://mozilla.github.io/server-side-tls/ssl-config-generator/)
  - [ssl server test](https://www.ssllabs.com/ssltest/)
  - [ssl termination](https://www.haproxy.com/blog/haproxy-ssl-termination/)
  - [ssl redirect](https://www.haproxy.com/blog/redirect-http-to-https-with-haproxy/)
- frontends
- backends

## best practices

- never
  - connecting external consumers directly to backend services: creates tight coupling between frontenda and backend components
  - use these options as haproxy docs say they increase attack vectors
    - external-check
    - h1-accept-payload-with-any-method
    - insecure-fork-wanted
    - using external checks which are strongly recommended against
    - insecure-setuid-wanted
    - ...
- always
  - each server should have a maxconn setting; even if its just a guess
    - you can modify this to adapt to your environment
  - place the global section in its own file to be reused between multiple instances/machines
  - nbproc vs nbthread
    - use nbthread (threads) when resources are limited; dont scale as well as nbproc (multiple processes)
    - use nbproc to support multi processes; scale far superior than threads (nbthread)
    - always set `cpu-map` when using either to pin processes to a specific core for max performance
- somtimes
  - add denystats argument to a http-request deny directive to set custom response codes when rejecting request

### security

- TODO: remove this section and put directives in one of the others
  - then add security to best practices with pointers to where things are
- is designed to run with very limited privs
- always isolate the haproxy process in a chroot jail and drop its privs to a non-root user without any perms inside the jail
  - requires:
    - haproxy process starts as root
    - the chroot dir is both empty and nonwritable
  - it should START AS ROOT but never RUN AS ROOT
    - changing from the root UID prior to starting haproxy reduces the effective security implications
    - you NEED to START AS ROOT to set the correct restrictions
      - adjust file descriptor limits
      - bind to privileged port numbers
      - bind to a specific network interface
      - transparently listen to a foreign address
      - isolate itself inside a chroot jail
      - drop to another non-priviledged uid
    - running as RUN AS ROOT would allow
      - bind to an interface for outgoing connections
      - bind to privileged source ports for outgoing connections
      - transparently bind to a foreign address for outgoing connections

## terminology

- api gateway: handles load balancing, security, rate limiting, monitoring and other cross-cutting conerns for api services
  - combines disparate APIs behind a single, unifying URL to consolidate the way consumers access services
  - a single reference point enables access to all services
  - orchestration layer that forwards requests; enables the decoupling of frontend & backend services
- dynamic configuration
  - runtime API: a unix socket to dynamically configure a running haproxy server,
    - enable/disable servers, health checks, load balancing, etc
- http routing: route incoming requests to services based on ANY data in the request head/body; e.g. url path, query string, headers, etc
- load balancing: when services are replicated (to improve performance & resilience); the api gateway routes requests between them based on some balancing strategy
- rate limiting: limit # of requests clients can make within a period of time
  - haproxy can track clients by IP, cookies, api tokens, headers, etc
  - daily limit: useful when creating tiered services, e.g. free > base > premium limits
  - rate of requests: useful to prevent abuse/runaway processes
- monitoring: tells you HOW WELL something (doesnt) work
  - i.e. you monitor an observable system
- observability: helps you DETECT what is/not WORKING and WHY
  - a measure of how well internal states of a system can be inferred from knowledge of its external outputs; i.e. WTF IS GOING ON!!! (lol @willytarreau)
  - features
    - statistics dashboard: html stats page, view tabular data containing metrics for each frontend, backend & bind directive
      - hit the runtime api and get the same data as json
    - logs: hella shit related to each API call
- connection queuing
- authentication
- device detection
- security

## companion tech

- socat: the swiss army knife for piping connectinos, connecting one thing to another
  - used to query haproxy runtime API on the cli, potentially piping it into other things

### enterprise modules

- lb-update: read map files and refresh ACLs without reloading

## configuration

- define how the server performs as a whole
  - configure default settings
  - determines how requests are received (frontend)
  - determines where requests are routed (backend)
- each section can be in a separate file for easier reuse

### default file locations

- /etc/haproxy/\**/*someconfig.cfg

### global

- global: Parameters are process-wide and often OS-specific
  - process management and security
  - performance tuning
  - presetenv: set env var X to default Y, if X exists, it is not overwritten
  - setenv: force env var X to Y
  - set-var: sets process-wide var X to expression Y
  - set-var-fmt: set var X to string Y
  - stats maxconn: increase the stats maxconn to more than the default 10
- fd-hard-limit: Sets an upper bound to the maximum number of file descriptors that the process will use, regardless of system limits
- quiet: Do not display any message during startup. It is equivalent to the command-line argument "-q".

### admin

### defaults

- apply to all frontend & backend sections that come after it
- defaults cascade: i.e. you can group [defaults > frontend > backend] to create config types, e.g. one group for TCP layer 4 and another group for HTTP layer 7
- option forwardfor: Enable insertion of the X-Forwarded-For header to requests sent to servers
- timeout http-keep-alive: Set the maximum allowed time to wait for a new HTTP request to appear
- timeout http-request: the maximum allowed time to wait for a complete http request
- timeout tarpit: Set the duration for which tarpitted connections will be maintained

### frontend

- accepts incoming (external) requests: routes requests to backends
- defines the IPs and PORTS clients can connect to

- bind: listen on one/more addresses and/ports when used as a reverse proxy
  - can be specified multiple times
  - omit the IP to bind to all addresses
  - port can be a single, range, or comma separated list
  - arguments
    - address & ports
      - address: hostname, ip, \*/unset to listen to all ipv4 addrs, use ';;' for ipv6
        - 'ipv4@' only ipv4
        - 'ipv6@' only ipv6
        - 'unix@' only a local unix socket
        - 'abns@' abstract linux namespace
      - port range: '80', '8000-8080',
    - ssl: manage ssl terminations
    - crt: manage TLS terminations
    - process: when nbproc is enabled; specifies which process to use e.g. process 1
    - process-set: all|odd|even|number
    - thread-set: all|odd|even|number
- usebackend: forward requests `if|unless` the acl condition matches
- defaultbackend: default handler after all other usebackends
  - if a request isnt processed by a usebackend or defaultbackend haproxy responds with 503
- http-request: access control for layer 7 request processing
  - add-header
  - allow
  - auth
  - capture
  - del-header
  - denystatus
  - deny: deny a incomming http request
  - if
  - redirect: respond with a
  - reject
  - replace-header
  - set-header
  - set-log-level
  - set-method
  - set-path
  - set-query
  - set-uri
  - set-var
  - tarpit
  - unless
  - unset-var
- option contstats: enable continuous traffic statistics updates
- option http-ignore-probes: even more restrictive than `option dontlognull` as it prevents messages from being sent to the client
- option dontlognull: Enable or disable logging of null connections; a connection on which no data has been transferred will not be logged
- option httplog: enable rich logging of http request, session state and timers;
  - overrides any previous `log-format` directive
  - shouldnt be used in tcp mode
- option tcplog: enable rich logging of tcp connections with session state and timers
  - shouldnt be used in http mode
- log-format: specifies the log format string to use for traffic logs
  - it can be as rich as option [http|tcp]log but you have to set it yourself
- timeout client: maximum inactivity time on the client side; client must acknowledge/send data within this period
  - in http mode:
    - in first phase when the client sends the request
      - prefer setting the `timeout http-request` to protect haproxy from sloworis like attacks
    - in the response phase the client is reading data received from the server

### backend

- responds to requests received from frontends

- server: heart of the backend section; can be specified multiple times to specify settings and URI for your physical backend servers that fullfil the requests
  - each server must explicitly opt into health checks via the `check` argument on the server or default-server line
  - set default settings on default-server:, then customer on server:
  - specifying an ip addr/hostname will force resolution at haproxy startup
  - specifying resolvers: will allow resolution at runtime
- server-template: placeholders for service discovery tools to populate server directives dynamically
- default-server: configures defaults for any server lines that follow it
  - init-addr last,libc,none: never fail on address resolution
- balance: specifies load balancing strategy for a backend
  - is ignored if a request mathes a persistence strategy
    - e.g. an ACL forcing a request to route to specific server based on cookie
  - algorithms:
    - roundrobin: for quick and short requests; each server is used in turns; smoothest and fairest algorithm when the server's processing time remains equally distributed
    - static-rr: similar to roundrobin except that it is static, which means that changing a server's weight on the fly will have no effect
    - leastconn: for long lives connections, e.g. websockets; The server with the lowest number of connections receives the connection
    - uri: route to services optimized to handle speicfic types of requests; hashes either the left part of the URI (before the question mark) or the whole URI (if the "whole" parameter is present) and divides the hash value by the total weight of the running servers
    - first: the first server with available connection slots receives the connection
      - once a server reaches its maxconn value, the next is used
    - source: the source IP address is hashed & divided by total weight of the running servers to designate which server will receive the request
      - the same IP address will always reach the same server while the servers stay the same
      - generally used in TCP mode where no cookie may be inserted
    - url_parem: The URL parameter specified in argument will be looked up in
      the query string of each HTTP GET request.
    - hdr(name): The HTTP header <name> will be looked up in each HTTP request
- cookie: enables cookie-based peristence
  - SERVERUSED: send this as a cookie to the client; the value is the server that handles the initial request; the client will always go to this server for this session
    - the name of the server is set by the cookie argument on the server line
- option httpchk: send layer 7 (http) health checks to backend server
  - has to respond with 2xx|3xx to be considerd healthy
  - tcp only has to respond (e.g. even a 5xx) to be considered health
  - will default to send the request as OPTIONS /
  - can be used with servers in mode tcp if they respond with http at the route specified
- option redispatch: Enable or disable session redistribution in case of connection failure
- option http-server-close: Enable or disable HTTP connection closing on the server side
- retries: the number of times a request/connection attempt should be retried on a server after a failure
- timeout server: maximum inactivity time on the server side; server must acknowledge/send data within this period
  - in http mode:
    - in first phase when the server sends the http headers
      - directly represents the servers processing time for the request
      - start with unnacceptable times, then increase until you find an optimal setting
        - you can check the logs to observe the response time distribution
- timeout connect: maximum time to wait for a successful connection to a backend server
  - if the server is located on the same LAN as haproxy, the connection should be less than a few milliseconds
- timeout queue: Set the maximum time to wait in the queue for a connection slot to be free
- max-keep-alive-queue:the maximum server queue size for maintaining keep-alive connections; set a threshold on the number of queued connections at which HAProxy stops trying to reuse the same server and prefers to find another one

### listen

- combines backend and frontend sections into one
- only use for the stats page

### peers

- section for syncing multiple haproxy servers

### mailers

- section to configure mail notifications

### resolvers

- section to configure and setup DNS resolution
- Creates a new name server list labeled <resolvers id>
  - nameserver
  - acepted_payload_size:
    hold:
    reoslution_pool_size
    resolve_retries
    timeout

## configuration directives

- statements to configure each section boundary
- many overlap and cascade, e.g. the same directive in global > defaults > [frontend,backend] can be overridden

### security

- never set `option dontlognull` in uncontrolled environments
- maxconn: maximum per-process number of concurrent connections; always set in both global and defaults section
  - Proxies will stop accepting connections when this limit is reached
  - in global at the process level
  - in defaults at the backend or frontend level
    - in which they share the total max connections set at the global level
  - protect against running out of memory
  - when set on frontends:
    - development: set equal to global maxxconn
    - loadbalancing: roughly spread the global maxxconn evenly between servers so they get a fair share of connections
- stick-table: used for rate limiting
- rateabuse:
- ssl-default-bind-ciphers: sets the default string describing the list of cipher algorithms ("cipher suite") that are negotiated during the SSL/TLS handshake up to TLSv1.2
  - HAProxy will select the first one listed that the client also supports, unless the prefer-client-ciphers option is enabled
- ssl-default-bind-options: configures SSL/TLS options such as ssl-min-ver to disable support for older protocols
- prefer-client-cipher: will use client ciphers over the ones specified in ssl-default-bind-ciphers
- ssl-default-server-ciphers: for the server
- ssl-default-server-ciphersuites: same for the server
  -ssl-default-server-options: same for the server
- timeout: when a timeout expires haproxy closes the connection;
  - reduces the risk of deadlocked processes tying up connections
  - in `mode tcp`: server & client timeout should be identical; haproxy doesnt know who is speaking
    - in http mode they should `generally` be equal as well
- ssl-default-bind-ciphers: efault string describing the list of cipher algorithms ("cipher suite") that are negotiated during the SSL/TLS handshake up to TLSv1.2

### observability/monitoring

- log: startup|runtime warnings & errors; specify which syslog to use (e.g. Syslog/journald); Enable per-instance logging of events and traffic.
  - you need to setup the syslog daemon in order to read logs output by haproxy
  - log stdout: likely what you want
  - log /dev/log: traditional nix socket where Syslog & journald listen
  - log local0: syslog facility for custom use
  - log global: informs frontends to use the log setting defined in the global section

### haproxy

- stats socket: enables the runtime api, accepts same values as `bind`
  - use to dynamically disable servers and health checks, change the load balancing weights of servers, and pull other useful levers
  - All parameters supported by "bind" lines are supported, for instance to
- group: run as this pre-existing group after initalizing as root
  - uses the GID of group name <group name> from /etc/group.
- user: user as this pre-existing user after initializing as root
  - uses the UID of user name <user name> from /etc/passwd.
- nbproc: # of processes to spawn at startup: each has its own stats, stick tables, etc
  - be sure to set `cpu-map` to ensure processes are pinned to a specific core for max perf
- nbthread: # of threads to spawn at startup: each share stats, stick tables, etc
  - be sure to set `cpu-map` to ensure processes are pinned to a specific core for max perf
- cpu-map: pin processes & threads to a specific cpu core
  - always use when setting nbproc/nbthread
- mode:
  - mode tcp: layer 4 tcp servers; faster than http but no access to higher layer information
  - mode http: layer 7 http servers: slower than tcp but has access to all the metadata about the request

### environemnt & variables

- variables scopes
  - proc{}: var is available during all phases
  - sess{}: var is available during a clients entire TCP session
  - txn{}: var is available during an entire http request-response transaction
  - req: var is available during the http request phase only
  - res: var is available during the http response phase only
- setenv: set & override variables
  - `setnenv VARNAME VALUE`
- presetenv: set (dont override) variables
  - `presetenv VARNAME USETHISIFMISSING`
- env(): use an environment variable
  - `env(VARNAME)`
- set-var(): set a variable for later use
  - `set-var(SCOPE.KEY)`
- var(): use a variable previously set
  - `var(SCOPE.KEY)`

### needs categorization

- acl: ..

- general configuration
  - mapfile: stores key/value associations in memory
    - e.g. concat & store host/path key and set the host/path value as a name for a backend to manage ACL routing rules
  - option:
  - log-option: set a custom log format
- arguments: appended to directives to modify behavior
  - setting time:
    - 10 i.e. 10 milliseconds
    - 10s i.e. 10 seconds
    - 10m i.e. 10 minutes
  - check:
  - maxconn: use the previous maxconn setting
  - deny-status: set the status when denying a request

### log management

- set the log server ip:port in the globals section
  - this way it is centralized
  - configure your syslog daemon to listen to udp traffic
    - some may need customization to enable this, dork it

## ACLs

- query and set conditions for any information in a request or response before taking some action
  - routing decisions, redirectin requests, static responses, etc
- syntax: acl NAME FETCH.this[,converters,...X] [FLAGS] FETCH.that
  - name: to assign the acl to a var for reuse
  - fetch: compare [this] against [that]
  - converters: transforms the fetch
  - flags: modifies the comparison
- named acl: `acl is_static path -i -m beg /static/`
- anonymous: `use_backend be_static if { path -i -m beg /static/ }`
- NOT conditions: `http-request deny if !{ src 10.0.0.0/16 }`
- OR conditions:
  - `http-request deny if { path -i -m beg /evil/ } || { path -i -m end /evil }`
  - http-request deny if starts_evil || ends_evil
  - path starts with /evil/ (e.g. /evil/foo) or ends with /evil (e.g. /foo/evil) will be denied.
- OR shorthand: specify the same acl NAME with multiple conditions
  - `acl evil path_beg /evil/`
  - `acl evil path_end /evil`
  - `http-request deny if evil`
- AND conditions: acls separated by spaces
  - `http-request deny if { path -i -m beg /api/ } { src 10.0.0.0/16 }`
- import args from file: `http-request deny if{ src -f /list/of/ip/addrs.acl }`

### fetches

- some fetches have shorthands with built-in flags
  - e.g. `path_beg` is shorthand for `path -m beg` that combines fetch path with flag `-m beg`
  - FYI: if you chain a fetch with a converter you have to specify it using a flag
    - best to just stay away from shorthands all together
- src: client IP address that that made the request
- path: the path the client requested
- path_beg: shorthand for `-m beg`
- url_param(poop): returns the value of poop
- req: an object containing the full request
  - ssl_hello_type
  - hdr(poop): returns the value of the request header
- HTTP: true if the request was an http request
- TRUE: not quite sure how this actually works, check the proxy-stats it compares against the AUTH
- ssl_fc: true if the connection was made over SSL and haproxy is locally deciphering it

### converters

- lower: lowercase
- upper: uppercase
- base64: base64 encodes
- field: extract a value based on a word boundary like awk
  - e.g. `field("a|b|c")` returns `c`
- map: retrieve a value from a map file
- regsub(regex): uses regex to transform
  - e.g. remove `/static` from the start of the path `path,regsub(^/static,/)`

### flags

- -i: case insensitive match
- -m: specifies the match type
  - beg: match on the beginning of the string
  - str: exact string match
  - end: end of string
  - sub: substring match: poopsoupbloop matches poop, soup and bloop
  - reg: CPU hungry match using regex
  - found: true if the fetch is found, doesnt take any args
    - e.g. `req.hdr(poop) -m found` returns true if request contains header poop
  - len: returns the length of the fetch
- -f: match against a list of strings in a file; strings in file cannot contain regex

### statements

- if: `thisAction if thisAcl`
- unless: `thisAction unless thisAcl`

### functions

- replace-path: e.g. to remove the api from from domain.com/api/poop
  - `http-request replace-path /api(/)?(.*) /\2`

## workflows

- testing syslog functionality
  - restart haproxy: each frontend & backend logs one line indicating its restarting; if you see this, its working
  - run `strace -tt -s100 -etrace=sendmsg -p HAPROXYPID`
    - perform some activity that should be logged
    - the activity should be logged using `sendmsg()`
      - if not: restart using strace on top of haproxy
        - if still not: something HAS (oh yea?) to be wrong with the config

## example spec

- cli > config options
  - you can modify runtime ops quickly without changing the config file
  -

```sh
#3################ GLOBAL
presetenv envKey defaultValue
setenv envKey forceThisValue
set-var proc.current_state str(primary)
set-var-fmt proc.current_state "primary"
ssl-default-bind-options ssl-min-ver TLSv1.2 no-tls-tickets

################## FRONTEND
# bind
bind :80,:443
bind poop:80,soup:443
bind :80-8080

# ssl
bind 10.0.0.3:443 ssl crt /etc/ssl/certs/mysite.pem
http-request redirect scheme https unless { sslfc }

# acls
usebackend apiservers if { pathbeg /api/ }
# case insensitive match against patterns in a file
path -i -m beg -f /etc/hapee/paths_secret.acl
# multithreading
nbproc 2
nbthread 4
bind :8080  process 1 # think you should use cpu-map instead
## all these lines bind thread 1 to the cpu 0, the thread 2 to cpu 1, etc
cpu-map auto:1/1-4   0-3
cpu-map auto:1/1-4   0-1 2-3
cpu-map auto:1/1-4   3 2 1 0
## bind each thread to exactly one CPU using all/odd/even keyword
cpu-map auto:1/all   0-63
cpu-map auto:1/even  0-31
cpu-map auto:1/odd   32-63
# map 40 threads of those 4 groups to individual CPUs
cpu-map auto:1/1-10   0-9
cpu-map auto:2/1-10   10-19
cpu-map auto:3/1-10   20-29
cpu-map auto:4/1-10   30-39

# backend specific
balance roundrobin
default-server check maxconn 20
server server1 10.0.1.3:80 cookie server1 maxconn 5
server server2 10.0.1.4:80 cookie server2 maxconn 5
server s1 app1.domain.com:80 check resolvers mydns maxconn 10

## load balancing
balance <alog> <args>

## cookies
cookie POOP insert indirect nocache

## health checks
option httpchk HEAD /
option httpchk
option httpchk <uri>
option httpchk <method> <uri>
option httpchk <method> <uri> <version>


# resolvers
resolvers mydns
  nameserver dns1 10.0.0.1:53
  nameserver dns2 10.0.0.2:53
  resolve_retries       3
  timeout resolve       1s
  timeout retry         1s
  hold other           30s
  hold refused         30s
  hold nx              30s
  hold timeout         30s
  hold valid           10s
  hold obsolete        30s

# listen (only use for stats)
listen stats
    bind *:8404
    stats enable
    stats uri /monitor
    stats refresh 5s

################## OLD
# view haproxy help
haproxy

# start haproxy with X number of config files
# + each cfg must start on a section boundary
haproxy -- cfg1 cfg2 cfgX
# + start haproxy loading ALL someconfig.cfg in the directory
# + files loaded in lexical order (using LCCOLLATE=C)
haproxy -f cfgdir

# security tasks (keep this shit first)

# + set the chroot jail inside the config
# ++ after creating the location on the cmd line
chroot /var/empty
mkdir /var/empty && chmod = /var/empty || echo "failed" # must be done first before starting haproxy


# debug tasks
# + validate haproxy config
haproxy -c -f /some/haproxy.cfg


# other common tasks

# + routing tasks
# ++ route requests to a backend server NAME if path begins with /api/
usebackend NAME if {pathbeg /api/ }

# ++ specify servers to be used in a backend
server NAME1 IP:PORT args
server NAME2 domain.com:PORT args
server NAME3 IP:PORT check args # opt into health checking

# + restart haproxy
sudo systemctl restart haproxy

# + start haproxy from an init file
# ++ force daemon mode
# ++ store existing pids in a pidfile
# ++ notify old processes to finish before leaving
# ALWAYS DOOOO THIS... or just set `daemon` in global ;)
haproxy -f /some/config.cfg \
  -D -p /var/run/haproxy.pid -sf $(cat /var/run/haproxy.pid) \


# + load specific configs in a specific order
haproxy -f config1.cfg -f config2.cfg \
  -D -p /var/run/haproxy.pid -sf $(cat /var/run/haproxy.pid)

# + load an unknown number of files
# ++ ALWAYS load them after default cfgs and after --
haproxy -f default.cfg -f other.cfg \
  -D -p /var/run/haproxy.pid -sf $(cat /var/run/haproxy.pid) \
  -- arbitrary/dir/with/files/*



# stats shit
# + listen section to setup the stats page without using both frontend and backend section boundaries
listen stats
  bind *:8404
  stats enable
  stats uri /monitor
  stats refresh 5s

# socat specific
# + 2 methods for interacting with haproxy via soxy
# ++ HAPROXY.sock is any sock, e.g.  /var/run/haproxy.sock
socat HAPROXY.sock stdio # use in scripts
socat HAPROXY.sock readline # issuing cmds by hand
# + example noninteractive mode
# ++ e.g. via a script
echo "show info; show stat; show table" | socat HAPROXY.sock stdio

# long list of options
# + common options
-C dir #change to dir before loading config files
-D # start as a daemon, ALWAYS in an script to prevent a fault cfg from prevent a system unable to boot
-q # enable quiet mode
-m n # set total allocatable memory in megabytes for ALL processes (shared)
-n n # set the per process connection limit; @see maxconn
-N n # set the per-proxy maxconn; default 2000
-p file #write all processes pids into file during startup

# + prod
-q # enable quiet mode; use with `-c` to ONLY check if a cfg is valid

# + dev
-dB # disable bg mode and multi-process mode; USE in dev/tests NEVER in init scripts

# + master-worker mode
-W # master-worker mode; master will monitor workers; recomennded with multiprocesses and systemd; enables reloading haproxy via SIGUSR2 to the master
-Ws # master-worker mode + notify supportl have to build haproxy with `USESYSTEMD` enabled
-S bind,opts,opts # bind a master CLI, permits access to all processes; bind the master to a local unix socket

# + lifecycle
-sf pids # finish (SIGUSR1) to old processes after new boot completion (after finishing tasks); accepts a list of pids e.g. from pidof or pgrep
-st pids # terminate (SIGTERM) to old processes after new boot completion (without completing their tasks)
-x socket # connect to a unix socket and retrieve listening sockets from the old process; useful to avoid missing new connections when reloading cfgs on linux; enable the stats socket using `expose-fd listeners` in the cfg

# + debugging
-v # version and build date
-vv # version, build options, library versions and usable pollers
-V # enable verbose mode
-c # check configuration files and exit; use with `-q` to ONLY check the cfg
-d # enable debug mode; disables daemon mode; NEVER use in an init script
-dD # enable diagnostic mode; output extra warnings about suspicious cfg statements
-dS # use this when inspecting via strace
-dV # disable ssl verify; review when debugging prod
-dW # refuse to start if warnigns exist in cfg
-de # disable epoll poller
-dk # disable kqueue poller
-dp # disable poll poller
-dr #ignore server address resolution; using for debugging prod configs


# + edge case options
# ++ peering
-L name #set the local peer name when using peers replication
# ++ skipped shit
-dG
-dM



# env vars
$HAPROXYLOCALPEER #get the peer name when using peers replication
```
