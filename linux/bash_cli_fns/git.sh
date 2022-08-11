
# git
gitundolastcommit () {
    git reset HEAD~
}


# git ----------------------------------
# @see https://gist.github.com/chrismccoy/8775224
## quick
alias gita='git add -A'
alias gitb='git branch'
alias gitba='git branch -a'
alias gitbr='git branch -v -a'
alias gitc='git commit -a -m'
alias gitl='git log --oneline'
alias gitp='git push'
alias gitpf='git push --force'
alias gitpl='git pull'
alias gitplf='git pull --force'
alias gitprune=' git fetch --prune'
alias gitprunecheck='git prune --dry-run --verbose'
alias gitrmcache='git rm --cached -r .'
alias gits='git status -sb'
alias gitsw='git switch'
## extended
alias gitcontributors='git log --format="%ae" | sort -u'
alias gitconfig='git config --list'
alias gitconfigedit='git config --global -e'
alias gitdiffdevelop='git diff origin/develop --stat'
alias gitdiffdevelopv='git diff origin/develop'
alias gitdiffmaster='git diff origin/master --stat'
alias gitdiffmasterv='git diff origin/master'
alias gitloglast='git log -1 HEAD --stat'
alias gitstash='git stash -u'
alias gitstashlist='git stash list'
alias gitstashpop='git stash pop'
alias gitprune='git fetch --prune && git prune'
alias gitamend='git log -n 1 --pretty=tformat:%s%n%n%b | git commit -F - --amend'
