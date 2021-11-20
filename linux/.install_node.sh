#!/usr/bin/env bash

# defaults when installing via apt
# /usr/bin/node # default binary
# /usr/bin/nodejs # symlink > node


DISTRO='linux-x64'
NODE_DIR='/opt/nodejs'
NODE_VER='node-v17.1.0'

# fkn remove everything to get a blank system
sudo rm -rf "$NODE_DIR"
sudo rm -rf /usr/bin/{node,nodejs,corepack,npm,npx,pnpm}
sudo rm -rf /usr/local/bin/{node,nodejs,corepack,npm,npx,pnpm}
sudo rm -rf ~/.node
sudo rm -rf ~/.local/share/pnpm-global

sudo mkdir -p "$NODE_DIR"
sudo chown $(whoami):$(whoami) $NODE_DIR

curl -o node.tar.xz https://nodejs.org/dist/v17.1.0/$NODE_VER-$DISTRO.tar.xz

sudo tar -xJvf node.tar.xz -C "$NODE_DIR"

rm node.tar.xz

# setup symlinks
NODE_BIN="$NODE_DIR/${NODE_VER}-${DISTRO}/bin"

echo -e "vars: $DISTRO - $NODE_DIR - $NODE_VER"
echo -e "setting symlink: $NODE_BIN"

# symlink all node bin files as bin files /usr/bin
sudo ln -ns $NODE_BIN/* /usr/local/bin

# install pnpm & yarn via corepack
sudo corepack enable
# corepack prepare pnpm@6.22.2 --activate
# ^ doesnt activate
