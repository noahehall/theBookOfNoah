# haproxy
  - [we use haproxy 2.4](https://cbonte.github.io/haproxy-dconv/2.4/intro.html)


## links
  - [observability types with haproxy](https://www.dotconferences.com/2018/06/willy-tarreau-observability-tips-with-haproxy)

### haproxy guides, docs, and specs
  - [haproxy community](https://www.haproxy.org/)
  - [haproxy community docs](https://www.haproxy.org/#docs)
  - [management guide](https://cbonte.github.io/haproxy-dconv/2.4/management.html)
    - didnt finish
      - unix socket commands
        - somewhere around the prompt cmd
      - tricks for easier configuration management
      - well known traps to avoid
      - debugging and performance issues
      - security considerations

    - skipped
      - stopping and restarting
      - file descriptor limitations
      - memory management
      - cpu usage
      - statistics and monitoring
      - master cli
      -
  - [configuration guide](https://cbonte.github.io/haproxy-dconv/2.4/configuration.html)
  -

## baremetal
  - [installation steps for 2.4](https://haproxy.debian.net/#?distribution=Ubuntu&release=focal&version=2.4)


## docker


# best practices
  - never 
    - connecting external consumers directly to backend services: creates tight coupling between frontend Y backen d components; difficult to manage and scale


## companion tech 
  - socat: the swiss army knife for piping connectinos, connecting one thing to another
    - used to query haproxy runtime API on the cli, potentially piping it into other things
    
# terminology
  - api gateway: handles load balancing, security, rate limiting, monitoring and other cross-cutting conerns for api services
    - combines disparate APIs behind as ingle, unifying URL to consolidate the way consumers access services 
    - a single reference point enables access to all services
    - orchestration layer that forwards requests; enables the decoupling of frontend & backend services
  - 


## haproxy specific
### section boundaries
  - define how the server performas as a whole
    - set default settings 
    - determines how requests are received (frontend)
    - determines where requests are routed (backend)
  - each section can be in a separate file for easier reuse

  - global: process wide security and performance tuning at a low level
  - defaults: helps reduce duplication 
    - apply to all frontend & backend sections that come after it
    - defaults cascade: i.e. you can group [defaults > frontend > backend] to create config types, e.g. one group for TCP layer 4 and another group for HTTP layer 7 
  - peers
  - listen
  - frontend: accepts incoming (external) requests: routes requests to backends
  - backend: fulfills incoming (frontend) requests
  
### directives: 
  - statements to configure each section boundary
    - many overlap and cascade, e.g. the same directive in global > defaults > [frontend,backend] can be overridden
  
  
  - observability/monitoring
    - log:
    - stats:
  
  - routing 
    - bind:
    - balance:
    - use_backend:
    - http-request:
    - server:
    - cpu-map:
  
  - general configuration
    - mapfile: stores key/value associations in memory
      - e.g. concat & store host/path key and set the host/path value as a name for a backend to manage ACL routing rules
    - nbproc:
    - nbthread:
    - option:
    - 
  
  - security related
    - maxconn: set the max # of connections
      - protect against running out of memory
    - stick-table: used for rate limiting
    - rate_abuse:
  
  - user/group related
    - group:
    - user:
  - 
  
  - ssl/tls related
    - ssl-default-bind-ciphers:
    - ssl-default-bind-options:
    - prefer-client-cipher:
  
  - arguments: appended to directives to modify behavior
    - check:
    - maxconn: use the previous maxconn setting
      - TODO

# main features 
  - dynamic configuration 
    - runtime API: a unix socket to dynamically configure a running haproxy server, 
      - enable/disable servers, health checks, load balancing, etc


  - http routing: route incoming requests to services based on ANY data in the request head//body; e.g. url path, query string, headers, etc
  
  - load balancing: when services are replicated (to improve performance & resilience); the api gateway routes requests between them based on some balancing strategy
    - roundrobin: for quick and short requests
    - leastconn: for long lives connections, e.g. websockets
    - uri: route to services optimized to handle speicfic types of requests
  
  
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

## enterprise modules 
  - lb-update: read map files and refresh ACLs without reloading
## management

### security
  - is designed to run with very limited privs
  - always isolate the haproxy process in a chroot jail and drop its privs to a no-root user without any perms inside the jail
    - START AS ROOT and RUN AS ROOT are TWO SEP THINGS BTCH
      - changing from the root UID prior to starting haproxy reduces the effective ecurity restrictions
      - you NEED to START AS ROOT to set the correct restrictions
        - adjust file descriptor limits
        - bind to privileged port numbers
        - bind to a specific network interface
        - transparently listen to a foreign address
        - isolate itself inside a chroot jail
        - drop to another non-priviledged uid
      - you NEED to RUN AS ROOT to (rarely required)
        - bind to an interface for outgoing connections
        - bind to privileged source ports for outgoing connections
        - transparently bind to a foreign address for outgoing connections

### log managent
  - set the log server ip:port in the globals section
    - this way it is centralized
    - configure your syslog daemon to listen to udp traffic
      - some may need customization to enable this, dork it
  - testing syslog functionality
    - restart haproxy: each frontend & backend logs one line indicating its restarting; if you see this, its working
    - run `strace -tt -s100 -etrace=sendmsg -p HAPROXY_PID`
      - perform some activity that should be logged
      - the activity should be logged using `sendmsg()`
        - if not: restart using strace on top of haproxy
          - if still not: something HAS (oh yea?) to be wrong with the config


### put somewhere else
  - cli > config options
    - you can modify runtime ops quickly without changing the config file
    -


```sh
  # view haproxy help
  haproxy

  # start haproxy with X number of config files
  # + each cfg must start on a section boundary
  haproxy -- cfg1 cfg2 cfgX
  # + start haproxy loading ALL someconfig.cfg in the directory
  # + files loaded in lexical order (using LC_COLLATE=C)
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
    -Ws # master-worker mode + notify supportl have to build haproxy with `USE_SYSTEMD` enabled
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
    $HAPROXY_LOCALPEER #get the peer name when using peers replication
```
