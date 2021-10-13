# TLDR

- dont forget about vagrant, its for development, and we are developers

## links

- [start here](https://www.vagrantup.com/intro)
- [vagrant vs docker](https://www.vagrantup.com/intro/vs/docker)
- [installing vagrant](https://www.vagrantup.com/docs/installation)
- [uninstalling vagrant](https://www.vagrantup.com/docs/installation/uninstallation)
- [cli reference](https://www.vagrantup.com/docs/cli)
- [vagrant cloud: public boxes](https://app.vagrantup.com/boxes/search)
- boxes
  - [vagrant cloud signup](https://app.vagrantup.com/)
  - [geeringuy](https://app.vagrantup.com/geerlingguy)
    - [author of ansible for devops](https://www.ansiblefordevops.com/)
    - [slim ubuntu 16](https://app.vagrantup.com/geerlingguy/boxes/ubuntu1604)
    - [slim ubuntu 18](https://app.vagrantup.com/geerlingguy/boxes/ubuntu2004)
  - [generic](https://app.vagrantup.com/generic)
    - [bunches of boxes via roboxes](https://roboxes.org/)
    - grab one of their alpine boxes and move on with your life
- tuts
  - [getting started](https://learn.hashicorp.com/collections/vagrant/getting-started)

## high level

- Vagrant is a tool focused for managing development environments
- Vagrant lowers development environment setup time, increases production parity, and makes the "works on my machine" excuse a relic of the past
- If you are a developer, Vagrant will isolate dependencies and their configuration within a single disposable, consistent environment, without sacrificing any of the tools you are used to working with (editors, browsers, debuggers, etc.).
- If you are an operations engineer or DevOps engineer, Vagrant gives you a disposable environment and consistent workflow for developing and testing infrastructure management scripts.
- If you are a designer, Vagrant will automatically set everything up that is required for that web app in order for you to focus on doing what you do best: design

## terminilogy

- vagrant boxes: the base img/starting point of a development environment
- vagrant providers:

## important files & locations

- `Vagrantfile` created via `vagrant init some/type/of/img`
  - purpose: this is your buildfile; every person working with the project uses this file to build their dev env

## quickies

```sh
  # create a dev env on a slim ubuntu 16
  vagrant init geerlingguy/ubuntu1604 # similar to git init
  vagrant up

  # install a box without creating a dev env
  vagrant box add some/img/name

  # login/out of the created VM
  vagrant ssh # in
  logout # duh
  vagrant destroy

```
