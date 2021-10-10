# LINKS

- [git flight rules](https://github.com/k88hudson/git-flight-rules/blob/master/README.md)
- [git town cli plugin](https://www.git-town.com/)
- [issues with git flow](https://scottchacon.com/2011/08/31/github-flow.html)
- [git feature branch workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow)
- [bitbucket git tutorials landing page](https://www.atlassian.com/git/tutorials)
- [git workflow comparison](https://www.atlassian.com/git/tutorials/comparing-workflows)

# TODO

- fix all below

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

## gpg signature verification

```sh
  # rebasing with protected branches cannt be done autoamtically 
    $ git checkout poop
    $ git rebase otherbranch
    $ git push 
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
```
