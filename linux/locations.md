# easy to linux forget locations
 - apt-get sources: /etc/apt/sources.list.d


# app locations
## mongodb
  - configuration: `/etc/mongod.conf`
  - unit file: `/etc/systemd/system/mongodb.service`
    + if it doesnt exist, create it
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
