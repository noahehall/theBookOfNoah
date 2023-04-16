<https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History>
<https://medium.com/@patrickporto/4-branching-workflows-for-git-30d0aaee7bf>
https://stackoverflow.com/questions/38831301/how-to-un-fork-the-github-repository

# TLDR

long list of git

## TODO

- this needs to be updated
  - actions to v3
  - probably redo this entire file
- categorize all below
- anything under this line i wouldnt trust
- find which file has the git flow strategies and put in here
  - https://www.atlassian.com/git/tutorials/comparing-workflows
- review the git town plugin, lol forgot this even existed

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

## LINKS

### interwebs

- [AAA git cheatsheet](https://github.com/k88hudson/git-flight-rules/blob/master/README.md)
- [atlassian git tuts](https://www.atlassian.com/git/tutorials)
- [managing merge conflicts](https://docs.gitlab.com/ee/user/project/merge_requests/conflicts.html)
- [workflow: comparisons](https://www.atlassian.com/git/tutorials/comparing-workflows)
- [workflow: feature branch](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow)
- [semantic release docs](https://semantic-release.gitbook.io/semantic-release/)
- [conventional commits](https://www.conventionalcommits.org)

### git

- [AAA git book](https://git-scm.com/book/en/v2)
- [AAA git first time setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)
- [AAA git intro](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)
- [config](https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration)
- [environment vars](https://git-scm.com/book/en/v2/Git-Internals-Environment-Variables)
- [version control intro](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)
- [git workflow comparison](https://www.atlassian.com/git/tutorials/comparing-workflows)
- [installing git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [issues with git flow](https://scottchacon.com/2011/08/31/github-flow.html)

### tools

- [git town cli plugin](https://www.git-town.com/)
- [git icdiff](https://github.com/jeffkaufman/icdiff)

### copypasta

- [gitignore files](https://github.com/github/gitignore)
- [rebasing](https://stackoverflow.com/questions/41464752/git-rebase-interactive-the-last-n-commits)
- [deleting branches](https://www.freecodecamp.org/news/how-to-delete-a-git-branch-both-locally-and-remotely/)

### github actions

- [actions: automated builds and tests](https://docs.github.com/en/actions/automating-builds-and-tests)
- [actions: basic overview](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions)
- [actions: creating actions + syntax](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions)
- [actions: creating actions with docker](https://docs.github.com/en/actions/creating-actions/creating-a-docker-container-action)
- [actions: features overview](https://docs.github.com/en/actions/learn-github-actions/essential-features-of-github-actions)
- [actions: finding and customizing github actions](https://docs.github.com/en/actions/learn-github-actions/finding-and-customizing-actions)
- [actions: intro](https://docs.github.com/en/actions/creating-actions)
- [actions: nodejs](https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs)
- [actions: security hardening](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#using-third-party-actions)
- [actions: syntax (must read)](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)
- [actions: using dbs and service containers](https://docs.github.com/en/actions/configuring-and-managing-workflows/using-databases-and-service-containers)
- [artifacts: peristing data](https://docs.github.com/en/actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts)
- [cache: intro](https://docs.github.com/en/actions/guides/caching-dependencies-to-speed-up-workflows)
- [dependabot](https://docs.github.com/en/code-security/dependabot/working-with-dependabot/keeping-your-actions-up-to-date-with-dependabot)
- [jobs: intro](https://docs.github.com/en/actions/using-jobs)
- [jobs: intro](https://docs.github.com/en/actions/using-jobs/using-jobs-in-a-workflow)
- [jobs: using a build matrix](https://docs.github.com/en/actions/using-jobs/using-a-build-matrix-for-your-jobs)
- [runners: all hosted runners](https://github.com/actions/virtual-environments)
- [runners: hardware resources](https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners)
- [runners: self hosted](https://docs.github.com/en/actions/hosting-your-own-runners/about-self-hosted-runners)
- [runners: self hosting](https://docs.github.com/en/actions/hosting-your-own-runners)
- [runners: self-hosted labels](https://docs.github.com/en/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners)
- [secrets: intro](https://docs.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)
- [variables: context vars](https://docs.github.com/en/actions/learn-github-actions/contexts)
- [variables: expressions](https://docs.github.com/en/actions/learn-github-actions/expressions)
- [variables: intro](https://docs.github.com/en/actions/configuring-and-managing-workflows/using-environment-variables)
- [variables: must read](https://docs.github.com/en/actions/learn-github-actions/variables)
- [varaibles: default vars](https://docs.github.com/en/actions/learn-github-actions/variables#default-environment-variables)
- [workflows: event triggers](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows)
- [workflows: intro](https://docs.github.com/en/actions/using-workflows)
- [workflows: reusing](https://docs.github.com/en/actions/using-workflows/reusing-workflows)
- [workflows: starter kits](https://github.com/actions/starter-workflows)

### github actions & CD

- [github starter deployment workflows](https://github.com/actions/starter-workflows/tree/main/deployments)
- [about cd with github](https://docs.github.com/en/actions/deployment/about-deployments/about-continuous-deployment)
- [run terraform github action](https://github.com/actions/starter-workflows/blob/main/deployments/terraform.yml)
- [connect to AWS via github action](https://github.com/actions/starter-workflows/blob/main/deployments/aws.yml)
- [security hardening with openid connect](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)
- [deploying with github actions](https://docs.github.com/en/actions/deployment/about-deployments/deploying-with-github-actions)
- [using environments for deployment](https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment)
- [from aws perspective](https://aws.amazon.com/blogs/devops/integrating-with-github-actions-ci-cd-pipeline-to-deploy-a-web-app-to-amazon-ec2/)

## Basics

### terminology

- git: i'm always talking about git-scm.com
- three states of git
  - working directory: uncommited changes
    - single checkout of one version of the project; pulled out of the compressed database (the .git directory) and place on disk for you to use/modify
  - staging area: changes you've commited
    - stores information about what will go into your next commit (the index)
  - .git directory: changes pushed to github
    - where git stores the metadata and object database for your project
    - what is copied when you `clone` a repository from another computer

### background

- high level
  - snapshots, not differences: other git systems (e.g. subversion) store data as a set of diffs, git stores data as snapshots
  - nearly every operation is local: many other git systems require network connecion, however git almost doesnt
    - since you have the entire history of the project on your local disk, most operations seem instantaneous
  - integrity: everything in git is checksummed before it is stored; and then only referred to by that checksum
    - i.e. its impossible to change the contents of a file/directory without git knowing about it

## quickies

```sh
# @see https://www.conventionalcommits.org
## type(scope): description \n bodyMsg \n footerMsg
  Add(whatever): hello world
    this is an example
  Create
  Refactor
  Fix
  Release
  Document
  Modify
  Update
  Remove
  Feat
  Delete etc...
## body...

  Feat(api)!: breaking change
  Feat(api): regular feat related to api
  Feat: regular feat

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

# other stuff
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
 git config --global core.editor nano # or e.g. vscode
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

## merge conflicts

- HEAD: the tip of the source/base branch (e.g. feature)
- theres: the target/base branch, e.g. develop
- strategies
  - merge commit strategy:
    - merge commit created in source branch, but not target branch
    - you can then test the source branch
      - revert merge commit if necessary
      - push to target branch if valid

```sh
git checkout inThisBranch
git rebase addTheseChanges

<<<<<<< HEAD
  head/base/source changes
=======
  target/other changes
>>>>>>>

```

## github

### actions

- continue:
  - https://docs.github.com/en/actions/using-workflows/advanced-workflow-features
    - using a build matrix
  - https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows
    - https://github.com/actions/cache

### terms

- workflow: triggered in response to an event; a configurable automated process that will run one/more jobs
- jobs: one/more tasks that make up a workflow; each run inside a runner (a VM/container), executed sequentially/parallel
  - a job will execute all its steps on a single runner
  - by default jobs are isolated, but you can force dependencies, e.g. to share a build job with a deploy job
- steps: scripts/actions that make up a job
  - executed in the order they appear
  - are dependent on each other
  - share the VM (and the data)
- action: reusable script to help simplify workflows
- event: a specific activity that triggers a workflow run
- runner: a server that runs your workflows
  - each runner can run a single job at a time
- artifacts: files generated in a uses/run cmd that can be shared across jobs in the same workflow
  - all run/uses cmds have write access to that workflows artifacts
- secrets: stored in Github as secrets, then referrenced in your ci yml file

### actions

- see finding and customizing actions link
- action sources
  - in your repo
  - in any public repo
  - a published docker container image on docker hub (w00p w00p)

### jobs

- use `needs` to create a dependency between jobs, dependent jobs run sequentially
  - all dependent jobs are skipped if the `needs` job(s) fails

### environment vars

- by defualt, env vars are scoped to the run/uses block that define them

### artifacts

- enable you to share generated files with other jobs in the same workflow

### secrets

- see yml below

### caches

- once the cache is created, it is available to all workflows in the same repository
- dont store any sensitive info in the cache of public repos
  - especially cmdline programs like `docker login` which store creds in a config file
  - anyone with read access can create a pull request and access the contents of the cache
    - even with forks by making a pull request to the base branch
- cache vs artifacts
  - cache: reuse files that dont change often between jobs
  - artifacts: save files produced by a job to view after a workflow has ended
- access caches
  - a workflow can access and restore a cache:
    - in the current branch
    - the base branch (including base branches of forked repos)
    - the default branch
  - cache isolation exists between different branches
    - a cache created for branch POOP with the base develop
    - ^ is not accessible in branch FLUSH with the base develop
- caching logic
  - [must read the cache actions docs](https://github.com/actions/cache)

### events

- specified with `on: ...`
- a single event, any of a list of events, or time schedule
- if a list of events are provided, your workflow could execute multiple times
- use `on.event_name.type` to restrict a specific event to a certain type, e.g. issue_comment > created
  - specifying multiple types could cause multiple workflow runs
- use filters to further restrict events, e.g. branches event should specify which branch
- common events: if any are raised, the workflow will run
  - push, fork, pull_request, pull_request_target
  - label, issue_comment, issues, milestone
  - page_build, project, project_card, project_column
    - use project.create to setup racexp
  - create, delete (branch/tag)
  - deployment, deployment_status
- common types: if any are true the workflow will run
  - created, edited, deleted, opened, labeled
- common filters: if all are true, the workflow will run
  - branches, branches-ignore: match against `refs/heads`
  - tags, tags-ignore: match against `refs/tags`
  - paths
  - all usually accept something like `!dontincludethisbranchorfile**` | `includethis`
    - `* | ** | + | ? | !`
- schedule syntax: `schedule: \nt cron: 'your cron here'`

#### reusable workflows

- read the docs on this one
- workflow_call: define inputs and outputs for reusable workflows

### docker

- from github registry: `uses: docker://gcr.io/cloud-builders/gradle`
- from docker hub: `uses: docker://alpine:3.8`

### variables

- are unmasked and shouldnt be used for anything sensitive
- limited to 48kb per var and 25kb per workflow run
- can have 1000 per org, 500 per repo, 100 per env
- can be configured (repo/org) or custom (defined with env inside a workflow)
- FYI
  - you need to check whether `env.blah` or `somecontext.blah` is more appropriate
    - depends on the event, e.g. push vs pull_request

#### secrets

- are masked

#### expressions

- syntax `${{ any bash here }}`
- literals: null, true/false, number, float, string
- operators:
  - grouping ()
  - array and object axor: [] | .
  - comparisons: ! < > <== ==> == != && ||
  - functions:
    - Null(), Boolean(), Number(), Array(), Object
    - contains(doesThis, containThis)
    - startsWith(doesThisStart, withThis)
    - endsWith()
    - format('this {0} {1}', 'with', 'this')
    - join(thisArray, ', ')
    - toJSON(prettyPrint)
    - hashFiles(thisPath)
- conditionals: automatically parsed as expressions, `${{}}` isnt needed
  - if:
    - cannot directly reference secrets
    - instead set secrets as job-level env vars and if the env vars
    - available status checks
      - success() true if no previous steps failed/canceled
      - always() ignores status of previous steps
      - canceled() if any previous step
      - failure() if any previous step

#### contexts

- info about workflow runs, vars, runner environments, jobs and steps
- are referenced using the expression syntax
- env: reference custom vars defined in the workflow
- github: workflow run and the event that triggerred the run
- vars: reference a configured (repo/org) variable

### very long example

```yml
# for the full syntax @see https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions

name: some-workflow-name
run-name: some name for this specific run

defaults: # can also be scoped to a specific job
  run:
    shell: bash
    working-directory: "."

env: # can also be scoped to a specific job/step
  myvar: "some val"

concurrency: # ensures only a single job/workflow executes at a time
  group: ${{ github.workflow }}-${{ github.event.pull_request.number || github.ref }}
  cancel-in-progress: true

on: # @see https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows
  some_event:
    types: [this_thing, or_this_thing]
  some_other_event:
    when_these_are_true:
      - this_thing
      - or_this_thing

jobs:
  some-job-name:
    # @see dbs and service containers
    # container: node:10.18-jessie
    # services:
    # postgres:
    # image: postgres
    runs-on: [macos-10.15] # you should prefer matrix
    strategy:
      fail-fast: true
      matrix:
        os: [ubuntu-latest]
        node: [18, 19]
    steps: # each array item runs in the order defined
      - name: name this step
        run: echo "i belong to name^"
        if: ${{ github.event_name == 'pull_request' && github.event.action == 'unassigned' }}
        continue-on-error: true
        timeout-minutes: 1
      - uses: actions/checkout@v3 # always use this to checkout the repos code
        if: ${{ failure() }} # if the previous step failed
      - uses: actions/setup-node@v2 # theres bunches of these for specific tech stacks
        with: # generally a `uses` needs a `with`
          node-version: "14" # dizzam its on 19 now
        if: ${{ always() }} # will always run, even on failures
      - uses: actions/upload-artiact@v3 # upload an artifact: only jobs in the same run can overwrite
        path: wherever/poop.log
        name: my-artifact
      - uses: actions/download-artifact # download a previously uploaded artifact from any workflow
        with:
          name: my-artifact
      - run: npm install -g bats # a cmd, not reusable
        env: # are set in the env of run
          WOOP: true
      - run: "./.github/scripts/poop.sh" # prefer this, so we can reuse them
        shell: bash
      - name: retrieve a secret
        env:
          super_secret: ${{ secrets.SUPERSECRET }}
        run: | # inline, multiline script
          normalbashfn "$super_secret"
```

## gitlab

- lol what happened here? must be in another file

### pipelines

- ...
