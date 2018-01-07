# basics

 - Do note that configuration files can exist in three different locations with the precidence from most important to least as follows:
 - Alphabetically later files, no matter what directory they are in, will amend keys if the key does not already exist and override previous keys if they do.
 - interfaces configured in .yaml files will work now and start at boot

      ```sh
        /run/netplan/*.yaml
        /etc/netplan/*.yaml
        /lib/netplan/*.yaml
      ```
  - files are generated in `/run/systemd/network/`
  - To retain connectivity while you configure interfaces, IP addresses are not removed from interfaces when you run netplan apply. To remove addresses manually, you can
      ```sh
        use ip address del <address> dev <interface>.
      ```


# cmds
  - generate necessary backend configuration `netplan generate`
  - apply the generated config `netplan apply`
  - see the available interfaces `networkctl`


old confs
copy files and contents `cp -avr /source/. /dest/`
```
/etc/NetworkManager

```

potential
```sh
wifi

network:
  version: 2
  renderer: networkd
  wifis:
    wlp2s0:
      dhcp4: yes
      access-points:
        Front Pembebasan Internet (FPI):
          password: ***up2udude***
      nameservers:
        addresses: [185.121.177.177, 169.239.202.202]
```


# config file
## common
  network:
    version: 2
    [device type: ethernets: wifis: bridges:]
      match:
        name: [device name, e.g. wlp3s0]
        macaddress: [match a mac address]
        driver: [match a driver]
      set-name: [give device new name]
      wakeonlan: [true|false (default)]
      renderer: [networkd|NetworkManager]
      dhcp4 (bool)
      dhcp6 (bool)
      addresses: [192.168.14.2/24, 2001:1::1/64] #add static addresses in addition to any received via DHCP/RCA
      gateway4: 172.16.0.1 [set default gateway, requires addresses to be set too]
      gateway6: 2001:4::1

## ethernets
  network:
    version: 2
      ethernets:
        [..get from above]
        nameservers:
          search: [lab, home]
          addresses: [8.8.8.8, FEDC::1]

# wifis
  network:
    version: 2
      wifis:
        renderer: NetworkManager
        name: wlp3s0
        access-points: []
        password: ""
        mode: [infrastructure (default)|ap|adhoc]
