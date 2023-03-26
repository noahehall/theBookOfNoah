#!/usr/bin/env bash

# @see https://sw.kovidgoyal.net/kitty/overview/

kitty_shortcuts() {
  # you probably want a new window, and not a tab
  # window === split current tab
  cat <<-'KEEP_FORGETTING'
		tab new: ctrl shift t
    tab close: ctrl shift q
    tab layout cycle: ctrl shift l
    window close: ctr shift w
    window move backward: ctrl shift b
    window move forward: ctrl shift f
    window new: ctrl shift enter
    window resize: ctrl shift r
	KEEP_FORGETTING
}
