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
