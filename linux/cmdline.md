# TODOSSSSSS
  - https://keybase.io/
  - http://world.std.com/~reinhold/diceware.html
  - https://www.opennetworking.org/sdn-definition/
  - http://onie.org/
  - https://cumulusnetworks.com/products/netq/
  - https://principlesofchaos.org/
  - https://www.opencompute.org/
  - https://practices.learningaccelerator.org/insights/the-why-and-how-of-mastery-based-progression
  - https://blog.codinghorror.com/
  - https://accidentallyquadratic.tumblr.com/
  - https://geek-university.com/linux/
# BOOK TODO
  - Copy table 1-1 pg 8
  - Copy table 1-2 pg 10
  - Sme other cmd | column -t `display things in a column`
  - copy table 4-1 pg 87
  - Continue page 93 > 94 for top cmd
  - Copy table 4-5 for mount cmd pg 98-99
  - Copy table
  - Rearrange shit when you get the fk outa gdocs
  - Replace gdoc quotes with regular quotes
  - Copy table 4-6 SORT CMD pg 105
# skipped
  - anything to do with harddrives/partitions

# BOOKMARK: pg 165 top/middleware somewhere

### important locations
  - / : root
  - /bin/ : many GNU user-level utilities
  - /boot/ : boot files
  - /dev/ : where linux creates device nodes
  - /etc/ : system configuration directory
    - profile.d/ : contains `.sh` files that contain persistent variables for all users, i.e. a global .bashrc files
    - e.g. this is where bash_completion.sh should go so all users have bash completion
    - init.d/ : contains scripts for starting and stopping individual apps at bootime
    - rcX.d/ : X is a run level, contains entries for each script within init.d/
  - /home/ : where linux creates user directories
    - [username] a users home
      - Alias at ~
  - /lib/ : system and application library files
  - /media/ : common place for mount points used for removable media
  - /mnt/ : another common place for mount points used for removable media
  - /opt/ : often used to store third-party software packages and data files
  - /proc/ current hardware and process information
  - /root/ : root home directory
  - /sbin/ : many GNU admin-level utilities
  - /run/ : runtime data is held during system operation
  - /src/ : local services store their files
  - /sys/ : system hardware information files
  - /tmp/ : temporary work files can be created and distroyed
  - /usr/ : the bulk of GNU user-level utilities and data files
  - /var/ : for files that change frequently, e.g. log files


### important files
  - /etc/inittab: a table of processes to start automatically on bootup
  - /etc/passwd - holds all user/system accounts
  - /etc/group - holds all group information
  - /etc/shadow - holds user passwords
  - /etc/login.defs also where umask values are stored
  - /etc/fstab - contains file systems to be mounted at boot
  - /etc/apt/sources.list - contains all the software repositories
  - /home/[username]/.bash_history `all the cmds entered`
  - /etc/passwd: contains a list of all the system user accounts a long with some basic configuration information about each user
    - User entry: one per line consisting of seven fields delimited by colons that are each used to assign specific features for the user
    - Example entry: noahjedwardhall:x:501:501:Noah Edward:/home/noahedwardhall:/bin/bash
  - startup files for initiating a bash shell
    - /etc/profile - default startup file for the bash shell
      - sometimes stores the umask values (default permissions for created objectss)
      - not processed in interactive shells
  - user specific startup files for defining user-specific environment variables
    - the first file found is run, and the rest are ignored
    - $HOME/.bash_profile
    - $HOME/.bashrc
      - only run from interactive shells
      - but is usually included in one of the other files
    - $HOME/.bash_login
    - $HOME/.profile - the main startup file for the bash shell
      - all users execute this startup file when they log in
    - startup files for systems usig PAM (pluggable  authentication modules)
      - /etc/environment
      - $HOME/.pam_environment


# BACKGROUND
## file types
  - Device files: hardware devices
  - Character files: for devices that can only handle data one character at a time , e.g. modems/terminals
  - Block files: for devices that can handle data in large blocks at a time, e.g. disk drives
  - Network files: devices that use packets to send and receive data, e.g. network cards and the special loopback device
  - Loopback device: allows the linux system to communmicate with itself using common network programming protocols
  - Nodes: special files created for each device on the system; all communication with the device is performed through the device node
    - Each node has a unique number pair that identifies it to the linux kernel


## Linux system:
### Linux kernel:
  - controls all the hardware and software on the computer system, allocating hardware when necessary and executing software when required


