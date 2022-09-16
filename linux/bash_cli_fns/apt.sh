#!/bin/env bash

# apt ----------------------------------
alias apt_refresh='sudo apt update && sudo apt upgrade'
alias apt_upgradable='sudo apt list --upgradable'
alias apt_fix_broken='sudo apt install --fix-broken'
alias apt_fix_configure='sudo dpkg --configure --force-overwrite -a'
alias apt_search_i3='apt search ^i3xrocks'
alias apt_search_looks='apt search ^regolith-look-'
alias apt_search_pkgs='apt-cache search --names-only '
alias apt_add_ppa='sudo add-apt-repository'
alias apt_remove_ppa='sudo add-apt-repository --remove'
