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



  apk update
  # package management
  apk search PKG # query for the pkg named PKG
  apk add PKG1 PKG2 3 # add 2 pkgs
  apk version -l # list installed pkgs
  apk del PKG1 PKG2 # del 2 pkgs
  apk upgrade -U -a # upgrade pkgs
  apk update # update cache e.g. after adding a new repository URI
```

## recommended configuration

```sh

  # set the hostname to identify the machine on a network
  echo 'poop' > /etc/hostname
  # add the new hostname to your /etc/hosts file
  127.0.0.1   localhost localhost.localdomain
  127.0.1.1   poop poop.localdomain
  ::1         localhost localhost.localdomain

  # enable the /community & /main repository
  cat > /etc/apk/repositories << EOF; $(echo)
http://dl-cdn.alpinelinux.org/alpine/v$(cat /etc/alpine-release | cut -d'.' -f1,2)/main
http://dl-cdn.alpinelinux.org/alpine/v$(cat /etc/alpine-release | cut -d'.' -f1,2)/community
EOF

  # minimal resource usage for fonts
  cat > /home/*/.Xresources << EOF
Xft.antialias: 0
Xft.rgba:      rgb
Xft.autohint:  0
Xft.hinting:   1
Xft.hintstyle: hintslight
EOF

```

## recommended tools

```sh
  # minimal system tools
  apk add sed attr dialog dialog-doc bash bash-doc bash-completion grep grep-doc
  apk add util-linux util-linux-doc pciutils usbutils binutils findutils readline
  apk add mandoc man-pages lsof lsof-doc less less-doc nano nano-doc curl curl-doc
  export PAGER=less

  # fonts & fonts configuration
  apk add terminus-font ttf-inconsolata ttf-dejavu font-bitstream-* font-noto font-noto-* ttf-font-awesome font-noto-extra

```

## file locations

```sh
  /usr/share/fonts # system font directory
  ~/.font # user font directory
  ~/.Xresources # configurations by X server


```
