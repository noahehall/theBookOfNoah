```sh
# this loads all the relevant files
[ -f ~/git/foss/theBookOfNoah/linux/_sourceme_.sh ] && . ~/git/foss/theBookOfNoah/linux/_sourceme_.sh

# on mac I needed to add the .git-prompt.sh
# @see https://anotheruiguy.gitbooks.io/gitforeveryone/content/auto/README.html
# @see https://git-scm.com/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-Bash
# first download git-prompt.sh to $HOME/.git-prompt.sh
curl -o ~/.git-prompt.sh https://raw.githubusercontent.com/git/git/master/contrib/completion/git-prompt.sh
# then update your bash_rc
source ~/.git-prompt.sh
```
