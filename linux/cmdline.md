#  books used in this file
  - linux cmd line and shell scripting bible 3rd edition
    - blum, bresnahan
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
  - linux cmd line bible
    - anything to do with harddrives/partitions
    - bc - bash calculator
    - halfway through advanced sed
    - advanced gawk
    - dash shell
    - zshell (oooh i need to do this)

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
    - cron.*ly/ pre-configured cron script directories than run files within their directory at the schedule time
      - cron.hourly
      - cron.daily
      - cron.weekly
      - cron.monthly
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
    - every user on the system can use this directory
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
  - /etc/anacrontab - config file (similar to cron table) for the anacron program
  - /home/[username]/.bash_history `all the cmds entered`
  - - /dev/null
    - the null file
    - useful for suppressing output or redirecting things you dont want to keep
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
      - only run from interactive shells and EVERY time a new shell is started
      - but is usually included in one of the other files
    - $HOME/.bash_login
    - $HOME/.profile - the main startup file for the bash shell
      - all users execute this startup file when they log in
    - startup files for systems usig PAM (pluggable  authentication modules)
      - /etc/environment
      - $HOME/.pam_environment
  - /var/spool/anacron/cron.*ly timestamp file(s) for the anacron program


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
  - holy grail
    - `source FILE` executes cmds within the current shell context instead of creating a new shell to execute them
      - `. FILE` the dot operator is a shortcut

    - `echo $blah` prints things
      - -e enable interpretation of backslash escapes
        - useful for printing tabs `\t`
      - -n no trailing new line
        - useful for putting the echo line on the same line as the next cmd
      -


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
  - mktemp create temporary files/directories
    - `mktemp somefile.XXXXXX` must use 6 Xs which will be replaced by random characters
      - -t force mktemp to create the file/dir within the /tmp/ directory
        - returns the full path
      - -d create a temp dir
  - tee output to both a file and STDOUT
    - EXAMPLES
      - ls | tee somefile
    - OPTIONS
      - -a append to somefile
      -


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
  - tac SRC : displays SRC in reverse order

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
  - scheduling priority: amount fo CPU time the kernel assigns to the process relative to other processes
    - by default all processes started from the shell have the same scheduling priority
    - -20 highest priority
    - 19 lowest priority


### SIGNALS
  - Signals: how processes communicate with each other; a predefined message that processes recognize and may choose to ignore or act on
    - 1: HUP : hangs up
    - 2: INT: interrupts
      - ctrl+c
    - 3: QUIT: stops running
    - 9: KILL: unconditionally temrinates
    - 11: SEGV: preduces segment violation
    - 15: TERM: terminates if possible
    - 17: STOP: stops unconditinally but doesnt terminate
      - ctrl+z
      - processes are still in memory and able to continue running from where it left off
    - 18: TSTP: stops or pauses. But continues to run in background
    - 19: CONT: resumes execution after STOP or TSTP
    - notes
      - bash shell
        - ignores 3 and 15 so an interactive shell cannot be accidentally termianted
        - does not ignore 1 and 2
          - before it exits it will pass the signal to any processes started by the shell

    - key combinations
      - ctrl+d generates an end-of-file character

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
    - STDOUT and STDERR will still display on the terminal monitor
      - you sbhould redirect!!!!
    - the background job is still associated with the terminal session!
      - if the terminal session ends, the background job ends as well!!!
    - `cmd1&` its the & that forces background mode
      - Returns the job number and the PID of the process
    - Co-processing: spawns a subshell in background mode and executes a command within that subshell
      - coproc: spawns a subshell in background mode(job) and runs CMD in that subshell; returning the background job number and the PID
        - `coproc cmd` spawn a subshell and run a background job
        - `coproc ( cmd1; cmdX )` combine co-processing with process lists creating nested subshells
        - coproc JOB_NAME { CMD; } give the background job a custom name

  - jobs OPTIONS: display running background processes
    - view the current jobs being handled by the shell
    - OPTIONS
      - -l long listing; important for retrieving the PID of each process
      - -n list only jobs that have changed their status since the last notificatino from the shell
      - -p list only PIDs
      - -r list only running jobs
      - -s list only stopped jobs
    - OUTPUT
      - + indicates the default job, i.e. the job referenced by any job control cmds if a job number was not specified at the cmd line
      - - indicates the next default job if the current default job is terminated

  - bg JOB_NUMBER - restart the process with JOB_NUMBER as a background process

  - fg JOB_NUMBER - restart the process with JOB)NUMBER as a foreground process

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
      - -l view all stopped/traced/paused processes

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

  - trap CMD SIGNALS
    - trapping signals: perform arbitrary cmds when your script detects a signal
    - to handle traps different in various sections of your script, simply reissue the tramp command with new otions
    - EXAMPLES
      - `trap "echo 'i trapped ctrlc so it no longer exits'" SIGINT`
      - `trap "run this before I exit" EXIT`
      - `trap -- SIGINT` remove the trap for SIGINT

  - `nohup CMD&`: runs another cmd blocking any SIGHUP signals that are sent to the process
    - prevents the process from exiting when you exit your terminal session
    - i.e. keep a script running even if you close your terminal
    - the shell assigns the cmd a job number and the linux system assigns a PID number
    - STDOUT and STDERR are redirected to the `nohup.out` file
      - if multiple cmds are run from the same directory, all STDOUT and STDERR get appended to the same file
        - be careful!!! ^^ it can be confusing

  - `nice -n X CMD` set the s
  - the root user can renice cheduling priority of a cmd as you start it
    - -n X - set the scheduling priority
      - -20 highest
      - 19 lowest

  - `renice -n X -p PID` change the priority of a cmd thats already running ont he system
    - can only renice processes that you own
    - can only renice your processes to a lower priority
    - the root user can renice any process to any priority

