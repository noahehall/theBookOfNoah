## pass

- [setup pass for password management](https://linuxhint.com/pass-ubuntu/)
- theres more cmds but this should be enuf

```sh
# create a gpg key
gpg --full-generate-key
# or use an existing one (use the pub key)
gpg_keys_long

# initialize pass
pass init GPG_ID

# create a new password
## password are stored in folders,
## pass insert folderName/subFolderName/emailOrWebsiteUrl
pass insert email/gmail/poop@yomama.com
### then it will ask you for a pw

# see all saved emailOrWebsiteUrl (safe for public)
pass

# search for a emailOrWebsiteUrl (safe for public)
pass find poop

# retrieve a password (not safe)
## prints to stdout but doesnt save to history (at least with my setup)
pass folderName/subFoldername/emailOrWebsiteUrl

# remove a pass
pass rm blah/blah/blah
```
