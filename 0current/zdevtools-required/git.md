<https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History>
<https://medium.com/@patrickporto/4-branching-workflows-for-git-30d0aaee7bf>

# TLDR

long list of git

## LINKS

- github actions/workflows

  - [github actions docs](https://docs.github.com/en/actions)
  - [github runners](https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners)
  - [github example node ci build test](https://github.com/actions/starter-workflows/blob/main/ci/node.js.yml)
  - [events that trigger workflows](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows)

- refrence

  - [environment vars](https://git-scm.com/book/en/v2/Git-Internals-Environment-Variables)
  - [git flight rules](https://github.com/k88hudson/git-flight-rules/blob/master/README.md)
  - [git town cli plugin](https://www.git-town.com/)
  - [issues with git flow](https://scottchacon.com/2011/08/31/github-flow.html)
  - [git feature branch workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow)
  - [bitbucket git tutorials landing page](https://www.atlassian.com/git/tutorials)
  - [git workflow comparison](https://www.atlassian.com/git/tutorials/comparing-workflows)
  - [git getting started](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)
  - [git config](https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration)
  - [git book](https://git-scm.com/book/en/v2)
  - [installing git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  - [first time setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)

- copypasta

  - [gitignore files](https://github.com/github/gitignore)
  - [rebasing](https://stackoverflow.com/questions/41464752/git-rebase-interactive-the-last-n-commits)
  - [deleting branches](https://www.freecodecamp.org/news/how-to-delete-a-git-branch-both-locally-and-remotely/)

- repo related cmds
  - [getting a git repository](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)

## Basics

### terminology

- git: i'm always talking about git-scm.com
- three states of git
  - working directory: uncommited changes
    - single checkout of one version of the project; pulled out of the compressed database (the .git directory) and place on disk fo ryou to use/modify
  - staging area: changes you've commited
    - stores information about what will go into your next commit (the index)
  - .git directory: changes pushed to github
    - where git stores the metadata and object database for your project
    - what is copied when you `clone` a repository from another computer

### background

- high level
  - snapshots, not differences: other git systems (e.g. subversion) store data as a set of diffs, git stores data as snapshots
  - nearly every operation is local: many other git systems require network connecion, however git almost doesnt
    - since you have the entire histoyr of the project on your local disk, most operations seem instantaneous
  - integrity: everything in git is checksummed before it is stored; and then only referred to by that checksum
    - i.e. its impossible to change the contents of a file/directory without git knowing about it

## quickies

```sh
  # delete a branch locally & remote
    git branch -d BRANCH_NAME
    git push origin --delete BRANCH_NAME
  # reset SOMEBRANCH to whatever is upstream
    git fetch SOMEBRANCH
    git reset --hard origin/SOMEBRANCH
    git reset --soft HEAD^
    # other options
      git reset --soft HEAD^ # undo commits, but leave staged
      git reset HEAD^ # undo commits & staged, but leave work tree
      git reset --hard HEAD^ # undo everthing

  # other shit
    git config --list
    git config --list --show-origin
    git config --global -e # edit global config in default editor

  # rebasing
    git rebase -i shaOfFirstCommitToRewrite^ # use this and move on
    git rebase -i shaOfLastGoodCOmmitButNotINclude
    git rebase -i HEAD~n
        n === # of commits to rewrite

  # commit diff between two branches
  git log --oneline --graph --decorate --abbrev-commit master..develop

  git status -s # short status
  # [staging][workingtree] FILENAME
  # ?? somefile # untracked
  # A somfile # staged
  #  M somefile # modified in working directory but not yet staged
  # M somefile # modified and staged
  # MM somefile # modified, staged, then modified again

  git diff  # everything unstaged (not added)
  git diff --staged  # everything added, but not staged (commited)

  git commit -a -m 'ur msg' # but be sure you want to add all changed files

  git rm --cached dont/track/this/file/and/remove/from/staging

  git mv prevname newname # better than doing a linux mv

  # debugging
    git ls-files # information about files in the index and working tree
    git cat-file # content/type+size info about repository objects
      -p HEAD:file_or_directory_path
    git log -n 5 #show the recent 5 commits
    git log --since=2016-01-15 #show commits since january 15 2016
    git log --author="noahehall" #all commits by noahehall

  # managing remotes
    git clone <url> <newname>
    git remote -v # check where git push will send the files
    git remote rm origin # disconnect your local dir from the remote repo, e.g. if 4. your changing the remote url
    git remote add origin <url> # add a remote repo to your local dir

```

## configuration

- types
  - system: `/etc/gitconfig` for every user on the system and all repositories
  - user: `~/.gitconfig/` | `~/.config/git/config` for a specific user on the system
    - this is whats modified when using the `--global` option
  - local: `[somerepo]/.git/config` specific to a repository
    - this is whats modified when using the `--local` option

### first time git setup

```sh
 # install
 sudo apt install git-all
 sudo apt install install-info # for debian (e.g. ubuntu), only if installed from source

  git config user.name # see what your username is
 git config --show-origin user.name # see where the value for user.name is coming from


 git config --global user.name "poop"
 git config --global user.email "poop@users.noreply.github.com" # always use the noreply, thank me later
 # ^ set your editor
 git config --global core.editor vscode # or nano, but why arent you using vscode for everything?
 # ^ default branch for new repositories
 git config --global init.defaultBranch develop
 #


 # gpg signature verification for your user
  # in github webconsole, your email will be SOMEID+name@users.noreply.github.com
  # however in gitconfig, you cant use SOMEID, so use name@users.noreply.github.com in gpg
  # as well as in git config --global user.email "name@users.noreply.github.com
  # make sure you sign commits, `git commit -S -m 'poop'
  # ^^^^^^

  # check for existing keys
  gpg --list-secret-keys --keyid-format=long

  # genereate new key
  gpg --full-generate-key
    make sure its 4096 long
    see note about private emails above

  # retrieve the long format
  gpg --list-secret-keys --keyid-format=long

  # get ASCII armor format https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key
  gpg --armor --export GPG_KEY_ID

  # add the above output to your ssh & gpg keys in github console
  # go to settings -> SSH & GPG keys -> Add SSH key

  # associate the key with your github account
  git config --global user.signingkey GPG_KEY_ID

 # setup your .gitignore
  # Blank lines or lines starting with # are ignored.
  # Standard glob patterns work, and will be applied recursively throughout the entire working tree.
  # You can start patterns with a forward slash (/) to avoid recursivity.
  # You can end patterns with a forward slash (/) to specify a directory.
  # You can negate a pattern by starting it with an exclamation point (!).
  # An asterisk (*) matches zero or more characters;
 # [abc] matches any character inside the brackets (in this case a, b, or c);
 # a question mark (?) matches a single character;
 # brackets enclosing characters separated by a hyphen ([0-9]) matches any character between them (in this case 0 through 9).
  # two asterisks to match nested directories; a/**/z would match a/z, a/b/z, a/b/c/z, and so on.
 # examples
 # ignore all .a files
 *.a
 # but do track lib.a, even though you're ignoring .a files above
 !lib.a
 # only ignore the TODO file in the current directory, not subdir/TODO
 /TODO
 # ignore all files in any directory named build
 build/
 # ignore doc/notes.txt, but not doc/server/arch.txt
 doc/*.txt
 # ignore all .pdf files in the doc/ directory and any of its subdirectories
 doc/**/*.pdf


 # enforce nano as your editor, merge & difftool
 git config --global --unset core.editor # reset something to the default
 git config --global diff.tool nano
 git config --global core.editor nano
 git config --global merge.tool nano
```

## TODO

- categorize all below
- anything under this line i wouldnt trust

```sh
sparse clone an existing repo from git to local
git clone --filter=blob:none --no-checkout git/url/to/clone
setup empty dir to later sparse checkout only certain dirs

    git sparse-checkout init --cone
        cd into the ABOVE dir to init it

    git sparse-checkout set paths/to/download

check paths included in sparse-checkout
git sparse-checkout list

only checkout files in root dir
$ git clone --filter=blob:none --sparse <https://github.com/derrickstolee/sparse-checkout-example>

force checking out paths ignoring sparse checkout
e.g. to force checking out a path not matching sparse settings
git checkout --ignore-skip-worktree-bits -- PATHS

<https://stackoverflow.com/questions/6127328/how-can-i-delete-all-git-branches-which-have-been-merged>
git branch --merged | egrep -v "(^\*|dev)" | xargs git branch -d
git remote prune origin
```

## github actions

### links

- [learn github actions](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions)
- [reusing workflows](https://docs.github.com/en/actions/learn-github-actions/reusing-workflows)
- [using workflows](https://docs.github.com/en/actions/using-workflows)
- [events that trigger workflows](https://docs.github.com/en/actions/reference/events-that-trigger-workflows)
- [using jobs](https://docs.github.com/en/actions/using-jobs)
- [creating actions](https://docs.github.com/en/actions/creating-actions)
- [hosting your own runners](https://docs.github.com/en/actions/hosting-your-own-runners)
- [github actions syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)
- [metadata for custom githu actions](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions)
- [finding and customizing github actions](https://docs.github.com/en/actions/learn-github-actions/finding-and-customizing-actions)
- [keeping actions up to date with dependabot](https://docs.github.com/en/code-security/dependabot/working-with-dependabot/keeping-your-actions-up-to-date-with-dependabot)
- [essential github action features](https://docs.github.com/en/actions/learn-github-actions/essential-features-of-github-actions)

### terms

- workflow: triggered in response to an event; a configurable automated process that wil lrun one/more jobs
- jobs: one/more tasks that make up a workflow; each run inside a runner (a VM/container), executed sequentially/parallel
  - a job will execute all its steps on a single runner
  - by defualt jobs are isolated, but you can force dependencies, e.g. to share a build job with a deploy job
- steps: scripts/actions that make up a job
  - executed in the order they appear
  - are dependent on eachother
  - share the VM (and the data)
- action: reusable script to help simplify workflows
- event: a specific activity that triggers a workflow run
- runner: a server that runs your workflows
  - each runner can run a single job at a time

### actions in depth

- see finding and customizing actions link
- continue: https://docs.github.com/en/actions/learn-github-actions/essential-features-of-github-actions

- action sources
  - in your repo
  - in any public repo
  - a published docker container image on docker hub (w00p w00p)

```yml
name: some-workflow-name
on: [list, of, event, triggers]
jobs:
  some-job:
    runs-on: macos-10.15 # has vagrant, which we use to pick our ubuntu version
    steps:
      - uses: actions/checkout@v2 # always use this to checkout the repos code
      - uses: actions/setup-node@v2 # dont use this, we use vagrant
        with:
          node-version: "14"
      - run: npm install -g bats # a cmd, either this or uses (for an action)
```