#### SCHEDLING
  - `at -f SCRIPT TIME` specify a time when the linux system will run a script
    - its best to redirect the script output as by default the at cmd will email it via the sendmail application
    - TIME if you submit a time that has already passed the SCRIPT will run immediately
      - 10:15pm
      - noon, midnight, teatime (i.e. 4pm), now
      - MMDDYY, MM/DD/YY, DD.MM.YY
      - now + 25 minutes, 10:15pm tomorrow, 10:15 + 7 days
    - OPTIONS
      - -f specify the script to run
      - -q specify the job queue
        - 26 job queues available for different priority levels
          - a-z, A-Z
          - the higher alphabetically the job queue, the lower the priority
          - default job queue = a
      - -M suppress all output, i.e. no redirection / email

  - `atd` daemon that runs in the background and checks the job queue for jobs to run
    - most distros start this damon automatically at boot time

  - `atq` view pending jobs

  - `atrm JOB_NUMBER` removing pending jobs

  - `crontab` schedule jobs to run on a regular basis
    - if the linux system is turned off at the time the scheduled job is set to run, the script WILL NOT RUN!!!
      - use `anacron` instead if you expect this is likely
    - cron tables: contains all jobs and their schedules
      - format
        - min hour dayofmonth month dayofweek cmd
        - `15 10 * * * CMD` everyday at 10:15
        - `15 16 * * 1 CMD` every monday at 4:15
        - `00 12 * * * if [ "date %d -d tomorrow" = 01 ]l then; CMD`
          - check everday at 12noon to see if its the last of the of the month, if so, run the CMD
    - each user can have their own cron table
    - OPTIONS
      - -l list all schedule jobs
      - -e create/add/edit entries to your crontable

  - `anacron` similar to crontab, except it will execute missed jobs in the advent the system was off during the scheduled time
    - deals only with programs located in the cron directories, e.g. /etc/cron.monthly
    - /var/spool/anacron/cron.*ly
      - it uses timestamps to determine if the jobs have been run at the proper scheduled interval
    - /etc/anacrontab config file for the anacron program
      - similar to the cron table
        - except it does not deal with scripts that have execution time needs less than daily
      - format
        - period delay identifier cmd
          - period: how often the jobs should be run in days
          -


## VARIABLES
  - Environment variables: store information about the shell session and the working environment
  - Used to store data in memory
  - Global scope: visible from the current shell session and from any spawned child subshells
    - global vars: use uppercase
  - Local scope: available only in the shell that creates them
  - variable arrays
    - myvar=(one two three four)
      - echo $myvar - one
      - echo ${myvar[1]} - two
      - echo ${myvar[2]} - three
      - echo ${myvar[*]} - one two three four
      - unset myvar[3] - deletes index 3
      - unset myvar - deletes all values
    - local vars: use lowercase
  - `myvar=myval` re/set a variable, no space around the `=`
  - export myvar: converts a local variable to a global variable
    - changing a global variable within a child shell does not affect the variables value in the parent shell
### environment variables: some important ones
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
  - IFS
    - internal field separator
    - defines the list of characters the bash shell uses as field separators
  - $$ the current process ID


### CMDS
  - printenv prints ALL global environment variables
  - printenv VAR prints the value of VAR
  - echo $VAR prints the value of VAR but requires the `$`
    - in general the `$` before a variable name allows the variable to be passed as a command parameter
  - env prints global environment variables
  - set prints local AND global variables
  - unset VARNAME removes the variable


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

   - `who` displays who is logged in

   - `whoami` print your effective userid

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
  -

## REVIEW 101
```sh
  # first line in a shell script must specify which shell
  # to run the script under
  #!bin/bash

  # you should always keep the original value to reset it
  IFS.OLD=$IFS
  # change the field separator to only recognize new lines
  IFS=$'\n'
  # change it to regonize multiple field separators
  # ; and : are now the field separators
  # IFS=;:

  # only way to reliable get the script name
  # excludes the path if invokied with some/blah/scriptname.shx
  scritpname=$(basename $0)

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

  # exit statuses
  # 0 success
  # 1 general unknown error (e.g. invalid parameter)
  # 2 misuse of shell cmd
  # 126 cmd cant execute (i.e. permissions issue)
  # 127 cmd not found
  # 128 invalid exit argument
  # 128+x fatal error with linux signal x
  # 130 cmd terminated with ctrl+c
  # 255 exit status out of range
  # prints the exit status of the last executed cmd
  # exit statuses must be <= 255
  echo $?
  # manually exist with status
  exit 0

```

