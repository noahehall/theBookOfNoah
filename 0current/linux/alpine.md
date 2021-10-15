# TLDR

- everything alpine (except desktop), nuff said

## links

- [alpine wiki](https://wiki.alpinelinux.org/wiki/Main_Page)
- tuts
  - [tutorials and howtos portal](https://wiki.alpinelinux.org/wiki/Tutorials_and_Howtos)
  - [newbie alpine ecosystem](https://wiki.alpinelinux.org/wiki/Newbie_Alpine_Ecosystem)
  - [newbie apk packages](https://wiki.alpinelinux.org/wiki/Alpine_newbie_apk_packages)
  - [connecting to wifi](https://wiki.alpinelinux.org/wiki/Connecting_to_a_wireless_access_point)

## high level

- due to the great popularity of Docker, Alpine Linux is one of the most deployed operating systems currently in use, because within every other operating system that uses docker, the docker image it uses is almost always Alpine Linux.

# terminology

- packages: aka `apacks` - digitalized signed tar.gz archives containing programs, configuration files and dependency metadata
  - have the extension `.apk`
  - two sources:
    - repository: http://<host>/alpine/<version>/<branch>
      - URI that can be invoked with `apk` listed in `/etc/apk/repositories` file
    - original upstream sources: those compiles as unix-like in the traditional way
      - managed with the `apk` located at `sbin/apk`
      - uses `/etc/apk` for configuration files
      - stores all downloaded `apacks` in `etc/apk/cache` from the repositories before it unpacks and puts the package files compiled into the installed system
        - this is why you often see the `--no cache` thing in docker
        - as you dont want the cache, just the configuration files and program files
    - three types
      - main packages: software that have direct support and updates from the alpine core and main team and always have releases (or substitutions) for every version
      - contribution packages: user software made by end-users with support with support from the official alpine developers
        - i.e. supported by user contributions
      - testing packages: new packages come into testing repos of edge alpine version and are those made by any contirbute or man power on alpine
        - i.e. edge is the unstable current dev

## quickies

```sh

  # set the hostname to identify the machine on a network
  echo 'poop' > /etc/hostname
  # add the new hostname to your /etc/hosts file
  127.0.0.1   localhost localhost.localdomain
  127.0.1.1   poop poop.localdomain
  ::1         localhost localhost.localdomain

  # package management
  apk search PKG # query for the pkg named PKG
  apk add PKG1 PKG2 3 # add 2 pkgs
  apk version -l # list installed pkgs
  apk del PKG1 PKG2 # del 2 pkgs
  apk upgrade -U -a # upgrade pkgs
```
