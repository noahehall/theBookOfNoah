#!/usr/bin/env bash

# gpg|ssh keys -------------------------
# @see https://docs.github.com/en/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key
alias gpg_keys='gpg --list-keys'
alias gpg_keys_long='gpg --list-keys --keyid-format=long'
alias gpg_signs='gpg --list-signatures'
