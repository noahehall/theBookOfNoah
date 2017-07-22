# easy to linux forget locations
 - apt-get sources: /etc/apt/sources.list.d

## services
  /etc/services - see which apps are listed as services
  /etc/systemd/system - apps configured to run at startup
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
