#!/bin/env bash

# use the latest version of curl installed via `brew install curl`
if [[ -f "/opt/homebrew/opt/curl/bin/curl" ]]; then
  export PATH="/opt/homebrew/opt/curl/bin:$PATH"
  export LDFLAGS="-L/opt/homebrew/opt/curl/lib"
  export CPPFLAGS="-I/opt/homebrew/opt/curl/include"
fi
