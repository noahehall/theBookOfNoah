#!/bin/env bash

#@see https://stackoverflow.com/questions/35773299/how-can-you-export-the-visual-studio-code-extension-list

echo -e "install these extensions with ./vscode.install.extensions.sh"
set -ex
code-insiders --list-extensions | xargs -L 1 echo code-insiders --install-extension >"./vscode.install.extensions.sh"
