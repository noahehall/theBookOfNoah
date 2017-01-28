<?php 

	bookmark:
		https:https://docs.saltstack.com/en/latest/topics/tutorials/pillar.html#pillar-makes-simple-states-grow-easily

basics {
	https://docs.saltstack.com/en/getstarted/fundamentals/index.html

}

definitions {
	sls files = configuration files for masters and minions, specifying the state
	>each should be in at some point in time
		you cannot use '.' in sls file names or directories

		init.sls is a reserved file for: TBA

		basic statements: review the sls tutorial
			require
}

salt vagrant demo {
	https://github.com/UtahDave/salt-vagrant-demo
	1.download and install
		git clone https://github.com/UtahDave/salt-vagrant-demo.git
		cd salt-vagrant-demo
		vagrant up
			This will download an Ubuntu VirtualBox image and create three virtual machines 
			for you. One will be a Salt Master named master and two will be Salt Minions 
				named minion and minion2. The Salt Minions will point to the Salt Master 
			and the Minions keys will already be accepted. Because the keys are pre-generated 
			and reside in the repo, please be sure to regenerate new keys if you 'use' 
			this for production purposes.
	2. login to master, switch to root, ensure slaves are running
		vagrant ssh master
		sudo su
		salt-key --list-all 
			#vagrant ssh master is required, because in a multi-vm environment
			#you have to specify which vm you want to ssh into
	3. test out some commands
		salt '*' cmd.run 'ls -l /etc'
		salt '*' cmd.run 'pwd'
}

salt vagrant commands {
	salt-key --list-all 
		#list all keys
		#grouped by status: accepted, rejected, pending
	salt-key --accept=<key> #accept a specific key, so the a slave can connec to a master
	salt-key --accept-all #accept all keys
	salt '*' test.ping #see which slaves are listing to master
	salt '*' cmd.run 'pwd' #all slaves will run pwd and return the results
		'*' = target, change it to a box name, e.g. minion1
			determines which systems apply the command. 
			Uses hostname globbing by default, but there are many other ways to select 
			and filter that well get into later. For now, it is enough to know that * 
			targets all managed systems.
		cmd.run  = module.function, 
			cmd = module
			run = function
			This is how you leverage the real power of Salt. 
			Commands consist of a module and function, and Salt comes with 
			built-in modules to install software, copy files, check services, and 
			most other tasks you want to automate.
		'pwd' = arguments to send to the function
			 Provides any extra data needed by the function you are calling. 
			 For example, the pkg.install function likes to know which packages you want to 
			 install. You tell it using an argument.
	salt '*' disk.usage #show disk usage on all slaves
	salt '*' sys.doc
		You can pass a module or function name to the sys.doc execution module to 
		get details on any module directly from the command line. This list is 
		filtered based on the target(s).
		examples
			salt 'minion1' sys.doc pkg #get info about pkg from minion1
	salt '*' pkg.install cowsay #install a package on all targets
	salt '*' network.interfaces #list networking interfaces on all targets
	salt -G 'os:Ubuntu' test.ping #ping targets whose os = ubuntu
	salt -E 'minion[0-9]' test.ping #ping targets with a regular epression
	salt -L 'minion1,minion2' test.ping #ping a list of specific targets
	salt -C 'G@os:Ubuntu and minion* or S@192.168.50.*' test.ping 
		#ping multiple targets that return true for the statements
}

salt vagrant grains commands {
	
	salt grains.ls #help with grains commands

}

salt vagrant pillar {
	https://docs.saltstack.com/en/latest/topics/tutorials/pillar.html

	whereas grains sends data to master from minions
	pillar sends data to minions from master
		type of data to send:
			highly sensitive data
			minion configuration
			varaibles
			arbiratry data
	steps
		1. pillar is on be default in salt, check the minions pillar data
			salt '*' pillar.items
		2. pillar has a top file and arbitrary amount of sls files, create the dir
		>to hold these in the salt master vm
			mkdir /srv/pillar
		3. create a top file for pillar 
			nano /srv/pillar/top.sls
		4. insert the following 
			base:
			  '*':
			    - data
			#this associates the data file youll create later with all minions
		5. create the data file you specified in the previous step
			nano /srv/pillar/data.sls
		6. insert the following
			info: some data
		7. refresh the pillars for all minions
			salt '*' saltutil.refresh_pillar
		8. tell the minions to retrieve the pillar data
			salt '*' pillar.items
}

