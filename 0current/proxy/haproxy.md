# haproxy

## links

- [haproxy docs (start here)](https://docs.haproxy.org/)
- [haproxy enterprise docs](https://www.haproxy.com/documentation/hapee/)
- [haproxy community](https://www.haproxy.org/)
- [haproxy community docs](https://www.haproxy.org/#docs)
- [starter guide with links at top](https://cbonte.github.io/haproxy-dconv/2.6/snapshot/intro.html)
- [installation steps for 2.4](https://haproxy.debian.net/#?distribution=Ubuntu&release=focal&version=2.4)
- docker
  - [haproxy intel docker](https://hub.docker.com/r/bitnami/haproxy-intel/)
  - [haproxy official docker](https://hub.docker.com/_xxxxxxxxxxxxxxxxx_/haproxy)
  - [haproxy ubuntu](https://hub.docker.com/r/haproxytech/haproxy-ubuntu)
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
  - [haproxy acls overview](https://www.haproxy.com/documentation/hapee/latest/configuration/acls/overview/)
  - [path based routing](https://www.haproxy.com/blog/path-based-routing-with-haproxy/)
- protocols
  - [haproxy http/s same port](https://timjrobinson.com/haproxy-how-to-run-http-https-on-the-same-port/)
  - [haproxy and websockets](https://www.haproxy.com/blog/websockets-load-balancing-with-haproxy/)
- ssl
  - [ssl server test](https://www.ssllabs.com/ssltest/)
  - [ssl termination](https://www.haproxy.com/blog/haproxy-ssl-termination/)
  - [ssl redirect](https://www.haproxy.com/blog/redirect-http-to-https-with-haproxy/)
- frontends
- backends

## best practices

- never
  - connecting external consumers directly to backend services: creates tight coupling between frontenda and backend components
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

- is designed to run with very limited privs
- always isolate the haproxy process in a chroot jail and drop its privs to a non-root user without any perms inside the jail
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
  - roundrobin: for quick and short requests
  - leastconn: for long lives connections, e.g. websockets
  - uri: route to services optimized to handle speicfic types of requests
  - first: the first server with available connection slots receives the connection
    - once a server reaches its maxconn value, the next is used
  - source: the source IP address is hashed & divided by total weight of the running servers to designate which server will receive teh request
    - the same IP address will always reach the same server while the servers stay the same
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

- global: process wide security and performance tuning at a low level
  - all about sizing and resources
  - other sections describe traffic and processing rules

### admin

### defaults

- apply to all frontend & backend sections that come after it
- defaults cascade: i.e. you can group [defaults > frontend > backend] to create config types, e.g. one group for TCP layer 4 and another group for HTTP layer 7

### frontend

- accepts incoming (external) requests: routes requests to backends
- defines the IPs and PORTS clients can connect to

### backend

- fulfills incoming requests accepted by frontends
- each backend defines a group of servers to be load balanced

### listen

- combines backend and frontend sections into one
- only use for simple things (if any!)

### peers

- section for syncing multiple haproxy servers

### mailers

- section to configure mail notifications

### resolvers

- section to configure and setup DNS resolution

## configuration directives

- statements to configure each section boundary
- many overlap and cascade, e.g. the same directive in global > defaults > [frontend,backend] can be overridden

### security

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
- ssl-default-bind-ciphers: ssl & tls ciphers every bind directive will use by default
  - HAProxy will select the first one listed that the client also supports, unless the prefer-client-ciphers option is enabled
- ssl-default-bind-options: configures SSL/TLS options such as ssl-min-ver to disable support for older protocols
- prefer-client-cipher: will use client ciphers over the ones specified in ssl-default-bind-ciphers
- timeout: when a timeout expires haproxy closes the connection;
  - reduces the risk of deadlocked processes tying up connections
  - in `mode tcp`: server & client timeout should be identical; haproxy doesnt know who is speaking
    - in http mode they should `generally` be equal as well
  - timeout connect: maximum time to wait for a successful connection to a backend server
    - if the server is located on the same LAN as haproxy, the connection should be less than a few milliseconds
  - timeout client: maximum inactivity time on the client side; client must acknowledge/send data within this period
    - in http mode:
      - in first phase when the client sends the request
        - prefer setting the `timeout http-request` to protect haproxy from sloworis like attacks
      - in the response phase the client is reading data received from the server
  - timeout server: maximum inactivity time on the server side; server must acknowledge/send data within this period
    - in http mode:
      - in first phase when the server sends the http headers
        - directly represents the servers processing time for the request
        - start with unnacceptable times, then increase until you find an optimal setting
          - you can check the logs to observe the response time distribution
  - timeout http-request: the maximum allowed time to wait for a complete http request

### observability/monitoring

- log: startup|runtime warnings & errors; specify which syslog to use (e.g. Syslog/journald)
  - you need to setup the syslog daemon in order to read logs output by haproxy
  - log stdout: likely what you want
  - log /dev/log: traditional nix socket where Syslog & journald listen
  - log local0: syslog facility for custom use
  - log global: informs frontends to use the log setting defined in the global section

### haproxy

- stats socket: enables the runtime api
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
- option httplog: enable rich logging of http request, session state and timers;
  - overrides any previous `log-format` directive
  - shouldnt be used in tcp mode
- option tcplog: enable rich logging of tcp connections with session state and timers
  - shouldnt be used in http mode
- log-format: specifies the log format string to use for traffic logs
  - it can be as rich as option [http|tcp]log but you have to set it yourself

### frontend: reverse proxy client listeners

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
- default-server: configures defaults for any server lines that follow it

### backend: server responders

- server: heart of the backend section; can be specified multiple times to specify settings and URI for your physical backend servers that fullfil the requests
  - each server must opt into health checks via the check argument on the server or default-server line
- server-template placeholders for service discovery tools to populate server directives dynamically

### needs categorization

- routing
  - acl: ...
  - balance: specifies load balancing strategy for a backend
    - is ignored if ar equest mathes a persistence strategy
      - (e.g. an ACL forcing a request to route to specific server based on cookie)
  - cookie: enables cookie-based peristence
    - SERVERUSED: send this as a cookie to the client; the value is the server that handles the initial request; the client will always go to this server for this session
      - the name of the server is set by the cookie argument on the server line
- environemnt & variables
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
- general configuration
  - mapfile: stores key/value associations in memory
    - e.g. concat & store host/path key and set the host/path value as a name for a backend to manage ACL routing rules
  - option:
    - option httpchk: send layer 7 (http) health checks to backend server
      - has to respond with 2xx|3xx to be considerd healthy
      - tcp only has to respond (e.g. even a 5xx) to be considered health
      - will default to send the request as OPTIONS /
      - can be used with servers in mode tcp if they respond with http at the route specified
  - log-option: set a custom log format
  - http-check: customize http health checks via arguments
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

# multithreading
nbproc 2
nbthread 4
bind :8080  process 1


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
haproxy -f /some/config.cfg \
  -D -p /var/run/haproxy.pid -sf $(cat /var/run/haproxy.pid) \ # ALWAYS DOOOO THIS


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