## FILE DESCRITORS
  - objects: linux handles every object as a file, including the i/o process le object using a file descriptor
  - file descriptor: each open file in a session is identified using a non-negative integer
    - each process is permitted up to 9 open file descriptors at a time
      - the first 3 are always
      - 0 STDIN
        - the standard input to the shell
        - terminal interface: keyboard
        - when using the `<` input redirect symbol linux replaces the STDIN file descriptor with the file referenced by the redirection
      - 1 STDOUT
        - the standard output for the shell
        - terminal interface: the terminal monitor
      - 2 STDERR
        - references the standard error output for the shell, i.e. the location where teh shell sends error messages generated by the shell or programs/scripts running in the shell
  - lsof - list open file descriptors
    - lists all open file descriptors on the entire linux system
      - this includes all processes running on background, as well as any user accounts logged into the system
    - most sys admins hide this from cmd from non-sys-admins
    - OPTIONS
      - -p filter by process ID
      - -d filter by file nes the process
    - OUTPUT
      - COMMAND - the first nine chars of the name of the cmd in process
      - PID - the process ID of the process
      - USER - the login name of the user who
      - FD - the file descriptor number and access type
        - r read
        - w write
        - u read/write
      - TYPE - the typingeof file
        - CHR character
        - BLK block
        - DIR directory
        - REG regular file
      - DEVICE the device numbers (manjor and minor) of the device
      - SIZE if available, the size of the file
      - NODE the node number of hte local file
      - NAME the name of the file
      -

```sh
  ## redirect STDERR to a file
  ls -l badfile 2> error.log

  ## redirect STDERR and STDOUT to the same file
  ## use the special & symbol
  ls -l goodfile badfile &> goodandbad.log

  ## redirect STERR and STDOUT to separate files
  ls -l goodfile badfile 2> error.log 1> good.log

  # the following are temporary (within a script)
  ## redirect a single line to whatever STDERR is referencing
  echo "this is an error message" >&2

  # the following are for the duration of the script
  ## redirect to a file
  exec 1> some.log
  exec 2> error.log

  ## get STDIN from a file
  exec 0< somefile
  # while read line... #gets line from somefile

  # creating file descriptors
  exec 3>somefile
  # echo "this goes to somefile" >&3
  echo "this goes to monitor"

  ## other examples
  exec 3>>appendtothisfile

  ## save the file descriptor
  exec 3>&1
  ## set a new file descriptor
  exec 1>somefile
  ### put things back to normal
  exec 1>&3

  ## create a weird read/write file descriptor
  ## a single file descriptor for both input and output
  exec 3<> somefile

  ## closing file descriptors
  ## by redirectoring to special sybol &-
  ## if you reopen a closed file descriptor
  ## the shell replaces the oldfile with a new file
  exec 3>&-

  # get all open file descriptors for the current process
  # very useful inside of scripts
  lsof -a -p $$ -d 0,1,2
```



## USER INPUT
  - command line parameters: add data values to the command line when you execute the script
    - `--` separate options from positional parameters
      - somescript -a one -b two -- three four
  - positional parameters:
    - `$0` script name
    - `$1-9` first 9 parameters
    - `${10-X}` 10 and up
  - parameter options
    - single letters preceded by a dash that alter the behavior of a command
    -
  - $# the number of command line parameters included when the script was run
  - `$*` takes all the parameters supplied on the cmd line as a single word
  - `$@` takes all the parameters supplied on the cmd line as separate words int he same string
    - allows you to iterate through the values, e.g. with a for loop
  - `shift` shifts the cmd line parameters down 1 relative to their current position
    - `shift 2` shifts the values by 2
    - `shift n` etc
  - getopt OPTIONS OPTSTRING PARAMETERS
    - throws errors if an opt provided that is not listed in OPTSTRING
    - OPTSTRING: defines the valid option letters and which require a parameter
      - ab:c: both b and c require param values
    - OPTIONS
      - -q ignore error messages
  - getopts OPTSTRING VARIABLE
    - works on the existing shell parameter variables sequentially
    - it processes the parameters ont he cmd line one at a time each time its called
      - when it runs out of parameters it exists with an exit status
    - strips off the leading dash
      - be careful in your case statements!!!!
    - ENV VARS
      - OPTARG the value to be used if an option letter requires a parameter value
      - OPTIND the value of the current location within the parameter list where getopts left off
    - OPTSTRING
      - precede optstring with `:` to suppress error messages
      - any option letter not define in OPTSTRING is sent to your code as a question mark
    -


```sh
  # prompting user for input
  read -p "what is your name: " first last
  echo "your name is $first $last"

  read -p "this time without vars"
  echo "your name is $REPLY"

  read -t 5 -p "this time with a 5 second timer "
  echo "your response was $REPLY"

  echo "auto exit based on char count"
  read -n1 -p "please choose an interger between 0-9"

  echo -s -p "enter your password - but we wont display it "

  # reading from a file
  cat somefile | while read line; do
    echo "line is: $line"
  done

  # somescript a b c d
  while [ -n "$1"]; do
   echo $1
   shift
  done

  #somescript -a -b paramValue -c -d -- e f g
  # replace the cmd line options with the ones provided by getopts
  set -- $(getopt -q ab:cd "$@")
  while [ -n "1" ]; do
    case "$1" in
      -a) echo "found -a option" ;;
      -b)
        echo "found -b option"
        echo "with value $2"
        ;;
      -c) echo "found -c option" ;;
      -d) echo "found -d option" ;;
      --)
          # shift out the -- so we only have
          # positional parameters in $@
          shift
          break ;;
      *) echo "$1 is not an option" ;;
    esac
    shift
  done


  #somescript -a -b paramValue -c -d -- e f g
  while getopts :ab:cd opt; do
    case "$opt" in
      a) echo "found -a option" ;;
      b)
        echo "found -b option"
        echo "with value $OPTARG"
        ;;
      c) echo "found -c option" ;;
      d) echo "found -d option" ;;
      *) echo "$1 is not an option" ;;
    esac
  done

  shift $[ $OPTIND - 1 ]
  echo "remaining parameters $1"


  ```

  ## REDIRECTS
  ```sh
  # output redirection: saving to file
    cmd > outputfile # overwrite
    cmd >> outputfile # append

  # input redirection: content of file as params to cmd
    cmd < inputfile

  # input redirection: inline
  # cmd << EOF
  #   data
  #   data
  # EOF

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

  # brackets
  var1=$[1 + 5]
  var2=$[$var1 * 2]
  var3=$[$var2 * ($var1 - 3)]
```


