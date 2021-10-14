<https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History>

# LINKS

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
- references|copypasta
  - [gitignore files](https://github.com/github/gitignore)
- repo related cmds
  - [getting a git repository](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)

## terminology

- git: i'm always talking about git-scm.com
- three states of git
  - working directory: uncommited changes
    - single checkout of one version of the project; pulled out of the compressed database (the .git directory) and place on disk fo ryou to use/modify
  - staging area: changes you've commited
    - stores information about what will go into your next commit (the index)
  - .git directory: changes pushed to github
    - where git stores the metadata and object database for your project
    - what is copied when you `clone` a repository from another computer

## background

- high level
  - snapshots, not differences: other git systems (e.g. subversion) store data as a set of diffs, git stores data as snapshots
  - nearly every operation is local: many other git systems require network connecion, however git almost doesnt
    - since you have the entire histoyr of the project on your local disk, most operations seem instantaneous
  - integrity: everything in git is checksummed before it is stored; and then only referred to by that checksum
    - i.e. its impossible to change the contents of a file/directory without git knowing about it

## OOPS

```sh
  # reset SOMEBRANCH to whatever is upstream
  git checkout SOMEBRANCH
  git reset --hard origin/SOMEBRANCH

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

 # git-config - setup once on each computer
 # ^ see current config and where they are located (system|global|local)
 git config --list --show-origin
 git config --list # dont show origin
  git config user.name # see what your username is
 git config --show-origin user.name # see where the value for user.name is coming from

 # edit all global options at once
 git config --global -e
 # ^ set user name and email address
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

### recommendations

```sh
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
```

## TODO

- categorize all below
- anything under this line i wouldnt trust

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

check git config 'git config --list'

<https://stackoverflow.com/questions/41464752/git-rebase-interactive-the-last-n-commits>
    git rebase -i HEAD~n
        n === # of commits to rewrite

    git rebase -i shaOfLastGoodCOmmitButNotINclude
    git rebase -i shaOfFirstCommitToRewrite^

<https://stackoverflow.com/questions/6127328/how-can-i-delete-all-git-branches-which-have-been-merged>
    git branch --merged | egrep -v "(^\*|dev)" | xargs git branch -d
    git remote prune origin
