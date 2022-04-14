#!/usr/bin/env bash

DISTRO='linux-x64'
NODE_DIR='/opt/nodejs'
NODE_VERSION='v17.9.0'
NODE_DIST="node-${NODE_VERSION}"

sudo rm -rf "$NODE_DIR"
sudo rm -rf /opt/nodejs
sudo rm -rf /usr/bin/{node,nodejs,corepack,npm,npx,pnpm,pnpx,yarn,yarnpkg}
sudo rm -rf /usr/local/bin/{node,nodejs,corepack,npm,npx,pnpm,pnpx,yarn,yarnpkg}
sudo rm -rf ~/.local/share/pnpm-global
sudo rm -rf ~/.node
sudo rm -rf ~/.nvm

sudo mkdir -p "$NODE_DIR"
sudo chown $(whoami):$(whoami) $NODE_DIR

curl -o node.tar.xz https://nodejs.org/dist/$NODE_VERSION/$NODE_DIST-$DISTRO.tar.xz

tar -xJvf node.tar.xz -C "$NODE_DIR"

rm node.tar.xz

# setup symlinks
NODE_BIN="$NODE_DIR/${NODE_DIST}-${DISTRO}/bin"

echo -e "vars: $DISTRO - $NODE_DIR - $NODE_DIST"
echo -e "setting symlink: $NODE_BIN"

# symlink all node bin files as bin files /usr/bin
sudo ln -ns $NODE_BIN/* /usr/local/bin

# install pnpm & yarn & npm via corepack
sudo corepack enable # requires sudo for /usr/local/bin
corepack prepare pnpm@6.32.7 --activate
sudo pnpm add -g pnpm # upgrade to latest; pnpm rox
