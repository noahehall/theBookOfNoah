#!/bin/env bash

regolith_version () {
  local file=/etc/regolith/version
  test -f $file && cat $file
}
