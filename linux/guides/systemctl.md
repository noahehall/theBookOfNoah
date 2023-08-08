- [managing systemd processes with systemctl](https://www.digitalocean.com/community/tutorials/how-to-use-systemctl-to-manage-systemd-services-and-units)

# terminology
  - units: Units are categorized by the type of resource they represent and they are defined with files known as unit files.
    - which are resources that systemd knows how to manage
  - Systemd: is an init system and system manager that is widely becoming the new standard for Linux machines
    -  the target of most actions are "units"
    - The type of each unit can be inferred from the suffix on the end of the file.
      - For service management tasks, the target unit will be service units, which have unit files with a suffix of .service
  - init system: The fundamental purpose of an init system is to initialize the components that must be started after the Linux kernel is booted (traditionally known as "userland" components).
    -  also used to manage services and daemons for the server at any point while the system is running
# background

# ubuntu service manager
# tips and tricks
  - get status of an app `systemctl status apache2`
  - restart service `sudo systemctl restart nginx`
  - enable an app's service  `systemctl enable apache2.service`


# commands
  - `systemctl` : central management tool for controlling the init system.

  - managing a service: `sudo systemctl status|start|stop|restart|reload application.service`
  - enabling/disabling services at boot: `sudo systemctl enable|disable application.service`
    - This will create a symbolic link from the system's copy of the service file (usually in /lib/systemd/system or /etc/systemd/system) into the location on disk where systemd looks for autostart files (usually /etc/systemd/system/some_target.target.wants.
