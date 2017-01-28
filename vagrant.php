<?php 

	vagrant : https://docs.vagrantup.com/v2/cli/index.html

quick actions {
	create a box/package from existing one
		https://docs.vagrantup.com/v2/cli/package.html
		https://scotch.io/tutorials/how-to-create-a-vagrant-base-box-from-an-existing-one
			startup the environment you want to package
			ssh into it
				sudo apt-get clean
					remove apt cache
				sudo dd if=/dev/zero of=/EMPTY bs=1M
				sudo rm -f /EMPTY
					zero out the drive
				cat /dev/null > ~/.bash_history && history -c && exit
					clear the bash history
				you should be logged out of the box now
					vagrant package --output yournewpackagename.box --include thisfile, andthisfile --vagrantfile vagrantfile
				vagrant box add assignsomenameto yournewpackagename.box						
					add your newpackage as a box to your box list
				create a new dir
				go into it
					vagrant init someboxonyourboxlist
				edit the vagrantfile that was created
					# -*- mode: ruby -*-
					# vi: set ft=ruby :
					Vagrant.configure("2") do |config|
					  config.vm.box = "yourboxnamehere"
					end
}
basics {
	quick setup
		1. create a dir
		2.  initialize the dir as a vagrant environment
			$ vagrant init
			#this creates a vagrant file
		3. add a box
			$ vagrant box add hashicorp/precise32
		4. edit the vagrantfile from #2
			Vagrant.configure("2") do |config|
			  config.vm.box = "hashicorp/precise32"
			end
		5. startup the environment
			$ vagrant up
		6. ssh into the environment
			$ vagrant ssh
}

shared directories {
	
	by default the folder with the vagrantfile is automatically shared

}

errors {
	windows 7
		ensure virtualbox is installed and you have the following
		>in your path variable
			C:\Program Files\Oracle\VirtualBox
}

provisioning{
	allows you to specify what to do when you vagrant up an environment
	e.g.
		1. create a shell script, save it as bootstrap.sh
			#!/usr/bin/env bash

			apt-get update
			apt-get install -y apache2
			if ! [ -L /var/www ]; then
			  rm -rf /var/www
			  ln -fs /vagrant /var/www
			fi
		2. update your vagrantfile to include the shell script
			Vagrant.configure("2") do |config|
			  config.vm.box = "hashicorp/precise32"
			  config.vm.provision :shell, path: "bootstrap.sh"
			end
		3. notes
			the line 'config.vm.provision :shell, path: "bootstrap.sh"'
				1. 'use' the shell provisoner to setup the machine with bootstrap.sh
				2.  the file path is relative to the vagrantfile

}

networking {
	https://docs.vagrantup.com/v2/networking/
	port forwarding
		specify ports on the guest machine to share with the host machine
			allows you to access a port on your host machine and have all traffic
			>forwarded from the host machine port to the guest machine port

		1. edit your vagrantfile
			Vagrant.configure("2") do |config|
			  config.vm.box = "hashicorp/precise32"
			  config.vm.provision :shell, path: "bootstrap.sh"
			  config.vm.network :forwarded_port, guest: 80, host: 4567
			end
		2.  run vagrant reload (if machine is running) or vagrant up (if not)
		3.  go to http:127.0.0.1:4567 and you will be directed to your guest apache
}

vagrant share {
	https://docs.vagrantup.com/v2/share/
	share your environment with others

	1. get an account on https://atlas.hashicorp.com/
	2. login to vagrant
		$ vagrant login
	3. share your vagrant to a shareable url
		$ vagrant share
	4. end the vagrant share
		$ ctrl + c
}

destroying a vagrant environment {
	types of deletes
		suspending: save the current running state of the machine and stop it
		>to start it again, cd into the folder and do vagrant up
			$ vagrant suspend

			1. it is super fast to restart the machine
			2. takes up a lot of space to store teh state of the machine RAM
			>on disk

			restart the machine with vagrant up to pick up where you left off
		
		halting: gracefully shutdown the guest operating system and shut down
		>the guest machine, preserving the contents of the disk, and allowing it
		> to start again
			$ vagrant halt

			1. the guest machine will take longer to start
			2. it will still consume disk space, but not as much as suspending

			restart the machien with vagrant up to pick up where you left off

		destroying: remove all traces of the guest machine from your system
			$ vagrant destroy
			
			1. destroys the guest hard disks

			restart the machine with vagrant up to start from scratch with 
			>whatever provisioning you setup in the vagrantfile

}

vagrant backend providers{
	virtualbox: https://www.virtualbox.org/
	vmware: https://docs.vagrantup.com/v2/vmware/
	aws: https://github.com/mitchellh/vagrant-aws

	basic steps
		1. install the provider
		2. issue vagrant up with the provider name appended
			vagrant up --provider=vmware_fusion
			vagrant up --provider=aws
		3. notes
			Once you run vagrant up with another provider, every other Vagrant 
			>command doesnt need to be told what provider to 'use'.
}

vagrant packages {
	packages a currently runnig virtualbox environment into a re-usable box
	https://docs.vagrantup.com/v2/cli/package.html
		1. go into the vagrant directory that has the environment you want to package
		2. issue command
			vagrant package --output nametosaveas --vagrantfile vagrantfile

}
vagrant commands {
	vagrant up #boot up your vagrant environment
	vagrant reload --provision
		#reload your current environment with provisioning
	vagrant reload #reload your current environment 
	vagrant ssh #ssh into your vagrant environment
	vagrant box list # list all your isntalled boxes
	vagrant box remove boxnamehere 
	vagrant box add newnameofbox somebox.box
	vagrant init someboxname #initiatlize a new environment
	>based on a box in your box list
}

