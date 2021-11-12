increasing file descriptors
<https://docs.oracle.com/cd/E19476-01/821-0505/file-descriptor-requirements.html>
    ulimit -aH

# todos

- [editor config](https://github.com/editorconfig/editorconfig/wiki/EditorConfig-Properties)

-
get os arch: dpkg-architecture -q DEB_BUILD_ARCH
move all my binaries to /usr/local/bin
    or more naturally to /usr/local/bin/cmd
        just make sure to set correct executable permissions

- install local deb file
  - `sudo dpkg -i package_file.deb`

- find your display manager
  - `grep '/usr/s\?bin' /etc/systemd/system/display-manager.service`
    - e.g. `gdm3`
- [disable webcam](https://askubuntu.com/questions/166809/how-can-i-disable-my-webcam)
  - find the cam from the list of devices `lsusb -t`
  - get some tape from one of your kitchen drawers
  - and use the tape to cover the device you found in step 1

- managing apt repositories
  - sudo add-apt-repository -r ppa:remove/tihs/ne
  - sudo add-apt-repository ppa:oguzhaninan/stacer

dpkg --print-architecture
    e.g. amd64

lsb_release -cs
    e.g. impish

exec su -l $USER
  reload group assignments without relogging

find the name of your hypervisor
  lsmod | grep kvm

get your IP (either should work)
  hostname -I
  ifconfig | grep inet

# <https://github.com/github/hub>

git config --list
GIT_TRACE=1 some git
lshw list hardware and settings and stuff

```sh
# I always forget how to do this #######
# posix compliant
# if ! type poop &> /dev/null; then
# then
#     echo "poop could not be found"
#     exit
# fi
########################################
# other ways, but use the one above
# https://stackoverflow.com/questions/592620/how-can-i-check-if-a-program-exists-from-a-bash-script
# https://unix.stackexchange.com/questions/86012/what-is-the-purpose-of-the-hash-command
# $ command -v foo >/dev/null 2>&1
# $ type foo >/dev/null 2>&1
# $ hash foo 2>/dev/null
########################################
```
