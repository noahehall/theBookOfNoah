# TLDR

## links

- [download](https://www.virtualbox.org/wiki/Downloads)
- isos
  - [windows 10](https://www.microsoft.com/en-us/software-download/windows10ISO)
  - [kali linux](https://www.kali.org/get-kali/#kali-virtual-machines)
  - [guest additions](https://download.virtualbox.org/virtualbox/)
    - you have to match it to your version

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

```
