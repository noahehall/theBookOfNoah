# UFW firewall

- [configure ufw on ubuntu](https://www.vultr.com/docs/how-to-configure-ufw-firewall-on-ubuntu-14-04)

## basics

- UFW: uncomplicated firewall: interface to iptables
- iptables:

# commands

- `ufw allow|deny port/optional:protocol`
  - ufw allow 80/tcp
- `ufw status`
- `ufw status numbered`: get the number for each rule
- `ufw delete [number]`: delete a numbered rule
- `ufw disable|reload|enable`
- to restart ufw 1. disable 2. enable
- `ufw reset`: go back to default settings

# tips and tricks

- see which applications have profiles in UFW
  - `sudo ufw app list`
- see profile configuration
  1. find the profile name via `sudo ufw app list`
  2. get the info `sudo ufw app info "Apache Full"`
  - Apache Full = a profile
- allow incoming traffic for a profile (e.g. apache full)
  - `sudo ufw allow in "Apache Full"`
  - `sudo ufw allow 'Nginx Full'`
- set default policies
  ```
    sudo ufw default deny incoming
    sudo ufw default allow outgoing
  ```
- get status of firewall
  `sudo ufw status verbose`
- allow a service, e.g. ssh
  `sudo ufw allow ssh`
- allow a port, e.g. 22
  `sudo ufw allow 22`
- allow a range of ports, you must specify the protocol

```
 sudo ufw allow 6000:6007/tcp
 sudo ufw allow 6000:6007/udp
```

- allow a specific ip
  `sudo ufw allow from 15.15.15.51`
- allow a specific ip access to a specific port
  `sudo ufw allow from 15.15.15.51 to any port 22`
- allow subnets, i.e. a range of ip address e.g. 15.15.15.1 to 15.15.15.254
  `sudo ufw allow from 15.15.15.0/24`
