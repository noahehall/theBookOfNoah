#!/bin/sh

audio_open_alsamixer() {
  # $ F6 > select device
  # left/right arrow keys, M to toggle mute
  alsamixer
}
audio_open_pavucontrol() {
  # make sure pulseaudio is configured correctly
  pavucontrol
}
audio_list_devices() {
  sudo lshw -C sound
}
