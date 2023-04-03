#!/usr/bin/env bash

mac_shortcuts() {
  cat <<-'KEEP_FORGETTING'
		vscode cmd pallete: alt shift p
    vscode bottom menu: alt j
    vscode dupe line: start shift up/down
    vscode jump head/tail: alt up/down
    vscode move line: start up/down
    vscode next file: alt start left/right
    vscode sel multiline: alt start up/down
	KEEP_FORGETTING
}

mac_cp_bashrc() {
  cp ~/git/foss/theBookOfNoah/linux/.bashrc_mac ~/.bashrc
}
