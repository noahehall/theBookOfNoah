# books
  - docker in action
    - jeff nickoloff


# background
  - about
    - launched in 2013
    - works with the OS to package, ship and run software
    - a tool for efficiently installing, removing, upgrading, distributing, trusting and managing software
    -
  - use cases
    - easier to install and run software distributed with software
    - managing large scale systems or data centers
    - creating build, test and deployment pipelines
    - for use with networking applications, databases, mail servers, terminal applications, etc.

# terminology
  - jail
    - describes a modified runtime environment for a program that prevents that program from accessing protected services
  - container
    - aka jail
    - the goal has been expanded from preventing access to protected resources to isolating a process from all resources except where explicitly allowed
  - virtualization
    - hardware virtualization
      - aka virtual machines
      - provide virtual hardware on which an operating system and other programs can be installed
      -



# architecture
  - docker is a commandline program, a background daemon, and a set of remote services that take a logistical approach to solving common software problems
    - installing, running, publishing and removing software
  -

## cmd line

## daemon

## containers
  - uses existing container engines to provide consistent containers built according to best practices
    - any software run with docker is run isnide a container
    - software running inside docker containers interface directly with the hosts linux kernel
## images
