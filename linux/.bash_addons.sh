#!/usr/bin/env bash

#https://github.com/dylanaraps/neofetch
if type neofetch &>/dev/null;
	# --config /path/to/config
	# --config none
	then neofetch \
		--config none \
		--cpu_temp F \
		--gpu_type all \
		--memory_unit gib \
		--os_arch on \
		--stdout



# --disk_percent on --disk_subtitle name --disk_show /

else
	echo 'neofetch not installed'
fi
