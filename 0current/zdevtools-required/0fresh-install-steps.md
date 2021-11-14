# TLDR

- fucked up my lubuntu to oblivion

- should have written this years
- this are the steps i took to get back on top
- todo: automate this shiz like the guy did his with ansible

## links

- [initial server setup](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-16-04)
- [point domain name to your servers ip](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-host-name-with-digitalocean)
- [configure ssh key based authentication and disable password authentication](https://www.digitalocean.com/community/tutorials/how-to-configure-ssh-key-based-authentication-on-a-linux-server)
- [common ufw firewall rules](https://www.digitalocean.com/community/tutorials/ufw-essentials-common-firewall-rules-and-commands)

## basic steps

  1. setup non root user with sudo priv
  2. configure ssh key-based authentication
  3. disable password authentication and enable ufw with ssh enabled
  4. setup firewall (usually ufw) to block everything except 80, 443, and 22 initially and define your default policies
  5. check thebookofnoah/zdevtools-required

## my lubuntu setup

- download firefox dev edition
  - login to get all your dope azz bookmarks
- setup github
  - clone my shiznit
- setup vscode
- setup chromium (tho im liking firefox now)
- setup linux (with what i could remember)
- dconf-editor
- shutter
- synaptic package manager
- bleachbit
- gnome extensions
- apt-updatoer
- neofetch
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

## my backbook setup

- buy a dell and drop lubuntu on it, continue from `my lubuntu setup` above

- else if your shop buys you a pretty macbook pro, continue below

- xcode install
- sublime
- mac is gonna make make say FCK zsh
- create ~/.bashrc
- create ~/.bash_profile
- the only logic should be to load the .bashrc
- upgrade bash (apple refuses to update pass bash v3.2) cuz fk apple
- setup bash as dn efualt shell (FCK ZSH)
- github
- hub
- pull my shit
- switch to iterm2
- chromium
- [macports](https://www.scrim.psu.edu/support/userspace-macports.html)
- [jenv](https://medium.com/@chamikakasun/how-to-manage-multiple-java-version-in-macos-e5421345f6d0)
- TODO

# todo

- yall the web dev stuff + securiting this box

- gufw (manage ufw rules via gui)
- also need to setup some default rules
- <https://github.com/kelseyhightower/setup-network-environment>

# good reads

- [upgrading bash on mac](https://itnext.io/upgrading-bash-on-macos-7138bd1066ba)
