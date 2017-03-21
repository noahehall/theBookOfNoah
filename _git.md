# change remote
	1. git clone <url> <newname>
	2. git remote -v //check where git push will send the files
	3. git remote rm origin //disconnect your local dir from the remote repo, e.g. if 4. your changing the remote url
	5. git remote add origin <url> //add a remote repo to your local dir

# basics
	- keeps track of changes to files and directories
	- allows you to move back n forth between changes
	- is known as Version Control System (VCS)

# installation
	- git-scm.com

# git architecture: three trees
	- repository: the repo
	- staging index:
		- git add . adds files to the staging directory
		- files in this tree are waiting to be pushed to the repo
	- working:
		- this is where your changes are kept, until its pushed to the staging index and later to the repository

# github pages with [spa-gh-pages](https://github.com/rafrex/spa-github-pages)
	1.  `$ git checkout --orphan gh-pages`
# configuration
``` update below to use markdown
	file locations
		System level
			windows: program files/ git/ etc/ gitconfig
			mac/linux: /etc/gitconfig
		User level config
			unix/mac: ~/.gitconfig
			windows: $home/.gitconfig
		Project level config
			yourProject/.git/config

	updating via CLI
		listing current values
			system level: git config --sytem COMMAND
			user level: git config --global COMMAND
			project level: git config COMMAND
		setting values
			git config --system COMMANd 'new value'
			you can replace --system with the appropriate level
	commands
		user.name, user.email, core.editor (text editor, i like nano), color.ui (set this to true)
setup ssh keys
	give the public key to some app
	key private key....private!

	workflow: check if you have a public and private key
		$ls -al ~/.ssh
			id_rsa.pub == your public key (share this)
			id_rsa === your private key

	workflow: create a new ssh key
		$ssh-keygen -t rsa -b 4096 -C 'yourGitHubEMail'
			say no to everything by clicking enter

	workflow: check if your ssh key agent is running
		$eval "$(ssh-agent -s)"
			should return your ssh-agent pid

	workflow: add your ssh key to your ssh key chain
		$ssh-add ~/.ssh/id_rsa

	workflow: copy your public key into some app
		$less ~/.ssh/id_rsa.pub

	workflow: connect to github
		$ssh -T git@github.com
			if you dont have a github account setup with your ssh key, then it will be denied

setup git auto-completion
	https://github.com/bobthecow/git-flow-completion/wiki/Install-Bash-git-completion

git file structure
	.git : contains all the files git needs to track files
		-if you remove this .git folder, git is no longer tracking this project
	.git/config : project level configuration
		you can edit this directly, or use git commands to set it
	.git/HEAD : references the current HEAD, e.g. refs/heads/master


git commits
	git generates a checksum for each change set (commit)
		-checksum algorirthms convert data into a simple number
		-git uses SHA-1 hash algorithm to create checksums
			40 char hexadecimal string (0-9, a-f)
		-the git commit # is a SHA-1 checksum

git HEAD pointer
	HEAD: references/points to the latest/tip of the current branch in repository
		-when you checkout a branch, youre checking out the HEAD of the branch

git branches

initialize git in a project
	tell git to trakc things in this project

basic workflow
	git add .
		add every change made in this directory to the staging directory
	git commit -m "your message about changes"
		commit the staging directory to the repo
	git push

commands
	which git : shows path of isntalled git
	git --version : shows the version of installed git

	git help : see the help page
		f = forward
		b = back
		q = quit
		git help COMMAND : see the help page for a specific command
	git log #show recent commits
		git log -n 5 #show the recent 5 commits
		git log --since=2016-01-15 #show commits since january 15 2016
		git log --author="noahehall" #all commits by noahehall
	git add
		-git add . #add all files in current dir to the staging index
		-git add filename #add filename to the staging index
	git status #the difference between working, staging index, and master
		-untracked files: if you make changes to these files, git wont track them
	git diff
		-compares files in HEAD with files in working
		--- files are in HEAD
		++++ files are in working
		git diff --staged
			-compare the staging index with the HEAD

generate an ssh key
	ssh-keygen -t rsa -b 4096 -C "imsovru@gmail.com"


GIT COMMANDS

  push a locally created branch to github
    git push --set-upstream origin YourBranchName

	git: configuration
		git config --global user.name “FirstName LastName”
			#sets the user name for the currently logged in user
		git config --global user.email UserEmailAddress
			#sets the global user email for the currently logged in user
	git: view configuration
		git config --global user.name
			#prints the global user for the currently logged in user
		git config --global user.email
			#prints the global user email for the ucrrently logged in user
	git: initialize new repo
		git init #creates files required to be a git
	git: add/stage for a commit
		git add -A
			#add all changes in the working directory
			#including additions and deletions
		git add .
			#add all changes to tracked files
			#add all new files
			#do NOT add deleted files
		git add -u
			#add all changes to tracked files
			#do NOT add new files
			#add all removed files
	git: unstage commit
		git reset HEAD file_name
			#remove specified file from commit
	git: committing changes
		git commit -a filename -m "this message is required"
			#commit all changes to tracked files
		git commit -a -m "this message is required"
			#commit all files changes since last commit
			#does not include NEW files
	git: remove repositories
		git remote add RemoteName https://RemoteName/Proj.git
			#add the remote depository to your config file
			#you can now 'use' the remoteName to fetch/retrieve files from
		git remote show RemoteName
			#prints information about the remote depository
	git: undo commits
		git reset --soft HEAD^
			undo the act of committing, leaving everything else intact
		git reset HEAD^
			undo the act of committing and everything youd staged, but leave the work tree (your files intact):
		git reset --hard HEAD^
			completely undo it, throwing away all uncommitted changes, resetting everything to the previous commit (as the original question asked)

GIT massimo
		cd ~/sites #go into your sites folder on local

		git clone git@github.com:DeliRadio/magnifi-cms.git
			#copies a repo from github to your current dir

		git status #prints files that have changed(if any), and what branc youre on
		git fetch reponame #e.g. drupal, fetches any new data

		git checkout -b branch-name #creates new branch and switches to it
			your branchname should be descriptive of the changes youre making
			git checkout branch-name #e.g. master, switches to branch
			git branch #show all branches
			git branch -m oldbranchname newbranchname

		git add -A #adds all changes AND removes
		git commit -m "your silly message" #commit all changes
		git push -u origin branchname
			#push your local changes to a new branch on remote
			#you must do this everytime you create a new branch

		git push #once you do the original push, you no longer need the -ublah stuff,
			#add changes incrementally, so do git push all the time

		pull requests
			is something you want to merge into another branch (e.g. master)


		get master after merging a pull request
			git checkout master #move back to the master branch
			git pull #updates your master branch with the mster from remote
		git diff branchname #shows you the difference between your current branch & branch name

	upgrade drupal
		git fetch drupal #get the new drupal from remote
		git merge XXX master #merge the tag XXX

	revert to older version after push
		git revert

	view stuff
		git log

git prem
		git checkout master #switch to master
		git pull #pulls the entire branch from remote to local
		git merge insertupdatedbranch #merge local insertupdatedbranch into local master
		git push #push master branch to remote

		 git rm -r --cached .
	 git add .
	 git commit -m 'Removed all files that are in the .gitignore'
	 git push origin master

GIT AWS Code Deploy
	step 1: Setting up AWS Code Deploy
		http://docs.aws.amazon.com/codedeploy/latest/userguide/getting-started-setup.html
	Step 2: Create Service Role
		http://docs.aws.amazon.com/codedeploy/latest/userguide/how-to-create-service-role.html
		summary for service role created on ec2
			role name: cms_CodeDeploy_service
			Role ARN: arn:aws:iam::228582173495:role/cms_CodeDeploy_service
			Instance Profile ARN(s): arn:aws:iam::228582173495:instance-profile/cms_CodeDeploy_service
			Path: /
			Creation Time: 2015-08-06 23:13 PDT

		summary for service role created on local
		{
		    "Role": {
		        "AssumeRolePolicyDocument": {
		            "Version": "2012-10-17",
		            "Statement": [
		                {
		                    "Action": "sts:AssumeRole",
		                    "Principal": {
		                        "Service": [
		                            "codedeploy.amazonaws.com"
		                        ]
		                    },
		                    "Effect": "Allow",
		                    "Sid": ""
		                }
		            ]
		        },
		        "RoleId": "AROAJEC2IPEKKYY4PDBLQ",
		        "CreateDate": "2015-08-07T06:23:26.534Z",
		        "RoleName": "cms_codedeploy",
		        "Path": "/",
		        "Arn": "arn:aws:iam::228582173495:role/cms_codedeploy"
	    	}
    	}
	Step 3: create an amazon instance profile for your ec2 instances
		http://docs.aws.amazon.com/codedeploy/latest/userguide/how-to-create-iam-instance-profile.html
		created policy name:  cms_codedeploy_ec2_permissions
		create the role: here is the summary
			Role Namecms_codedeploy_ec2 Edit Role Name
			Role ARN arn:aws:iam::228582173495:role/cms_codedeploy_ec2
			Trusted Entities The identity provider(s) ec2.amazonaws.com
			Policies arn:aws:iam::228582173495:policy/cms_codedeploy_ec2_permissions
	Step 4: Configure GitHub
		create an account
		create a repo
		add some files (e.g. an app) to the repo

	Step 5: Configure an ec2 instance
		http://docs.aws.amazon.com/codedeploy/latest/userguide/how-to-prepare-instances.html
		the instance has to have a profile attached
			or you will have to create a new one

	step 6: tag the amazon ec2 instance
		key: Name
		value: cmsphp55

	step 7: install the AWS CodeDeploy agent on the amazon ec2 instance
		http://docs.aws.amazon.com/codedeploy/latest/userguide/how-to-run-agent.html
		install codedeploy-agent
			sudo yum update
			sudo yum install ruby
			sudo yum install aws-cli
			cd /home/ec2-user
			aws s3 cp s3://aws-codedeploy-us-east-1/latest/install . --region us-east-1
				bucket name && region name are specific to the location of your instance
				change it for instances in different areas
			chmod +x ./install
			sudo ./install auto

		check the status of codedeploy agent
			sudo service codedeploy-agent status

		start the service (if it is stopped)
			sudo service codedeploy-agent start

		uninstall codedeploy agent
			sudo yum erase codedeploy-agent

	Step 8: create an application with AWS CodeDeploy
		http://docs.aws.amazon.com/codedeploy/latest/userguide/how-to-create-application.html
		application name: corporate_cms
		deployment group name: corporate_cms
		corporate_cms codedeploy application link
			https://console.aws.amazon.com/codedeploy/home?region=us-east-1#/applications/corporate_cms

	step 9: add an appspec file to github
		starter doc: http://docs.aws.amazon.com/codedeploy/latest/userguide/how-to-add-appspec-file.html
		appspec reference: http://docs.aws.amazon.com/codedeploy/latest/userguide/app-spec-ref.html

		permission explanations
			r: read 4
			w: write 2
			x: execute 1
				read,write & execute = 7
				read & write: 6
				read & execute: 5
		permission segments for users

			owners: who created the file
			group membership
			anonymous:

			For files:
				r = read
				w = write
				x = execute
			For directories:
				r = list (read directory contents)
				w = write
				x = can access the directory (i.e., cd to the directory)

		breakdown of ls-l
			drwxr-x---
				d = directory
				- = file (if there is no d, it will start with -)
		recommended permissions
			drupal_admin: the user on the server that administrates Drupal, not necessarily is the root.
			site_admin: the owner of the hosted site (a customer)

			Core modules/themes directories: rwxr-x---
			Core modules/themes files: rw-r-----
			Hosted sites modules/themes directories: rwxr-x---
			Hosted sites modules/themes files: rw-r-----
			Hosted sites "files" directory: rwxrwx---
			Hosted sites files under "files" directories: rw-rw----
			Hosted sites subdirectories under "files" directories: rwxrwx---
	step 9: deploy the application to the instance
		http://docs.aws.amazon.com/codedeploy/latest/userguide/github-integ-tutorial.html#github-integ-tutorial-deploy

		application: corporate_cms
		Deployment Group: corporate_cms
		Revision Type: github
		Respository name: your repo name
		Commit ID: some commit ID
			can be found on:
				https://github.com/username/repo_name/commits/master
			this will be different every time, get the latest merge into master
```
