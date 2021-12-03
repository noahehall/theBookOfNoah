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

### dev

1. [download & login to firefox dev edition](https://www.mozilla.org/en-US/firefox/developer/)
2. terminator: sudo apt install terminator
3. setup github
   - [github cli](https://github.com/cli/cli/blob/trunk/docs/install_linux.md)
   - [verify your commits](https://docs.github.com/en/authentication/managing-commit-signature-verification)
   - git clone git@github.com:noahehall/theBookOfNoah.git
     - [source this file in your bashrc](linux/_sourceme_.sh)
   - [git icdiff](https://github.com/jeffkaufman/icdiff)
   - update your git config
     - `git config --global -e`
     - setup private email
     - [include this file](linux/.gitconfig)

11. [obs studio](https://obsproject.com/wiki/install-instructions#ubuntumint-installation)
12. [install node via this script](linux/.install_node.sh)
13. [aws cli](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html#cliv2-linux-install)
    1. [aws command completion](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-completion.html)
14. [dbeaver](https://dbeaver.io/download/?start&os=linux&arch=x86_64&dist=deb)
    1. [get some plugins](https://dbeaver.com/docs/wiki/Optional-extensions)
       1. especially the ssh one

#### ubuntu:dev

```sh
# setup azlux's repo
echo "deb http://packages.azlux.fr/debian/ buster main" | sudo tee /etc/apt/sources.list.d/azlux.list
wget -qO - https://azlux.fr/repo.gpg.key | sudo apt-key add -
```

- setup vscode
  - [vscode settings](https://gist.github.com/noahehall/33f60c724f51bde9afa2c2a9e540d094)
- [sdkman](https://sdkman.io/install)
- [nim](https://nim-lang.org/install_unix.html)
- [pnpm](https://pnpm.io/installation)
- docker
  - [compose](https://docs.docker.com/compose/install/)
  - [dive](https://github.com/wagoodman/dive)
  - [ctop](https://github.com/bcicen/ctop)
  - [dockly](https://github.com/lirantal/dockly)
- [k8s](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/)
  - todo: I suck at k8s
- [vagrant](https://www.vagrantup.com/)
- speedtest-cli
- [fk snaps, disable that shiz](https://www.simplified.guide/ubuntu/remove-snapd)
- chromium: sudo apt install chromium-browser
- [switch to regolith & restart](https://regolith-linux.org/docs/getting-started/)
  - `sudo apt search ^i3xrocks`
    - install some plugins
  - `sudo apt search ^regolith-look-`
    - install a new theme
    - super alt !
      - ^ switch to theme
- sudo apt install preload
- [stacer](https://github.com/oguzhaninan/Stacer)
- [dconf-editor](https://wiki.gnome.org/Apps/DconfEditor)
  - $ sudo apt install dconf-editor
- [usb wifi]
  - [morrownr](https://github.com/morrownr/8814au)
    - use this, one line and it worked
  - [aircrack](https://github.com/aircrack-ng/rtl8814au)
    - ^ dont fkn install this one, but read its notes
  - [read this first](https://docs.alfa.com.tw/Support/Linux/RTL8814AU/#ubuntu)
  - [read this first](https://miloserdov.org/?p=5493)
  - basic steps
    - `sudo apt install -y linux-headers-$(uname -r) build-essential dkms git libelf-dev`
    -
- [gnome extensions](https://extensions.gnome.org/)
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
- [shutter](https://shutter-project.org/)
  - [install steps](https://launchpad.net/~shutter/+archive/ubuntu/ppa)
  - [x11 server error](https://askubuntu.com/questions/1353360/ubuntu-21-04-shutter-did-not-work-without-x11-server)
- [bleachbit](https://www.bleachbit.org/features)
  - $ sudo apt install bleachbit
  - cleaner wayyy better than the one by stacer
- [neofetch](https://github.com/dylanaraps/neofetch)
  - $ sudo apt install neofetch
- [bpytop](https://github.com/aristocratos/bpytop)
  - sudo apt install bpytop
- [sss](https://github.com/azlux/gnos-sockets)
- [oha](https://github.com/hatoo/oha)
- [gping](https://github.com/orf/gping)
- [duf](https://github.com/muesli/duf)
  - sudo apt install duf
- [dog](https://github.com/ogham/dog)
- tree
  - sudo apt install tree
  - tree --dirsfirst --charset=ascii SOME_DIR
- vlc
  - sudo apt install vlc
  - sudo apt install vlc-plugin-access-extra libbluray-bdj libdvdcss2 vlc-plugin-svg vlc-plugin-video-output
- [brightness controller](https://techstoriesindia.blogspot.com/2020/05/reduce-external-monitor-brightness-ubuntu-linux.html)

- maybe installs
  - [opensnitch](https://github.com/evilsocket/opensnitch)
  - [signal](https://signal.org/en/download/)]
    - has e2e encryption for chats by default, telegram doesnt
  - [broot](https://github.com/Canop/broot)
  - [rclone](https://github.com/rclone/rclone)

#### mac:dev

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
