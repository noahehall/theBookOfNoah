#!/bin/env bash

# apt ----------------------------------
alias apt_refresh='sudo apt update && sudo apt upgrade'
alias apt_upgradable='sudo apt list --upgradable'
alias apt_fix_broken='sudo apt install --fix-broken'
alias apt_fix_configure='sudo dpkg --configure --force-overwrite -a'
alias apt_search_i3='apt search ^i3xrocks'
alias apt_search_looks='apt search ^regolith-look-'
alias apt_pkg_search_cache='apt-cache search --names-only '
alias apt_pkg_search='apt list'
alias apt_pkg_search_desc='echo -e "this accepts regex" && apt search'
alias apt_pkg_about='apt show'
alias apt_ppa_add='sudo add-apt-repository'
alias apt_ppa_remove='sudo add-apt-repository --remove'
