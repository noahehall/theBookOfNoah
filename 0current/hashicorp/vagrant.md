# VAGRANT

- dont forget about vagrant, its for development, and we are developers

## TLDR

- all about vagrant, from basic to advanced

## links

- other
  - [vmware glossary (dope snazzle)](https://www.vmware.com/topics/glossary/)
    - [hypervisor topic](https://www.vmware.com/topics/glossary/content/hypervisor)

- vagrant
  - [where vagrant stores boxes](https://stackoverflow.com/questions/10155708/where-does-vagrant-download-its-box-files-to)
  - [start here](https://www.vagrantup.com/intro)
  - [vagrant vs docker](https://www.vagrantup.com/intro/vs/docker)
  - [installing vagrant](https://www.vagrantup.com/docs/installation)
  - [uninstalling vagrant](https://www.vagrantup.com/docs/installation/uninstallation)
  - [vagrant cloud: public boxes](https://app.vagrantup.com/boxes/search)
  - [where to store VMs](https://serverfault.com/questions/54200/whats-the-best-file-system-for-storing-virtual-machine-images)
  - [awesome vagrant](https://github.com/iJackUA/awesome-vagrant)

  - references
    - [cli reference](https://www.vagrantup.com/docs/cli)
    - [vagrant cli box](https://www.vagrantup.com/docs/cli/box)
    - [vagrant boxes](https://www.vagrantup.com/docs/boxes)
    - [synced folders](https://www.vagrantup.com/docs/synced-folders)
    - [tips & tricks](https://www.vagrantup.com/docs/vagrantfile/tips)
    - [provisioning](https://www.vagrantup.com/docs/provisioning)
      - TODO: ^^^^ must do
    - [vagrant networking](https://www.vagrantup.com/docs/networking)
    - [config.vm machine settings](https://www.vagrantup.com/docs/vagrantfile/machine_settings)
    - [virtual box provider setup](https://www.vagrantup.com/docs/providers/virtualbox/boxes)
    - [NFS setup](https://www.vagrantup.com/docs/synced-folders/nfs)

  - plugins/contrib/tools
    - [plugins listed on wiki](https://github.com/hashicorp/vagrant/wiki/Available-Vagrant-Plugins)
    - [ngrok: required for vagrant share](https://dashboard.ngrok.com/get-started/setup)
    - [veewee vm exporter](https://github.com/jedi4ever/veewee)
    - [vagrant/contrib](https://github.com/hashicorp/vagrant/tree/main/contrib)
    - [sync local \* guest files](https://learn.hashicorp.com/tutorials/vagrant/getting-started-synced-folders?in=vagrant/getting-started)
      - the defaults work, but find the optimial settings for ubuntu

  - boxes
    - [vagrant cloud signup](https://app.vagrantup.com/)
    - [bento boxes](https://app.vagrantup.com/bento)
      - [bento github](https://github.com/chef/bento#current-baseboxes)
    - [vangrantbox.es](https://www.vagrantbox.es/)
    - [roboxes](https://roboxes.org/)
      - [generic by roboxes](https://app.vagrantup.com/generic)
      - [robox github](https://github.com/lavabit/robox)
    - [geeringuy](https://app.vagrantup.com/geerlingguy)
      - [author of ansible for devops](https://www.ansiblefordevops.com/)
      - [slim ubuntu 16](https://app.vagrantup.com/geerlingguy/boxes/ubuntu1604)
      - [slim ubuntu 18](https://app.vagrantup.com/geerlingguy/boxes/ubuntu2004)

  - tuts
    - [getting started](https://learn.hashicorp.com/collections/vagrant/getting-started)
    - [vagrant + kali linux](https://www.kali.org/blog/announcing-kali-for-vagrant/)
    - [automating red team homelabs](https://www.secureideas.com/blog/2018/09/automating-red-team-homelabs-part-1-kali-automation.html)
    - [disposable local dev envs with vagrant, docker and arkade](https://iximiuz.com/en/posts/how-to-setup-development-environment/)
    - [mount NFS shares on a running guest machine](https://www.stevenrombauts.be/2018/01/mount-nfs-shares-on-a-running-vagrant-box/)
    - [hackr.io: list of vagrant tuts](https://hackr.io/tutorials/learn-vagrant)
    - [serversforhackers.com: 3 quick run vids](https://serversforhackers.com/s/vagrant)
    - [scotch.io: vagrant share](https://scotch.io/tutorials/sharing-your-virtual-machine-on-the-web-with-vagrant-share)
    - [stdoutin: getting started](http://stdout.in/en/post/getting_started_with_vagrant_automated_dev_servers_deploy_and_provisioning)
    - [import vagrantfile in another](https://stackoverflow.com/questions/46460383/is-it-possible-to-load-a-vagrantfile-config-from-within-another-vagrantfile)
    - [templating vagrantfiles](https://stackoverflow.com/questions/35767649/how-to-template-vagrantfile-using-ruby)

## basics

### high level

- Vagrant is a tool focused for managing development environments
- Vagrant lowers development environment setup time, increases production parity, and makes the "works on my machine" excuse a relic of the past
- If you are a developer, Vagrant will isolate dependencies and their configuration within a single disposable, consistent environment, without sacrificing any of the tools you are used to working with (editors, browsers, debuggers, etc.).
- If you are an operations engineer or DevOps engineer, Vagrant gives you a disposable environment and consistent workflow for developing and testing infrastructure management scripts.
- If you are a designer, Vagrant will automatically set everything up that is required for that web app in order for you to focus on doing what you do best: design

### terminilogy

- port: a number (i.e. a channel) between 1 and 65555 assigned to a tcp packet
- virtualbox: from oracle
- hyper-v: from microsoft

#### virtualization terms

- virtualization: isolated sandboxes to reduce hardware requirements
- virtual machine: an operating system that runs independently from the underlying hardware

- hypervisors: aka virutal machine monitor or VMM

  - software that creates, runs & manages virutal machines by abstracting a computers software away from its hardware
  - enables one host computer to support multiple guest VMs by sharing host resources, e.g. memory, storage & compute
  - e.g.

  - [list of emulators & hypervisors](https://en.wikipedia.org/wiki/Comparison_of_platform_virtualization_software)
    - a hypervisor is a kind of emulator
  - [list of type 1 & type 2 hypervisors](https://vapour-apps.com/what-is-hypervisor/)
    - use this info in demo, make sure to cite source

  - types of hypervisors
    - type 1: aka bare metal
      - acts like a lightweight operating system and runs dirctly on the hosts hardware
      - is installed on the computer hardware next to the operating system
      - use cases
        - extremely secure
        - generally perform better and more efficient than hosted hypervisors
        - useful in data center computing requirements
        - run multiple operating systems on a single set of hardware

    - type 2: aka hosted aka client hypervisors
      - runs as a software layer on an operating system, like other computer programs
      - is installed on top of the operating system, next to other software
      - comparison with type 1 hypervisors
        - latency is higher: communication between hardware and type 2 hypervisor must pass through the hosts OS
      - use cases
        - install multiple isolated OS on top of one standard operating system
        - end user/software testing

- containers: allow applications to run independently of an operating system
  - use cases
    - run any application on any operating system through a container engine
    - extremely portable applications

- containers vs hypervisors
  - hypervisors
    - create & run isolated VMs (i.e. operating systems)
  - containers
    - create and run isolated applications (i.e. software)

#### vagrant terms

- use cases
  - application appliances
  - development environments:
    - frozen in time with a specific set of hardware & software versions
  - isolated sandboxes
    - testing & experimentation
  - reduce hardware requirements
  - reducing complexity of various hypervisors via a single command line utility

- vagrant cli: used to start & stop vagrant VMs, initalize new & manage running VMs

- vagrant file: small programs written in ruby to define & run a VM

  - can support multi-machine configurations:
    - e.g. when an application env is distributed across multiple virtual machines
    - e.g. web server (haproxy), application server (node), and db server (arangodb) multi machine vagrant file
      - ^ my preferred stack

- vagrant cloud: online marketplace for VMs

- vagrant boxes: i.e. a VM

  - the base img/starting point of a development environment;
  - the base BOX is cloned (i.e. reusable) instead of creating one from scratch
  - stored globally for the current user
  - each project uses an initial box to clone from, and never modifies the actual base image (thus their respective guest machines stay isolated)

- vagrant providers: plugins that provide support for a specific hypervisor

- vagrant provisioners: run the first time a VM is started; installs software and setting configurations

### vagrant workflows

- connecting to a VM via SSH

- folder synchronization: bidirectional host >< guest
  - by default, the synced folder is `/vagrant` within the guestos
    symlinks dont work in shared folders

- networking: multiple network topologies
  - port forwarding: forward requests from host:port to guest:port
    - e.g. access guest:8080, via host:9090

  - private networks via `type: "dhcp"`
    - creates a dhcp server in the providers virtual network
    - assigns the box a private non-routable ip
      - non routable ip address cannot be accessed from any other subnet
      - useful for security & testing purposes
    - get the boxes private ip via `ifconfig`

  - public networks
    - make sure to secure your box before configuring a public network

- providers: define a box for a paritcular hypervisor
  - preconfigured providers for `virtualbox` and `hyper-v`

- box security
  - ssh keys
  - uname + pword

- provision scripts
  - for moifying the base box to match your environment requirements
  - by default only runs the first time the box is started

- creating base boxes
  - within a vagrant env, create a new Vagrantfile you want to use that provides defualt settings when your box is created
  - `vagrant package --vagrantfile mynewbox/defaults/Vagrantfile --output mynewbox.box`
    - see vagrantfile loading order, this is the file packaged with the box
  - add your new box to your local box cache
    - `vagrant box add testingmybox mynewbox.box`
  - test your new box
    - `mkdir testbox && cd testbox && vagrant init testingmybox && vagrant up`

- vagrant snapshots
  - saving a vagrant env at a specific point in time
  - useful for iterating changes from a certain commit
    - especially when you have extensiving provisioners that take years to run
  - `vagrant snapshot save nameOfYourSnapshot`
  - `vagrant snapshot restore switchToThisSnapshot`

### important files & locations

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

### vagrant cloud

- search for `bento` to see all the chef software boxes
- repo of public boxes for a variety of providers

## best practices

- always
  - do this stuff
- somtimes
  - update [in] virtualbox settings to store images on a separate drive
- never
  - do this stuff

## quickies

```sh
  # @see thisrepo/linux/.bash_aliases.sh for my aliases

  # create and start a dev env on a slim ubuntu 16
  vagrant init geerlingguy/ubuntu1604 # create new vagrant env with this box
  vagrant status # see whatsup
  vagrant up # to (re)start a suspended/halted machine
  vagrant reload # if you've made changes to the Vagrantfile
  vagrant reload --provision # if you've made changes to any provisioning scripts

  # install a box without creating a dev env
  vagrant box add some/img/name

  # login/out of the created VM
  vagrant ssh # in
  logout # same as exit
  vagrant destroy # delete all vagrant env files except the Vagrantfile

  # handy box cmds
  vagrant box list
  vagrant box remove NAME
```

## installation

```sh
  # setup cmd completion
    vagrant autocomplete install
    . ~/.bashrc
  # ^ if that doesnt work, do it manually
  # ^^ setup bash completion (e.g. for bash)
    sudo wget https://raw.githubusercontent.com/hashicorp/vagrant/main/contrib/bash/completion.sh -O /etc/bash_completion.d/vagrant
  # ^^ setup reqs
    sudo apt install libarchive-tools curl
      # ^ bsdtar is in libarchive-tools
  # ^^ update your bashrc
    if [ -f /etc/bash_completion.d/vagrant ]; then
      source /etc/bash_completion.d/vagrant
    fi
  # ^^ reload bash
    . ~/bashrc
  # change vagrants home dir, boxes are stored in $VAGRANT_HOME/boxes
  # ^ by defualt its ~/.vagrant.d
    export VAGRANT_HOME=/some/other/place/.vagrant.d
    mkdir -p $VAGRANT_HOME
  # globally disable shared folders by default
    export VAGRANT_DISABLE_VBOXSYMLINKCREATE=1


  # after install virtualbox, ensure to install guest additions for increased performance
  # ^ @see https://www.vagrantup.com/docs/providers/virtualbox/boxes
  # ^ @see https://www.virtualbox.org/manual/ch04.html
  # ^ @see https://download.virtualbox.org/virtualbox/
  # ^^ check that for the correct version number of your virtualbox installation
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

  # NFS
  # ^ best performance for ubuntu
  # ^ for windows try this: http://freenfs.sourceforge.net/
  # install needed tools
  sudo apt install nfs-kernel-server nfs-common rpcbind
  systemctl start nfs-kernel-server
  http://10.0.2.15/# see exports file which maps directories to the IPs that can access them over the network
  cat /etc/exports


```

## demo

```sh
  # ensure env is setup
    vagrant -v
    vb -v
    docker -v
    echo $VAGRANT_HOME
    alias | grep vg # see all vagrant aliases ive setup

  # start an ubuntu 16.04 env
    # create a dir to contain the env
    mkdir -p /some/dir/ubuntu-16-04
    cd /some/dir/ubuntu-16-04
    # create the isolated vagrant env based on some box
    vagrant init bento/ubuntu-16.04
    # start the VM
    # ^ downloads the box via orgName/boxName from vagrant cloud
    # ^ review the files downloaded via tree $VAGRANT_HOME
    # ^ by default runs in headless mode
    # ^^ todo: add demo of GUI mode
    # ^^ @see https://stackoverflow.com/questions/23926945/specify-headless-or-gui-from-command-line
    vagrant up
    # review the downloaded contents
    # note your local vagrantfile overrides the box vagrantfile where conflicted
    tree $VAGRANT_HOME && cd $VAGRANT_HOME
    cat boxes/blah/blah/virtualbox/{metadata.json,Vagrantfile}
    # check the status of the vm in the current dir
    vagrant status
    # check the status of all vms
    vagrant global-status
    # connect to the box & explore
    vagrant ssh
    ifconfig # internet
    lspci # pci devices, e.g. usb ports, graphic cards, network adapters
    uname -a # system
    sudo lshw -short # hardware
    lscpu # cpu
    lsblk # block storage
    lsusb # usb controllers
    sudo fdisk -l # file system
    sudo dmidecode -t bios # bios
    # exit & shutdown the vm
    exit
    vagrant halt





```
