#!/usr/bin/env bash

# git

# git ----------------------------------
git_sync_local_branches() {
    # @see https://stackoverflow.com/questions/16590160/remove-branches-not-on-remote
    # updated to delete branches not pointing to origin
    # TODO this still isnt right nor does it work correctly on both git and gitlab
    git fetch -p
    echo $'deleting branches with no upstream'
    git branch -vv | grep -v ' \[origin/' | grep -v "\*" | awk '{ print $1; }' | xargs -r git branch -D
    echo $'deleting branches gone from upstream'
    git branch -vv | grep ': gone]' | grep -v "\*" | awk '{ print $1; }' | xargs -r git branch -D
}
git_pull_develop_rebase() {
    git pull origin develop
    git rebase develop
}
git_delete_remove_branch() {
    if [[ $# -eq 1 ]]; then
        git fetch --all
        git push origin --delete $1
        git branch -D $1
    else
        echo "\$1 === branch_name"
    fi
}
git_force_pull() {
    if [[ $# -eq 1 ]]; then
        git fetch --all
        git reset --hard origin/$1
    else
        echo "\$1 === branch_name"
    fi
}
git_delete_all_commits_but_keep_code() {
    # @see https://stackoverflow.com/questions/13716658/how-to-delete-all-commit-history-in-github
    git checkout --orphan $(date +%s)
    git add -A
    git commit -am 'initial commit'
    git branch -D develop
    git branch -m develop
    # FYI: the .gitconfig in this repo is configured to auto setup tracking branch
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
gitc() {
    git commit -a -m "$*"
}
gitca() {
    if test "$#" -eq 0; then
        git commit -a --no-verify --amend --no-edit
    else
        git commit -a --no-verify --amend -m "$*"
    fi
}
gitnm() {
    git commit -a --no-verify -m "$*"
}
alias gita='git add -A'
alias gitb='git branch'
alias gitba='git branch -a'
alias gitbr='git branch -v -a'
alias gitd='git-icdiff'
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
alias git_prune_check='git prune --dry-run --verbose'
alias git_prune='git fetch --prune && git prune'
alias git_prune='git fetch --prune'
alias git_rm_all_from_cache='echo -e "check bfg on github for sensitive files"; git rm --cached -r ./'
alias git_rm_file_from_cache='echo -e "check bfg on github for sensitive files"; git rm --cached --ignore-unmatch'
alias git_stash_all='git stash -u'
alias git_stash_list='git stash list'
alias git_stash_pop='git stash pop'
