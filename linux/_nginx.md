# books
  - nginx from beginner to pro
    - rahul soni

# links
  - [install instructions for ubuntu](https://docs.nginx.com/nginx/admin-guide/installing-nginx/installing-nginx-open-source/#installing-a-prebuilt-ubuntu-package-from-an-ubuntu-repository)
  - [install instructions for alpine](https://docs.nginx.com/nginx/admin-guide/installing-nginx/installing-nginx-open-source/#installing-prebuilt-alpine-linux-packages)
  - [available nginx distros for ubuntu](https://nginx.org/packages/mainline/ubuntu/dists/)
  - [compiling and installing from source](https://docs.nginx.com/nginx/admin-guide/installing-nginx/installing-nginx-open-source/#sources)
  - [install openssl on ubuntu](https://websiteforstudents.com/manually-install-the-latest-openssl-toolkit-on-ubuntu-16-04-18-04-lts/)
  - [all nginx open source downloads](https://nginx.org/download/)

# useful tools
  - lynx
    - terminal based web browser
    - useful for testing web accessibility issues
  - docker
    - containerize applications
  - virtualbox/kvm
    - virtualize machines
  - nano
    - simple text editor
  - wget
    - text based downloader
  - ssh
    - secure shell to allow remote login
  - libpcre3
  - libpcre3-dev
    - both used for implementing reg expression matching
  - openssl
  - libssl-dev
    - used to establish a secure channel between the web server and the client over SSL or TLS
  - zlib1g
  - zlib1g-dev
    - used for compression 


# terminology
  - http
    - hypertext transfer protocol
    - a set of rules for transferring files
    - a language in which a server and client communicate
  - servers
    - web server
      - a server that hosts an application that listens to the HTTP requests
      - responsible for listening for and responding to http requests
    - proxy server
      - reverse proxy server
        - retrieves resources from other servers on behalf of a client
  - media streaming
    - http streaming
      - when a viewer clicks play and the media startings playing after an intial amount of buffering
      - backend software ensures that the data rate of the encoded file is less than that of the bandwidth
      - no media is stored on the client
    - http progressive download
      - enables you to use simple http web servers
      - the media that is delivered is typically stored at the client side and played directly from the hard drive
      - since the data is stored locally before playing the user experience is a lot better than streaming
    - http adaptive streaming
      - automatically adapts to the clients bandwidth
      - when the connection is good the viewer gets higher quality content
      - when the connection quality deterorates, a lower data rate is opted for
      - requires dedicated streaming software
      -

# nginx
  - designed as a reverse proxy that doubles up as a web server
  - use cases
    - free, open source server
      - reverse proxy first, web server second
      - imap/pop3/smtp proxy
      - websocket
      - http(s), SPDY
    - event based reverse proxy
      - routes each request based on the URI
      - accelerate existing applicaations
        - put nginx infront of an existing set of web servers and let it take care of routing traffic to the back end intelligently
    - load balancer
      - ssl termination
        - ssl induces an extra processing overhead on the server side where it has to decrypt the request everytime
        - instead, each request arrives to the load balancer on a secure channel but will be sent to backend servers without SSL
          - webservers react faster and the response still returns to the clients in a secure manner
    - serving static files
      - not suited for serving dynamic files
    - video streaming mp4/flv/hds/hls
      - used to deliver video content via progressive downloads
    - monitoring and logging
    - nginx plus features
      - available only in binary form
      - HTTP live streaming (HLS)
      - HTTP dynamic streaming (HDS/VOD)
      - advanced http and tcp load balancing
      - session persistence
      - content caching enahnced capabilities
      - bandwidth management for MP4 media
      - live activity monitoring
  - characteristics
    - fast page load times
    - scales well
    - upgrade on the fly
      - update the nginx configuration without bring the service down
    - easy to install, maintain, and use
    - modular design
      - all extensions are built as modules that can be in/excluded when building nginx from source
        - every module that it requires is loaded directly inside of an nginx process
        - ensures that nginx hs a small memory and cpu footprint on the server
    - single threaded
      - does not create a separate thread per request
      - instead relies on events
  - versions
    - mainline
      - active dev branch with the latest features and bug fixes
      - denoted by odd number in 1.X.0
    - stable
      - receives fixes for high-severity bugs, but its not updated with new features
      - denoted by even number in 1.X.0

# important dirs and files
  - /etc/nginx
    - default installation directory
  - nginx.conf
    - web server configuration
  - mine.types
    - all the mime types enabled on the web server
  - fastcgi_params
    - fastcgi configuration
  - /usr/sbin/nginx
    - the nginx executable is located in the system executable directory
    - requires root
  - /usr/share/nginx
    - default document root directory
    - contains sample index and error page files
  - /var/log/nginx
    - default error and http log files
## nginx source directories and files
  - auto
    - different config options
    - e.g.
      - modules file for modules that will be installed by default
      - options file that include different config options
  - confls
    - nginx config files like nginx.conf and fastcgi.conf
  - configure
    - contains config details and params that are required to compile nginx
    - the output of this file will create a Makefile
  - contrib
    - contains geo2nginx module
  - html
    - contains default index and error file that will be configured in the root website location
  - src
    - source code of nginx, html, mail, etc
  - man
    - contains all the man pages for nginx

# workflows
  - installation
    - pre-built nginx via package manager
      - downloading the key used to sign nginx packages
      - add nginx repo links to your /etc/apt/sources.list
      - remove/purge any previous installations
      - apt get install
    - via source
      - add/remove modules
      - custom config
      -
# CLI
```sh
  # start nginx
  nginx

  # get nginx version
  nginx -v

  # get complete list of nginx configuration
  nginx -V

  # send signal to master process
  # signals stop, quit, reopen, reload
  nginx -s SIGNAL

  # uninstall nginx
  sudo apt-get purge nginx nginx-common
  # then remove entries from /etc/apt/sources.list
  # if you added the nginx repo links

```