### System memory management:
  - physical memory; create and manage virtual memory
  - Swap space: the kenerl swaps the contents of virtual memory locations back n forth from the swap space to the actual physical memory: causes the system to think there is more memory available than what physically exists
  - Software program management:  kernel controls how the linux system manages all the processes running on the system
    - Process: a running program; whether in the foreground (output on a display) or background (behind the scenes)
    - Init process: the first process the kernel starts; used to start all other processes on the system
    - Load the init process into virtual memory > each additional process started getsa  unique area in virtual memory to store the data and code that the process uses
  - Run level: 5 levels; used to direct the init process to run only certain types of processes
    - 1: only the basic system processes are started, along with one console terminal process (single user mode)
      - Single user mode: most often used for emergency filesystem maintenance when something is broken; only one user (i.e. root) can login to the system
  - 2: wtf the book skipped this?
  - 3: standard run level; most application software is started; (console based)
  - 4: wtf the book skipped this?
  - 5: system starts the graphical X window software and allows you to login using a graphical desktop window


### Hardware management:
  - any device the system communicates with needs driver code inserted inside the kernel code
  - Driver code: allows the kernel to pass data back n forth to the device, acting as a middle man between applications and the hardware
    - Inserting driver code inside the kernel
    - Drivers compiled in the kernel
    - Driver modules added to the kernel


### Filesystem management:
  - supports different types of filesystems to read and write data to and from hard drives
  - Virtual File System: VFS: kernel interfaces with each filesystem using the VFS; provides a standard interface for the kernel to communicate with any type of filesystem
    - VFS caches information in memory as each filesystem is mounted and used
    - GNU utilities: utilities to perform standard functionality in the OS
    - Handling files:
    - Manipulating text:
    - Managing processes:

### user interfaces
  - Shell: special interactive utility that provides a way for users to start programs, manage files, manage processes
    - Command prompt: the interactive part of the shell; allowing you to enter text commands, and then it interprets the commands and executes them in the kernel
  - Graphical desktop environment:
    - client : an application that requests graphical services,
    - Graphical terminal emulator
    - Desktop environment
    - Network browser
    - Display server: element that manages the display(screen) and the input devices (keyboard, mouse, touch screen)
      - Mir
      - Wayland compositor
      - xserver
    - Window manager: element that adds borders to windows and provides features to move and manage windows
      - Compiz
      - Metacity
      - Kwin
    - Widgets library: element that adds menus and appearance items for desktop environment clients
      - Athena(xaw)
      - X instrinsics
    - Application software


