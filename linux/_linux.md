# links
	- [make your linux faster](http://www.makeuseof.com/tag/linux-in-overdrive-how-to-get-every-drop-of-performance-out-of-your-system/)
bookmark:
	lynda
		http://www.lynda.com/Mac-OS-X-tutorials/cut-Cutting-select-text-portions/78546/83682-4.html?autoplay=true
		ubuntu desktop
			http://www.lynda.com/Ubuntu-tutorials/Navigating-Unity-Dash/159637/179564-4.html?srchtrk=index%3a1%0alinktypeid%3a2%0aq%3aubuntu%0apage%3a1%0as%3arelevance%0asa%3atrue%0aproducttypeid%3a2
	youtube:
		https://www.youtube.com/watch?v=ls5cGi12kGw&index=14&list=PLtK75qxsQaMLZSo7KL-PmiRarU7hrpnwK
	linux tutorials
		view system info
			http://www.tecmint.com/commands-to-collect-system-and-hardware-information-in-linux/?utm_source=feedburner&utm_medium=email&utm_campaign=Feed%3A+tecmint+%28Tecmint%3A+Linux+Howto%27s+Guide%29

# NEW: need to file
## bash
  - run multiple commands: cm1; cm2; etc
  - 
## ubuntu
	- store web content in /var/www
	- create user, group, and directory for user that will run some daemon application
		+ redis example:
			1. sudo adduser --system --group --no-create-home redis
			2. sudo mkdir /var/lib/redis
			3. sudo chown redis:redis /var/lib/redis
			4. sudo chmod 770 /var/lib/redis
	- [use tmpfs to store files/directories in memory](https://www.howtoforge.com/storing-files-directories-in-memory-with-tmpfs)
		- another link: https://www.howtoforge.com/tutorial/how-to-install-nginx-and-google-pagespeed-on-ubuntu-16-04/
## links
	[linux on mac](http://www.macworld.co.uk/how-to/mac/how-install-linux-on-mac-3637265/):
	  1. use virutalization Software
	    - VirtualBox
	    - parallels (costs)
	    - VMware
	    - Boot Camp
	  2. dual-boot OS X and Linux
	  3. [replace macos](http://www.macworld.co.uk/how-to/mac/how-install-linux-on-mac-3637265/)

need to file
    Add your Node.js start script to the file you edited for port redirection, /etc/rc.local. That will run your Node.js launch script when the system starts.

	add user to sudo group
		adduser USERNAME sudo
	linux notes
			get a folders path:
					click and drag into terminal. dope!

		install on ec2 (centos)
			https://codeforgeek.com/2015/05/setup-node-development-environment-amazon-ec2/
			yum install -y gcc-c++ make
				sudo yum install openssl-devel
			sudo yum install git

			sudo curl --silent --location https://rpm.nodesource.com/setup_5.x | bash -
			sudo yum install -y nodejs
			sudo yum -y install nodejs
			yum groupinstall 'Development Tools'


			location of wkhtmltopdf
				/usr/local/bin/wkhtmltopdf


			find where something is installed
				which wkhtmltopdf

			wkhtmltopdf generates pdf
				currently manual,
			cron grabs pdf every X and sends email

			install xvfb to run wkhtmltopdf from cron
				> Debian.

				I see.  Im changing this to a wishlist bug to make wkhtmltopdf run
				without an X server eventually.  Even if it never happens, this bug
				report can serve as a pointer to the following workaround:

				If you install the "xvfb" package, you can use the xvfb-run script like
				this, without a real X server running:

				  $ xvfb-run wkhtmltopdf ...
			https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=580226


			sudo mount /dev/xvdf /var/www/html/sites/default/files/mount/drupal

			fstab
			device	/location/of/mount	filesystemtype
			/dev/xvdf	/var/www/html/sites/default/files/mount/drupal	ext4	defaults	0	0


			sudo file -s /dev/xvdf


			192.168.137.1
			255.255.255.0

			10.0.1.210


			set the visual editor
				export VISUAL=nano
				crontab -e


			cron
			# 1. Entry: Minute when the process will be started [0-60]
			# 2. Entry: Hour when the process will be started [0-23]
			# 3. Entry: Day of the month when the process will be started [1-28/29/30/31]
			# 4. Entry: Month of the year when the process will be started [1-12]
			# 5. Entry: Weekday when the process will be started [0-6] [0 is Sunday]
			#
			# `all x min = */x`

# VI
## links
	- [basic commands list](https://www.cs.colostate.edu/helpdocs/vi.html)
## basic commands
	- vi filename #open file
	- :q #exit when there are no changes
	- :q! #exit without saving changes
	-	:wq #exit and save
	- `esc` #finish input to current command
## text commands
	- i #insert text at beginning of curser
	- I #insert at beginning of current line
	- esc:%s/replace this text/with this text/
## search for text
	- /text #find text
	- n #find next occurrence
	- N #find prev cocurence
customize your environment
	bash initialization for login
		#only runs on first login
		/etc/profile #default commands all users get
		~/.bash_profile, ~/.bash_login, ~/.profile, ~/.login #personal customizations per user,
		#the first file found will be used
	bash initialization for subshells
		#runs after login, e.g. if you open up multiple shells
		~/.bashrc
		#whats available in bash_profile, is not available in bashrc
	bash logout customizations
		~/.bash_logout #commands that run on user logout
	command aliases
		alias #returns all of your aliases
		alias blah='add this aliased command for this session only'
		echo "alias blah='add this aliased command permentantly com'" >> .bashrc
	source filename
		#Execute commands from a file in the current shell.
		#useful to reload files, eg. .bashrc, without having to login and out of shell
	environment (i.e. shell) variables
		BOOM='pow' #set a temporary variable
		echo 'BOOM="pow"' >> .bashrc #set a permanent variable
		$BOOM #retrieve the value from a variable
		export variables for use in child processes, scripts, programs, etc
			in .bashrc
				in two lines
					BOOM='pow'
					export BOOM
				in one line
					export BOOM='pow'
		you can also set command specific variables and default configuration that each command will always use
			e.g. with history
				export HISTSIZE=10000 #default is 500
				export HISTFILESIZE=1000000
				export HISTTIMEFORMAT='%b %d %I:%M %p ' #using strftime format
				export HISTCONTROL=ignoreboth #ignoredups:ignorespace
					#Unknown:0 dont record the same line multiple times
					#Unknown:20 dont record any line that begins with a space
						#if you enter a command and start the line with the space, the history wont save the command but unix will still run the command
						#useful for hiding sensitive information
				export HISTIGNORE="history:pwd:exit:df:ls:ls:which:whatis:info:whereis:help"
					#ignore specific commands
		customize command prompt
			#the beginning line of text in shell
			PS1="FAME " #the cmd prompt will start with FAME
			PS1="\u " #use your username
				options
					\u : your username
					\s : current SHELL
					\w : current working directory
					\W : basename of current workign directory
					\d : date in weekday month date
					\A : time in 24 hour format HH:MM format
					\t : time in 24-hour HH:MM:SS format
					\@ : time in 12-hour HH:MM am/pm format
					\T : time in 12-hour HH:MM:SS format
					\H : hostname
					\h : hostname up to first "."
					\! : history number of this command
					\$ : when UID is 0 (root), a '#', otherwise a "$"
					\\ : literal backslash
		internal variables:
			http://www.tldp.org/LDP/abs/html/internalvariables.html
			$SHELL #default login shell for the current user
			$HOME #current users home dir
			$PWD # current working directory
			$MACHTYPE # the machine type, e.g. echo $MACHTYPE on your ubuntu = x86_64-pc-linux-gnu
			$HOSTNAME # the systems name, e.g. your ubuntu = ip-172-31-14-20
			$BASH_VERSION # the bash version
			$SECONDS # number of seconds the bash session has been running, or the current script if used within the bash script
			$0 # name of script
			$RANDOM # a random number
	path:
		colon separeted list of file paths
		unix searches each path left to right, until it finds the matching executable
		echo $PATH #list the current path
		PATH=your/paths;/here/colon:separated #change your path for the current session
		PATH="/some/new/path:$PATH" #prepend a new path to your PATH, must use double quotes
		PATH="$PATH:/some/new/path" #append a new path to your path, must use double quotes
	QUICKIES
		add load .bashrc in .bash_profile
			1. edit your .bash_profile
				if [ -f ~/.bashrc ]; then
					source ~/.bashrc
				fi
					#if ~/.bashrc exists, load it
			2. now you should put all of your configurations in .bashrc
kernel: the core operating system
	allocates time and memory to programs
	mac osx uses Mach kernel
shell:
	the outer layer of the OS
	interacts with user, sends requests to kernal
	Mac OSX uses bash shell
pipes and redirection
	background
		standard in: stdin
			keyboard
			locatgion: /dev/stdin
		standard out: stdout
			text terminal
			location: /dev/stdout
		everything process has 3 channels
			standard input: keyboard
				is number 0 | >
			standard output: is output to the shell/network
				is number 1 | 1>
			error output: usually output to the shell
				is number 2 | 2>
			&> # both stdin and stderr
			/dev/null #the abyss that doesnt exist, useful to send output you dont want to save/see
	redirection: file input and output
		> #overwrite
		>> #append
		directing output to a file
			cmd >|>> somefile
				#the output of the command, is put into the file
			sort textfile > somefile.txt
			echo 'some text' > somefile.log
			cat file1.txt file2.txt > concatentedFile.txt
		directing input from a file
			cmd <| somefile
				#the content of the file, becomes the input to the command
			sort < somefile.txt
		combining redirection both input and output
			sort < somefile > sorted.txt
				#sort gets somefile input
				#output of #1 gets saved in sorted.txt
				#input always has to come before output
				#you can only redirect from files
				#to redirect with commands, use pipw
		use /dev/null
			ls -la > /dev/null #run the command, and send output to the abyss
	pipes: use output of one command as input for another command
	    ls | less #list the files in a directory, but view it one page at a time, useful for dirs with a lot of files
		ps aux | less #pipe the running snapshots to less to view it one file at a time
		echo "(3*4)+(11*37)" | bc #pipe expression into calculate
		cat somefile.txt | sort | uniq > uniqs.txt #get a file, sort it, get the unique lines, then save the result to a text file
mail
	/var/spool/mail
	this is where you get user specific logs and other messages
permissions
	file/directory permissions
		d #directory
		-  #file
		@  #alias, is at the end of the permission, does not show on ubuntu
		l #symbolic link, is at the end of permission on ubuntu
	ls -lah
		drwxrwrxwr
		-rwdrwdrwx
	change file/directory ownership
		chown username:groupname file/or/directory #change user & ownership
		chown username file/or/dir #change user owner
		chown :groupname file/or/dir #change group owner
		chown -R username:groupname #change owner and group, and all of the directories content
	change file/directory mode (i.e. permission)
		alpha & octal notation
			r = 4 #read a file
			w = 2 #write a file
			x = 1 #execute (file = run like an exe, dir = searchable)
			  = 0 #remove all permissions
			u = user
			g = group
			o = others
			- = regular file
			d = directory
			l = symbolic link
		see file/dir permissions
			ls -lah /some/path #see permissions
				-UUUGGGOOO
					user, group, others
				-rwxrw-r--
		chmod: change mode (i.e. permission)
			with alpha notation
				chmod ugo=rwx file/or/dir #set all same
				chmod u=rwx, g=rw, o=r file/or/dir #specify each
				chmod ug+w file/or/dir #give user and group write
				chmod o-w file/or/dir #remove write from others
				chmod a+rw file/or/dir #give ugo read and write
			with octal mode
				chmod 777 file/or/dir
				chmod 764 file/or/dir
			options: are permissions applied to the user/group/others
				r = 4
				w = 2
				x = 1
				  = 0 #no permission
				-R #do it recursively
					chmod -R 777
users and groups
	sudo #substitute user and do, switch to any user
		sudo su #switch to root user
		sudo -u username cmd #run cmd as username
		options
			-A, --askpass use a helper program for password prompting
			-b, --background run command in the background
			-C, --close-from=num close all file descriptors >= num
			-E, --preserve-env   preserve user environment when running command
			-e, --edit    edit files instead of running a command
			-g, --group=group    run command as the specified group name or ID
			-H, --set-home   set HOME variable to target user's home dir
			-h, --help    display help message and exit
			-h, --host=host  run command on host (if supported by plugin)
			-i, --login   run login shell as the target user; a command may also be specified
			-K, --remove-timestamp      remove timestamp file completely
			-k, --reset-timestamp       invalidate timestamp file
			-l, --list    list user's privileges or check a specific command; use twice for longer format
			-n, --non-interactive       non-interactive mode, no prompts are used
			-P, --preserve-groups       preserve group vector instead of setting to target's
			-p, --prompt=prompt  use the specified password prompt
			-r, --role=role  create SELinux security context with specified role
			-S, --stdin   read password from standard input
			-s, --shell   run shell as the target user; a command may also be specified
			-t, --type=type  create SELinux security context with specified type
			-U, --other-user=user       in list mode, display privileges for user
			-u, --user=user  run command (or edit file) as specified user name or ID
			-V, --version display version information and exit
			-v, --validate   update user's timestamp without running a command
			-- stop processing command line arguments
		sudoers file
			keeps track of sudo configuration and who can execute the command
			location: /etc/sudoers || /etc/sudoers.d/
			add users to group=admin|sudo and they will be given sudo permissions
				alternatively add them to the sudoers file
		su: change user ID or become root
	users
		users #list all currently logged in users
		who #list of all users and what they are doing
		adduser username
			creates a new user username
		passwd demoserver
			set the password for a user demoserver #you will be prompted to set the password
		usermod -a -G groupName userName
			adds username to groupName
		id username
			prints real & effective user and group IDs, if no username is given, the current user is used
	groups:
		background
			a group is a set of users, each user is always part of atleast one group
		groups #list all groups the current user belongs to
		groups username #list all groups username belongs to
		groupadd www
			#create group www
		usermod -a -G apache ec2-user
			#add a user to a group
		useradd -g apache demoserver
			add a new user demoserver to an existing group apache
		chgrp [options] group file
			#changes group ownership of a file/files
		chgrp -R groupName /path/to/dir
			-R operate on fiels & directories recursively
		chgrp -hR groupName path/to/dir
			-hr are two different options
		groupadd groupName
			creates a new group
		groups username
			check the groups username belongs too

	navigation
		cd / #go to root
		cd users #go to users folder in current dir, relative path
		cd /users #go to uesrs in the root directory, absolute path
		cd ~ #go to home directory
		cd - #go to the previous visited directory

	finding files and directories
		background
			find path expression
		find /blha/blah -name "somefile.txt"
			#find all files named somefile.txt
		find . "*.js"
			* #zero or more characters
		find . "noa?.txt"
			? #any one character
		find . "no[a]h.txt"
			[] #any character in the brackets
		find /some/path -group someGroup -name "*.php"
			#find all php files owned by someGroup
		find /some/path -user usernamehere -name "*.php"
			#find all .php files own by usernamehere

		find what groups a user is in
			groups usernamehere
		find folders
			find * -name "folder name"
		find /in/this/path -name *noah* -and -not -path *hall*
			#find all files containing the name noah, but not contained in the path hall
			#you can have multiple -and - not -path
			#can also use -name, -or,
		find . -type l -ls #find all symbolic links in the current folder
	find and change permissions
		find /var/www/html -type d -exec sudo chmod 2775 {} +
		find /var/www/html -type f -exec sudo chmod 0664 {} +
		find/path/to/dir -type d exec chmod 2775 {} \;
		find/path/to/dir -type f -exec chmod ug+rw {} \;
			make groupName owner of the path
			modify the permissions groupName has on the path
			make sure new directories are owned by group
			make sure new files are owned by group
	moving/renaming files & directories
		mv thisfile /to/this/dir
		mv this file ..
		mv thisdir /inside/this/dir
		mv thisFile /inside/this/dir/and/rename/it/tothisfile2

		options
			-n #do not overwrite anything that already exists
			-f #force overwriting to happen, this is the default
			-i #ask if you should overwrite per file/directory
			-v #show whats happening
	coping/renaming files/directories
		cp copy/this/file /as/this/file
		same as mv
		notes
			for directories you have to use -R
		options
			-n #do not overwrite anything that already exists
			-f #force overwriting to happen, this is the default
			-i #ask if you should overwrite per file/directory
			-v #show whats happening
			-R #recusive copy, required for directories
	deleting files/directories
		rm filename
		rm -R directory #removes the dir and everything inside of it
		rmdir directory #only removes empty directories
			options
				-R recursive delete
	Hard Links
		ln /file/you/want/to/link create/link/here
			#makes a reference to a file in the filesystem
			#does not break if the file is moved
			#if either file is deleted, the other will still exist with all of the data
	symbolic links
		ln -s file/you/want/to/link.txt /some/random/path/nameoflink
			#creates a reference to the file or directory path
			#if the file is moved/deleted, then the symbolic link is broken
			#give the symbolic link a descriptive name, or a name required by another program,
	stat filename
		check the modified date
	directories
		/root
		/bin binaries, programs
			command binaries (Grep, cd, awk, etc.)
			is a symbolic link to /usr/bin
				i.e. all the files in /bin are actually in
				> /usr/bin
		/boot : boot loader, kernel, grub, this is what allows the system to boot up
		/sbin system binaries, system programs
		/dev devices:
		/dev : system devices hard drives, keyboard, mouse, etc.
			/dev/null :
			/dev/random : random # generator
			/dev/u/random : random # generator
			/dev/sda : serial/system disk a slice/partition 1
		/etc : system configuration files
			/etc/php.ini #php configuration file
			/etc/sysconfig
				/etc/sysconfig/selinux #file that controls selinux
			/etc/hostname #file where you can set the hostname
			/etc/hosts #the systems hosts file
			/etc/ssh/sshd_config #ssh configuration file
			/etc/httpd/conf/httpd.conf #apache configuration file
		/home user home directories
			keeps each users home files separete from each other
			acts as the default landing spot for non root users
		/lib libraries of code
		/tmp temporary files
		/var variable files, mostly files the system uses
			/var/log #app and system logs
		/usr user programs, tools and libraries (not files)
			/usr/bin
			/usr/etc
			/usr/lib
			/usr/local
			locations: cc blah
		/media : mount point for removable media
			/media/mnt : where the system mounts temporary media
		/opt : space for third-party software packages
		/home : user home directories
		/lib : library files for system binaries
		/proc : system and process information
		/run : information about runnig proccess
		/root : root user home folder
		/sbin : system binaries
		/srv : files for various services
		/sys : similar to /proc, but in a different format
		/.ssh : ssh related information
			/known_hosts : contains the cryptographic key of all
			>hosts youve connected to,

		listing directory content
			ls -laxoh dirname
			options
				-l #print the owner of each file as well
				-F #print the extension, or / if a directory
				-R #also print subdirectories
				-a #list hidden files as well
				-laxo #list files with permissions, show hidden files,
				../ #list contents of the parent directory
				*/ #list the contents of all subdirectories
				ls / #list the root directory

		creating directories
			mkdir dirname
				p #make parents if necessary
				v #verbose, print what happens

		remove a directory
			rmdir dirname #empty directory
			rm -rf dirname #directory with contents
				r = recursively
				f = force
	files
		file name
			max 255 chars
			avoid all symbols except hyphens and underscores and periods
			stick to lowercase
			always use file extensions (though not required)
		creating files
			touch filename.blah #create an empty file
			touch /some/path/some_file.txt
			touch new_file1.txt newfileX.txt
				#can create multiple mepty files

		removing files
			rm filename.txt

		reading/viewing files
			reading: i.e. output text to the screen
				useful for redirecting the content to other commands / programs
			cat filename
				#dumps everything on the screen
			cat file1 file2
				#concatenate two files
			more filename
				#paginated output
				#spacebar - move forward
			less filename
				#paginated output
				#f -go forward
				#b -go back
				#q - quit
			head filename
				#read the top X lines of a file
			tail filename
				#read the bottom X lines of a file
				-f #print the tail of the file whenever it changes, great for checking loggin files, and print out new edits

			adding text to files
				echo "overwrite file contents with this text" > text_file.txt
				echo "append this text to file" >> text_file.txt
				echo "create file, or replace existing contents in file" /some/path/text_file.txt

			moving files
				mv from/here/blah.txt to/this/blah.txt
				scp -r root@opusdeli.deli.net:/var/www/vhosts/deli.net/stats.deli.net ./C:\test "C:\test"
					from remote to local

			renaming files
				mv originalname newname

			copy files
				cp this/file.txt as/this/file.txt
				cp -avr /directory/or/file /new/directory/or/file
			whereis filename
				#locates the directory of the file
processes #any application/shell command/etc running on linux
	background
		background processes
		long running processes
		options can be used with or without -, but what they return can be different, this is due to backwards compatibility issues from the creators
	components:
		address space: the physical memory address the process
		>uses
		kernal data structure: the kernal keeps track of:
			1. who owns
			2. what priority it runs at
			3. what other process started it
			4. what files/networking ports it is using
			5. what signal mass it is using
		ID: each process has an id, called PID
			1: init, the parent of all processes
				runns through all the process scripts
	how processes are created
		gets the next process id
	details in process usage
		user: user
		PID: process ID
		%CPU: cpu being used
		$MEM: memory being used
		VSZ: virtual memory used
		TT: if its a terminal processes, shows ID
		STAT: status
		STARTED: when it was STARTED
		TIME: time its been running
		COMMAND: path to the command executable
		RSIZE: ram being used
	commands
		monitoring processes
			top #shows a live list all the processes
				default sort is process ID
				it is interactive, you change the configuration while its running
				-n 10 #show top 10, can be whatever
				-o cpu #set the sort order
				-O #print field names that can be used for sorting
				-d 3 #delay between screen updates in seconds
				-U username #only show processes by username
				? #press ? while top is running to see configuration options
			ps #process status
				by default only shows proccesses that are not background processes and are owned by the current user
				-a #owned by all users
				-u #show user that owns the process
				-x #show background processes
		stopping processes
			1. get the process ID by running top or ps aux
			kill -9 PID
				#kill PID, using option -9 to force it

		httpd -M
		quickies
			ps aux pipe grep processname
				shows you information about the process
				shows which modules are shared/built-in
			ps aux | grep apache
			ps -ef | grep httpd | grep -v grep
				#displays the user apache is running as
				#both do the same thing
				#can also be determined by the user & group directives inside apaches configuration file
			ps aux #snapshot list all of the processes that are running
cron
	crontab -e
		#opens the cron file to make edits, its just a document
	i
	***** php -f pathToExecution >> pathToLog #appending
	***** pathto > pathtolog #overwrite

	less pathtofile
		#show contents of file in cmd
		ctrl -v
		ctrl -d


	esc : q !
		#quit with no changes saved
	esc : w
		#save current changes made
	esc : q
		#quit
	esc : wq
		#save changes made


	crontab -l #shows you all the crons
		#takes you to the cron file so you can view
		#this is like ls -l

	export VISUAL=nano #open cron file in nano
ssh
	ssh username@hostname
		it will then ask you for password
repos
	apt-get
		apt-get starts everything, e.g. apt-get update
			update #find what the latest version are
			dist-upgrade #upgrade the distribution
			upgrade #download the latest versions
				upgrades everything installed through apt-get
			install softwarename
			remove softwarename
		apt-cache search searchterm
			#SEACH FOR SOFTWARE
		apt-cache show package_name
	YUM
		Yellowdog Updater, Modified (yum)
		RPM: redhat package manager
			yum uses it

		good packages:
			wget: install packages from the web


		commands:
			yum install packagename1 packagename2
				you can list as many packages as you want
			yum remove packagename
				removes a package
			yum search packagename
				searches for the package name
			yum info packagename
				information about a package
			yum update
				update all packages
			yum update packagename
				update a specific package
			yum check-update
				lists which packages can be updated
			yum list term
				searches for all packages in the repo by name that match
				>the term, and if they are installed or not
			yum grouplist
				shows you witch packae groups are available
			yum groupinfo "group name"
				shows you info about a group
			yum groupinstall "group name" optional1 optional2
				isntalls a group and any optional packages
			yum groupremove "group name" optional1 optional2
				remoes a group and any optional packages
			yum groupupdate "group name"
				updates a group
	installing packaes from other sources
		installing RPMForge
			https://wiki.centos.org/AdditionalResources/Repositories/RPMForge
		list of all packages
			http://pkgs.repoforge.org/

		1. go to the RPMForge website and find the repo for your system
		2. 'use' wget to download it
		3. import the public key via the code on the link
				e.g. rpm --import http://apt.sw.be/RPM-GPG-KEY.dag.txt
		4. verify #2 with the key from #3
		5. install the rpm you downloaded
		6. 'use' yum to download packages from the repo as normal

		installing EPEL
			http://www.tecmint.com/how-to-enable-epel-repository-for-rhel-centos-6-5/

		installing pip
			sudo apt-get install -y python-pip
			sudo pip install awscli
text editors
	nano
		commands
			where ever you see ^ means to 'use' the ctrl key
		^G nano help

		navigation
			^A move to beginning of line
			^E move to end of line
			^Y move up a page
			^V move down a page
			^W search for some text
			^_ move to a specific line

		creating
			nano filename.txt
			nano /directory/filename.txt

		opening
			nano -v somefile #read only
			nano -w somefile #no word wrap, good for opening .conf files

		editing
			^D delete character currently under the cursor
			backspace delete charcter currently in frontof hte cursor
			^K delete th entire line
			^\ search for and replace  string of characters

		saving and exiting
			^O save contents without exiting (you will be prompted for a file to save to)
			^X exit  (you'll be prompted to save your file if you haven't)
			^T when saving a file, opens a browser that allows you to select a file nam efrom a list of files and directories

	VIM similar to NANo
		vim filename #creates/edit file
		esc shift ZZ
			saves & exits the file
		esc:q #exit no save
		esc:!q #force exit
		i #enter insert mode
		esc #leaves insert mode
text files
	must only contain TEXT, without formatting information (e.g. word docs)
	wd filename #displays the number of lines, words, and characters
		word count: text separated by space
		lines: delimited by new lines
	sort FILENAME #displays (but not change) FILENAME sorted by line
		-f #ignore case
		-r #reverse sort
		-u #sort and only show unique
	uniq FILENAME #de-dupe repeated lines
		by default only de-dupes repeated lines that are next to eachother
		-d #shows which lines are repeated
		-u #show unique lines
strings
    grep regexp file #search through file and return each line where regexp validates

    options
        --color=auto
        -i #case insensitive regexp
        -E #use a regular expresion
	here documents
	    <<- blooperscooper
	        this is a
	        multiline
	        string
	    blooperscooper
	        #blooperscooper = specifies start and stop of multiline string
	        #<<- = strip out leading tabs, this is good to formatting
	        #<< = dont specify any options in heredoc
	    cat <<- blooperscooper > somefile.log
	            this is a
	            multiline
	            string
	    blooperscooper
	        #saves the output of cat, to somefile.log, basically just saves the heredoc to somefile.log
utility programs
	cal #calendar
		cal #gets te current months calculator
		cal MM YYYY #get the calendar for a month and year
		cal -y YYYY #get the calendar for a year
	ncal #calendar, different format than cal
	bc #full calculator
		launches an interactive calculator
		type in math and press enter
		scale=10 #how many decimal places to show results
		quit #exit the program
	expr #simple math expression evalutor
		expr 1 + 1 #requires spaces
		expr 5 \* 2 #requires escaping because * has special meaning on the command line
	units #unit conversion
		you have: 1 foot #say what you have
		you want: meters #enter what you want
		* = the conversion
		/ = if you wnat to go the other way
		units: foot, inch, centimeters, gallons, liters, furlongs, miles, degF (degrees fenheirght), degC (degrees celius)
		ctrl c quit th eprogram
		alternate syntax
			units '1 foot' 'quarts' #displays the conversion without interactive mode
command history
	is stored in your home dir
		cd ~
	.bash_history #your previous commands
		#is only updated when bash quits
	history #full list of of previous and current session bash commands
		-d 1234 #delete command with id 1234 from history
		-c #delete your command history
	!234 #execute the command with ID 234 from history
	!-2 #execute the previous second command
	!blop #execute the most recent command in history that starts with blop
	!! #redo the last commadn
	sudo !! #redo the last command as sudo
	cmd !$ #runs the same command with the previous arguments, you can add additional arguments
GREP : global regular expressions
	searching inside of of single files for lines with matching text
		grep EXPRESSION filename #case sensitive
		grep -i EXPRESSION filename #case insensitive
		grep -iw EXPRESSION filename #case insensitive match on whole words
		grep EXPRESSION *filename #only grep files that have filename in their name
		cat somefile | grep noah #search the output of cat for noah
		ps aux | grep mongo #search the output of ps aux for mongo
		history | grep ls #search history for all commands that contain ls
		grep flags
			-E #use the extended regexp version, you probably always want to use this
			-i #case insensitive
			-w #whole words
			-v #lines that dont match
			-n #display line numbers
			-c #count lines of matching text
			-R #recursively grep, must be used to grep entire directories
			-h #dont display the file names, but only the liens
			-l #only display the file names, but not the lines
			-L #display files that match
			--color #color the matching text
			--color-auto #color the matching text if its showing it on the terminal, but not on pipe/file
		with regular expressions
			grep 'some regular expression' file|dir
			grep 'n.ah' somefile
			grep '^n' somefile
			grep 'sometextatend$' somefile
			echo 'some string to test regexp' | grep 'your regex'
			echo 'SoMe UppER CASE' | grep '[[:upper:]]' #need to enclose in quotes and double brackets
			symbols
				. #any single character
				* #preceding character can match 0/more times
				+ #preceding character can match 1/more times
				? #preceding character can match 0/1 times
				(jpg|png|gif) #or operator
				^ #start of line, must be outside of []
				$ #end of line
				\ #escape the next character and use it as a literal
				\d #any digit
				\D #anything not a digit
				\w #any word, alphanumeric + underscore
				\W #anything not a word
				\s #whitespace, space, tab, and linebreak
				\S #anything not whitespace
				character classes
					[abc] #only characters included, must be inside []
					[^abc] #any character not included, must be inside []
					[A-z] #range from A-z
						[A-za-z0-9]
				character sets
					[:alpha:] #alphabetic characters
					[:digit:] #numeric characters
					[:alnum:] #alpha numeric
					[:lower:] #lower case alphabetic characters
					[:upper:] #upper-case alphabetic characters
					[:punct:] #punctuation characters
tr : translate
	background
		is case sensitive
		it does not translate WORDS, it translates characters
		use sed to replace words
	tr 'search for this' 'replace each with this'
	echo 'a,b,c' | tr ',' '-' #replace each comma with a -
	echo '142365213' | tr '123456' 'EBGDAE'
		#replace each 1 with E, each 2 with B, etc.
		#it will replace each occurence, based on the position in the search string and the position in the replacement string
	echo 'THIS WILL BECOME LOWER CASE' | tr 'A-Z' 'a-z' #lower case each letter
	echo 'boom bam digity' | tr 'oa' 'z' #replace all o and a with z
	tr 'A-Z' 'a-z' < sometextfile.txt #lower case all letters in the file
	tr '[:upper:]' '[:lower:]' < sometextfile.txt #same as the above
	tr ',' '\t' < somefile.csv #convert a csv to a tsv
	echo 'abc123abc123' | tr -d [:digit:] #becomes abcabc
	echo 'abc123abc123' | tr -dc [:digit:] #becomes 123123
	echo 'aaa111aaa111' | tr -s [:digit:] #becomes aaa1aaa1
	echo 'aaa111aaa111' | tr -sc [:digit:] #becomes a111a111
	echo 'abc123abc123' | tr -ds [:digit:] [:alpha:] #becomes abcabc
	echo 'abc123abc123' | tr -ds [:digit:] [:alpha:] #becomes abcabc
	options
		-d #delete characters in listed set
		-s #Squeeze (dedupe) repeats in listed set, turs xxx into x
		-c #use complementary (i.e not in) set, use with -d and -s
		-dc #delete characters not listed in set
		-sc #Squeeze (dedupe) characters not in listed set
sed : stream editor
	background
		modifies a stream of input before passing it on to the input
		great for substitution
		replaces entire strings, not characters
			use tr to replace characters
		anything you can find with grep, you can change with sed
		a stream is a single line of text
			in a file, each line is a separate stream
	sed 's/a/b/'
		s #substitution mode
		a #find this text
		b #replace it with this text
		/ delimiter, to separate the three above arguments, can be anything, you should make sure your delimiter is not in your search string
	echo 'upstream' | sed 's/up/down/' #find and replace the first occurence => downstream
	echo 'up up up down' | sed 's/up/down/g' #find and replace ALL occurences => down down down
	sed 's/findthis/replacewiththis/' somefile.txt #send a file to send, no need to pipe
	sed 's/find/replacewiththis/' somefile.txt > savedfile.txt #find and replace, and then save the result to a file
	sed 's/<>//g' somefile #delete <> from somefile
	sed 's/<[^<>]+>//g' somefile #delete html tags from somefile
	sed -E 's/(...)time/\1light/g' #capture (...) and save it to back reference \1, then reuse it
		#daytime > daylight
		#nighttime > nightlight
	sed -E 's/(pear|plum|apple)/\1 tree/' #convert pear > pear tree, plum > plum tree, apple > apple tree using back references
	echo 'boom bam digity yo' | sed -e 's/boom/zoom/' -e 's/bam/zam/' #repla
	echo "who needs vowels?" | sed 's/[aeiou]/_/g' #replace all vowels with underscores

	options
		-e #edit - allow multiple replacements all prepended with -e
		-E #use extended regexp
		/g #global find and replace
cut: cutting select text portions
	cut -c 2-10 filename #cut characters 2-10 from each line in the file
	cut -c 2-10,31-35 filename #cut characters 2-10, and characters 31-35 from each line in filename
	options
		-c #cut characters
		-b #bytes
		-f #fields
commands
	background
		all commands are just files that are executable
		most of the commands are in /bin
			echo 'blah'
			/bin/echo 'blah'
	command options arguments
		command: always a single word
		options: modifies the command
		arguments: the thing the command uses to do what it does
	common command options
		-v, --version
		-help
	exiting running programs/commmands
		q, x, ctrl q, ctrl x, ctrl c, ESC
			#one of these usually work
	run multiple commands back to back
		cmd 1; cmd2; cmd3
	examples
		ls -l -a -h Desktop
		ls -lah Desktop
			#both do the same thing
		echo hello; echo world
			#issues two commands, in order
		echo hell && echo world
			#issues two commands, in order
	Help commands
		man COMMAND: #get help
			when viewing documentation
				f - go forward 1 page
				b - go back 1 page
				q - quit
		help COMMAND
			list help information for a command
		apropos KEYWORD #get information about application/commands that match the keyword
		whereis COMMAND #whats the location and all links
		which COMMAND #current version
		whatis COMMAND #one liner of what it does
	file system commands
		pwd,ls,cd #check files/directions section above
	system information
		date #get the systems dates
		uptime #how long the system has been running
		uname #system name
			uname -mnrsvp #a lot of system information
			uname -ap #same as above
		hostname #host name
		domainname #domain name
	disk (harddrive) information
		df #all of the harddrives attached
			-h #humanize, actual amount of data
			-H #base 10, as used by manufacters, and is exagerated
		du PATH #disk usage for a path and all of its children dirs
			-h #humanize
			-a #include files
			-d 1 #depth, how deep to go, rolls up any children dir info
				#du -hd1
	ls
		ls *.txt #only display text files

	echo
		echo $BASH_VERSION #check bash version
		echo #print some text or cmd output to screen
	    echo this text
	        #prints this text
	    echo this text (boom)
	        #error special characters must be scaped with \
	    echo 'this text with $variable'
	        #variable does not get processed, dont put variables in single quotes
	    echo "this text with $variable"
	        #works as expected, use double quotes for interpolation
	    echo #echo with nothing after it creates a new line
	    echo #makes a new line
	    echo "some text" > file.txt #set the ocntents of file.txt to Some text
	    echo "some text" >> file.txt #add some text to the end of file.txt
		    options
		        -e #tells echo you'll be using an escaped string, ignore for now unti you get dope
		        -n #suppress new lines
	df #print storage information
	clear #clear the screen
	AWK: extract things
	    awk {'print $12'} #retrieve the 12th thing for each line in some file, each thing is separated by a spacebar
	        #one two three four five etc. it would print 12

	sed: string manipulation in bash scripts

	cut: slice a line of text
	    cut -d = -f 4 #cut each line of text, delimite 'things' by the equal sign, and return the 4th thing, similar to awk
	ping: ping some ip/domain and check the response time
	    ping blah.com #ping blah.com continuously
	    ping -c 20 blah.com #ping blah.com 20 times (-c = count)
	grep: search through files/command output with regular expressions or
	NANO! awesome text editor
        ctrl o #save
        ctrl x #exit
        ctrl k #cut the current line
    bc : work with floating point numbers
        man bc
    date : work with dates
        man date
    printf: print data with a particular format
        man printf
        can be used anywhere you use echo
        examples
            printf "%s %s %s" "noah" "edward" "hall" #prints noah edward hall
    ftp
        man ftp
expansions
	tilda expansions: for directories
	    ~ : represents the home directory
	    ~- : represents your previous directory
	brace expansions: create a range for use in commands
	    {var1, var2, var3} : run some command for each of the vars
	        touch {this,that,thizz} #creates three files
	    {1..100} : run some command once for each loop
	        touch file_{1..10}
	    {01..100} : run some command once for each loop, and include a 0 in the front, usefull for sorting
	        touch file_{01.100} #file_01, file_02, etc
	    {1..100..2} run some command once for each loop, counting by 2
	        #1,3,5, etc
	    {A..z} #same as above, but for letters
	    {A..z..3} #same as above,
	    examples
	        touch {apple,banana,mango}_{01..20..5}{w..d}
	            #creates files e.g. : apple_06v  apple_16v  banana_06v  banana_16v  mango_06v  mango_16v
	parameter expansion:
	    lengthofstring=${#someStringVar}
	filename expansion:
	    *
	    e.g. rm * #removes all files in current dir
BASH_PROFILE
    export GREP_OPTIONS='--color=auto' #turn on color for grep outpu
QUICKIES
    ls -l | wc -l #get the number of files in a dir
    cp -v thisdir/* tothisdir/* 1> success.txt 2>error.txt #copy files from one dir to another, with -verbose, and save successes to success.txt and errors to error.txt
    ping -c 1 google.com | grep 'bytes from' | cut -d = -f 4 #find out how long it takes to get a return from some server
OTHER
	add nano to windows git bash
		https://coderwall.com/p/ee-law/use-nano-from-git-bash-on-windows-d

quick notes {
	ssh root@localhost -oPort=2222	#login to your vbox from host
	seeing memory usage
		http://www.cyberciti.biz/faq/linux-check-memory-usage/
		free -m -t
	find files larger than 100m
		find / -xdev -type f -size +50M
	get size of current directory
		http://www.codecoffee.com/tipsforlinux/articles/22.html
		du -ch
	find your ip
		ifconfig eth0 | grep inet | awk '{ print $2 }'

	on ubuntu, httpd = apache2

	find the apache user
		(ubuntu)
			less /etc/apache2/apache2.conf
			find the variables for apache
				User ${APACHE_RUN_USER}
				Group ${APACHE_RUN_GROUP}
			lookup the vars in /etc/apache2/envvars
		(centos)
			lsof -i #shows the list of services and their PID/usenames etc
			or you can
				egrep -iw --color=auto '^user|^group' /etc/httpd/conf/httpd.conf
			or you can
				egrep -iw --color=auto 'user|group' /etc/httpd/conf/httpd.conf

	display apache information
		httpd -V
		HTTPD_ROOT and SERVER_CONFIG_FILE is the location of apache2s httpd conf

	check if mod_rewrite is installed
		ls /etc/httpd/modules | grep mod_rewrite
	check if mod_rewrite is enabled
		grep -i LoadModule /etc/httpd/conf/httpd.conf | grep rewrite
		it is enabled if prints
			LoadModule rewrite_module modules/mod_rewrite.so


	permanent aliases
		nano ~/.bash_profile
		alias yourCommand='yourCommandHere'
}


quick actions {
	install lamp
		https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-on-ubuntu

	drupal file permissions
		https://www.drupal.org/node/244924

	install gnome desktop
		yum groupinstall "GNOME Desktop"

	force boot to Desktop on startup
		sudo systemctl set-default graphical.target

	force anything to automatically start
		systemctl daemon-reload
		systemctl enable ENTERNAME.service

	switch to desktop without forcing boot to desktop
		sudo systemctl start graphical.target

	increase VirtualBox partition size
		only do on dynamic partition
		vboxmanage modifyhd "C:\Users\Noah Hall\VirtualBox VMs\centos7base\Snapshots\{3e8b1da8-3bbd-4ea3-853f-6d314f4a941c}.vdi" --resize SIZEINMB
		xfs_growfs /dev/mapper/centos-root

	fix vboxsf mount issue
		cd /opt/VBoxGuestAdditions-*/init
		sudo ./vboxadd setup

		if that doesnt work, try to run
			modprobe -a vboxguest vboxsf vboxvideo
			it might give an error about vboxvideo, but just try to mount again

	install google chrome on centos 7 (chrom cannot be run as root)
		step 1: copy>paste all lines
			cat << EOF > /etc/yum.repos.d/google-chrome.repo
			[google-chrome]
			name=google-chrome - $basearch
			baseurl=http://dl.google.com/linux/chrome/rpm/stable/$basearch
			enabled=1
			gpgcheck=1
			gpgkey=https://dl-ssl.google.com/linux/linux_signing_key.pub
			EOF

		step 2: install chrome
			yum install google-chrome-stable


	setup virtual hosts centos 7
		https://lecturesnippets.com/lesson/creating-virtual-hosts-in-apache-centos-7-minimal/

	create database
		mysqladmin -u mysql_username -p create instance_name
	import sql into database
		mysql -u mysql_username database_name -p < instance_name-YYYYMMDDHHmm.sql

}

quick locations {
	yum repos dir: /etc/yum.repos.d/

}
need filing {
	RDP shows black screen after login
	issue: two comps arguing over screen resolution
	1. click on the black screeen in remote desktop
	2. press ctrl alt end (on the right hand of the keyboard)
	3. select log off
	4. log back in
	5. start a new RDP client and click SHOW options link
	6. set a resolution to something low

	installing pip
	sudo apt-get install -y python-pip
}






    ec2:
    /etc/apache2/sites-available

    magnifi cert:
    	certificatefile = star_magnifi_fm.crt
    	certatficatekeyfile = pkey.key
    	certificatechainfile = amazoncertfile.crt



services
	sudo service httpd restart
		#restarts the apache server
		#start starts the apache server
		#stop stops the apache server








server locations
	/etc/httpd/conf/httpd.conf
		this is apache, you can see all of the settings apache uses
	/etc/httpd/conf.d/
	/etc/httpd/conf/httpd.conf

virtualbox
	centos as a guast OS in virtualbox
		1. download iso files you need https://www.centos.org/download/
		2. create new virtual machine
			a. choose linux & red hat for operating system
			b. memory > 768mb
			c. disk > 15gb
		3. settings > storage > ide controller > CD > Choose a virtual CD/DVD
			a. pick the iso you downloaded in step 1
			b. choose any additional settings
		4. start VM and perform a grpahical install
		5. rebote and perform firstboot configuration

	mount a shared folder
		mount -t vboxsf yourfoldername /where/you/want/to/mount/it

	setup networking
		machine > settings > network > 'use' bridged networking

	install guest additions
		/etc/init.d/vboxadd  setup

apache
	check if apache is running
		service httpd status

	find your ip address
		ip a | grep net
		ifconfig #this is for linux
		ipconfig #this is for windows

Linux Lynda: centOS  {
	http://www.lynda.com/CentOS-tutorials/Configuring-networking-using-DHCP/159633/188230-4.html

	locations:
	linux filesystem {
		FHS: Filesystem HIerarchy Standard
			describes locations, permissions, file names
			most used unix-like file system

	}

	networking using DHCP {
		DHCP is a dynamic IP address that can change on reboot
		check if you have internet connectivity
			ping some.random.ip
				ping 8.8.8.8

				it will return a # of bytes (if success)
				or 'unreachable' if not (might be do to firewall)

			ctrl c
				quit the ping and receive summary
		network configuration files
			/etc/sysconfig/network-scripts
				has a file for each interface

				ifcfg-enXXXX #network configuration file
					this is an ethernet interface file, edit it

					type = should be "Ethernet"
					BOOTPROTO = should be "dhcp"
					ONBOOT = should be "yes"
	}

	using a static IP address {
		find your installed ethernet cards
			nmcli d
		open network manager
			nmtui

		manually install host only network adapter for virtualbox
			https://ftanada.wordpress.com/2014/03/17/virtualbox-host-only-ethernet-adapter-not-working-in-windows-8-1/

		static IP address does not change
		ways to do it
			1. setup a DHCP reservation using the MAC adddress
			2. set a static IP explicityly on the server

		using #2
			1. edit your network configuration file
				cd /etc/sysconfig/network-scripts/
				nano ifcfg-eno1
					it could be ifcfg-enp0s3
			2. change your BOOTPROTO from dhcp to static
			3. ensure ONBOOT is set to yes
			4. add:
				IPADDR=192.168.1.201
				the IPADDR should be outside your networks DHCP range
				NETMASK=255.255.255.0
				GATEWAY=enter the IP address of your router
					open cmd, ipconfig
					default gateway = your router ip
				DNS1=8.8.8.8
					#googles public DNS server
					you can add DNS2, DNS3, etc. to various dns servers
			5. restart your network
				service network restart
	}

	setting up the hostname {
		starts out as localhost
			it should be useful and memorable
			must be less than 64 characters

		1. edit file /etc/hostname and specify a new hostname
		2. edit file /etc/hosts and map 1 to the loopback address
		3. restart the system
	}

	connecting remotely with SSH {
		SSH: secure shell, remote command line session
			connect to one computer from another computer
			can 'use' a username & password / crypticagraphic key

		SSH Software:
			mac: comes preinstalled in terminal
			windows: have to usep putt/gitbash


		log in with SSH (mac/gitbash)
			ssh root@ip.add.of.remote

		exit
			exit the ssh session

		connect to a virtual machine via SSH with virtual box
			1. get ip address of virtual machine #ip a
			2. go into settings > network and add port forwarding rule
			3. host ip = 127.0.0.1 #local hosts for your comp
			4. host port = 2222
			5. guest IP = your vbox IP from step 1
			6. guest port = 22 #is the SSH port

		you can now connect to your vbox from your real computer
			ssh root@localhost -oPort=2222
	}

	adding a user with sudo privileges for SSH access {
		1. useradd usernamehere
			create a user
		2. mkdir -p /home/usernamefromstep1/.ssh
			create a home folder + hidden folder for .ssh
		3. ls -lah /home/usernamefromstep1
			confirms everything was successful
		4. passwd usernamefromstep1
			setup a password for the new user
		5. give usernamefromstep1 sudo priviledges
			A. nano /etc/sudoers
				text file that contains users with access to sudo
			B. search for (ALL) and find:
				root    ALL=(ALL)s    ALL
			C. add usernamefromstep1 with the same access as stepb
				usernamefromstep1     ALL=(ALL)     ALL
				the spaces are TABS! be sure to use TAB
	}

	remove roots ability to log in via ssh {
		this should be done AFTER you setup a user with access to sudo

		1. sudo nano /etc/ssh/sshd_config
		2. search for PermitRootLogin
		3. uncomment it if its commented, and set it to no
		4. save the file
		5. restart ssh
			service sshd restart
	}



	transferring files with SFTP {
		sending files from local computer to a server
		sftp: SSH File Transfer Protocol
			requires SSH to be enabled

		1. sftp://username@remoteip.address
			for me I did in filezilla
				1. server: localhost
				2. port: 2222
				3. my userName
				4. my passowrd
	}

	standard access control mechanisms {
		Standard LInux: discretionary access control (DAC)
			users, groups, permissions
		SELinux: Mandatory access control (MAC)
			labels resources for more granular access control
			provides access control secuirty policies for linux
			tags every file and resource for granular security
			sets security contexts on files
			processes inherit permissions from the user who starts it up
			adheres to the principle of Least Privilege

		SELinux states:
			enforcing: enforces SELinux policies
			permissive:	only logs policy exceptions to /var/log/audit/audit_log
			disabled: SELinux doesnt participate in system security

		SELinux policies: only in enforcing & permissive states
			strict: all activity is subject to SELinux
			targeted: only enforced on specific processes:
				e.g. httpd, named, ntpd, snmpd, etc

		SELinux access control levels:
			determines whether an action is permitted

			Type Enforcement: TE
			Role-Based Access Control: RBAC
			Multi-Level Security:MLS

		SELinux locations
			/etc/sysconfig/selinux #file controls selinux

		SELinux commands
			sestatus #see the current status
			ls -Z #shows the security context of the current folder
				unconfined_u:object_r:user_home_t:s0
					unconfined_u: user context
						unconfined = not protected under SELinux
					object_r: role context
					user_home_t: type context
					s0: MLS context (multi-level security)
			ls -Z /some/folder #same thing but for a specific folder
			ps axZ #check the security context for a service
				if a processs type context does not match the type
				>context of the file its trying to access AND there
				>are policies in enforcing the context
				>the service wont be able to access the file
			setenforce 0 #sets enforcing to permissive until reboot
			setenforce 1 #sets enforcing to target until reboot
			chcon #change context of files & folders
				chcon -R -t contexthere /path/to/dir
			setsebool #set the value of a boolean
			aureport --avc #see which services are being denied access to files
	}

	SMB {
		allow a server to store & share files & folders
		http://www.lynda.com/CentOS-tutorials/Sharing-folder-SMB/159633/188248-4.html

	}

	setup a VNC {
		http://www.lynda.com/CentOS-tutorials/Allowing-screen-sharing-access-VNC/159633/188254-4.html

		allow screen sharing so you can log into a server and access its files
		>via a desktop interface
	}

	setting up a desktop: GUI {
		http://www.lynda.com/CentOS-tutorials/Setting-up-desktop-environment/159633/188252-4.html

		GUI: Graphical user environment

		yum groupinstall "GNOME DESKTOP"
	}

	firewalld {
		allow & disallow access to specific ports with specific protocols
		manages security in the context of zones

		firewalld commands
			firewall-cmd --get-zones
				#review the available zones
			firewall-cmd --get-active-zone
				#get the current zone
			firewall-cmd --zone=public --list-all
				#lists all services active in a specific zone
				#any services not listed will be blocked
			firewall-cmd --zone=public --add-port=80/tcp --permanent
				#open up port 80 (web server) permanently in the public zone
			firewall-cmd --zone=public --remove-port=80/tcp --permanent
				#remoe port 80 permanently
			firewall-cmd --zone=public --add-service=http --permanent
				#add the http service to the public zone
				#this includes port 80, and much more
			firewall-cmd --zone=public --remove-service=http --permanent
				#remove http service from the public zone
	}

	apache {
		/etc/httpd/conf/httpd.conf #apache configuration file
			DirectoryIndex index.html index.php index.blahblah
				#apache will use the first file it finds as the default file
	}

	setting up a webserver {
		'use' yum group install
			yum groupinstall "Basic Web Server"

		webroot for apache on centos/redhat
			/var/www/html
	}

	viewing log files {
		cd /var/log #where log files are stored

	}

	NETWORKING COMMANDS {
		ifconfig #check your ip address
		ip a #check your IP address, will be the inet line
		ip addr show #check your ip
		netstat -tnlp #check your ip
	}

	file system commands {
		copy files
			"cp -R /from/dir/* /to/this/dir"
		list files in a folder
			ls -l /some/folder
		find files
			sudo find / -type f -name "*deh*"
			sudo find -iname "*blah*"
	}

	user commands {
		change ownership recursively
		chown -R username:groupname /some/folder/or/file
	}

	SERVICE COMMANDS {
		service network restart #restart your network (internet)
		service httpd restart #restart apache
		service httpd restart #restart ssh
		service firewalld restart

		service httpd start #start the apache webserver
	}

	SYSTEM COMMANDS {
		reboot #restarts the system
		shutdown -r now #restarts the system
		clear #clears the screen
		su usernamehere
			switch user to username
		sudo !! #issue the last command with sudo powers
		uname -a #info about the system, e.g. if its 64bit or 32bit
			32 bit system will show i686 i686 i386 GNU/Linux
			64 bit server shows x86_64 x86_64 x86_64 GNU/Linux.
		uname -i #tells you specifically if its x64 or x32
		uname -r #unknown
		systemd-analyze #shows you how long it took to startup the system
		systemd-analyze blame #shows you all the startup services and the time
		>it takes each to start up
		systemd-analyze plot > blah.svg #plots the services that startup into a
		>graph and saves it in blah.svg, you should export the file to your local
		>comp and view it

		df -h #shows you storage capacity
		top #shows you which services are using which resources
			k processname #kills a process
		top -u username #services being used by username
		man top #shows you help

		yes > /dev/null &
			#write to /dev/null

	}

	dope packages {
		seeker (from rpm), benchmark your harddrive
			yum install seeker

			commands
					sudo seeker /dev/sda
							#benchmark your harddrive
		wget: download files from the web
			yum install wget
			commands
				wget some.random.url
				man wget #list of all commands

		nano: text editor (like vi)
	}

}


ubuntu lamp {
	install apache, mysql, and php
	https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-on-ubuntu-14-04
	1. install apache
		apt-get update
		apt-get upgrade
		apt-get install apache2
	2. install & setup mysql
		apt-get install mysql-server php5-mysql
		mysql_install_db
		mysql_secure_installation
	3. install php
		apt-get install php5 libapache2-mod-php5 php5-mcrypt php5-cli
	4. install php modules

}

ubuntu drupal {
	https://www.drupal.org/requirements/php
	php5-curl php5-gd php5-json php5-imap php5-imagick php5-memcache libssh2-php
}

ubuntu drupal file permissions {
	step 1
		sudo su #become root
		[root@localhost]cd /path_to_drupal_installation
		[root@localhost]chown -R greg:www-data .
		[root@localhost]find . -type d -exec chmod u=rwx,g=rx,o= '{}' \;
		[root@localhost]find . -type f -exec chmod u=rw,g=r,o= '{}' \;
	step 2
		[root@localhost]cd /path_to_drupal_installation/sites
		[root@localhost]find . -type d -name files -exec chmod ug=rwx,o= '{}' \;
		[root@localhost]for d in ./*/files
		do
		find $d -type d -exec chmod ug=rwx,o= '{}' \;
		find $d -type f -exec chmod ug=rw,o= '{}' \;
		done

					#this is because of the comment, ignore*/

	in the end
		site -> 755
		site/default -> 755
		site/default/files -> 775
		site/default/settings.php -> 444

	ctoosl error
		the directory refer to sites/default/files/ctools, not the sites/all/modules/ctools.
		chmod 775 sites/default/files/ctools

	files error
		drupal files folder is in /html/media
			/html/media/private
			/html/media/ctools/css

		find files writable by a user
			sudo -u www-data find . -type f -writable | grep -v sites/default/files

	install pear and send mail
		https://www.drupal.org/node/1108514
			search for: Solution to this problem for Ubuntu users

		sudo apt-get install php-pear
		sudo pear install mail
		sudo pear install Net_SMTP
		sudo pear install Auth_SASL
		sudo pear install mail_mime
		sudo apt-get install postfix

		to rerun the setup and configure ALL options
			dpkg-reconfigure postfix

}
ubuntu .htaccess file {
	https://help.ubuntu.com/community/EnablingUseOfApacheHtaccessFiles
	First Step
	Open file as
	sudo vim /etc/apache2/apache2.conf

	Second Step
	remove comment sign (#) if you find it before this line ( line number 187 approx.)
	AccessFileName .htaccess

	Third Step
	Then find the line where there is
	<Directory /var/www/>
	         Options Indexes FollowSymLinks
	         AllowOverrideNone
	         Require all granted
	</Directory>

	replace "None" with "All"
	AllowOverride All

}

ubuntu ssl {
	activate teh ssl module
		sudo a2enmod ssl
	restart apache
		sudo service apache2 restart
	edit your default-ssl.conf
		add path to cert, key, and chain file
	enable default-ssl.conf
		sudo a2ensite default-ssl.conf


}
ubuntu apps catch-all {
	enable mod_rewrite
		sudo a2enmod rewrite
}

create a new user {
	https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-14-04

	1. $ sudo adduser usernamehere
	2. $ gpasswd -a usernamehere sudo


}

finding stuff {
	find {/path/to/directory/} -type f -size +{50000}k -exec ls -lh {} \; | awk '{ print $9 ": " $5 }'
}

install instructions {
	wkhtmlpdf: https://jaimegris.wordpress.com/2015/03/04/how-to-install-wkhtmltopdf-in-centos-7-0/
		wget https://bitbucket.org/wkhtmltopdf/wkhtmltopdf/downloads/wkhtmltox-0.12.3-dev-79ff51e_linux-generic-amd64.tar.xz
		tar xvf wkhtmltox-0.12.3-dev-79ff51e_linux-generic-amd64.tar.xz
		sudo cp wkhtmltox/bin/* /usr/local/bin/
}

install rpm files {
	download the file
	rpm -Uvh yourRpmFile.rpm
}

http://wiki.bash-hackers.org/
http://tldp.org/
bookmarks:
    http://linuxcommand.org/lc3_lts0040.php #start from beginning

background
    can contain variables, arguments, control flow logic
quick reference
    #this is a comment
    #! this is shebang!
    .sh #all shell scripts end in .sh
    bash somefile.sh #run (interpret) somefile.sh as a bash script
    chmod +x somefile.sh #set somefile.sh as executable, so you can run it without typing bash ./somefile.sh
    variables: super simple! see template
        basic
            thisVAr=boom #no spaces between = sign
            thisVar="some boom" #use double quotes to include spaces in values
            echo "hello this is $thisVar" #interplates thisVar!
        variable attributes
            declare -i someInteger=2 #declare someInteger as an integer
            declare -r ReadOnlyBiotch="You can read, but cant change!"
            other attributes
                -l = lowercase
                -u = uppercase
    command substitution: assign a command to a variable
        d=$(pwd) #now when you do $d, it runs pwd
    arithmetic operations
        operators: ** * + - / % #only works with integers, pipe to bc for floating point numbers
            g=$(echo 1/3 | bc -l)
        increment: ++ --
        incrmeent assignments: ((e+=5)) #can use any of the operators

        wrap an expression in double paranthesis
            ((4 + 2)) #add 4+2
            result=$((4+2)) #add 4+2 and save it to variable result
    comparing values
        [[ expression ]] #returns one or zero
        string operators: > < == >= <= !=
        integer operators: -lt -gt -le -ge -eq -ne
        logic operators: && || !
        null operators:
            [[ -z $somevar ]] #is some var null?
            [[ -n $somevar ]] #is some var NOT Null?
        examples
            [[ "this" == "that" ]] #compare
            echo $? #echo the result
            [[ 2 -lt 5 ]] #compare
            echo $?
    working with strings
        a=noah
        b=Hall
        concatenation
            fullname=$a$b #returns noahhall
        size
            length=${#fullname} #returns the length
        substrings
            sub=${fullname:3} #0-indexed, returns everything starting index 3
            sub=${fullname:3:4} #starts at 3, and returns 4 characters
            sub=${fullname: -4} #get the last 4 characters
            sub=${fullname: -4:3} #get the first 3 letters, of the last 4 letters
        replace text
            c="noah edward hall"
            echo ${c/noah/king} #replaces the first instance of noah with king
            echo ${c//noah/king} #replaces all instances of noah with king
            echo ${c/#noah/king} #only replaces noah if it is at the beginning of the string
            echo ${c/%noah/king} #only replaces noah if it is at the end of the string
    arrays
        indexed arrays
            a=() #empty array
            a[0]="Noah Hall" #set the first element in the array
            a+=("is dope") #add an element to the end of the array
            echo ${a[@]} #print the entire array
            echo ${a[@]: -1} #print the last element in the array
            b=("element 1" "element 2" "element 3") #array with 3 string items
            echo ${b[0]} #echo the first element in the array
        associative arrays
            declare -A myArr
            myArr[firstname]="Noah"
            myArr[lastname]=hall
            myArr["full name"]="Noah Hall"
            echo ${myArr[firstname]} is my first name, but my full name is ${myArr["full name"]}
    loops
        while loops
            while read f; do
                echo $f
            done < file.txt
                #reads file.txt line by line > sets each line to variable f > echos the varia

            i=0
            while [ $i -le 10 ]; do
                echo i:$i
                ((i+=1))
            done
                #echo the value of $i while $i < 10

        until loops
            j=0
            until [[ $j -gt 10 ]]; do
                echo j:$j
                ((j+=1))
            done
                #echo the value of j until j > 10

        for loops
            for i in 1 2 3 4 5; do
                echo i:$i
            done
                #echo the current value of i
                #could use brace expansion, {i..5}

            for (( i = 0; i < 10; i++ )); do
                #alternate syntax
            done

            myArr=("noah" "edward" "hall")
            for i in ${myArr[@]};do
                echo name:$i
            done
                #echo each value in the array

            declare -A myArr
            myArr[first]=Noah
            myArr[last]=Hall
            for i in "${!myArr[@]}"; do
                echo "name:${myArr[$i]}"
            done;
                #loop through an associative array

            for i in $(ls); do
                echo $i
            done
                #loop through the output of ls line by line
    if statements
        a=4
        b=3
        string="Noah Hall"
        expressions
            [ $a -gt $b ]
            [[ $string =~ Noah ]]
            extened regexp examples
                $a =~ [0-9]{4} #four numbers
                $a =~ game|GAME|Game #the word game, with different capitalization
        if expression; then
            do this stuff
        elif expression; then
            do this stuff
        else
            do this stuff
        fi

    case statements
        a=noah
        case $a in
            bob) echo "a=bob!";;
            bill|tom) echo "a is either bill or tom";;
            *) echo "couldnt find because a = $a";;
        esac

    functions
        function yourFunctionName {
            #your commands
            #echo $1 #the first argument called with the function
            #echo $2 #the second, etc.
        }
        yourFunctionName #call the function
        yourFunctionName boom #call the function passing in 1 argument

        function hellaArguments {
            i=1
            for f in $@; do
                echo $i : $f
                ((i++))
            done
        }
        hellaArguments $(ls)

    sending arguments to scripts
        handled same as functions
        each argument sent to the function is available in $1, $2, etc.
        bash myscript.sh noah edward hall
            #noah = $1, edward = $2, etc inside the script
            $# = returns the number of arguments sent to the function
        setup named arguments to pass to script
            while getopts u:p:ab option; do
                case $option in
                    u) user=$OPTARG;;
                    p) pass=$OPTARGG;;
                    a) echo "got the A flag!";;
                    b) echo "got the b flag!";;
                esac
            done
            myscript.sh -u noah -p supersecret
                u:p: specify that u and p flags are required
                ab: specify a and b flags are not required
    getting input from users
        with read
            echo "what is your name"
            read name #pause script to get input, and store result in variable named, and echo it back to the screen so the user can see it
            echo "what is your password"
            read -s pass #get input, but do not echo it back to the screen
            read -p "Whats your favorite animal" animal
                #condensed version of echo && read,
            echo "You have entered"
            echo name: $name, pass: $pass
        with select
            select animal in "cat" "dog" "pig"
            do
                echo "Your selected $animal"
                break
            done
        with select and case
            select option in "cat" "dog" "quit"
            do
                case $option in
                    cat) echo "You like cats";;
                    dog) echo "You like dogs";;
                    quit) break;;
                    *) echo "You dont like animals";;
                esac
            done
        ensuring users input data
            by checking number of variables sent to script
                if [ $# -lt 3 ]; then
                    cat <<- EOM
                        this command requires three arguments: username, userid, and favorite number.
                    EOM
                else
                    #the program goes here
                    echo "Username: $1"
                    echo "UserID: $2"
                    echo "Favorite Number: $3"
                fi
                yourscript.sh blah boom bello
            by using a loop to halt continuation of script until user inputs valid data
                read -p "Favorite animal? " a
                while [[ -z "$a" ]]; do
                    read -p "I need an answer! " a
                done
                echo "$a was selected."
            by providing a default value incase the user wants to skip
                read -p "Favorite animal? [cat] " a
                while [[ -z "$a" ]]; do
                    a="cat"
                done
                echo "$a was selected."
            by validating user input against a regular expression
                read -p "What year? [nnnn] " a
                while [[ ! $a =~ [0-9]{4} ]]; do
                    read -p "A year, please! [nnnn] " a
                done
                echo "Selected: $a"

template
#!/bin/bash
##shebang + path to bash executable
