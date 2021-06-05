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
    -W # master-worker mode; master will monitor workers; recomennded with multiprocesses and systemd; enables reloading haproxy via SIGUSR2 to the master
    -Ws # master-worker mode + notify supportl have to build haproxy with `USE_SYSTEMD` enabled

  # + debugging
    -N limit # set the per-proxy maxconn; default 2000
    -V # enable verbose mode
    -c # check configuration files and exit
    -d # enable debug mode; disables daemon mode; NEVER use in an init script
  # + edge case options
  # ++ peering
    -L name #set the local peer name when using peers replication


  # env vars
    $HAPROXY_LOCALPEER #get the peer name when using peers replication
```
