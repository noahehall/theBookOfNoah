# TLDR

- everything alpine (except desktop), nuff said

## links

- [alpine wiki](https://wiki.alpinelinux.org/wiki/Main_Page)
- tuts
  - [tutorials and howtos portal](https://wiki.alpinelinux.org/wiki/Tutorials_and_Howtos)
  - [newbie alpine ecosystem](https://wiki.alpinelinux.org/wiki/Newbie_Alpine_Ecosystem)
  - [newbie apk packages](https://wiki.alpinelinux.org/wiki/Alpine_newbie_apk_packages)
  - [connecting to wifi](https://wiki.alpinelinux.org/wiki/Connecting_to_a_wireless_access_point)
  - [users](https://wiki.alpinelinux.org/wiki/Setting_up_a_new_user)

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

- default alpine user groups
  - disk:x:6:root,adm Only if need usage vith virtual machines and access to other partitions over new disks for
  - lp:x:7:lp IF will need to use printing services and printers management
  - floppy:x:11:root Backguard compatible group, use only if need access to external special devices
  - audio:x:18: Need for audio listening and management of sound volumes as normal user
  - cdrom:x:19: For access to disck writers and mounting DVD, BR or CD rom disk as normal user
  - dialout:x:20:root Need for dial private connections and use of modems as normal users
  - tape:x:26:root Need have into this if plan to use special devices for backup.. rarelly in no servers
  - video:x:27:root For usage of cameras, mor thant one GPU special features, as normal user
  - netdev:x:28: For network connections management as normal user
  - kvm:x:34:kvm Only if as normal user will manage graphically virtual machines.. rarelly on no servers
  - games:x:35: Need if you want to play games also specially need if will share score between users
  - cdrw:x:80: To write RW-DVD, RW-BR or RW-CD disk on a disk writing device
  - apache:x:81: Need if you will perfom development as normal user and want to publish locally on web server
  - usb:x:85: Need to access to special usb devices, deprecated group
  - users:x:100:games If you plan to used common files for all users, mandatory as desktop usage

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

  # set root password
  cat > /root/.cshrc << EOF
unsetenv DISPLAY || true
HISTCONTROL=ignoreboth
EOF
  cp /root/.cshrc /root/.profile
  echo "secret_new_root_password" | chpasswd

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

  # sound via alsa
  apk add alsa-utils alsa-utils-doc alsa-lib alsaconf
  # ^ start it and add it to rc
  rc-service alsa start
  rc-update add alsa

```

## file locations

```sh
  /usr/share/fonts # system font directory
  ~/.font # user font directory
  ~/.Xresources # configurations by X server


```

## user management

```sh
  # ssh prevents remote management directly with the root account
  # ^ so setup a remote connection user acocunt and use the su cmd once your connected
  # ^ below `remote` and `general` below are user accounts
mkdir -p /etc/skel/

cat > /etc/skel/.logout << EOF
history -c
/bin/rm -f /opt/remote/.mysql_history
/bin/rm -f /opt/remote/.history
/bin/rm -f /opt/remote/.bash_history
EOF

cat > /etc/skel/.cshrc << EOF
set autologout = 30
set prompt = "\$ "
set history = 0
set ignoreeof
EOF

cp /etc/skel/.cshrc /etc/skel/.profile
adduser -D --home /opt/remote --shell /bin/ash remote
echo "secret_new_remote_user_password" | chpasswd
adduser -D --shell /bin/bash general
echo "secret_new_general_user_password" | chpasswd


  # managing users with the libuser pkg (by default alpine uses busybox)
  # ^ first add the test repository and install libuser
cat > /etc/apk/repositories << EOF; $(echo)
http://dl-cdn.alpinelinux.org/alpine/v$(cat /etc/alpine-release | cut -d'.' -f1,2)/main
http://dl-cdn.alpinelinux.org/alpine/v$(cat /etc/alpine-release | cut -d'.' -f1,2)/community
http://mirror.math.princeton.edu/pub/alpinelinux/edge/testing/
EOF

apk update
apk add libuser
cat > /etc/apk/repositories << EOF; $(echo)
http://dl-cdn.alpinelinux.org/alpine/v$(cat /etc/alpine-release | cut -d'.' -f1,2)/main
http://dl-cdn.alpinelinux.org/alpine/v$(cat /etc/alpine-release | cut -d'.' -f1,2)/community
EOF

apk update
touch /etc/login.defs
touch /etc/default/useradd

  # ^ second: change some defualts and add the user to desired groups to access devices/perform connections
for u in $(ls /home); do for g in disk lp floppy audio cdrom dialout video netdev games users; do addgroup $u $g; done;done


```
