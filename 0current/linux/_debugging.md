# TLDR

various easy to forget things

## linux

- [increasing file descriptors]<https://docs.oracle.com/cd/E19476-01/821-0505/file-descriptor-requirements.html>
  - `$ ulimit -aH` see humand readabile limits

- users and groups
  - `exec su -l $USER` reload session, e.g. to reload group assignments

- system info (just use neofetch)
  - `lsb_release -a` all info
  - `lsb_release -cs` e.g impish
  - `dpkg-architecture -q DEB_BUILD_ARCH` e.g. amd64, but can be used to query anything
  - `dpkg --print-architecture` e.g. amd64
  - `grep '/usr/s\?bin' /etc/systemd/system/display-manager.service` find your display manager, e.g. gdm3
  - `lsmod | grep kvm` find the name of your hypervisor

- [disable webcam](https://askubuntu.com/questions/166809/how-can-i-disable-my-webcam)
  1. find the cam from the list of devices `lsusb -t`
  2. get some tape from one of your kitchen drawers
  3. and use the tape to cover the device you found in step 1

- repos/packages
  - `sudo add-apt-repository -r ppa:remove/this/ppa`
  - `sudo add-apt-repository ppa:oguzhaninan/stacer`
  - `sudo dpkg -i installme.deb`

- networking
  - `hostname -I` your ip
  - `ifconfig | grep inet` all your ips