## STRUCTURED CMDS

### IF STATEMENTS / TEST / BRACKETS / DOUBLE PARANTHESIS
  - if statements can only validate the exit status of cmds
  - test: cmd validates TRUE/FALSE expressions
    - can also use single brackets `[ expression ]`
    - evaluates:
      - numeric comparisons
      - string comparisons
      - file comparisons
  - notes
    - cannot use floating point numbers
    - punctuation and capitalization are important for string comparisons
    - `>` and `<` string comparisons
      - are opposite of the `sort` cmd
      - must be escaped
    - double brackets provide pattern matching as well as all the regular string comparisons
```sh
  # syntax 1
  if pwd
  then
    echo it worked
  fi

  # syntax 2
  if pwd; then
    echo it still worked
  fi

  # else
  if unknowncmd; then
    echo is not gonna work
  else
    echo bad cmd
  fi

  # elif
  if unknowncmd; then
    echo is not gonna work
  elif pwd; then
    echo bad cmd
  fi

  # elif + else
  # the else is part of the elif block
  # not the else if block
  if unknowncmd; then
    echo is not gonna work
  elif unknowncmd; then
    echo bad cmd
  else
    echo 'if and elif = bad cmds'
  fi

  if [ expression ]; then
    dothis
  fi

  if [ exp1 ] && [ exp2 ]; then
    echo both are true
  fi

  if [ exp1 ] || [ exp2 ]; then
    echo atleast one is true
  fi

  # == indicates the string to the right is a regular expression
  if [[ $USER == r* ]]; then
    echo $USER contains character r
  fi

  if (( expr )); then
    echo truthy
  fi

  # numeric comparisons
  n1 -eq n2 ===
  n1 -ge n2 >=
  n1 -gt n2 >
  n1 -le n2 <=
  n1 -lt n2 <
  n1 -ne n2 !=

  ## DOUBLE PARENTHSIS
  ## includes numeric comparisons
  val++
  val--
  ++val
  --val
  ! logical flip
  ** exponentiation
  &&
  ||
  # ~ bitwise negation
  # << left bitwise shift
  # >> rigth bitwise shift
  # & bitwise boolean AND
  # | bitwise boolean OR

  # string comparisons
  # > and < must be escaped
  # else there parsed as redirection operators
  str1 = str2 ===
  str1 != str2
  str1 \< str2
  str1 \> str2
  #-n str true if str.length > 0
  #-z str true if str.length === 0

  # file comparisons
  #-d file true if file exists and is a directory
  #-e file true if file exists
  #-f file true if file exists and is a file
  #-r file true if file exists and is readable
  #-s file true if file exists and is not empty
  #-w file true if file exists and is writable
  #-x file true if file exists and is executable
  #-O file true if file exists and is owned by the current user
  #-G file true if file exists and the *DEFAULT* group is the same as current user
  #file1 -nt file2 true if file1 is newer than file2
  #file1 -ot file2 true if file1 is older than file2
```

### CASE STATEMENTS
```sh
  case $THISTHING in
    pat1 | pat2)
      echo do this stuff
      ;;
    *)
      echo 'do this if no match'
      ;;
  esac
```

##  LOOPS / ITERATION
  - you can pipe the output of a loop to other cmds/files by appending the pipe to the done statement
  - break - terminates the current loop
    - break 2 - terminates the parent loop
    - break N - etc
  - continue - stops the current iteration and begins the next iteration
    - continue N - see break
 - for loop: iterate through a series of values
   - the var used in the loop will retain the last value of the iteration for the remainder of the script!
   - assumes each value is separated by a space
   - c-style syntax
     - the assignment of the variable value can contain spaces
     - the variable in the condition isnt preceded with a dollar sign
     - the equation for the iteration process doesnt use the `expr` cmd
 - while loop
   - the test cmd is the same exact format as the if-then statement
   - if multiple test cmds are specified, only the last executed one is used to determine if the loop stops
   - the last iteration of the loop is the first falsy value!
     - remember this!!!!
 - until loop
   - the exact opposite of the while loop
   - do this while something is FALSE!

