# TLDR

## links

- [download](https://www.virtualbox.org/wiki/Downloads)
- isos
  - [windows 10](https://www.microsoft.com/en-us/software-download/windows10ISO)
  - [kali linux](https://www.kali.org/get-kali/#kali-virtual-machines)
  - [guest additions](https://download.virtualbox.org/virtualbox/)
    - you have to match it to your version

## best practices

- generally you want to group machines (select some and right click)
- removing a VM from vbox manager does not delete the files on the host
  - you can later readd them
- delete vms if you want to remove the VB from vbox manager & delete the files from host
- check resource monitor in a running guest to troubleshoot performance issues
  - then you know what resource you need to allocate more of
- the guest USB controller needs to match whatever type of usb device your attaching to it
- ensure when you clone a machine, the MAC addresses are different
- bridged network ties the guest network adapter to a specific host network adapter, so make sure the host NAT hasnt changed

## basics

- acts as a hypervisor
- lets you run an operating system, within your operating system
  - changes in the guest dont affect the host
- hypervisor provides a protected space for a guest OS
  - guest OS: the virutalized OS
  - host OS: the OS running the hypervisor
  - responsible for sharing resources
    - cpu
    - memory
    - storage
    - communication

- appliances: virtual machines packaged for distribution
  - setup a base VM then xport it
    - file > export appliance

- snapshots: save the state of a vitual machine at any point in time
  - can roll back to a previous snapshot
  - useful for testing different changes
  - but arent appropriate for backups

- clones: full copy of a virtual machine
  - creates an identical but independent copy of a VM
  - useful for creating base VMs

### GUI

- virutal box manager: the interface to create, modify virtual machines
- file
  - network operations manager: info about virtual networks
  - machine:
- tools: click the drop down on its right to see more options
  - welcome: the default view
    - preferences: manager preferences:
      - general
        - default machine folder: where the vm data will be stored
      - input: modify guest OS and manager keybindings
        - auto capture keyboard: leave it at true
      - update:  auto update: disable this
      - language
      - display
      - network: manage virtual networks
      - extensions: manage extensions
      - proxy: configure a proxy to connect to the net
    - import: appliances: a self-contained virtual machine
    - export: appliances: distribute it to others
    - new: virtual machine
    - add: virtual machine
  - media: virtual disks & disk images
  - network: edit the managers network adapters
  - cloud: oracle cloud infra

### extensions

- guest editions: set of drivers for guest OS to make the experienc better
  - VB by defualt provides emulated hardware, but sometimes it isnt enough
  - guest additions has additional drivers
    - share folders & clipboards
    - video drivers
    - etc
    - once you start the guest OS, insert the guest additions as a CD-ROM into an optical drive, and install it on the guest OS
- extension pack:
  - enable support for USB 2, 3, disk encryption, PXE boot, etc
  - has a separate license

### host resources

- to adjust an existing VM resources
  - make sure its in the POWERD OFF state
  - file > closed > poweroff
- processor: allocating CPU resources
  - how many processor cores to give to the host
- memory (RAM)
  - how much RAM the guest OS will think it has
  - always leave some for the HOST
  - sets a maximum amount, thats dynamically used as needed by the Guest
- storage (HDD/SSD)
  - usually create a virtual disk image on the host to act as the guests disk
    - dynamic: grows in size as data is added to it
    - fixed: takes up the specified size on a disk
      - faster but takes up alot of space
  - can provide direct access to whole disks/partitions as well
  - resource limitations
    - overprovisioning: allocating more resources than the host has to multiple guest OS
      - e.g. host has 10 gb of ram, but you give 5 gb each to 3 Guest OSs
      - ^ yovue overprovisioned 5gb
  - providing devices: guests get a set of emulated hardware (chipset, pci, etc)
    - can provide guest access to host devices (like plugging a webcam into the guest OS)

### Guest OS

- you need an installer (disk / ISO image)

- creating a new Machine
  - manager > new
    - version: make sure it matches the ISO
    - name: name the VM that will be created using the ISO
    - ram: keep it in multiples of 1024 (1 gb)
    - hard disk type
      - cant be used with other virutalization softare
        - VDI: virtualbox disk image
      - can be used with other virtualization software
        - VHD: virtual hard disk
        - VMDK: virtual machine disk
      - size: 80gb is good for long term machines

- managing existing: everything is left/right clickable
  - ensure your guest is shutdown to modify all settings
  - settings: alternatively you can click an option in the main screen
  - start: after you configure the VM settings, click to start the machine
    - normal: with a display
    - headless: start the machine without a display attached
    - detachable
  - click the name in the left sidebar (directly under tools)
    - storage:
      - optical drive: cd-rom
        - this is where you attach the ISO you downloaded, or other cdroms
  - storage:
    - where you add/remove/modify harddisks attachd to the VM
    - after creating a new disk, log into the VM and add a filesystem to it
  - networking
    - with all modes, you still need to setup port forwarding on the host to enable inbound communicatoin from the host to VM
    - can mix n match
      - global setting in VB manager
      - settings in a specific VM

    - NAT:
      - allows the guest to access the internet and systems on hosts network
      - prevents other VMs on the host from initiating communication with the guest
      - default private: 10.0.2.15
      - default public: 10.0.2.2 (as seen from host)
        - each VM gets the same defaults, hence the issue with NAT and multiple VMs

    - NAT Network
      - still uses NAT mode, but creates a virtual network for ALL guests to share
        - then you add guets to the virtual network so they can communicate with each other, as well as the internet
        - need to create one first
          - VB manager > preferences > network
          - ensure each guests has a different mac address
      - default nat cidr: 10.0.2.0/24
      - default DHCP server: 10.0.2.3
      - default gateway: 10.0.2.1
      - HOST: 10.0.2.2 (as seen from VMs)
      - each VM gets: 10.0.2.#

    - Bridged mode: enable VMs to participate as machines on the host network
      - joins the guests to the same network as the HOST, by sharing the hosts network interface
      - enables bridged guests to communiate with the host, each other, and machines on the host network
      - the IP addresses for all systems will be in the same range
        - i.e. they share the cidr of the HOSTS DHCP server

    - internal
      - VMs can communicate with each other but not with the host/internet
      - need to have their own addressing schemes setup manually on each guest
        - i.e. like you do on a network without a DHCP server
    - host only network
      - same as internal, but includes the HOST in the guest network
      - guests have no access to the hosts network or internet

- a specific VM
  - file
    - preferences: for virtualbox manager
  - machine: specific to this VM
    - snapshot: current machine state
    - session info: config & runtime details of the VM
    - pause: temporarily freeze the VM
    - reset: restart the machine
    - ACPI shutdown: shutdown gracefull (the recommended safe way to shutdown the machine)
    - view: appearance of the window
  - devices
    - generally you want to insert the guest additions and install it on the guest OS
  - settings: go through all of these while the VM is off
    - system:
    - display:
      - graphics controller:
        - vbsvga: best for newer windows

- port forwarding
  - useful for development tasks on a specific port
  - bridged mode:
    - automatically available on the host because its participating in the HOST network
    - no need for port forwarding
  - other network modes
    - forward a port from the GUEST to a port on the HOST
    - NAT
      - VM > network > advanced > port forwarding
    - nat network
      - VB manager > file > preferences > network > find the port forwarding option
    - port forwarding options
      - protocl: tcp/udp
      - host port
      - guest port: above 1024 on linux, anything on windows
      - guest IPusually 10.0.2.4, or 10.0.2.15
        - just get it from command line

- sharing
  - shared folders (specific instance)
    - settings > shared folders
    - folder path: on host
    - name: filesystem safe name on guest
    - readonly
      - always for security
    - auto-mount (need to restart the guest)
      - easiest option so you dont need to manually mount
    - make permanent
      - yes: shows up under machine folders
      - no: shows up under transient folders
    - mounting shared folders in guests
      - windows: `net use x:\\vboxsvr\sharename`
      - linux:
        - `mkdir /mnt/sharepath`
        - `mount - vboxsf sharename /mnt/sharepath`
        - `usermod -aG vboxsf $(whoami)`

  - clipboard (specific instance)
    - start machine > devices > clipboard > select option
    - always host to guest for security
  - drag and drop
    - start machine > devices > drag n drop > select optoin
    - always host to guest for security

## quickies

### key bindings

```sh
  # manager ----------------------------
  # switch input to the manager, so you can talk to the host
  # allows us to direct commands to the host instead of the guest
  right ctrl
    H # ACPI shutdown
    A # adjust window size
    Q # close
    F # full screen
    M # minimize window
    P # Pause
    HOME + popup menu


  # command line tools: preinstalled with vb

  # main service
  # ^ see linux/.bash_aliases.sh for stuff
  # ^ required to expand the disk a vm is currently using
  # ^^ still need to expand the filesystem within the guest
  vboxmanage
    # find the path in the vbox manager
    # you then need to log into the guest
    # ^ confirm the disk size has been updated
    # ^ unmount the partition on the disk
    # ^ resize the partition on the disk
    # ^ resize the filesystem on the partition thats on the disk
    # ^ remount the partition on the disk
    # ^^ make sure you mount under /media/ so it shows up in the file browser
    modifyhd pathToDiskOnHost.vdi --resize newSizeInMB






```
