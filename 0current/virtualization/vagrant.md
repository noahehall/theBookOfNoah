# TLDR

- dont forget about vagrant, its for development, and we are developers

## links

- [start here](https://www.vagrantup.com/intro)
- [vagrant vs docker](https://www.vagrantup.com/intro/vs/docker)
- [installing vagrant](https://www.vagrantup.com/docs/installation)
- [uninstalling vagrant](https://www.vagrantup.com/docs/installation/uninstallation)
- [vagrant cloud: public boxes](https://app.vagrantup.com/boxes/search)
- references
  - [cli reference](https://www.vagrantup.com/docs/cli)
  - [vagrant box](https://www.vagrantup.com/docs/cli/box)
  - [synced folders](https://www.vagrantup.com/docs/synced-folders)
  - [tips & tricks](https://www.vagrantup.com/docs/vagrantfile/tips)
    - TODO: ^^^^ must do
  - [vagrant networking](https://www.vagrantup.com/docs/networking)
  - [config.vm machine settings](https://www.vagrantup.com/docs/vagrantfile/machine_settings)
  - [virtual box provider setup](https://www.vagrantup.com/docs/providers/virtualbox/boxes)
- plugins/contrib
  - [vagrant/contrib](https://github.com/hashicorp/vagrant/tree/main/contrib)
  - [sync local * guest files](https://learn.hashicorp.com/tutorials/vagrant/getting-started-synced-folders?in=vagrant/getting-started)
    - the defaults work, but find the optimial settings for ubuntu
- boxes
  - [vagrant cloud signup](https://app.vagrantup.com/)
  - [generic](https://app.vagrantup.com/generic)
    - [bunches of boxes via roboxes](https://roboxes.org/)
    - grab one of their alpine boxes and move on with your life
  - [geeringuy](https://app.vagrantup.com/geerlingguy)
    - [author of ansible for devops](https://www.ansiblefordevops.com/)
    - [slim ubuntu 16](https://app.vagrantup.com/geerlingguy/boxes/ubuntu1604)
    - [slim ubuntu 18](https://app.vagrantup.com/geerlingguy/boxes/ubuntu2004)
- tuts
  - [getting started](https://learn.hashicorp.com/collections/vagrant/getting-started)

  -

## TODO (ouch)

```sh
autocomplete    manages autocomplete installation on host
     box             manages boxes: installation, removal, etc.
     cloud           manages everything related to Vagrant Cloud
     destroy         stops and deletes all traces of the vagrant machine
     global-status   outputs status Vagrant environments for this user
     halt            stops the vagrant machine
     help            shows the help for a subcommand
     init            initializes a new Vagrant environment by creating a Vagrantfile
     login
     package         packages a running vagrant environment into a box
     plugin          manages plugins: install, uninstall, update, etc.
     port            displays information about guest port mappings
     powershell      connects to machine via powershell remoting
     provision       provisions the vagrant machine
     push            deploys code in this environment to a configured destination
     rdp             connects to machine via RDP
     reload          restarts vagrant machine, loads new Vagrantfile configuration
     resume          resume a suspended vagrant machine
     snapshot        manages snapshots: saving, restoring, etc.
     ssh             connects to machine via SSH
     ssh-config      outputs OpenSSH valid configuration to connect to the machine
     status          outputs status of the vagrant machine
     suspend         suspends the machine
     up              starts and provisions the vagrant environment
     upload          upload to machine via communicator
     validate        validates the Vagrantfile
     version         prints current and latest Vagrant version
     winrm           executes commands on a machine via WinRM
     winrm-config    outputs WinRM configuration to connect to the machine
```

## high level

- Vagrant is a tool focused for managing development environments
- Vagrant lowers development environment setup time, increases production parity, and makes the "works on my machine" excuse a relic of the past
- If you are a developer, Vagrant will isolate dependencies and their configuration within a single disposable, consistent environment, without sacrificing any of the tools you are used to working with (editors, browsers, debuggers, etc.).
- If you are an operations engineer or DevOps engineer, Vagrant gives you a disposable environment and consistent workflow for developing and testing infrastructure management scripts.
- If you are a designer, Vagrant will automatically set everything up that is required for that web app in order for you to focus on doing what you do best: design

## terminilogy

- vagrant boxes: the base img/starting point of a development environment; used to clone a virtual environment instead of creating one from scratch
  - stored globally for hte current user
  - each project uses an initial box to clone from, and never modifies the actual base image (thus their respective guest machines stay isolated)
  -
- vagrant providers:

## important files & locations

- `Vagrantfile` created via `vagrant init some/type/of/img`
  - purpose: this is your buildfile; every person working with the project uses this file to build their dev env
  - the `parent/Vagrantfile` directory is considered the project directory, and stored in the guest machine at `/vagrant`
    - however always confirm as this worked for me on an ubuntu box, but not an alpine box
    - you may have to set it specificlay (see vagrant file down below)

  - loading order and merging
    - Vagrantfile packaged with the box that is to be used for a given machine.
    - Vagrantfile in your Vagrant home directory (defaults to ~/.vagrant.d). This lets you specify some defaults for your system user.
    - Vagrantfile from the project directory. This is the Vagrantfile that you will be modifying most of the time.
    - Multi-machine overrides if any.
    - Provider-specific overrides, if any.

## quickies

```sh
  # setup bash completion (e.g. for bash)
    sudo wget https://raw.githubusercontent.com/hashicorp/vagrant/main/contrib/bash/completion.sh -O /etc/bash_completion.d/vagrant
  # ^ update your bashrc
    # vagrant bash completion
    if [ -f /etc/bash_completion.d/vagrant ]; then
      source /etc/bash_completion.d/vagrant
    fi
  # ^ reload bash
    . ~/bashrc

  # create and start a dev env on a slim ubuntu 16
  vagrant init geerlingguy/ubuntu1604 # similar to git init
  vagrant up # only when initially setting up the machine
  vagrant reload # if you've made changes to the Vagrantfile
  vagrant reload --provision # if you've made changes to any provisioning scripts

  # install a box without creating a dev env
  vagrant box add some/img/name

  # login/out of the created VM
  vagrant ssh # in
  logout # same as exit
  vagrant destroy

  # handy box cmds
  vagrnat box list
  vagrant box remove NAME
```

## vagrant file

```rb
  Vagrant.require_version ">= 2.2" # require atleast 2.2 to run this vagrant file

  # 2 ===  vagrant version
  Vagrant.configure("2") do |config|
    config.vm.box = "generic/alpine314"
    # config.vm.box_version = "1.0.282" # if you need to specify a version
    # config.vm.box_url = "https://vagrantcloud.com/hashicorp/bionic64" # if appropriate

```

## installation

```sh
  # after install virtualbox, ensure to install guest additions for increased performance
  # ^ @see https://www.vagrantup.com/docs/providers/virtualbox/boxes
  # ^ linux headers & devtools
  sudo apt-get install linux-headers-$(uname -r) build-essential dkms
  # ^ virtual box guest additions: done for virtualbox 6.1.26
  wget http://download.virtualbox.org/virtualbox/6.1.26/VBoxGuestAdditions_6.1.26.iso
  sudo mkdir /media/VBoxGuestAdditions
  sudo mount -o loop,ro VBoxGuestAdditions_6.1.26.iso /media/VBoxGuestAdditions
  sudo sh /media/VBoxGuestAdditions/VBoxLinuxAdditions.run
  rm VBoxGuestAdditions_6.1.26.iso
  sudo umount /media/VBoxGuestAdditions
  sudo rmdir /media/VBoxGuestAdditions
