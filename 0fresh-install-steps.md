# TLDR

- fucked up my lubuntu to oblivion
- should have written this years ago

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

## fresh install

### dev

1. [download & login to firefox dev edition](https://www.mozilla.org/en-US/firefox/developer/)
2. setup github
   - [github cli](https://github.com/cli/cli/blob/trunk/docs/install_linux.md)
   - [verify your commits](https://docs.github.com/en/authentication/managing-commit-signature-verification)
3. setup vscode
   - [vscode settings](https://gist.github.com/noahehall/33f60c724f51bde9afa2c2a9e540d094)

#### ubuntu:dev

1. setup ubuntu
   - always installs
   - [fk snaps, disable that shiz](https://www.simplified.guide/ubuntu/remove-snapd)
   - [stacer](https://github.com/oguzhaninan/Stacer)
   - [dconf-editor](https://wiki.gnome.org/Apps/DconfEditor)
     - $ sudo apt install dconf-editor
   - [shutter](https://shutter-project.org/)
     - [install steps](https://launchpad.net/~shutter/+archive/ubuntu/ppa)
     - [x11 server error](https://askubuntu.com/questions/1353360/ubuntu-21-04-shutter-did-not-work-without-x11-server)
   - [bleachbit](https://www.bleachbit.org/features)
     - $ sudo apt install bleachbit
     - cleaner wayyy better than the one by stacer
   - [gnome extensions](https://extensions.gnome.org/)
     - it doesnt save your extensions across computers so you have to reinstall
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
   - neofetch
     - $ sudo apt install neofetch
   - system-monitor
   - apt-transport-https
   - [allota shit from here](http://packages.azlux.fr/)
   - setup bash
   - damn my skillz is fallin off
   - rclone
   - oha
   - gping
   - duf
   - dockly
   - bpytop
   - htpo
   - grv
   - setup dev
   - docker
   - maybe installs
     - [opensnitch](https://github.com/evilsocket/opensnitch)
     - synaptic package manager

2. [setup chromium](https://linuxize.com/post/how-to-install-chromium-web-browser-on-ubuntu-20-04/)

#### mac:dev

- xcode install
- $ touch ~/.bashrc
- $ echo ". ~/.bashrc" > ~/.bash_profile
- upgrade bash (apple refuses to update pass bash v3.2) cuz fk apple
- setup bash as defualt shell (FCK ZSH)
- switch to iterm2
- [macports](https://www.scrim.psu.edu/support/userspace-macports.html)
- continue with ubuntu setup

### remote server setup

  1. setup non root user with sudo priv
  2. configure ssh key-based authentication
  3. disable password authentication and enable ufw with ssh enabled
  4. setup firewall (usually ufw) to block everything except 80, 443, and 22 initially and define your default policies
