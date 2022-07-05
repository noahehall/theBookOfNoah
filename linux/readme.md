```sh
# this loads all the relevant files
[ -f ~/git/foss/theBookOfNoah/linux/_sourceme_.sh ] && . ~/git/foss/theBookOfNoah/linux/_sourceme_.sh

# on mac I needed to add the .git-prompt.sh
# @see https://anotheruiguy.gitbooks.io/gitforeveryone/content/auto/README.html
# first download git-prompt.sh to $HOME/.git-prompt.sh
curl -o ~/.git-prompt.sh https://raw.githubusercontent.com/git/git/master/contrib/completion/git-prompt.sh
# then update your bash_rc
source ~/.git-prompt.sh
```