```sh
  for var in list; do
    echo 'this stuff for each $var'
  done

  for name in noah edward hall; do
    echo 'the name is $name'
  done

  for blah in $(cat some/file); do
    echo 'got $blah'
  done

  for (( a = 1; a < 10; a++)); do
    echo 'value is $a'
  done
  # with multiple vars
  # for (( a = 1. b = 2, etc; a < 10; a++)); do

  var=10
  while [ $var -gt 0 ]; do
    echo $var1
    var1=$[ $var - 1 ]
    if [ $var -eq 5]; then
      break
    elif [ $var -lt 2 ]; then
      continue
    fi
  done | sort
  # with multiple test cmds, each on a separate line
  # while echo $var1
  #       [ $var -gt 0 ]; do


  until [ $var -lt 0 ]; do
    echo $var
    var1=$[ $var - 1 ]
  done > somefile
  # with multiple test cmds, each on a separate line
  # while echo $var1
  #       [ $var -lt 0 ]; do

  # useful for keeping a menu on the screen
  # you should use `clear` effectively
  while [ 1 ]; do
    myshowmenufunc
  done;

```

### FUNCTIONS
  - must be defined before they are invoked
  - self-containment: a self-contained function doesnt use any resources outside of the function, other than whatever variables the script passes to it
  - recursive: a function that calls it self must be self-contained
  - have exit statuses
    - exit status returned by the last cmd
    - use the `return` cmd
      - must be a numeric value
  - passing parameters
    - can use the standard param environment variables to passed to scripts
      - this restricts you from accessing the script parameter values
      - thus you must manually pass the script params to the function
    - passing arrays: you must disassemble the array variable into its individual values and use the values as function parameters
      - within the function you can reassemble all the params into a new array variable
  - library file
    - any file you source within your script

```sh
  # syntax 1
  function myFunc {
    cmds
    return $[ $value * 2 ]
  }

  # syntax 2
  myFunc () {
    local newArraydd
    local returnValue=0
    return $returnValue;
  }

  # invokation
  myFunc
  myFunc param1 $var
  returnValue='myFunc'
```

## GRAPHICAL DESKTOPS
  - usually you wantt to cleear the display area and then show your menus
  - the core of a shell script menu is the case cmd
  - select statements are better than echo lines of text
  - dialog windows are better than select statements

### TEXT MENUS
```sh

  # using case statement
  clear
  echo -e Simple text menu
  echo -e "\t\t 1. Run simple loop"
  echo -e "\t\t 2. Echo function array"
  echo -en "\t\t Enter Option "

  read -n 1 opt
  case $opt in
  	1)
  		echo
  		simpleloop
  		;;
  	2)
  		echo
  		echoarray
  		;;
    *)

  		echo -e "\n you did not enter a valid option"
  		;;
  esac

  # using select statement
  # auto builds identical menu from above

  # function testmenu {
  # 	PS3="Enter Option..."
  # 	while [ 1 ]; do
  # 		select opt in \
  # 			"Run Loop" \
  # 			"Echo Array"\
  # 		; do
  			# case $opt in
  				# "Run Loop")
  			# 		clear
  			# 		echo -e "\n simpleloop"
  			# 		;;
  			# 	"Echo Array")
  			# 		clear
  			# 		echo -e "\n echoarray"
  			# 		;;
  			# 	*)
  # 					echo -e "\n you did not enter a valid option"
  # 			esac
  # 		done
  # 	done
  # }
```

### DIALOG WINDOWS
  - GNOME desktop additionaly has the following packages
    - gdialog
    - zenity
  - `dialog OPTIONS WIDGETS` you can have multiple options and multiple widgets
    - usage in scripts
      - check the exit status if there is a cancel/yes/no button
      - redirect STDERR to retrieve the output value
        - `dialogoutput=$(mktempt -t test.XXXXXX)`
        - `dialog... 2> $dialogoutput`
    - OPTIONS
      - `--title "My Title"`
      - too many to list
    - each widget provides output in two forms
      - STDERR
        - any data returned by the user
        -
      - exit code status
        - indicates the button selected by the user
    - OPTIONS
    -
    - --WIDGET PARAMS
      - widgets: dialog package term for a type of windows element
        - this list is old!!! checkout the new shiznit via `dialog`
        - calendar
        - checklist
        - form
        - fselect: a file selection window to browse for a file
        - gauge: a meter showing a percentage of completion
        - infobox: display a message without waiting for a response
        - inputbox: display a single text form box for text entry
        - inputmenu: provides an editable menu
        - menu: displays a list of selections from which to choose
        - msgbox: displays a message and requires the user to select an ok button
        - pause: displays a meter showing the status of a specified pause period
        - passwordbox: displays a single textbox that hides entered text
        - passwordform: displays a form with labels and hidden text fields
        - radiolist
        - tailbox: displays a text from a file in a scroll window using the tail command
        - tailboxbg: same as tailbox; but operates in background mode
        - textbox: displays the contents of a file in a scroll window
        - timebox: provides a window to select an hour, minute, and second
        - yesno: provides a simple message with yes and no buttons
      - examples
        - `dialog --inputbox "Enter your age" 10 20 2> age.txt`
        - `dialog --msgbox "Please click ok" 10 20 2> msgbox.txt`
        - `dialog --title "Please select yes or no" --yesno "This is a question" 10 20 2> yesnowithtitle.txt`
        - `dialog --inputbox "Enter your age:" 10 20 2>age.txt`
        - `dialog --textbox /etc/passwd 15 45`
          - good for display file content
        - `dialog --menu "Window based text menu" 20 30 10 1 "item 1" 2 "item 2" 2> windowtextmenu.txt`
        - `dialog --title "Select a file" --fselect $HOME/ 10 50 2>selectfile.txt`

