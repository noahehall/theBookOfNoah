#!/usr/bin/env bash

# use apt-fast if its installed
if hash apt-fast 2>/dev/null; then
  alias oldapt='/usr/bin/apt'
  alias apt='/usr/bin/apt-fast'
else
  echo 'unable to ovelroad apt with apt-fast'
fi

# apt ----------------------------------
alias apt_fix_broken='sudo apt install --fix-broken'
alias apt_fix_configure='sudo dpkg --configure --force-overwrite -a'
alias apt_pkg_about='apt show'
alias apt_pkg_search_cache='apt-cache search --names-only '
alias apt_pkg_search_desc='echo -e "this accepts regex" && apt search'
alias apt_pkg_search='apt list'
alias apt_ppa_add='sudo add-apt-repository'
alias apt_ppa_edit='sudo apt edit-sources'
alias apt_ppa_ppas_list='ls /etc/apt/sources.list.d'
alias apt_ppa_remove='sudo add-apt-repository --remove'
alias apt_ppa_repos_cat='cat /etc/apt/sources.list'
alias apt_ppa_repos_list='sudo add-apt-repository --list'
alias apt_refresh='sudo apt update && sudo apt upgrade'
alias apt_search_i3='apt search ^i3xrocks'
alias apt_search_looks='apt search ^regolith-look-'
alias apt_upgradable='sudo apt list --upgradable'
alias apt_keys_list='sudo apt-key list'
alias apt_key_del='sudo apt-key del'

# pkgs ---------------------------------
alias dpkgi='grep " install " /var/log/dpkg.log'
alias apti='grep " install " /var/log/apt/history.log'
alias apt_installed='(dpkgi;apti) | less'
alias untar='tar -xvf'
