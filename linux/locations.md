# easy to forgetlinux locations
 - apt-get custom sources: /etc/apt/sources.list.d/
  - create a file /some-source-name.list
  - add and remove your sources here instead of in /etc/apt/sources.list
 - apt-get default sources: /etc/apt/sources.list
  - this file may not survive a rebundle, dont edit it

## services
  /etc/services - see which apps are listed as services
  /etc/systemd/system - apps configured to run at startup

# systems
  - /etc/bash.bashrc - system wide bashrc
  - ~/.bashrc - user specific bashrc
  - /etc/environment contains only variable definitions

## users
  ```
    /etc/passwd – User account information.
    /etc/shadow – Secure account information.
    /etc/group – Group account information.
    /etc/gshadow – Secure group account information.
    /etc/login.defs – Shadow password suite configuration
  ```
## networking
  - /etc/default/ufw - firewallconfiguration

# app locations
## nginx
  - default location: /usr/local/nginx
## mongodb
  - configuration: `/etc/mongod.conf`
  - unit file: `/etc/systemd/system/mongod.service`
    + if it doesnt exist, create it
    + configuration file when running mongodb as a service
    ```
      # https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-16-04
      [Unit]
      Description=High-performance, schema-free document-oriented database
      After=network.target

      [Service]
      User=mongodb
      ExecStart=/usr/bin/mongod --quiet --config /etc/mongod.conf

      [Install]
      WantedBy=multi-user.target
    ```
  - data files: `/var/lib/mongodb`
    + should be owned by the user that runs the mongodb process
  - log files: `/var/log/mongodb`
    + should be owned by the user that runs the mongodb process
