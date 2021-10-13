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
- plugins/contrib
  - [vagrant/contrib - must get their bash completion](https://github.com/hashicorp/vagrant/tree/main/contrib)
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
  vagrant up

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

  Vagrant.configure("2") do |config|
    config.vm.box = "generic/alpine314"
    # config.vm.box_version = "1.0.282" # if you need to specify a version
    # config.vm.box_url = "https://vagrantcloud.com/hashicorp/bionic64" # if appropriate

```
