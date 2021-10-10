# links

- alfa awus1900
  - [always use this one](https://github.com/morrownr/8814au.git )
  - [alppha1900 install](https://github.com/aircrack-ng/rtl8814au)
    - get the options to enable automatic usb3 for the higher throughput
    - and use it to set the options (but use the first link above for the automated install)
  - [how to install wifi adapters with rtl8814au](https://miloserdov.org/?p=5493)

## todo

  man iwconfig

# looks like this whn trying to connect

- sudo iwconfig wlps20

  ```
        wlp2s0    IEEE 802.11  ESSID:"SOME WIFI NAME"  
          Mode:Managed  Frequency:2.412 GHz  Access Point: 8E:15:44:AB:44:A3   
          Bit Rate=26 Mb/s   Tx-Power=1 dBm   
          Retry short limit:8   RTS thr:off   Fragment thr:off
          Encryption key:off
          Power Management:on
          Link Quality=42/70  Signal level=-68 dBm  
          Rx invalid nwid:0  Rx invalid crypt:0  Rx invalid frag:0
          Tx excessive retries:0  Invalid misc:0   Missed beacon:0
  ```

# looks like this when actually connected

- sudo iwconfig wlps20

    ```
      wlp2s0    IEEE 802.11  ESSID:"SOME WIFI NAME"  
          Mode:Managed  Frequency:2.412 GHz  Access Point: 8E:15:44:AB:44:A3   
          Bit Rate=78 Mb/s   Tx-Power=200 dBm   
          Retry short  long limit:20   RTS thr:off   Fragment thr:off
          Encryption key:off
          Power Management:on
          Link Quality=41/70  Signal level=-69 dBm  
          Rx invalid nwid:0  Rx invalid crypt:0  Rx invalid frag:0
          Tx excessive retries:0  Invalid misc:0   Missed beacon:0
    ```

# broadcom specific

- [good list of todos](https://askubuntu.com/questions/55868/installing-broadcom-wireless-drivers)

# fucking up your settings

- first follow all errors
    sudo dmesg --follow | grep wl

- then see current settings
    sudo iwconfig
    sudo iwlist wlps20

- then fuck shit up
    sudo iwconfig wlps20 SETTING VALUE
      sudo iwconfig wlp2s0 retry limit short 50
      sudo iwconfig wlp2s0 retry limit long 150
      sudo iwconfig wlp2s0 retry limit short 10 retry long 100
      sudo iwconfig wlp2s0 frag fixed
      sudo iwlist wlp2s0 event # see list of available events

# identify system info

  lspci -vvnn | grep -A 9 Network
  lsb_release -rd
  uname -a
  sudo dmidecode -s bios-version
  sudo dmidecode -s bios-release-date
  ifconfig
  
# switching between drivers

  disable
    sudo modprobe -r DRIVER_1 DRIVER_X
      e.g. bcma wl
  enable (only one at a time)
    sudo modprobe wl
  blacklist drivers
    sudo nano /etc/modprobe.d/someblacklist.conf
    add
      blacklist drivername
    update the initramfs after changes to blaccklist files
      sudo update-initramfs -u

# seeing debug info for a driver

  sudo dmesg | grep DRIVER_NAME (e.g. wl)

# links

- [switch from NetworkManager to systemd-networkd](http://xmodulo.com/switch-from-networkmanager-to-systemd-networkd.html)

# examples

- cat /usr/share/doc/netplan/examples/wireless.yaml

# networkd

- for servers

# NetworkManager

- fuck network manager

# wtf

- check these files
  - /etc/netplan/*.yaml
- `sudo netplan generate`
- `sudo netplan apply`

# programs

- wpa_supplicant for wifi
- wpagui for a GUI to wpa_supplicant

```sh

  iwconfig #see wireless devices
  iwlist scan | grep ESSID #see available wifis

```
