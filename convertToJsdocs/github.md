to remove conflicts, be sure everyone knows who is working on what
repository: i.e. a project
readme.md : instructions given to people who read the repository and is the first thing displayed when a person loads the repository
branching:
trunk: the master
branch: multiple people have distinct branches to make their changes
pull requests: pushes your committed changes to github and requests for others to peer review them
merge: merge a branch into the master after your pull request has been approved
github: platform that let’s you host and collaborate on code
git: the version control tool
cmd commands
cd .. #go up 1 directory
cd dirName #go into a folder
cd dirName/dirName
dir / ls #show you the files in the current folder
dir folderName / ls FolderName shows you the files in the folder you specify
mkdir folderName #creates a new folder in your current directory
pwd #print working directory, prints the full path
installing git
install git
initial setup
git config –global user.name yourNAme
git config –global user.email your@email.com
set the editor  Git will use for commit messages
git config –global core.editor subl –w
sublime must be added to you r system path
git init
#initialize the local directory as a git repository
git remote add origin git@github.com:YourUserName/NewRepoName.git
git push – origin master
cd to the local directory you used git init in
creates a repo for the local directory in github
pushes the local directory into github
git commands
git
shows you all the commands
git mv oldFileName.ext newFileName.ext
renames a file
git clone url
#creates a folder in the current dir and copies the repo into it
git init
#initialize the local directory as a git repository
git remote add origin git@github.com:YourUserName/NewRepoName.git
git push – origin master
cd to the local directory you used git init in
creates a repo for the local directory in github
pushes the local directory into github
git status
displays files that are nthe staging area and waiting to be committed
git log
displays a list of yoru commit messages using the log command
# type q to quit the log
git checkout –f
undue changes by having git check out the previous command, the –f is to force overwriting the changes
git checkout –b newBranchName
create a new branch called newBranchName
git branch
displays all of the local branches, and the * next to a branch is the branch you’re on
git add .
adds the files in the current directory  to the staging area to be ‘committed’ at a later date
git add –a
adds all modification sto existing files, or files created using git mv
NEW FILES MUST BE ADDED WITH THE git add . COMMAND
git add filename
adds a specific file to be committed
git commit –m “message”
commit added files to be uploaded to the cloud
always add a message
git push
push committed files in the current dir to the cloud
git pull
retrieves files from the cloud into the current dir
git status
shows you whats different between your clone and the cloud
git branch
shows you the # of branches
git branch branchName
creates a duplicate  branch of the one you’re currently on
git branch –d branchName
deletes branchName
git branch –D branchname
the capital –D will delete branchName even though you haven’t merged in the changes
git checkout branchName
moves you on to branchName
git merge otherBranchName
merges the otherBranchName INTO your current branch, effectively taking any changes in otherBranchName as the ruler of your current branch

git workflow
basic workflow
git pull
pull any and all changes
git add .
add all of your changes
git commit –m “message”
commit your files to be pushed
when you commit without a message
esc :wq

git push
push your changes
git branches
copies of a repository where we can make possibly experimental changes without modifying the parent files
the parent repository is usually the master branch, and we can cretaea a new topic breanch by using checkout with the –b flag

git merging
create a branch
make changes
add changes
commit changes
checkout master
pull master to get any updates
return to your branch
git merge master
merges your branch into the master branch
log into github.com and create a pull request (click the green cycle icon)

heroku
sign up for an heroku account and use it
heroku works with any ruby web platform that uses rack middleware, which provides a standard interface between web frameworks and web servers, including Sinatra, ramaze, camping, and rails
heroku installation
gem install heroku
heroku keys:add
#adds your SSH keys, required so you can use Git to push the sample application repository up to their servers
if you have multiple keys, it will ask you which one you want to use
heroku create –stack cedar
tells heroku to use the latest and greatest version of Heroku, called the Celadon Cedar Stack
creates a new subdomain for our application, available for immediate viewing
$ heroku create --stack cedar
Creating shielded-retreat-4344... done, stack is cedar-10
https://shielded-retreat-4344.herokuapp.com/ | https://git.heroku.com/shielded-retreat-4344.git
Git remote heroku added
heroku git commands
deploy your app to heroku
git push heroku master
if you get error, run these
rm -rf .git
git init
git add .
git commit -am "Reinitialize"
heroku create --stack cedar
git push heroku master
don’t 4get to migrate your database!!!
heroku run rake db:migrate
if you’re app does not load, probably because your using mysql on dev server but in production heroku requires postgres, add the following
group :development do
	gem 'mysql'
end

group :production do
	gem 'pg', '0.18.1'
end
heroku commands
heroku open
opens up your app
heroku rename yourAppsNewName