salt vagrant pillar user data example {
	https://docs.saltstack.com/en/latest/topics/tutorials/pillar.html
	1. create /srv/pillar/users/init.sls in the vagrant master vm
		users:
		  thatch: 1000
		  shouse: 1001
		  utahdave: 1002
		  redbeard: 1003
	2. update the top.sls fil in /srv/pillar/top.sls
		base:
		  '*':
		    - data
		    - users
	3. use the jinja templating language to do something with the data
		1. create on the master vm machine /srv/salt/users/init.sls
			{% for user, uid in pillar.get('users', {}).items() %}
			{{user}}:
			  user.present:
			    - uid: {{uid}}
			{% endfor %}

}

salt vagrant pillar linux distro example {
	https://docs.saltstack.com/en/latest/topics/tutorials/pillar.html
	pillar data can be accessed in state files to customise behavior for each minion.
	data applicable to each minion is substituted into the state files through 
	>templating before being run. Typical uses include setting directories
	>appropriate for the minion and skipping states that dont apply.

	steps:
		1. on the master vm create/update /srv/pillar/pkg/init.sls
			pkgs:
			  {% if grains['os_family'] == 'RedHat' %}
			  apache: httpd
			  vim: vim-enhanced
			  {% elif grains['os_family'] == 'Debian' %}
			  apache: apache2
			  vim: vim
			  {% elif grains['os'] == 'Arch' %}
			  apache: apache
			  vim: vim
			  {% endif %}
		2. on the master vm create/update /srv/pillar/top.sls
			base:
			  '*':
			    - data
			    - users
			    - pkg
		3. parameterize each minions apache installation
			on the master vm create/update /srv/salt/apache/init.sls
			version 1: no default if pillar is unavailable
				apache:
				  pkg.installed:
				    - name: {{ pillar['pkgs']['apache'] }}
			version 2: set a default if pillar is unavailable
				apache:
				  pkg.installed:
				    - name: {{ salt['pillar.get']('pkgs:apache', 'httpd') }}
}

salt vagrant targeting extended {
	https://docs.saltstack.com/en/getstarted/fundamentals/targeting.html
	salt 'minion1' disk.usage 
		target using the Minion ID. This value can be set
			a. in the minion config file, 
			b. be specified using the -i option in the bootstrap script.	

	salt 'minion*' cmd.run 'pwd'
		target using 'globbing' by using wildcars

	salt -G 'os:Ubuntu' test.ping
		target using the grain system
			Grains are static information SaltStack collects about the underlying managed system. 
				e.g. operating system, domain name, IP address, kernel, OS type, memory, etc
			 add your own grains to a Salt Minion by:
			 	a. placing them in the /etc/salt/grains file on the Salt Master, 
			 	b. in the minion configuration file under the grains section. 
}

salt vagrant formulas {
	https://docs.saltstack.com/en/getstarted/fundamentals/formulas.html
	get more formulas here:
		https://github.com/saltstack-formulas

	Most tasks you perform are a combination of many commands, tests, and operations,
		SaltStack configuration management lets you create a re-usable 
		configuration template, called a Formula, that describes everything required 
		to put an application into a known configuration.

	Formulas are described using YAML, and are simple to create and read.
	1. create a text file and save it in  [salt master location]/saltstack/salt/nettools.sls
		install_network_packages:
		  pkg.installed:
		    - pkgs:
		      - rsync
		      - lftp
		      - curl
		#This Formula calls the pkg.installed state module, and 
		#passes a list of three package names for the pkgs argument.
		      install_network_packages: = ID, must be unique across all formulas
		      pkg.installed: = module.function, the state module and function you want to call
		      pgs: && - rsync, etc = arguments to pass to the function
	2. apply the formula to your slaves/or as a specific one,just change the target
		salt '*' state.apply nettools
}

salt vagrant top file{
	describes where formulas should be applied
		-is used to automatically apply multiple Formulas to your Salt Minions
		-Formulas that are applied to each system are determined by the targets 
		>that are specified in the Top file.
	structure:
		1. specify the target(s):
			start by grouping formulas based on targets
				formula 1 and 2 should be applied to all Minions
				formula 3 should be applied to minions tha are web servers
				formula 4 and 4 should be applied to the db server
		2. specify which formula to apply to the target(s)

	steps:
		1. create/edit text file [master location]/salt/top.sls
		2. add the following to the file
			base:
			  '*':
			    - common
			    - nettools
		3. login to master and apply the top file
			salt '*' state.apply

}
salt vagrant troubleshoot {
	slaves dont respond to master
		If you dont see all of your Salt Minions respond, 
		well that is what happens when you set things up manually. 
		You probably typed something wrong, didnt accept some keys, or forgot to add a space 
		somewhere (#soml). After your Salt Minions are all responding, 
		continue to the next section to put SaltStack to work
}