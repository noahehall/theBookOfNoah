# haproxy
  - [we use haproxy 2.4](https://cbonte.github.io/haproxy-dconv/2.4/intro.html)


## links
  - [haproxy community](https://www.haproxy.org/)
  - [haproxy community docs](https://www.haproxy.org/#docs)
  - [management guide](https://cbonte.github.io/haproxy-dconv/2.4/management.html)
  - [configuration guide](https://cbonte.github.io/haproxy-dconv/2.4/configuration.html)
  -

## baremetal
  - [installation steps for 2.4](https://haproxy.debian.net/#?distribution=Ubuntu&release=focal&version=2.4)


## docker


## terminology
  - section boundary: 
    - global
    - defaults
    - peers
    - listen
    - frontend
    - backend
## management
### put somewhere else
  - cli > config options
    - you can modify runtime ops quickly without changing the config file
    - 


```sh
  # view haproxy
  haproxy

  # start haproxy with X number of config files
  # + each cfg must start on a section boundary
  haproxy -- cfg1 cfg2 cfgX
  # + start haproxy loading ALL someconfig.cfg in the directory
  # + files loaded in lexical order (using LC_COLLATE=C)
  haproxy -f cfgdir
  # long list of options
  # + common uoptions
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
