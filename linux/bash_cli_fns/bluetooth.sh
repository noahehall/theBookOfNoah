#!/bin/sh

get_bluetooth_devices() {
  bluetoothctl devices | cut -f2 -d' ' | while read uuid; do bluetoothctl info $uuid; done | grep -e "Device\|Connected\|Name"
}

restart_bluetooth() {
  echo 'killing bluetooth for 2 seconds'
  rfkill block bluetooth
  sleep 2s
  echo 'restarting bluetooth'
  rfkill unblock bluetooth
}
