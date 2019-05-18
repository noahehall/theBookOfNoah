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


# BOOKMARK: pg 124 coproc cmd

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


## file system
  - Linux does not use drive letters in pathnames
  - Virtual directory: Contains file paths from all the storage devices installed on the computer, merged into a single directory structure, however the actual files and directories could be located physically on any of the harddrives attached to the system
  - Root: the base directory; all other files and directories in the virtual directory are stored here
  - Root drive: the first hard drive installed on the system
  - Mount points: directories in the virtual directory where you can assign additional storage devices


### FILES
  - linking files: when you need to maintain 2/more copies of the same file on the system; have one physical copy and multiple virtual copies
  - Link: a placeholder in a directory that points to the real locatin of the file
  - Symbolic link: a physical file that points to another file somewhere in the virtual directory structure; but they do not share the same contents
  - Hard link: creates a separate virtual file that contains information about the original file and where to locate it, however they are physically the same file


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
  - Process list w/out subshell: cmd list must end with a semicolon
    - { cmd1 && cmd2; cmd3; }
  - Background mode: allows the cmd to be processed in a subshell while releasing the CLI back to the user
    - cmd1& `its the & that forces background mode`
      - Returns the job number and the PID of the process
    - Co-processing: spawns a subshell in background mode and executes a command within that subshell
      - coproc : See CLI CMD QUICKIES section



# important files and locations
## important locations
  - / : root
  - /bin/ : many GNU user-level utilities
  - /boot/ : boot files
  - /dev/ : where linux creates device nodes
  - /etc/ : system configuration directory
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


## important files
  - /etc/inittab: a table of processes to start automatically on bootup
  - /home/[username]/.bash_history `all the cmds entered`
  - /etc/passwd: contains a list of all the system user accounts a long with some basic configuration information about each user
    - User entry: one per line consisting of seven fields delimited by colons that are each used to assign specific features for the user
    - Example entry: noahjedwardhall:x:501:501:Noah Edward:/home/noahedwardhall:/bin/bash


# important environment variables
  - Environment variables: store information about the shell session and the working environment
  - Used to store data in memory
  - Global vars:
  - Local vars:
  - vars
    - BASH_SUBSHELL `used at the end of a cmd/process-list to determine how many subshell(s) were created
    - LS_COLORS: controls the color for different types of text displayed in a terminal emulator
    - HISTISZE: how many cmds are kept in bash history



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
    - !! : reuse the last command
    - ! history_cmd_number: issue the CMD at line # in history

  - alias CMD OPTIONS: create an alias name for common commands (and their params)

  - which CMD: finds  the program file in the users path

  - type -a CMD: determines if a program is builtin/esxternal and finds all program files of CMD

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


# PROCESSES
  - coproc JOB_NAME { CMD; }:  spawns a subshell in background mode(job) and runs CMD in that subshell; returning the background job number and the PID
    - `coproc cmd` same thing but without naming the job
    - `coproc ( cmd1; cmdX )` combine co-processing with process lists creating nested subshells

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


# REGEX
## FILE GLOBBING
  -  e.g. ls -l my?script
  - ? one character
  - * any number of chars
  - [ab] either one
  - [a-z] a range
  - [!a] this character is not 'a'





