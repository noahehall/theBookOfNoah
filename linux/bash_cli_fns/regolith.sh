#!/usr/bin/env bash

regolith_version() {
	local file=/etc/regolith/version
	test -f $file && cat $file
}

regolith_shortcuts() {
	# all shortcuts require super key
	cat <<-'KEEP_FORGETTING'
		**** see all ****: shift ?
		browser: shift enter
		change look: alt l
		launcher **/*/bin cmds: shift space
		launcher apps: space
		notifications: n
		open files: alt s
		quit current app: shift q
		quit force current app: alt q
		settings: c
		terminal: enter
		windows: ctrl space
		workspace new: backtick
		workspace next: tab
		workspace specific: 0-9
		worskpace prev: shift tab

	KEEP_FORGETTING
}
