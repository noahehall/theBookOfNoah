#!/bin/env bash

# terraform ----------------------------
alias tfplan='terraform plan -out tfplan'
alias tfplandestroy='terraform plan -destroy -out destroy.tfplan'
alias tfapply='terraform apply tfplan'
alias tfshow='terraform show tfplan'
alias tfgraph='terraform graph -plan tfplan'
alias tfdestroy='terraform apply destroy.tfplan'
alias tffmt='terraform fmt'
alias tfvalidate='terraform validate'
alias tfstatelist='terraform state list'
alias tfstatepull='terraform state pull'
alias tfstateshow='terraform state show'
alias tfrefresh='terraform apply -refresh-only'