## TEXT
### SED
  - stream editor: edits a stream of data based on a set of rules you supply ahead of time, before the editor processes the data
  - by default CHECKS ONE LINE AT A TIME!!!
    - if you want to check for patterns that space multiple lines you have to use multiline processing with the `N` cmd
    - sed concepts
      - data stream: a single line from the data you send it
      - pattern space: i.e. buffer space that holds the text examined by the sed editor while it processes commands
        - each line in the data stream gets processed one line at a time
        - the processing occurres in the 'pattern space'
      - hold space: temporarily hold lines of text while working on other lines in the pattern space
  - sed process
    - reads one data line at a time from the input
    - matches that data with the supplied editor commands
    - changes data in the stream as specified in the commands
    - outputs the new data to STDOUT
  - `sed OPTIONS SCRIPT FILE`
    - OPTIONS (confirm these options later)
      - `-e SCRIPT` adds commands specified in the script file to the commands run while processing the input
        - execute more than one command
        - omit -e to specify cmds inline
      - `-f file` adds the commands specified in the file to the commands run while processing the input
      - `-n` doesnt produce output for each command, but waits for the print command
      - use with the -p flag to only output lines that have modifications
    - COMMANDS
      - general notes
        - any flag can go in front of any cmd
        - and line address can go in front of any cmd
        - e.g. `'{ 1!g ; h ; $p}'`
          - 1 = line addressing
          - $ = line addressing
          - both appearing in front of a cmd
      - FLAGS
        - printing
          - command/p indicating that the contents of the original line should be printed
          - others
          - command/# a number indicating the 1-based index for which matched text should be substituted
            - e.g. /2 would replace the second occurrence
          - command/g global
          - command/!cmd ! negates the effect of `cmd`
      - HOLD SPACE
        - lets you copy text from the pattern space to the hold space
          - frees up the pattern space to load another string for processing
          - generally
            - h/H commands to move a string to the hold space
            - g/G/x commnads to move teh stored string back into the pattern space
        - h copies pattern space to hold space
        - H appends apttern space to hold space
        - g copies hold space to pattern space
        - G appends hold space to pattern space
        - x exchanges contents of pattern and hold spaces
      - MULTILINE
        - N adds the next line in the data stream to create a multiline processing
          - it moves the next line into the 'pattern space'
        - D deletes a single line in a multiline group
          - after deletiong, it forces sed to RETURN TO THE TOP OF THE SCRIPT WITHOUT READING THE NEXT LINE!!!
            - this can be very useful and magical
        - P prints a single line a multiline group
      - regular
        - `'s/replace regex/with this/FLAGS'` substitution
        - `i insertthisline` add a new line before the specified line
        - `a appendthisline` append a new line after the specified line
        - `c change (i.e. replace) this line`
        - `y/123/789/` replaces 1 with 7, 2 -> 8, 3->9
          - if the first block and second block have different lengths an error is produced
          - replaces each char globaly, without regard to the number of occurrences
          - w which means to write the results of the substitution to a file'
        - r reads data from a file
          - e.g. copying take from one file into another
          - cant use a range of addresses for the read cmd
          - only specify a single number or text pattern address
        - {n ; command} move to the next line and start processing again
          - e.g. sed '/header/{n ; d}'
            - find the line with 'header', move to the next line, and delete it
            - then start looking for another header and repeat
      - line addressing
        - by default the cmds apply to all lines of text
        - this enables you apply a cmd only to specific lines/group of lines
        - types
          - numeric range of lines
          - text pattern that filters out a line
      - BRANCHING
        - negate an entire section of cmds based on an adress, an address pattern, or an address range
        - permitting you to perform a group of cmds only on a specific subset within the data stream
        - `[address]b [label]`
          - address: determines whine line/lines of data trigger the branch command
          - label: defines the location to branch to
            - can be up to 7 chars in length
            - if the label parameter is omitted, the branch command proceeds to the end of the script
            - you can branch to any label whether before/after a given cmd
              - i.e. create a looping effect
      - TESTING
        - i.e. if-then statement on the text int he data stream
        - used to modify the flow of the sed editor script
        - instead of jumping to a label based on an address
          - it jumpts to a label base don the outcome of  a substitution cmd
        - `[address]t [label]`
          - if you omit the label sed branches to the of the script if the text succeeds
      - PATTERN MATCHING
        - `&` used to represent the matching pattern in the substitution cmd
          - whatever text matches the pattern - you can use the `&` symbol to recall it in the replacement pattern
        - \# replace individual matches
      - deletion notes
        - using two text patterns
          - sed '/first/,/second/d' blah.txt
            - first `turns on` line deletion
              - everytime /first/ is encountered it is turned on
              - becareful if /first/ is encountered AFTER second is encountered as it will turn on line deletion again
            - second `turns off` line deletion
              - everytime second is encountered it turns off
  - bash shell script support for sed editor programs
    - shell script wrappers:
      - wrapper acts as a go between for the sed editor script and the cmd line

