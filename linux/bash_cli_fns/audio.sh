#!/bin/sh

# $ alsomixer
# $ F6 > select device
# left/right arrow keys, M to toggle mute
audio_open_mixer() {
  alsamixer
}
audio_list_devices() {
  sudo lshw -C sound
}
