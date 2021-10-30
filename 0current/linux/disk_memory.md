# TLDR

- all about the volumes & partitions

## links

- [managing volumes and partitions](https://help.ubuntu.com/stable/ubuntu-help/disk-partitions.html.en)
- [disks & storage guides](https://help.ubuntu.com/stable/ubuntu-help/disk.html.en)
- tuts
  - [add swap space on ubuntu 20.04](https://linuxize.com/post/how-to-add-swap-space-on-ubuntu-20-04/)
  - [linux perf - swap space](https://haydenjames.io/linux-performance-almost-always-add-swap-space/)
- tools
  - [Ubuntu Disks](https://manpages.ubuntu.com/manpages/cosmic/man1/gnome-disks.1.html)

## terminology

- volume: a storage device, e.g. hard disk/part of a hard disk
  - i.e. a labeled, accessible `storefront` to the functional `back rooms` of partitions & drives
- mounting: makes a storage device accessible to the computers file system for reading/writing
  - e.g. hard drives, usb drives, DVD-RWs, SD cards, etc
- partition: a physical area of storage on a single disk
  - can be mounted/unmounted
  - mounted partitions === volumes (and no you can access files on it)
  - types
    - SWAP: used by te operating system for memory management (rarely mounted)
    - primary/boot: contains your operating system, applications, settings and personal files
      - contains info that your computer uses to boot
    - secondary partitions: can be distributed to other partitions for seucrity/convenience
- partition flags:

## reference

- file locations
  - /etc/fstab
  - /etc/sysctl.conf manage various settings, including swap settings
    - `vm.swappiness=10`
    - `vm.vfs_cache_pressure=50`

```sh
  # memory management
  free -h # memory + swap usage

  # disk management
  swapon --show # see if/where swap space is allocated
  fallocate -l 2G /swapfile # allocate 2G for swapfile

```
