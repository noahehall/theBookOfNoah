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
- [some cool pkgs](http://packages.azlux.fr/)

## fresh install

### dev

1. [download & login to firefox dev edition](https://www.mozilla.org/en-US/firefox/developer/)
2. setup github
   - [github cli](https://github.com/cli/cli/blob/trunk/docs/install_linux.md)
   - [verify your commits](https://docs.github.com/en/authentication/managing-commit-signature-verification)
   - git clone git@github.com:noahehall/theBookOfNoah.git
     - [source this file in your bashrc](linux/_sourceme_.sh)
3. setup vscode
   - [vscode settings](https://gist.github.com/noahehall/33f60c724f51bde9afa2c2a9e540d094)
4. [sdkman](https://sdkman.io/install)
5. [nim](https://nim-lang.org/install_unix.html)
6. [pnpm](https://pnpm.io/installation)
7. docker
   - [compose](https://docs.docker.com/compose/install/)
   - [dive](https://github.com/wagoodman/dive)
   - [ctop](https://github.com/bcicen/ctop)
   - [dockly](https://github.com/lirantal/dockly)
8. [vagrant](https://www.vagrantup.com/)
   - sudo apt install chromium-browser
9. [k8s](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/)
10. chromium

#### ubuntu:dev

```sh
# setup azlux's repo
echo "deb http://packages.azlux.fr/debian/ buster main" | sudo tee /etc/apt/sources.list.d/azlux.list
wget -qO - https://azlux.fr/repo.gpg.key | sudo apt-key add -
```

1. setup ubuntu
   - [fk snaps, disable that shiz](https://www.simplified.guide/ubuntu/remove-snapd)
   - [stacer](https://github.com/oguzhaninan/Stacer)
   - [dconf-editor](https://wiki.gnome.org/Apps/DconfEditor)
     - $ sudo apt install dconf-editor
   - [gnome extensions](https://extensions.gnome.org/)
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
   - [switch to regolith & restart](https://regolith-linux.org/docs/getting-started/)
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
