# tldr

managing users across debian & arch

## links

- tuts
  - [useradd](https://linuxize.com/post/how-to-create-users-in-linux-using-the-useradd-command/)

## quickies

- files & locations
  - `/etc/default/useradd` default settings for `useradd`
  - `/etc/passwd`
  - `/etc/shadow`
  - `/etc/group`
  - `/etc/gshadow`
  - `/etc/skel` skeleton files copied when creating a user + home directory

```sh
  # inspection
    id USERNAME # see userID, primary group, and secondary group
      -gn # get primary group
    grep USERNAME /etc/passwd # see user settings
    chage -l USERNAME # see user account/passwd expiration info

  # useradd
    # uses default settings in /etc/default/useradd
    # ^ updates /etc/{passwd,shaddow,group,gshadow}
    useradd OPTIONS USERNAME
      -m # create home dir as /home/USERNAME
      -d PATH # set home dir to path, must also use -m
      -u NUM # set the userid to NUM
      -g NAME|NUM # set the initial login (primary) group to the preexisting groupname/group id
      -G NAME_LIST # set secondary groups, e.g. wheel,docker,postgres
      -s PATH # set the login shell, e.g. /bin/{sh,bash}
      -c "COMMENT" # set short description about user
      -e YYYY-MM-DD # set the time when the user acount expires
      -r # create a system user, i.e. without a home dir
      -D # see useradd defaults/file locations, do not specify any other options/username
      -D OPTS # change defaults for any aforementioned option, do not specify username




    passwd USERNAME # set a users password

```
