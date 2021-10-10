apps software-properties-common htop curl apt-transport-https wget

check type of graphics driver system is using: sudo lshw -c video
 install gnome-shell-extensionns: apt install gnome-shell-extensions

sudo apt install vlc
    and these
        $ sudo apt install vlc-plugin-access-extra libbluray-bdj libdvdcss2
        vlc-plugin-svg
        vlc-plugin-video-output

sudo apt install conky-all
    cp /etc/conky/conky.conf ~/.conkrc
    [check this](https://linuxconfig.org/ubuntu-20-04-system-monitoring-with-conky-widgets)

get your external ip addr
    curl -w "\n" -s <https://api.ipify.org>

[graphics driver](https://linuxconfig.org/ubuntu-20-04-tricks-and-things-you-might-not-know#h6-internet)

list all services
    $ systemctl list-units --all --type=service --no-pager
list all systemd unit files
    systemctl list-unit files --no-pager
get services in specific status
    $ systemctl list-units --all --type=service --no-pager | grep running|dead
get enabled/disabled systemd service unit states
    $ systemctl list-unit-files | grep enabled|disabled
set service status
    systemctl start|stop|enable|disable servicename

enable user themes
    <https://extensions.gnome.org/extension/19/user-themes/>
    so you can set a user theme in gnome tweak tool

     sudo apt install ideviceinstaller libimobiledevice-utils usbmuxd libimobiledevice6 libplist3 ifuse

ubuntu

- [tor](https://2019.www.torproject.org/docs/debian.html.en)
- [multi audio sources](https://linuxconfig.org/how-to-enable-multiple-simultaneous-audio-outputs-on-pulseaudio-in-linux)
  - pulseaudio -k
  - pulseaudio -D
- sudo apt install jackd qjackctl
  - $ qjackctl

- optomizations
  - sudo apt install preload
  - free -m #amout of free memory
  - sudo lshw -c memory # type and speed of ram
  - <https://oguzhaninan.github.io/Stacer-Web/>
    - sudo apt install stacer
  - sudo apt install lubuntu-desktop
