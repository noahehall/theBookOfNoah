# user administration
```
whoami
adduser new_username
usermod
usermod -l new_username old_username
passwd username #change/set password
chsh username
  #change shell for a user. shell is required to impersonate a user
  #chsh -s /bin/bash mongodb
chfn username #change use details, e.g. real name
userdel username && rm -r /home/username
su username #login as user
sudo - username cmd # run cmd as user
  #  - says use username variables and profile
  # without - you use the current users variables and profile
```
