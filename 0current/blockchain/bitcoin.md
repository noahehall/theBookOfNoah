# bitcoin

- most comes from udacity's blockchain nanodegree program

## links

- todo
  - [testnet](https://en.bitcoinwiki.org/wiki/Testnet)
  - [example applications](https://developer.bitcoin.org/examples/)

## terms

- bitcion:
  - specifically a network of bitcion users creating & validating transactions
  - generally known as a cryptocurrency
- bitcoin core: implementation of bitcoin that encompasses all of the software behind bitcoin that allows the network to function
  - aka Bitcoin-QT, or the Satoshi Client

## bitcoin core

- set of developer tools to create applications on the bitcoin blockchain
- a dev env for the bitcoin blockchain

### transaction verification engine

- connects to the bitcoin network as a full node allowing you to verify transactions occuring within the network

### block explorer

- explore & verify the entire bitcoin blockahin, the history of all transactions

### wallet

- allows you to transfer bitcions

### debug console

- CLI enabling you to intereact with data on the bitcoin blockchain

### environments

#### Mainnet

- prod: primary network where live transactions take place
- peers: entire network, +value, ~200gb, full block difficulty, 10 min block creation, pub-key prefix = 1

#### Testnet

- test: alternative bitcoin blockchain that provides a test env for applications
- peers: testers, no value, ~14gb, pub key prefix = m or n, half block diffulty of mainnet; coins have no value and periodically get reset and redistributed

#### Regnet

- regression: alternative test network for testing bitcion applications
- no peers (no network), no value
