# [Group File, Directory and Device Permissions](http://www.yolinux.com/TUTORIALS/LinuxTutorialManagingGroups.html)
## letter/octal codes
  - read access: r/4:	Permission to read a file, Permission to read a directory (also requires "x")
  - write: w/2: 	Permission to delete or modify a file, Permission to delete or modify files in a directory
  - execute binary: x/1:	Permission to execute a file/script, Permission to read a directory (also requires "r")
  - s:	Set user or group ID on execution.
  - u:	Permissions granted to the user who owns the file
  - t:	Set "sticky bit. Execute file/script as user root for regular user.
## people
  - u	User access
  - g	Group access
  - o	Other system user's access
  - a	Equivilent to "ugo"

## examples
  - syntax: `chmod [ugoa][+-=][rwxXst] fileORdirectoryName`
  ```s
  Use chmod -R 755 /opt/lampp/htdocs if you want to change permissions of all files and directories at once.
  
      Grant read access (r) to a file to all members of your group (g):
    chmod g+r file-name
    Grant read access to a directory to all members your group:
    chmod g+rx directory-name
    Note that "execute" permission is required in order to read a directory.
    Grant read permissions to everyone on the system to a file which you own so that everyone may read it: (u)ser, (g)roup and (o)ther.
    chmod ugo+r file-name
    Grant read permissions on a directory to everyone on the system:
    chmod ugo+rx directory-name
    Grant modify or delete permissions to a file which you own for everyone in the group:
    chmod ugo+rw file-name
    Note: In order for modify and delete permissions to be useful, one must be able to modify the directory in which the file is located: chmod ugo+rwx ./
    Deny read access to a file by everyone except yourself:
    chmod go-r file-name
    Allow everyone in your group to be able to modify the file:
    chmod 660 file-name
  ```

# ownership
- all files and subdirectories: `sudo chown -R username:group directory`
- display all the permissions: namei -om /path/to/check
- change user owner of file: chown root tmpfile
- change group owner of file: chown :friends tmpfile
- change group ownership of directory; chgrp group_name file/directory_name
- see all groups: groups
- see all groups for a user: groups username
