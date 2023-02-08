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
- [ubuntu pro tut](https://ubuntu.com/pro/tutorial)
- [security stack.exchange](https://security.stackexchange.com)
- [kali linux tools](https://www.kali.org/tools/)
  - also check the whitehat usb for other tools and docs
- [latex](https://www.latex-project.org/about/)

## fresh install

- [bashrc based on these install steps](./linux/.bashrc_example)

### ubuntu:dev

#### rm snaps and install regolith

- [fk snaps, disable that shiz](https://www.simplified.guide/ubuntu/remove-snapd)
- [switch to regolith & restart](https://regolith-desktop.com/)
  - `sudo apt search ^i3xrocks`
    - install some plugins
  - `sudo apt search ^regolith-look-`
    - install a new theme
    - super alt !
      - ^ switch to theme

```sh
# see all regolith apps
apt_search_i3
# essential regolith apps
sudo apt install \
  i3xrocks-battery \
  i3xrocks-bluetooth \
  i3xrocks-cpu-usage \
  i3xrocks-focused-window-name \
  i3xrocks-info \
  i3xrocks-memory \
  i3xrocks-microphone \
  i3xrocks-net-traffic \
  i3xrocks-rofication \
  i3xrocks-temp \
  i3xrocks-updates \
  i3xrocks-volume \
  i3xrocks-wifi

# see all regolith themes
apt_search_looks
# install and set blackhole theme
# you may receive various errors, check the errors section
# you may need to logout > in case refresh doesnt work right
sudo apt install regolith-look-blackhole
regolith-look list
regolith-look set blackhole
regolith-look refresh
```

#### setup essential apps

- [firefox dev](https://www.mozilla.org/en-US/firefox/developer/)
  - move to /opt and ln -s firefox/firefox to runfirefox
  - [copy this file to ~/.local/share/applications](./linux/ffdev.desktop)
  - [disable security warning](https://medium.com/volosoft/how-to-disable-firefox-warning-potential-security-risk-ahead-f081fbf81a4f)
  - essential extensions
    - [sideberry](https://addons.mozilla.org/en-US/firefox/addon/sidebery/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=hotness)
    - [ublock](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=recommended_fallback)
    - [privacy badger](https://addons.mozilla.org/en-US/firefox/addon/privacy-badger17/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=recommended)
    - [firefox relay](https://addons.mozilla.org/en-US/firefox/addon/private-relay/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=featured)
    - [multi account containers](https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/)
    - [translations](https://addons.mozilla.org/en-US/firefox/addon/firefox-translations/)
    - [sideview](https://addons.mozilla.org/en-US/firefox/addon/side-view/)
    - [react dev tools](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search)
    - [web dev](https://chrispederick.com/work/web-developer/installed/firefox/20/)
    - [metamask](https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/)
    - [webhint](https://addons.mozilla.org/en-US/firefox/addon/webhint/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=collection)
    - [wave](https://addons.mozilla.org/en-US/firefox/addon/wave-accessibility-tool/)
    - [ibm a11y](https://addons.mozilla.org/en-US/firefox/addon/accessibility-checker/)
- [kitty terminal](https://sw.kovidgoyal.net/kitty/binary/)
  - [desktop integration worked perfectly for regolith](https://sw.kovidgoyal.net/kitty/binary/#desktop-integration-on-linux)
  - kitty on mac
    - fk iterm, just use kitty, and set Option as meta to getaway from those weird azz shortcuts
      - now option arrows work as you would expect to jump around
    - cmd t: new tab
    - cmd enter: new window in current tab
    - cmd shift d: close active window in current tab
- git
  - [officla (gh) github cli](https://github.com/cli/cli/blob/trunk/docs/install_linux.md)
  - [setup ssh key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
  - [verify your commits](https://docs.github.com/en/authentication/managing-commit-signature-verification)
    - [setup gpg key](https://docs.github.com/en/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key#telling-git-about-your-gpg-key)
  - [git icdiff](https://github.com/jeffkaufman/icdiff)
    - install python `sudo apt install python3-pip`
    - install icdiff `pip install icdiff`
    - now you can run `git-icdiff`
- [usb wifi driver](https://github.com/morrownr/8814au)
  - [aircrack](https://github.com/aircrack-ng/rtl8814au)
    - ^ dont fkn install this one, but read its notes
  - [good read for the alfa](https://docs.alfa.com.tw/Support/Linux/RTL8814AU/#ubuntu)
    - haha one of the antenas broke, just use the tplink now
  - [another good read](https://miloserdov.org/?p=5493)
- [the book of noah](https://github.com/noahehall/theBookOfNoah)
  - git clone git@github.com:noahehall/theBookOfNoah.git
  - add bookofnoah git config
    - `git config --global -e`
    - [include this file](linux/.gitconfig)
      - this expects you have previously installed icdiff
      - it has some comments, read the file
  - [source this file in your bashrc](linux/_sourceme_.sh)
- [nirv scripts](https://github.com/nirv-ai/scripts)
  - see link in docs to add both nirv scripts and operator scripts
- [code insiders](https://code.visualstudio.com/insiders/)
  - copypasta vscode settings and run the vscode extensions install script
  - the install script throws errors, dunno, still works
- [azlux repo](https://packages.azlux.fr/)

#### easy install

```sh
apt_refresh

# quick tools
# broot is better than tree, but tree is easier for copypasta into readmes
# nettools provides netstat, but prefer to use ss
sudo apt install \
  bpytop \
  broot \
  chkrootkit \
  chromium-browser \
  ctop \
  dconf-editor \
  dive \
  duf \
  gping \
  gufw \
  install gnome-boxes \
  jq \
  neofetch \
  net-tools \
  nmap \
  oha \
  pass \
  preload \
  rclone \
  resolvconf \
  rkhunter \
  socat \
  speedtest-cli \
  stacer \
  tree \
  ubuntu-advantage-tools

# media
sudo apt install \
  gimp \
  kazam \
  libbluray-bdj \
  libdvdcss2 \
  shutter \
  simplescreenrecorder \
  vlc \
  vlc-plugin-access-extra \
  vlc-plugin-svg \
  vlc-plugin-video-output


```

#### base security

```sh
## disable automount related things now that dconf is installed
## @see https://linuxconfig.org/how-to-disable-gui-desktop-usb-automount-on-linux-system

## setup ufw firewall using the just installed gufw gui
gufw # then click enable

## add chkrootkit u just installed to your bashrc
# on refresh you may see reports of kernel files
# ^ @see https://askubuntu.com/questions/856398/what-exactly-is-lib-modules-4-4-0-xx-generic-vdso-build-id
echo "sudo chkrootkit" >> ~/.bashrc

## update sshd (server) config
## dont use assigned ports @see https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers
get_port_status XXXX # find an open port
edit_sshd_config
Port ur_ssh_port_here # change server ssh port
PermitRootLogin No # disable root login

## chmod home dir
chmod 0700 $HOME # only you can read
chmod 0750 $HOME # or give group members read

## setup ubuntu advantage you just installed
## sign into ubuntu then go to https://ubuntu.com/pro/dashboard
## attach your token
sudo pro attach ur_token_here
## update your bashrc
echo "sudo pro refresh" >> ~/.bashrc
echo "pro security-status" >> ~/.bashrc
echo "pro security-status --esm-apps" >> ~/.bashrc

# refresh your shell
refresh_shell

## any apps reported in bold needs to be fixed
apt_refresh  # install all updates
## apt-cache policy some_app_name # install a specific version
## fix a specific CVE: pro fix CVE-2021-3583

## run just installed rkhunter
# dont add to bashrc, it takes too long
rkhunter --check
# if anything looks suspicious, review the logs
sudo less /var/log/rkhunter.log

# setup & configure tiger
sudo apt install tiger
# dont add tiger to your bashrc, it takes too long
# but you can run `tiger` to do manual checks
less the_var/log/file/path
# its going to report a bunch of stuff you need to do
```

#### more involved installation/setup

- [read this doc to setup pass](./0current/linux/passwords.md)
- [brightness controller](https://linuxmasterclub.com/brightness-controller/)
- [increase inotify watchers](https://dev.to/rubiin/ubuntu-increase-inotify-watcher-file-watch-limit-kf4)
- virtualization
  - stick with plain ole docker engine and compose, dont use any guis we always regret it
    - [engine](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository)
      - [dont forget the post install steps](https://docs.docker.com/engine/install/linux-postinstall/)
      - [sudo mkdir /etc/docker && cp this config to /etc/docker/daemon.json](./linux/docker.daemon.json)
        - then `dk_d_restart`
    - [compose plugin](https://docs.docker.com/compose/install/linux/#install-using-the-repository)
  - [vagrant](https://www.vagrantup.com/)
  - [virtualbox](https://www.virtualbox.org/wiki/Linux_Downloads)
    - `add_user_to_group vboxusers` then relogin if starting vb from applications and not cli
    - [this has easier install steps](https://linuxize.com/post/how-to-install-virtualbox-on-ubuntu-20-04/)
    - [make sure to get the guest additions iso](https://www.virtualbox.org/manual/ch04.html#mountingadditionsiso)
      - [quick overview if its been awhile](https://www.makeuseof.com/tag/virtualbox-guest-additions-what-they-are-and-how-to-install-them/)
    - [additional help](https://www.virtualbox.org/manual/ch02.html)
  - you should be able to plugin the whitehat drive and play around
- setup hashistack
  - if you installed vagrant the hashi repo is already setup
  - `sudo apt install nomad terraform consul`
- [install node via nvm](https://github.com/nvm-sh/nvm)
  - refresh_shell
  - nvm install node
  - npm i -g pnpm
  - nvm_install_latest_npm
- [install nim via choosenim](https://github.com/dom96/choosenim#installation)
  - dont forget to setup your path (read the cmd output)
  - nim_c_current
  - nim_b_upgrade
  - nim_b_refresh
- [aws cli](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html#cliv2-linux-install)
  - [aws samcli](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html)
  - [aws command completion](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-completion.html#cli-command-completion-linux)
    - `complete -C '/usr/local/bin/aws_completer' aws`
- [dbeaver](https://dbeaver.io/download/?start&os=linux&arch=x86_64&dist=deb)
  - [get some plugins](https://github.com/dbeaver/dbeaver/wiki/Optional-extensions)
    - quickies: add these to the urls to the Help > install new software > work with field
      - you have to install 1 by 1
      - office integration: https://dbeaver.io/update/office/latest/
      - sql debugger for postgres: https://dbeaver.io/update/debug/latest/
- [yq: jq for yaml](https://github.com/mikefarah/yq)
  - dont use the copypasta from github as it puts it in /usr/bin/yq
  - `sudo wget https://github.com/mikefarah/yq/releases/latest/download/yq_linux_amd64 -O /opt/yq && sudo chmod +x /opt/yq`
- [postman](https://www.postman.com/downloads/)
  - extract to /opt/Postman
  - `sudo ln -s /opt/Postman/Postman /opt/runpostman`
- [bleachbit](https://www.bleachbit.org/features)
  - cleaner wayyy better than the one by stacer
- [drawio desktop](https://github.com/jgraph/drawio-desktop/releases)
  - theres a specific link for linux deb, dont download from the assets list
- [figma](https://www.figma.com/)
  - u suck at design, i dont know why you keep trying lol
  - login with your gmail
- [signal](https://signal.org/en/download/)]
  - has e2e encryption for chats by default, telegram doesnt

#### maybe installs

- [gnome extensions](https://extensions.gnome.org/)
  - dont use this if using regolith
  - extensions are by computer, not per login so you have to reinstall
    - [basic steps with some good ext](https://thelinuxuser.com/install-gnome-shell-extensions/)
    - cafeeine
    - clipboard indicator
    - disconnect wifi
    - extension list
    - just perfection
    - privacy settings
    - removable drive menu
    - sound input & output device chooser
    - user themes
    - workspace indicator
- [opensnitch](https://github.com/evilsocket/opensnitch)
- if you want docker + k8s # ignore we're on the hashistack
  - [download rancher desktop from github releases](https://github.com/rancher-sandbox/rancher-desktop/releases)
  - unzip and symlink rancher-desktop somehwere in your path
- [obs studio](https://obsproject.com/wiki/install-instructions#ubuntumint-installation)

### nirvai: buntu post install

- [github](https://github.com/nirv-ai)
  - drop all the repos in ~/git/private/nirv
- open chrome and login to teams (never works right on firefox)
  - make sure the camera works n stuff

```sh
# theres bunches of things we need to do
# list them all here
# dizzam i forgot to do this again
```

### buntu errors

- [shutter](https://shutter-project.org/)
  - [install steps](https://launchpad.net/~shutter/+archive/ubuntu/ppa)
  - [x11 server error](https://askubuntu.com/questions/1353360/ubuntu-21-04-shutter-did-not-work-without-x11-server)
- XDG_SESSION_TYPE unbound variable
  - [figure out if your on wayland/x11]((https://unix.stackexchange.com/questions/202891/how-to-know-whether-wayland-or-x11-is-being-used)
  - `x11_or_wayland`
  - update your bashrc `export XDG_SESSION_TYPE=either x11 or wayland`
- [dbus-launch no such file or directory](https://trendoceans.com/solved-failed-to-execute-child-process-dbus-launch-no-such-file-or-directory-while-x-forwarding/)
  - sudo apt install dbus-x11

### mac:dev

- be careful these are hella old
- xcode install <-- this isnt the right command, google `how to install xcode on command line` else youll have to sign into app store
- $ touch ~/.bashrc
- $ echo ". ~/.bashrc" > ~/.bash_profile
- upgrade bash (apple refuses to update pass bash v3.2)
- setup bash as defualt shell (FCK ZSH, just because they force it on me)
- [macports](https://www.scrim.psu.edu/support/userspace-macports.html)
- [window manager](https://github.com/ianyh/Amethyst)
- continue with ubuntu setup

## logi keyboard & mouse

- on a fresh ubuntu these werent needed and the mx mechanical 10key works
  - still do it as eventually the stutter returns, dunno
  - see solaar for ubuntu
- [setup guide for keyboard](https://www.logitech.com/en-us/setup/mxsetup.html)
- [log+ options app](https://www.logitech.com/en-us/software/logi-options-plus.html)
- hold for 3 seconds to optimize for OS
  - mac: fn O
  - win/linux: fn P

### pwr solaar

- on a fresh ubuntu this wasnt needed
- https://github.com/pwr-Solaar/Solaar
- https://pwr-solaar.github.io/Solaar/installation
- https://github.com/pwr-Solaar/Solaar/blob/master/share/autostart/solaar.desktop

```sh
# via solar stable @see https://launchpad.net/~solaar-unifying/+archive/ubuntu/stable
sudo add-apt-repository ppa:solaar-unifying/stable
apt_refresh
sudo apt install solaar

# via python
pip install --user solaar

# @see https://winaero.com/fix-bluetooth-mouse-lag-on-linux-for-device-without-transmitter/
get_bluetooth_devices
/var/lib/bluetooth/somedir/your-device-id-here/info

[ConnectionParameters]
MinInterval=6
MaxInterval=6


# @see https://askubuntu.com/questions/1320412/bluetooth-mouse-lag-ubuntu-20-04
sudo nano /etc/default/grub
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash btusb.enable_autosuspend=0"
sudo update-grub
reboot
# @see https://askubuntu.com/questions/1180242/lag-when-using-bluetooth-mouse
sudo tee /etc/modprobe.d/iwlwifi-opt.conf <<< "options iwlwifi bt_coex_active=0"
reboot
```

## blackbuntu

- still not ready to leave regolith
- [looks sweeet](https://blackbuntu.org/)
- [checkout the list](https://github.com/neoslab/blackbuntu/blob/main/TOOLS.md)

## vanilla os

- still not ready to leave regolith
- [looks sweeeet](https://vanillaos.org/)

## remote server setup

1. setup non root user with sudo priv
2. configure ssh key-based authentication
3. disable password authentication and enable ufw with ssh enabled
4. setup firewall (usually ufw) to block everything except 80, 443, and 22 initially and define your default policies

## old notes

- [check this](https://linuxconfig.org/ubuntu-20-04-system-monitoring-with-conky-widgets)
  - sudo apt install conky-all
  - cp /etc/conky/conky.conf ~/.conkrc
- [graphics driver](https://linuxconfig.org/ubuntu-20-04-tricks-and-things-you-might-not-know#h6-internet)
- [tor](https://2019.www.torproject.org/docs/debian.html.en)
- [multi audio sources](https://linuxconfig.org/how-to-enable-multiple-simultaneous-audio-outputs-on-pulseaudio-in-linux)
  - pulseaudio -k
  - pulseaudio -D
- sudo apt install jackd qjackctl
  - $ qjackctl

```sh
# this entire section should be in one of the linux readms
# list all services
systemctl list-units --all --type=service --no-pager
# list all systemd unit files
systemctl list-unit files --no-pager
# get services in specific status
systemctl list-units --all --type=service --no-pager | grep running|dead
# get enabled/disabled systemd service unit states
systemctl list-unit-files | grep enabled|disabled
# set service status
systemctl start|stop|enable|disable servicename
```