```sh
  echo 'this is a test' | sed 's/test/big test/'
  sed 's/test/big test/' processEachLineInThisFile.txt
  sed -e 's/test/big test/; s/another/one/'
  sed -n 's/only/only output changed lines/p'
  sed 's/save/modifications to a file' thisfile.txt


  # printing
  sed -n '2,3p' printlines2to3.txt
  sed -n '/number 3/p' printlinesmatchingregex.txt
  sed '=' printlinenumbersnexttoeachline.txt

  # see the line number of a specific line
  sed -n '/findthisline/{
    =
    p
  }' andprintitslinenumberWithTheText.txt

  # see the before and after of changing a line
  sed -n '/forlineswiththis/{
    p
    s/replacethis/withthis/
  }' inthisfile.txt

  # change the string delimiter / => !
  # very useful
  sed 's!test!big test!'

  # line addressing (address range)
  sed '2s/dog/cat/' # only process line 2
  sed '2,3s/dog/cat/' # only process lines 2 and 3
  sed '2,$s/dog/cat' # process the 2nd line to the end of file

  # text pattern filters
  sed /pattern/command/
  sed '/IfLineHasThis/s/replaceThis/withThis/'

  # multiline
  sed '3,${
    /command/
    /pattern/
  }'

  # deleting
  sed 'd' deleteall.txt
  sed '2,3d' deletelines2to3.txt
  sed '/iflinehasthis/d' deleteit.txt

  # delete range of lines using two text patterns
  sed '/deleteWhenYouSeeThis/,/StopWhenYouSeeThis/d' deletestuff.txt

  # insert/append text
  # on two different lines
  sed 'i insertThis'
  before this

  # on a single line
  echo 'before this' | sed 'i insert this'
  echo 'after this' | sed 'a insert this'

  # within text
  sed '3a insert this after line 3'

  # insert multiple lines
  # must specify each line on a new line
  # inserts before line 1
  sed '1i\
  insert this line\
  and this line'

  # change a line
  sed '/ifyouseethis/c\
  replace it with this text
  '

  # change a group of lines to a single line
  sed '2,5c\
  replace lines 2 through 5 with this single line of text
  '

  # writing to files
  sed '1,2w tothisfile.txt' fromthisfile.txt
  sed '/findthistext/w putitinthisnewfile.txt' fromthisfile.txt

  # reading from files
  # copies all lines fromthisfile and inserts them
  # beginning at line 3 into atlineof
  sed '3r tothisfile.txt' fromthisfile.txt
  sed '/findthispattern/r tothisfile.txt' fromthisfile.txt

  # next cmd - single line
  # find the word header, and delete the next line
  sed '/header/{n ; d} somefile'

  # next cmd - multiline
  # put two lines on a single line
  # find the word next, move to the next line
  # find a new line character and replace it with a space
  # be sure to specify MULTILINE cmds BEFORE single line cmds
  sed '/first/{ N ; s/\n/ / }' somefile
  sed 'N s/replace.This/with This/ s/thenreplace/thisone/' inthisfile

  # delete - multiline
  # use capital D whenever your deleting using N
  # it forces the sed editor to return to the beginning of the script
  sed '/^$/{N ; /header/D}' somefile

  # print - multiline
  # prints only the first line in a multiline pattern space
  sed -n 'N ; /firstline\nsecondline/P' somefile

  # holding space
  # 1. find the line with `first`
  # 2. h - place it into the hold space
  # 3. p - print the pattern space (i.e. the line after the line containing `first`)
  # 4. n - retrieve the next data line in the data stream and place it into the pattern space
  # 5. p - print the contents of the pattern space
  # 6. g - place the contents of the hold space back into the pattern space
  # 7. p - print the pattern space
  sed -n '/first/ { h ; p ; n ; p ; g ; p }' somefile

  # reverse the order of a text file
  # 1. place a line in the pattern space
  # 2. place the pattern space line into the hold space
  # 3. put the next line of text in the pattern space
  # 4. append the hold space to the pattern space
  # 5. place everything int he pattern space into the hold space
  # 6. repeat steps 3-5 until youve put all lines in reverse order in the hold space
  # 7. retrieve the lines, and print them
  sed -n '{1!G ; h ; $p}' somefile

  # swap two lines
  sed -n '/swapThisLineWithTheNextLine/ {h ; n p ; g ; p }' somefile

  # negation
  # print all lines except the ones that match
  sed -n '/header/!p' somefile

  # branching
  # skips the second and third line
  sed '{2,3b ; /skip2,3/ ; /anddothis/ }' somefile

  # executes cmds between labels branch address doesnt match
  # execute cmd outside branches for matching lines
  sed '{
    /ifthisdontmatch/b jump1 ; s/do/this/ :jump1
    s/always/dothis/
  }' somefile

  # each iteration removes the first occurrence of a comma from a the text string and prints the string
  # but it never ends
  # this istuation creates an endless loop
  # searching for commas untilyouo manually stop it by sending a signal with ctrl c
  echo 'this, is, a, test, to, remove, commas' | sed -n '{
    :start
    s/,//1p
    b start
  }'

  # fixes the above never endless loop issue
  # by specifying an address pattern for the branch command to look for
  # if the pattern isnt present the branching should stop
  sed '{
    :start
    s/,//1p
    /,/b start # <-- look for , before looping
  }'

  # testing
  sed '{
    s/if this/do this/
    t
    s/else/do this/
  }' somefile

  # remove commas by looping with the test cmd
  echo 'this, is, a, test' | sed -n '{
    :start
    s/,//1p
    t start
  }'

  # recall matches
  sed 's/.at/"&"/'

  # replace individual matches
  # paranthesis groups must be escaped
  # returns 'that hat is pretty'
  echo 'that furry hat is pretty' | sed 's/furry \(.at\)/\1/'

  # bash wrapper for sed program
  # ./wrapperfile.sh somefile
  # reverses the text in somefile
  sed -n '{1!G ; h ; $p}' $1
```

