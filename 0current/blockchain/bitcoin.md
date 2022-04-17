# bitcoin

- most comes from udacity's blockchain nanodegree program

## links

- todo

  - [testnet](https://en.bitcoinwiki.org/wiki/Testnet)
    - [same link?](https://en.bitcoin.it/wiki/Testnet)
  - [example applications](https://developer.bitcoin.org/examples/)
  - [dev setup requirements](https://bitcoin.org/en/bitcoin-core/features/requirements)
  - [reduce storage](https://bitcoin.org/en/full-node#reduce-storage)
  - [download latest version](https://bitcoin.org/en/download)
  - [bitcoin core docs](https://bitcoin.org/en/bitcoin-core/help#documentation)
  - [bitcoin core wiki docs](https://en.bitcoin.it/wiki/Running_Bitcoin#Linux_Quickstart)
  - [bitcoin.conf generator](https://jlopp.github.io/bitcoin-core-config-generator/)
  - [linux setup instructions: use this](https://bitcoin.org/en/full-node#linux-instructions)
  - [choose a bitcoin wallet](https://bitcoin.org/en/choose-your-wallet)
  - [bitcoin data dir](https://en.bitcoin.it/wiki/Data_directory)
  - [some random testnet faucet](https://testnet.help/en/btcfaucet/testnet#log)
  - [another random testnet faucet](https://bitcoinfaucet.uo1.net)
  - [blockcypher testnet explorer](https://live.blockcypher.com/btc-testnet/)

## terms

- bitcoin:
  - specifically a network of bitcoin users creating & validating transactions
  - generally known as a cryptocurrency
- bitcoin core: implementation of bitcoin that encompasses all of the software behind bitcoin that allows the network to function
  - aka Bitcoin-QT, or the Satoshi Client
- faucet: a website that gives rewards in the form of bitcoin; e.g. how you can get testnet coins
  - google `bitcoin testnet public faucet`

## bitcoin core

- set of developer tools to create applications on the bitcoin blockchain
- a dev env for the bitcoin blockchain

### transaction verification engine

- connects to the bitcoin network as a full node allowing you to verify transactions occuring within the network

### block explorer

- explore & verify the entire bitcoin blockahin, the history of all transactions

#### blockcypher block explorer

- todo

### full-node wallet

- fully accepts and validates transactions and blocks from the bitcoin blockchain
  - enables you to continuously download and validate the blockchain using your local computer
  - you dont participate in mining

### debug console

- in the help menu
- CLI enabling you to intereact with data on the bitcoin blockchain

```sh
  getnewaddress somename
  getwalletinfo
  createWallet somename
  loadWalet
```

### environments

#### Mainnet

- prod: primary network where live transactions take place
- peers: entire network, +value, ~200gb, full block difficulty, 10 min block creation, pub-key prefix = 1

#### Testnet

- test: alternative bitcoin blockchain that provides a test env for applications
- peers: testers, no value, ~14gb, pub key prefix = m or n, half block diffulty of mainnet; coins have no value and periodically get reset and redistributed,
- you have to sync to the network and download the blocks

#### Regnet

- regression: alternative test network for testing bitcoin applications
- no peers (local to your computer), coins have no value, can instantaneously create blocks (no block difficulty), transactions dont go through validation,
- can only download the core components necessary to run the application

## bitcoin core development

- ~/.bitcoin/bitcoin.conf: all cli options excent for `-conf` can be specified in this file

- you can run the cli or the GUI, but not both at the same time

### data dir

- ~/.bitcoin: the data default directory
  - /testnet3: for the testnet
    - /wallets: contains all your wallets, they end in `.dat`

### bitcoind

- the cli: can be run without arguments

### bitcoin-qt

- the gui

```sh
  bitcoin-qt # connect to mainnet
    -testnet # connect to testnet
    -regnet # connect to regnet


```
