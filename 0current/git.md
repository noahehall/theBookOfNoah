sparse clone an existing repo from git to local
    git clone --filter=blob:none --no-checkout git/url/to/clone
        setup empty dir to later sparse checkout only certain dirs

    git sparse-checkout init --cone
        cd into the ABOVE dir to init it

    git sparse-checkout set paths/to/download

check paths included in sparse-checkout
    git sparse-checkout list

    
only checkout files in root dir
    $ git clone --filter=blob:none --sparse https://github.com/derrickstolee/sparse-checkout-example

force checking out paths ignoring sparse checkout
e.g. to force checking out a path not matching sparse settings
    git checkout --ignore-skip-worktree-bits -- PATHS

check git config 'git config --list'


https://stackoverflow.com/questions/41464752/git-rebase-interactive-the-last-n-commits
    git rebase -i HEAD~n
        n === # of commits to rewrite

    git rebase -i shaOfLastGoodCOmmitButNotINclude
    git rebase -i shaOfFirstCommitToRewrite^