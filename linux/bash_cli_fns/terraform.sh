#!/usr/bin/env bash

# terraform ----------------------------
alias tf='terraform'

tf_plan() {
  echo -e "running tf_fmt"
  tf_fmt
  echo -e "running tf_validate"
  tf_validate
  echo -e "generating tfplan file"
  terraform plan -out tfplan
}
tf_plandestroy() {
  terraform plan -destroy -out destroy.tfplan
}
tf_apply() {
  terraform apply tfplan
}
tf_show() {
  terraform show tfplan
}
tf_graph() {
  terraform graph -plan tfplan
}
tf_destroy() {
  terraform apply destroy.tfplan
}
tf_fmt() {
  terraform fmt
}
tf_validate() {
  terraform validate
}
tf_statelist() {
  terraform state list
}
tf_statepull() {
  terraform state pull
}
tf_staterm() {
  terraform state rm $1
}
tf_stateshow() {
  terraform state show
}
tf_refresh() {
  terraform apply -refresh-only
}
