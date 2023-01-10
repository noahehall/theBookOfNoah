#!/bin/sh

# @see https://www.cyberciti.biz/faq/linux-change-user-group-uid-gid-for-all-owned-files/
# @see https://www.cyberciti.biz/faq/how-do-i-find-all-the-files-owned-by-a-particular-user-or-group/?utm_source=Related_Tutorials&utm_medium=faq&utm_campaign=Apr_22_2022_EOP_TEXT
# @see https://www.cyberciti.biz/faq/freebsd-disable-ps-sockstat-command-information-leakage/?utm_source=Related_Tutorials&utm_medium=faq&utm_campaign=Apr_22_2022_EOP_TEXT

get_group_id() {
  echo $(id -g ${1:?'group name is required'})
}
get_user_id() {
  echo $(id -u ${1:?'user name is required'})
}
get_group() {
  echo $(getent group ${1:?'group name is required'})
}
get_groups_self() {
  echo $(groups)
}
get_group_users() {
  echo $(getent group ${1:?'group name is required'})
}
create_group_system() {
  group_name=${1:?'group name is required'}
  user_name=${2:-$USER}
  echo -e "sudo required: adding $user_name to system group $group_name\n"

  sudo groupadd -fr $group_name
  sudo usermod -aG $group_name $user_name
}

delete_user_and_group_system() {
  echo -e 'TODO: not implemented, @see delgroup -h'
}
