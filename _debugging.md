# TLDR

various easy to forget things

## linux

- [increasing file descriptors]<https://docs.oracle.com/cd/E19476-01/821-0505/file-descriptor-requirements.html>
  - `$ ulimit -aH` see humand readabile limits

- users and groups
  - `exec su -l $USER` reload session, e.g. to reload group assignments

- system info (just use neofetch, but these are useful for scripting)
  - `lsb_release -a` all info
  - `lsb_release -cs` e.g impish
  - `dpkg-architecture -q DEB_BUILD_ARCH` e.g. amd64, but can be used to query anything
  - `dpkg --print-architecture` e.g. amd64
  - `grep '/usr/s\?bin' /etc/systemd/system/display-manager.service` find your display manager, e.g. gdm3
  - `lsmod | grep kvm` find the name of your hypervisor
  - `lshw -short` list hardware

- files & disk
  - `find ~/all/files/in/dir -type f -size +100k`
  - `tar -czvf as_this_file.tar.gz from_this_file`
  - `tar xvzf unzip_this_file.tar.gz -C to/this/dir`

- [disable webcam](https://askubuntu.com/questions/166809/how-can-i-disable-my-webcam)
  1. find the cam from the list of devices `lsusb -t`
  2. get some tape from one of your kitchen drawers
  3. and use the tape to cover the device you found in step 1

- repos/packages
  - `sudo add-apt-repository -r ppa:remove/this/ppa`
  - `sudo add-apt-repository ppa:oguzhaninan/stacer`
  - `sudo dpkg -i installme.deb`
  - `whereis somecmd` binary, source & man pages for a cmd

- networking
  - `hostname -I` your ip
  - `ifconfig | grep inet` all your ips
  - [whats on 80](https://www.tecmint.com/find-out-which-process-listening-on-a-particular-port/)
    - `lsof -i :80`
      - sudo apt install lsof
    - `netstat -ltnp | grep -w :80`
    - `netstat -ltnp | grep -E ':80 |:443 '`
      - ^ notice the spaces, works better than the first
    - sudo apt install net-tools
    - `fuser 80/tcp`
      - sudo apt install psmisc
      - the most concise
    - `ps -p THE_PID -o comm=`
      - get the name of the process
    - `cat /proc/net/tcp`
      - for embedded devices

- ssh
  - `eval \`ssh-agent -s\`` start the ssh agent
  - `ssh-add` add identities in `~/.ssh` can also append a specific private key
  - `ssh-add -l` list identities
  - `id_rsa.pub` == your public key (share this)
  - `id_rsa` === your private key

- terminal
  - `sudo apt install terminator` thank me later
  - `ctrl shift t` new tab

- settings
  - `sudo update-alternatives --config` [choose the default cmd](https://linuxhint.com/update_alternatives_ubuntu/)
    - set the default for common cmds
      - x-terminal-emulator
      - editor
    - create a new cmd (e.g. in `/opt/bin/CMD`) that can be used to switch between multiple versions
      - `sudo update-alternatives --install ~/opt/bin/CMD CMD /some/path/to/actual/cmd 20`
        - `/opt/bin` is where the cmd will be installed
        - `CMD` is the name of the alternative to invoke the cmd
        - `/some/path/to/actual/cmd` is the path to the actual cmd
        - `20` is the priority of the alternative
          - repeat this for each cmd you want to use

- aws
  - `export AWS_DEFAULT_PROFILE=poop`
  - `aws configure list` safely list current aws config