### GAWK
  - the GNU version of the original awk program in Unix
  - use `ctrl+d` to exit from gawk on the cmd line
    - especially important if you have any `END` programs
  - provides a programming language instead of just editor commands like `sed`
  - capabilities
    - define variables to store data
    - use arithmetic and string operators to operate on data
    - use structured programming concepts
      - if-then statements
      - loops
    - generate formatted reports by extracting data elements within the data file and repositioning them in another order or format
      - PERFECT for log files
    - a bit slower than `sed` if ERE regular expressions are used
  - `gawk OPTIONS PROGRAM FILE`
    - OPTIONS
      - -F fs specifies a file separator for dileanting data fields in a line
      - -f file specifies a filename to read the program from
      - -v var=value defines a variable and default value used in teh gawk program
      - -mf N specifies the max number of fields to process in the data file
      - -mr N specifies the max record size in the data file
      - -W keyword specifies the compatibility mode or warning level for gawk
    - PROGRAM
      - print prints to STDOUT
    - FILE
      - if you dont specify a file, it waits for text to come in via STDIN
    - data field variables
      - each data field is determiend in a text line by a field separation character
        - default: any whitespace character (e.g. tab/space)
      - variables
        - $0 the entire line of text
        - $1 first data field
        - $X etc.


```sh
  gawk '{print "hello world"}'
  gawk '{print $1}' # prints the first character
  gawk -F : '{print $1}' # : is now the field separator
  gawk 'BEGIN {print "this is a header"} {print "this is body content"}'
  gawk '{print "this is body content"} END {print "this is a footer"}'
  # read the program from a file
  gawk somefile.gawk
  # BEGIN {
  #   print 'this is a header'
  #   # specify field separator here
  #   # so we dont force script consumers to use the -F option
  #   FS=":"
  # }
  # {
  #   print 'this is from a file'
  #   print 'each cmd on a single line'
  # }
```

# REGEX regular expressata stream
  - pattern template for filtering text
  - makes use of wildcard cbhbaracters to represent one or more charactesr in the data stream
  - regular expression engine: the underlying software that interprets regular expression patterns and uses those patterns to match text
    - BRE: POSIX basic regular expression engine
      - most common but not a powerful as ERE
      - sed uses a subsewt of BRE (focusing on speed)
    - ERE: POSIX extended regular expression engine
      - often found in programming languages
      - used by GAWK
  - general rules
    - everything is case sensitive by default
    - spaces are treated like any other character
  - BRE + ERE
    - special characters
      - /x./ - match a single `x` character
        - can match any character except a new line
      - * the previous character must match 0/more times
      - []
      - ^
      - $
      - +?
      - |
      - ()
      - anchors
        - /^must start with/
        - /must end with$/
    - character classes: specific sets of a characters to match
      - [abc] matches any `abc`
      - [0-9] matches the range of 0,1,2...9. disposability
      - [^abc] dont match an `abc` `[^]` is the negate pattern
      - [[:alpha:]] any alphabetical character ignoring case
      - [[:alnum:]] any alphanumeric character 0-9 + [[:alpha:]]
      - [[:blank:]] space/tab
      - [[:digit:]] 0-9
      - [[:lower:]] a-z
      - [[:print:]] printable characters
      - [[:punxr:]] punctuation character
      - [[:space:]] whitespace character: space, TAB, NL, FF, VT, CR
      - [[:upper:]] A-Z
  - ERE only
    - + preceding character can match 1/more times
    - {this[, that]} specify a limit on a repeatable regular expressions (i.e. interval)
      - `gawk` reguires the `--re-interval` option to recognize intervals
    - expr|expr one of the expressions must match
    - (exactly) creates a group that is treated like a standard character
    -
```sh
  sed '/^$/d' deleteblanklinesfromthisfile.txt

  # great for parsing words that may be misspelled
  echo 'Yes' | sed -n '/[Yy]es/p' # prints 'yes'

  /any.*characters/ # between any and characters

  /(c|b)a(b|t) # cat/cab/bat/bab

  # validate phone number
  #   optionally surround area code with paranthesis
  #   must have an area code
  #   area code and first three separated by empty space/space/dot/dash
  #   first and last four separated by space/dot/dash
  /^\(?[2-9][0-9]2\)?(| |-|\.)[0-9]{3}( |-|\.)[0-9]{4}/

  # validate email address username@hostname
  #   username:
  #     any alphanumeric
  #     dot/dash/plus sign/underscore
  #  hostname: e.g. server.subdomain.topleveldomain
  #   one/more domain names and a server name
  #     any alphanumeric
  #     dot/underscore
  #   domain names + server names separated by a dot
  #   top level domain name not followed by a dot
  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.])+\.([a-zA-Z]{2,5})$/

```

## FILE GLOBBING
  - process of producing filenames/pathnames that match a specified wildcard character
  -  e.g. ls -l my?script
  - ? one character
  - * any number of chars
  - [ab] either one
  - [a-z] a range
  - [!a] this character is not 'a'


