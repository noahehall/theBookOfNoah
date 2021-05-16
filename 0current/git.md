sparse clone an existing repo from git to local
    git clone --filter=blob:none --no-checkout git/url/to/clone
        setup empty dir to later sparse checkout only certain dirs

    git sparse-checkout init --cone
        cd into the ABOVE dir to init it

    git sparse-checkout set paths/to/download

only checkout files in root dir
    $ git clone --filter=blob:none --sparse https://github.com/derrickstolee/sparse-checkout-example



check git config 'git config --list'

