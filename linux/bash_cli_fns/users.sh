#!/bin/sh

get_group_id() {
  echo $(id -g ${1:?'group name is required'})
}
get_user_id() {
  echo $(id -u ${1:?'user name is required'})
}
get_groups_self() {
  echo $(groups)
}

create_group_system() {
  group_name=${1:?'group name is required'}
  echo -e "sudo required: adding $USER to system group $group_name\n"

  sudo groupadd -fr $group_name
  sudo usermod -aG $group_name $USER
}

delete_user_and_group_system() {
  echo -e 'TODO: not implemented, @see delgroup -h'
}
