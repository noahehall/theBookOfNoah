#!/bin/env bash

# git

# git ----------------------------------
git_delete_all_commits_but_keep_code() {
    # @see https://stackoverflow.com/questions/13716658/how-to-delete-all-commit-history-in-github
    git checkout --orphan $(date +%s)
    git add -A
    git commit -am 'initial commit'
    git branch -D develop
    git branch -m develop
    # check out the the .gitconfig in this repo so yto auto setup tracking branch
    git push -f
}

git_undo_last() {
    git reset HEAD~
}

git_undo_all() {
    git reset --hard
}
# @see https://gist.github.com/chrismccoy/8775224
## quick
alias git_prune_check='git prune --dry-run --verbose'
alias git_prune='git fetch --prune'
alias git_rm_all_from_cache='echo -e "check bfg on github for sensitive files"; git rm --cached -r ./'
alias git_rm_file_from_cache='echo -e "check bfg on github for sensitive files"; git rm --cached --ignore-unmatch'
alias gita='git add -A'
alias gitb='git branch'
alias gitba='git branch -a'
alias gitbr='git branch -v -a'
alias gitc='git commit -a -m'
alias gitcnv='git commit --no-verify -m'
alias gitl='git log --oneline'
alias gitp='git push'
alias gitpf='git push --force'
alias gitpl='git pull'
alias gitplf='git pull --force'
alias gits='git status -sb'
alias gitsw='git switch'
## extended
alias git_amend='git log -n 1 --pretty=tformat:%s%n%n%b | git commit -F - --amend'
alias git_config_edit='git config --global -e'
alias git_config='git config --list'
alias git_contributors='git log --format="%ae" | sort -u'
alias git_diff_deploy='git diff origin/deploy --stat'
alias git_diff_deployv='git diff origin/deploy'
alias git_diff_develop='git diff origin/develop --stat'
alias git_diff_developv='git diff origin/develop'
alias git_diff_master='git diff origin/master --stat'
alias git_diff_masterv='git diff origin/master'
alias git_log_last='git log -1 HEAD --stat'
alias git_prune='git fetch --prune && git prune'
alias git_stash_all='git stash -u'
alias git_stash_list='git stash list'
alias git_stash_pop='git stash pop'
