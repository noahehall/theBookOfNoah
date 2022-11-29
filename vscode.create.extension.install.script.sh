#!/bin/env bash

#@see https://stackoverflow.com/questions/35773299/how-can-you-export-the-visual-studio-code-extension-list

echo -e "saving installed extensions to ./0current/vscode.extensions.sh"
set -ex
code --list-extensions | xargs -L 1 echo code --install-extension >"./0current/vscode.installed.extensions.sh"