## linux distributions
  - A complete linux package containing the four main components (See #linux system)
  - Full core linux distributions: kernel, one/more graphical desktop environments, and just about everyy linux application that is available, precompiled for the kernel
    - Slackware
    - Red hat
    - Fedora
    - Gentoo
    - openSUSE
    - Debian
  - Specialized distributions: usually based on a core distribution, but contain only a subset of applications for a specific area of use
    - Centos
    - Ubuntu
    - pclinuxOS
    - Mint
    - Dyne:bolic
    - Puppy linux
    - liveCD test distributions: a bootable linux cd distribution; try before u buy/commit


## SHELL
  - Provides interactive access to the linux system, as apposed to a desktop environment
  - Default shell: The shell program that starts depends on your user ID config in the /etc/passwd file
  - Default interactive shell: starts whenever a user logs into a virtual console terminal/starts a terminal emulator
  - Default system shell:
    - Runs as a regular program
  - Text mode: take the linux system out of graphical desktop mode and place it in text mode
    - Provides nothing more than a simple shell CLI
  - Virtual consoles: a terminal session that runs in linux system memory; when the linux system starts it automatically creates several of these;
  - Graphical terminals: a virtual console (terminal) emulation that runs inside a graphical desktop environment to simulate the virtual console
  - Prompt: the CLI prompt / shell prompt: where you enter commands that can be interpreted by the shell
    - $ is the default prompt symbol
  - you can start a bash shell in 3 ways
    - as a default login shell at login timers
    - as an interactive shell that is started by spawning a subshells
      - e.g. typing bash
    - as a non interactive shell to run a script


### PARENT-CHILD SHELLS
  - Parent shell: the default interactive shell;
  - Child shell: when invoking a new shell/script/process-list at the cli prompt a new shell program is created
    - Only some of the parent's environment is copied to the child shell environment, e.g. variables
  - Subshell: i.e. child shell
    - Use `ps -f` to inspect parent child relationships, pay attention to the `PID` and `PPID` columns
  - External commands: i.e. filesystem command; any program that exists outside of the bash shell
    - Typically located in /bin, /usr/bin, /sbin, or /usr/sbin
    - All external commands execute in a child process (i.e. forking)
  - Forking: creating child processes; is resource heavy
  - Builtin commands: execute in the users shell without creating a child process


# FILESYSTEMS
  - Linux does not use drive letters in pathnames
  - Virtual directory: Contains file paths from all the storage devices installed on the computer, merged into a single directory structure, however the actual files and directories could be located physically on any of the harddrives attached to the system
  - Root: the base directory; all other files and directories in the virtual directory are stored here
  - Root drive: the first hard drive installed on the system
  - Mount points: directories in the virtual directory where you can assign additional storage devices

## FILESYSTEM - CHECKING AND REPAIRING
  - fsck OPTIONS FILESYSTEM - check and repair most filesystem types
    - can be run on unmounted filesystems only
      - to check your root filesystem
        - boot yoursystem usingn a LiveCD linux distro -> run fsck on the root filesystem
    - COW filesystems generally do not need the fsck cmd

## FILESYSTEMS - BASIC
  - ext: extended file system: the original file system of the linux operating system
    - uses virtual directories to handle physical devices and storing data in fixed-length blocks on the physical devices
    - inodes: tracks informatino about the files stored in the virtual directory
    - inode table: a separate table on each physical to store file information
      - the filename
      - the file size
      - the owner of the file
      - the group the file belongs to
      - access permissions for the file
      - pointers to each disk block that contains data from the file
    - inode number: linux references each inode in the inode table using a unique number to identify each file (rather than use the filename / path)
  - ext2: an expansion of the basic abilities of the ext system but maintains the same structure
    - adds the following to the inode table
      - created time
      - modified time
      - last access time
  - ext3: uses the same inode table structure as the ext 2 filesystem
    - adds the following
      - journaling
  - ext4: the default filesystem of the linux kernel since 2008



## FILESYSTEMS - JOURNALING
  - instead of writing data directly to the storage device and then updating the inode table, journaling filesystems write file changes into a temporal file (journal) first then update the inode table
  - METHODS
    - data mode: both inode and file data are journaled
      - low risk of losing data
      - poor performance
    - ordered mode: only inode data is written tot he journal but not removed until the file data is successfully written
      - good comporomise between performance and safety (system crashes)
    - writeback mode: only inode data is written to the journal
      - no control over when the file data is written
      - higher risk of losing dta
      - better than not using journaling at all
  - COW: copy on write; an alternative to journaling filesystems
    - offers both safet and performance via snapshots

## CREATING FILE SYSTEMS
  - each filesystem type uses its own command line program to format partitions
    - mkefs - ext
    - mke2fs - ext2
    - mkfs.ext3 - ext3
    - mkfs.ext4 - ext4
    - etc



## PARTITIONS
  - you need to create a partition on the storage device to contain the filesystem
  - hard drive device names
    - /dev/hdX - X is a letter based on the order the drive is detected
      - only used for older ide drives
    - /dev/sdX - X is a letter based on the order the drive is detected
      - used for SATA and SCSI drives
  - primary partition: can be formatted with a filesystem directly
    - there can only be 4 partitions on a single storage device
  - extended partition: can only contain othe rprimary partitions
    - each extended partition can contain 4 primary partitions
    -

### CMDS
  - fdisk: organize partitions on any stoage device installed on the system
    - a - toggles a flag indicating if the partition is bootable
    - b - edits the disklabel used by BSD unix systems
    - c - toggles the DOS compatibility flag
    - d - deletes the partition
    - l - lists the available partition types
    - m - displays the command options
    - n - adds a new partition
    - o - creates a DOS partition table
    - p - displays the current partition table
    - q - quits without saving changes
    - s - creates a new disklabel for sun unix systems
    - t - changes the partition system ID
    - u - changes the storage units used
    - v - verifies the partition table
    - w - writes the partition table to disk
    - x - advanced functions

## LOGICAL VOLUMES PAGE 204
  - LVM: logical volume manager: enables you to add a partition from another harddrive to an existing filesystem
    - LVM1: the original package released in 1998
    - LVM2: updated LVM1
  - PV: physical volume: each PV maps to a speific physical partition created on a harddrive
  - VG: volume group - multiple PV elements are pooled together to create a VG
  - the LVM treats the VG like a physical hard drive, but in reality the VG may consist of mmultiple physical partitions spread across multiple hard drives
  - LG: logical volume: the lg creates the partition environment for linux to create a filesystem
    - the linux system treats the LV like a physical harddrive
    - you can format the LV using any of the standard linux filesystems and then add it to the linux virtual directory at a mount point
  -

# FILES
  - linking files: when you need to maintain 2/more copies of the same file on the system; have one physical copy and multiple virtual copies
  - Link: a placeholder in a directory that points to the real locatin of the file
  - Symbolic link: a physical file that points to another file somewhere in the virtual directory structure; but they do not share the same contents
  - Hard link: creates a separate virtual file that contains information about the original file and where to locate it, however they are physically the same file

# CLI CMD Quickies
  - Parameter types
  - Unix style: preceded by a dash
  - BSD style: not preceded by a dash
  - GNU long: preceded by a double dash


# important programs
  - shell programs
    - /bin/bash: the default shell for many userIDs
      - OPTIONS
        - -c string `reads commands from string and processes them`
        - -i `starts an interactive shell, allowing input from the user`
        - -l `acts as if invoked as a login shell`
        - -r `starts a restricted shell, limiting the user to the default directory`
        - -s `reads commands from the standard input`
    - /bin/tcsh: shell based on the original C shell
    - /bin/dash: the debian based versio of the ash shell
    - /bin/csh: a softlink to pointing to the tcsh shell
    - /bin/sh: the default system shell; used for system shell scritps, e.g. those needed at startup

  - setterm
    - setterm -background white `change a console background to white`
    - setterm -foreground black `change console text to black`
    - setterm -inversescreen on|off  `switch between dark/bright mode`
    - setterm -reset `switch to default setting`
    - setterm -store `sets the current settings to be used as default (for when u use -reset)`

  - History:  list bash history
    - `history -a` force a command to be written to .bash_history
    - !! : reuse the last command
    - ! history_cmd_number: issue the CMD at line # in history

  - alias CMD OPTIONS: create an alias name for common commands (and their params)
    - -p see a list of active aliases
    - alias KEYS='CMD ...' create an alias for the current terminal session

  - which CMD: finds  the program file in the users path

  - type -a CMD: determines if a program is builtin/external and finds all program files of CMD

  - man CMD:  the bash manual; provides access to manual pages stored on the linux system
    - Section names in the manual
      - Name: command name and short description
      - Synopsis: command syntax
      - Configuration: configuration information
      - Description:
      - Options:
      - Exit status:
      - Return value
      - Errors: cmd error messages
      - Environment: environment variables used
      - Files: files used by the command
      - Versions
      - Conforming to: standards followed
      - Bugs
      - Notes
      - Example:
        - `man # CMD` go to a section area for a CMD
          - 1 `executable programs or shell cmds`
          - 3 `library calls`
          - 2 `system calls`
          - 4 `special files`
          - 5 `file formats and conventions`
          - 7 `overviews, conventions, and misc`
          - 6 `games`
          - 8 `super user and system administration commands`
          - 9 `kernel routines`
        - `man -k KEYWORD` Searching for programs dealing with your keyword



## FILESYSTEM programs
  - gzip:  file compression

  - gzcat: displaying the contents of compressed files

  - gunzip: uncompressing files

  - tar function OPTIONS OBJECT
    - FUNCTIONS
      - A `appends an existing tar archive file to another existing tar archive file`
      - c `creates a new tar archive file`
      - d `checks the diff between a tar archive file and the file system
      - r `appends files to the end of an existing tar archive file`
      - t `list the congtents of an existing tar archive file`
      - u `appends files to an existing tart archive file that are newer than a file wiht the same name in the existing archive
      - x `extracts files from an existing archive file`
    - OPTIONS
      - C DIR `changes to the specified directory`
      - f FILE `outputs results to a file/device`
      - p `preserve all file permissions`
      - v `list files as they are processed`
      - z `redirects the output to the gzip command for compression`
    - EXAMPLES
      - tar -cvf new.tar src/dir1 src/dir2 `creates an archive new.tar containing the contents of the src dirs`
      - tar -tf existing.tar `list but dont extract the contents of existing.tar`
      - tar -xvf existing.tar `extracts the contents of existing.tar`
      - tar -zxvf existing.tgz `extract  a gzipped tar file, e.g. many open source archives`

  - cd : change directory
    - cd `go to the current user's home directory`
    - cd /absolute/reference `go to the directory with root dir as base`
    - cd relative/reference `go to the directory with cur dir as base`
    - cd ../relative/reference `go to the directory with the parent dir as base`
    - cd ./ `see above`

  - pwd : print working dir

  - ls : display files and directories
    - ls OPTIONS DIRECTORY
    - OPTIONS
      - -F distinguish files and directories
      - -a display hidden files as well
      - -R recursive: display child files and dirs
      - --time=atime : display the access time
      - -d : list directory information but not its content
      - -l display additional info about each file and dir
        - d directory
        - - file
        - l linked file
        - b block device
        - c character device
        - file permissions; owner, primary group, byte size, last modified

  - cp SRC DEST: copy files and directories
    - -i : force permission to overwrite files if the file already exists in DEST
    - -R : recursively copy the contents of an entire directory

  - mv SRC DEST : move i.e rename files
    - -i : prompt before overwriting dest files

  - rm SRC : remove i.e. delete a file/dir
    - -i : prompt before deleting files
    - -r : remove files and directories

  - mkdir DEST : create a directory
    - -p : create child directories as needed

  - rmdir SRC : delete directories

  - ln : link files
    - `ln -s physical/file/src virtual/file/dest` create a symbolic link to a file
      - The virtual file merely points to the original file but is not the same file
      - Have different inode #
    - `ln physical/file/src virtual/file/dest` create a hard link to a file
      - They are physically the same file
      - Share the same inode #
      - Can only be created with files on the same medium

  - file SRC : returns the SRC type: file / directory and what kind

  - cat SRC : display all the data in SRC
    - -n : number each line
    - -b : number each line with text
    - -T : dont print tab characters

  - more SRC: displays a tax file one page at a time

  - less SRC: displays a text file one page at a time with advanced features

  - tail OPTIONS SRC: displays the last lines in a file
    - -n INT : display the last INT lines of SRC
    - -f : peek inside the file as its being used by other processes to display new lines as they appear (e.g. monitoring log files)

  - head OPTIONS SRC: displays the first lines of a file
    - OPTIONS: sead TAIL

  - mount OPTIONS DEVICE DIRECTORY: place a new media disk into the virtual -directory
    - DEVICE: the device location, e.g. /dev/sdb1
    - DIRECTORY: the virtual directory location to mount it, e.g. /mount/disk
    - examples
      - mount `displays  list of media devices currently mounted on the system`
    - COLUMNS
      - The device filename of the media
      - The mount point in the virtual directory where the media is mounted
      - The filesystem type
      - The access status of the mounted media
    - OPTIONS
      - -t `the filesystem type`
      - Vfat: windows long filesystem
      - Ntfs: windows advanced filesystem used in NT, XP and Vista
      - Iso9660: standard cd-rom filesystem
      - Usb sticks: usually vfat
      - cd-rom: usually iso9660


  - umount DIR|DEVICE : remove a removable media device
    - DIR: the mounted directory name
    - DEVICE: the device location'

  - df OPTIONS: shows each mounted filesystem that contains data
    - COLUMNS
      - How many 1024-byte blocks of data it can hold
      - The device location of the device
      - How many 1024-byte blocks are used
      - How many 1024-byte blocks are available
      - The amount of used space as a percetange
      - The mount point where the device is mounted
    - OPTIONS
      - -h `shows disk space in human-readable format`

  - du OPTIONS: shows the disk usage for a specific directory
    - -h `shows disk space in human-readable format`
    - -c `produces a grand total of all the files listed
    - -s `summarizes each argument`


### FILES
  - touch : create empty files or change the modification time of prexisting files
    - `touch myfile` creates myfile and sets your username as the file owner

  - grep OPTIONS PATTERN FILE: search for data that contain the characters that match the specified pattern
    - -v `find data that doesnt match pattern`
    - -n `display line numbers where matches were found`
    - -c `total matches`
    - -e `specifiy more than one pattern, e.g. -e PAT1 -e PAT2`

  - sort OPTIONS DATA: sorts data
    - Default sort: character sort (fks up sorting numbers)
    - OPTIONS
      - -n `use numerical sort`
      - -M `sort by 3-character Month, e.g. for lines beginning with 'Dec 13 6:30:59 blah….'`
      - -t `field separater charactor`
      - -k `which field to sort on`
      - -r `reverse`
    - EXAMPLES
      - `sort -t ':' -k 3 -n /etc/passwd` sort the passwd file based on numerical userid


## PROCESSES
  - Signals: how processes communicate with each other; a predefined message that processes recognize and may choose to ignore or act on
    - 1: HUP : hangs up
    - 2: INT: interrupts
    - 3: QUIT: stops running
    - 9: KILL: unconditionally temrinates
    - 11: SEGV: preduces segment violation
    - 15: TERM: terminates if possible
    - 17: STOP: stops unconditinally but doesnt terminate
    - 18: TSTP: stops or pauses. But continues to run in background
    - 19: CONT: resumes execution after STOP or TSTP


## cmd / process grouping / modifications
  - Sequential cmd list: a list of commands to be run one-after-another
    - cmd1; cmd2; cmd3; cmdX
  - Sequential cmd list no errors: a list of commands that will run only if the previous cmd exited without error
    - cmd1 && cmd2 && cmd3 && cmdX
  - Process list w/ subshell: executes sequential commands in a subshell
    - (cmd1; cmd2 && cmd3;  cmd4)
    - (cmd1; cmd2 && cmd3; ((echo $BASH_SUBSHELL)) `create another subshell`
    - `(cmdX;)&` put the process list in the background
  - Process list w/out subshell: cmd list must end with a semicolon
    - { cmd1 && cmd2; cmd3; }
  - Background mode: allows the cmd to be processed in a subshell while releasing the CLI back to the user
    - cmd1& `its the & that forces background mode`
      - Returns the job number and the PID of the process
    - Co-processing: spawns a subshell in background mode and executes a command within that subshell
      - coproc: spawns a subshell in background mode(job) and runs CMD in that subshell; returning the background job number and the PID
        - `coproc cmd` spawn a subshell and run a background job
        - `coproc ( cmd1; cmdX )` combine co-processing with process lists creating nested subshells
        - coproc JOB_NAME { CMD; } give the background job a custom name

  - jobs OPTIONS: display running background processes
    - -l `long listing; important for retrieving the PID of each process`

  - sleep SECONDS: forces a process to wait the number of specified SECONDS

  - ps: information about running programs (processes) on the system, dispays proccesses running by the current user in the current terminal
    - COLUMNS
      - PID: process ID
      - TTY: the terminal they are running from
      - TIME: the cpu time the process has used
    - OPTIONS: copy table 4-1 pg 87
      - -A show all processes
      - -a: all proceses except session headers and processes without a terminal
      - -F `use extra full output`
      - -f `full format listing; great for inspect parent-child PID relationships`

  - top: dispays process information in real time mode

  - kill: send signals to processes based on their proceess ID (PID)
    - Have to use the process ID instead of its command name
    - Have to be the owner of the process or root
    - OPTIONS
      - -s : send other signals using their name or number

  - term: tells the process to kindly stop running but a runaway process can ignore the request
    - OPTIONS
    - -s : send other signals using their name or number

  - killall: stop processes by using their names + wildcards
    - EXAMPLES
      - killall http*
    - OPTIONS
      - -s : send other signals using their name or number


## VARIABLES
  - Environment variables: store information about the shell session and the working environment
  - Used to store data in memory
  - Global vars: visible from the current shell session and from any spawned child subshells
  - Local vars: available only in the shell that creates them
  - variable arrays
    - myvar=(one two three four)
      - echo $myvar - one
      - echo ${myvar[1]} - two
      - echo ${myvar[2]} - three
      - echo ${myvar[*]} - one two three four
      - unset myvar[3] - deletes index 3
      - unset myvar - deletes all values

### important environment variables
  - BASH_SUBSHELL `used at the end of a cmd/process-list to determine how many subshell(s) were created
  - LS_COLORS: controls the color for different types of text displayed in a terminal emulator
  - HISTISZE: how many cmds are kept in bash history
  - PATH: defines the directories to be searched when looking for commands and programs
    - `PATH=$PATH:some/new/dir` add a new directory containing applications
      - be sure to export the new path var if you want it the modifications available in subshells
      - `PATH=$PATH:.` include the current directory in your path
  - BASH_ENV
    - when the shell starts a non-interactive subshell process, it checks this environment variable for the startup file name to execute
    - useful to set variables for shell scripts


### BACKGROUND
  - `myvar=myval` re/set a variable, no space around the `=`
    - global vars: use uppercase
    - local vars: use lowercase
  - export myvar: converts a local variable to a global variable
    - changing a global variable within a child shell does not affect the variables value in the parent shell


### CMDS
  - printenv prints ALL global environment variables
  - printenv VAR prints the value of VAR
  - echo $VAR prints the value of VAR but requires the `$`
    - in general the `$` before a variable name allows the variable to be passed as a command parameter
  - env prints global environment variables
  - set prints local AND global variables
  - unset VARNAME removes the variable


# REGEX
## FILE GLOBBING
  -  e.g. ls -l my?script
  - ? one character
  - * any number of chars
  - [ab] either one
  - [a-z] a range
  - [!a] this character is not 'a'



# SECURITY
## FILE PERMISSIONS
  - `ls -l` show permissions for a directory
    - [sticky][everyone][group][owner]
    - r|4 - read permission
    - w|2 - write permission
    - x|1 - execute permission
    - - -permission denied
  - octal: permissions
    - 0 none
    - 1 execute only
    - 2 write only
    - 3 write and execute
    - 4 read only
    - 5 read and execute
    - 6 read and write
    - 7 read, write, execute
    - the sticky bit
      - 0 all bits are cleared
      - 1 sticky bit is set
      - 2 SGID is set
      - 3 SGID and stick are set
      - 4 SUID is set
      - 5 SUID and sticky ar eset
      - 6 SUID AND SGID are set
      - 7 all bits are set
  - SUID: set user id: when a file is executed by a user, the program runs under the permissions of the file owner
  - SGID: set group ID: import for sharing files by forcing all new files created in a shared directory to be owned by the directorys group an
    - for a file - the program runs under the permissions of the file group
    - for a directory - new files created in the directory use the directory group as the default group
  - sticky bit: the file remains (sticks) in memory after the process ends
    -

### CMDS
  - `umask BINARY_VALUE` - sets the default permissions for any file/director you create
    - /etc/profile - where umask values are stored
    - /etc/login.defs also where umask values are stored

  - `chmod options mode file/dir` change teh security settings for files and directories
    - examples
      - `chmod 760 FILE`

  - `chown options user:group file` change the owner of a file/directory
    - -R make changes recursively through subdirectories and files
    - -h change ownership of any files that are symbolically linked to the file
    - `chown noah file` set noah as the owenr of file


## USER ACCOUNTS
  - user account: the core of the linux security system
    - each user who accesses ta linmux system should have a unique user account
    - user permissions to objects on the system depend on the user account they login with
  - UID: user id
    - user permissions are tracked via the UID
  - /etc/passwd - matches a login name to a corresponding UID value
    - is a standard text file - any program can edit it
    - root user account: the administrator for the linux system and is always assigned UID 0
    - system accounts: created by the linux system for various functions/programs that require access to system resources
      - all services that run in background mode need to be logged into the linux system under a system user account
      - UIDs below 500 are for system accounts
  - /etc/shadow
    - holds user passwords
    - can only be edited by certain programs


### cmds
  - useradd easy way to create a new user account and setup a users home directory strcture all at once
    - /etc/default/useradd - defaults when creating a new user account
    - OPTIONS
      - -D show/set the default values
        - GROUP=group UID
        - HOME=user home directory
        - INACTIVE=will the account be disabled when the password expires
        - EXPIRE=when the account expires
        - SHELL=the default shell
        - SKEL=the system copies the contents of /etc/skel directory to the users home directory
        - CREATE_MAIL_SPOOL=the system creates a file i the mail directory for the user haccoutn to receive mail
      - changing defaults `sudo useradd -D -s /bin/tsch`
        - -c adds text to the new users comment field
        - -e experiation date
        - -f inactive
        - -g gorup
        - -s shell

  - userdel remove a user form the system
    - -r remove the user home directory aswell
      - be careful: sometimes programs/files in a users home directory can be shared with other users/programs

  - usermod edit user account fields, primary/secondary group membership
    - you can practically modify any of the fields in the /etc/passwd file
    - OPTIONS
      - same ass useradd parameters plus the following
      - -l changes the login name of hte user account
      - -L locks teh account so the user can login
      - -p change the password
      - -U unlocks the acount
      - -G append an existing group to an existing user
      - -g replace the default group for an existing user

  - passwd changes the password for an existing user
    - `passwd USERNAME` will then provide a prompt to set a new password for USERNAME
    - -e force a user to set a new password at their next login
    -

  - chpasswd reads a file of login name and password pairs and updates the passwords
    - see `passwd`

  - chage manage the password aging process for user accounts
    - -d sets the number of days since the password was last changed
    - -E sets the date the password expires
    - -I sets the number of days of inactivity after the password expires to lock the account
    - -m sets the minimum number of days between password changes
    - -W sets the number of days before the password expires that a warning message appears

  - chfn change the users accounts comment information

  - chsh changes the user accounts default shell
    - `chsh -s /bin/bash USERNAME`

  - `finger USERNAME` see information about a user
    - many system administrators disable the finger command for security concerns

## USER GROUPS
  - groups: security for groups of users to share resources
  - group permissions: allow multiple users to share a common set of permissions for an object ont he system, e.g. a file/directory/device
  - GID: group id
  - /etc/group - all groups on the system
    - the group name
    - the group password
      - allows non group member to temporarily become a member of the group by using the password
    - the group GID
    - the list of user accounts that belong to the group
      - when a user accout uses a group as the default group in the /etc/passwd file, the user account does not appear in teh e/tc/group file as a member

### cmds
  - `groupadd NEWGROUPNAME` - create new groups
    - use `usermod` to add users to the group
  - groupmod - modify a group
    - -g change the GID
      - all security permissions are based on the GID, be careful when changing
    - -n change the name


# PACKAGE MANAGEMENT SYSTEM (PMS)
  - PMS: utilizes a database to keep track of
    - what software packages are installed on the linux system
    - what files have been installed for each package
    - versions of each of the software packages installed
  - repositories: servers that store software packages
  - /etc/apt/sources.list - contains all the software repositories
    - deb|deb-src address distribution_name package_type_list
      - deb: source of compiled packages
      - deb-src - source of source code
      - address: the web address
      - distribution name: name of the software repositorys distributions
      - package type list: indicates what type of packages the repository has in it
        - main
        - restricted
        - universe
        - partner

## CMDS
  - dpkg: interacts directly with the PMS on the linux system and is used for isntalling, managing and removing existing Software
    - -L PKGNAME - show all the files associated with PKGNAME
    - --search FILE_PATH - show what package a particular file belongs to
  - apt-get
  - apt-cache
  - aptitude: a frontend for both the apt tools and dpkg
    - show PKGNAME - show info about PKGNAME
    - search PKGNAME - search for the PKGNAME (or related packages)
      - i - package currently install
      - p / v - available but not installed
    - install PKGNAME
    - purge PKGNAME - remove a package and all its related data
    - remove PKGNAME - remove a package but it keeps data
    - safe-upgrade - upgrades all the isntalled packages to the most recent version available in the repository


# SHELL SCRIPTING
## BACKGROUND
  - good idea to add `$HOME/bin` to your path so each user can have a dir in which the shell can execute their scripts
  - every script file must be executable `ls -l`

## REVIEW 101
```sh
# first line in a shell script must specify which shell
# to run the script under
#!bin/bash

# run two consecutive cmds
# maximum command line char count is 255 on a single line
cmd1; cmd2

# echo
echo this line without quotes
echo 'this line with quotes'

# use quotes to be sure there is a space between lines
echo -n 'put this line and the next line '
echo on the same line

echo $HOME

# CMD SUBSTITUTION
# saving the output of a cmd to a variable
datevar=`date`
datevar=$(date)
today=$(date +%y%m%d)
```

## REDIRECTS
```sh
# output redirection: saving to file
  cmd > outputfile # overwrite
  cmd >> outputfile # append

# input redirection: content of file as params to cmd
  cmd < inputfile

# input redirection: inline
cmd << EOF
  data
  data
EOF

# PIPES
# send the output of one cmd to the input of another
# linux runs both cmds at the same time linking them
# together internall (not executed back to back)
cmdfrom | cmdto

```

## MATH
 - unfortunately no floating points (decimals)
 - you need the zshell


### expr
  - many operators need to be escaped/quoted for shells
  - prints the value to standard output
  - blank line separates increasing precedence groups


```sh
# ARG1 if it is neither null nor 0, otherwise ARG2
expr ARG1 | ARG2

# ARG1 if neither argument is null or 0, otherwise 0
expr ARG1 & ARG2

# ARG1 is less than ARG2
expr ARG1 < ARG2
# ARG1 is less than or equal to ARG2
expr ARG1 <= ARG2
# ARG1 is equal to ARG2
expr ARG1 = ARG2
# ARG1 is unequal to ARG2
expr ARG1 != ARG2
# ARG1 is greater than or equal to ARG2
expr ARG1 >= ARG2
# ARG1 is greater than ARG2
expr ARG1 > ARG2

# arithmetic sum of ARG1 and ARG2
expr ARG1 + ARG2
# arithmetic difference of ARG1 and ARG2
expr ARG1 - ARG2

# arithmetic product of ARG1 and ARG2
expr ARG1 * ARG2
# arithmetic quotient of ARG1 divided by ARG2
expr ARG1 / ARG2
# arithmetic remainder of ARG1 divided by ARG2
expr ARG1 % ARG2

# couldnt get this to work
# anchored pattern match of REGEXP in STRING
expr STRING : REGEXP

# same as STRING : REGEXP
expr match STRING REGEXP
# substring of STRING, POS counted from 1
expr substr STRING POS LENGTH
# index in STRING where any CHARS is found, or 0
expr index STRING CHARS
# length of STRING
expr length STRING
# interpret TOKEN as a string, even if it is a
# keyword like 'match' or an operator like '/'
expr + TOKEN

# value of EXPRESSION
( EXPRESSION )
```


### BRACKETS
```sh
var1=$[1 + 5]
var2=$[$var1 * 2]
var3=$[$var2 * ($var1 - 3)]
```