# box setup

## TODO

- automate this shiz like the guy did his with ansible
- [checkout spack](https://spack-tutorial.readthedocs.io/en/latest/)
- [checkout nix](https://nixos.org/)

## links

- [initial server setup](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-16-04)
- [point domain name to your servers ip](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-host-name-with-digitalocean)
- [configure ssh key based authentication and disable password authentication](https://www.digitalocean.com/community/tutorials/how-to-configure-ssh-key-based-authentication-on-a-linux-server)
- [common ufw firewall rules](https://www.digitalocean.com/community/tutorials/ufw-essentials-common-firewall-rules-and-commands)
- [upgrading bash on mac](https://itnext.io/upgrading-bash-on-macos-7138bd1066ba)
- [some cool pkgs](http://packages.azlux.fr/)

## fresh install

### ubuntu:dev

- do first

  - [fk snaps, disable that shiz](https://www.simplified.guide/ubuntu/remove-snapd)
  - [switch to regolith & restart](https://regolith-linux.org/docs/getting-started/)
    - `sudo apt search ^i3xrocks`
      - install some plugins
    - `sudo apt search ^regolith-look-`
      - install a new theme
      - super alt !
        - ^ switch to theme

- essential

  - [mozilla vpn](https://support.mozilla.org/en-US/kb/how-install-mozilla-vpn-linux-computer)
  - resolvconf
  - terminator
  - [azlux repo](https://packages.azlux.fr/)
  - [firefox dev](https://www.mozilla.org/en-US/firefox/developer/)
  - vscode
    - [insiders](https://code.visualstudio.com/insiders/)
    - [vscode settings](https://gist.github.com/noahehall/71451b778136a553e785868c37c7e9a0)
  - setup github
    - [github cli](https://github.com/cli/cli/blob/trunk/docs/install_linux.md)
    - [verify your commits](https://docs.github.com/en/authentication/managing-commit-signature-verification)
    - git clone git@github.com:noahehall/theBookOfNoah.git
      - [source this file in your bashrc](linux/_sourceme_.sh)
    - [git icdiff](https://github.com/jeffkaufman/icdiff)
    - update your git config
      - `git config --global -e`
      - setup private email
      - [include this file](linux/.gitconfig)
  - install node via nvm
  - [aws cli](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html#cliv2-linux-install)
    - [aws command completion](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-completion.html)
  - [dbeaver](https://dbeaver.io/download/?start&os=linux&arch=x86_64&dist=deb)
    - [get some plugins, e.g. ssh](https://dbeaver.com/docs/wiki/Optional-extensions)
  - usb router
    - [morrownr](https://github.com/morrownr/8814au)
      - use this, one line and it worked
    - [aircrack](https://github.com/aircrack-ng/rtl8814au)
      - ^ dont fkn install this one, but read its notes
    - [read this first](https://docs.alfa.com.tw/Support/Linux/RTL8814AU/#ubuntu)
    - [read this first](https://miloserdov.org/?p=5493)

- base apps

  - [jq: use apt](https://stedolan.github.io/jq/)
  - [postman](https://www.postman.com/downloads/)
  - [obs studio](https://obsproject.com/wiki/install-instructions#ubuntumint-installation)
  - sudo apt install preload
  - speedtest-cli
  - net-tools (for netstat)
  - [sdkman](https://sdkman.io/install)
  - [nim](https://nim-lang.org/install_unix.html)
  - [stacer](https://github.com/oguzhaninan/Stacer)
  - [dconf-editor](https://wiki.gnome.org/Apps/DconfEditor)
  - [shutter](https://shutter-project.org/)
    - [install steps](https://launchpad.net/~shutter/+archive/ubuntu/ppa)
    - [x11 server error](https://askubuntu.com/questions/1353360/ubuntu-21-04-shutter-did-not-work-without-x11-server)
  - [bleachbit](https://www.bleachbit.org/features)
    - cleaner wayyy better than the one by stacer
  - [neofetch](https://github.com/dylanaraps/neofetch)
  - [bpytop](https://github.com/aristocratos/bpytop)
  - [sss](https://github.com/azlux/gnos-sockets)
  - [oha](https://github.com/hatoo/oha)
  - [gping](https://github.com/orf/gping)
  - [duf](https://github.com/muesli/duf)
  - [dog](https://github.com/ogham/dog)
  - [tree](https://www.geeksforgeeks.org/tree-command-unixlinux/)
  - vlc
    - sudo apt install vlc
    - sudo apt install vlc-plugin-access-extra libbluray-bdj libdvdcss2 vlc-plugin-svg vlc-plugin-video-output
  - [brightness controller](https://techstoriesindia.blogspot.com/2020/05/reduce-external-monitor-brightness-ubuntu-linssux.html)
  - chromium: sudo apt install chromium-browser
  - simplescreenrecorder
  - gimp
  - jetbrains toolbox
  - sbt
  - kazam
  - thunderbird
  - thunderbird-gnome-support
  - [drawio desktop](https://github.com/jgraph/drawio-desktop/releases)

- virtualization

  - [compose](https://docs.docker.com/compose/install/)
  - [dive](https://github.com/wagoodman/dive)
  - [ctop](https://github.com/bcicen/ctop)
  - [dockly](https://github.com/lirantal/dockly)
  - [k8s](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/)
    - todo: I suck at k8s
  - [vagrant](https://www.vagrantup.com/)
  - [virtualbox](https://www.virtualbox.org/manual/ch02.html)
    - make sure to get the guest additions iso
  - [gnome-boxes](https://wiki.gnome.org/Apps/Boxes)

- [gnome extensions](https://extensions.gnome.org/)

  - dont use this if using regolith
  - maybe not since we are now using regloith
  - extensions are by computer, not per login so you have to reinstall
    - [basic steps with some good ext](https://thelinuxuser.com/install-gnome-shell-extensions/)
    - cafeeine
    - clipboard indactor
    - disconnect wifi
    - extension list
    - just perfection
    - privacy settings
    - removable drive menu
    - sound input & output device chooser
    - user themes
    - workspace indicator

- maybe installs
  - [opensnitch](https://github.com/evilsocket/opensnitch)
  - [signal](https://signal.org/en/download/)]
    - has e2e encryption for chats by default, telegram doesnt
  - [broot](https://github.com/Canop/broot)
  - [rclone](https://github.com/rclone/rclone)

#### mac:dev

- be careful these are hella old
- xcode install
- $ touch ~/.bashrc
- $ echo ". ~/.bashrc" > ~/.bash_profile
- upgrade bash (apple refuses to update pass bash v3.2) cuz fk apple
- setup bash as defualt shell (FCK ZSH)
- [macports](https://www.scrim.psu.edu/support/userspace-macports.html)
- continue with ubuntu setup

### remote server setup

1. setup non root user with sudo priv
2. configure ssh key-based authentication
3. disable password authentication and enable ufw with ssh enabled
4. setup firewall (usually ufw) to block everything except 80, 443, and 22 initially and define your default policies

## old notes

sudo apt install conky-all
cp /etc/conky/conky.conf ~/.conkrc
[check this](https://linuxconfig.org/ubuntu-20-04-system-monitoring-with-conky-widgets)

[graphics driver](https://linuxconfig.org/ubuntu-20-04-tricks-and-things-you-might-not-know#h6-internet)

list all services
$ systemctl list-units --all --type=service --no-pager
list all systemd unit files
systemctl list-unit files --no-pager
get services in specific status
$ systemctl list-units --all --type=service --no-pager | grep running|dead
get enabled/disabled systemd service unit states
$ systemctl list-unit-files | grep enabled|disabled
set service status
systemctl start|stop|enable|disable servicename

- [tor](https://2019.www.torproject.org/docs/debian.html.en)
- [multi audio sources](https://linuxconfig.org/how-to-enable-multiple-simultaneous-audio-outputs-on-pulseaudio-in-linux)
  - pulseaudio -k
  - pulseaudio -D
- sudo apt install jackd qjackctl
  - $ qjackctl
