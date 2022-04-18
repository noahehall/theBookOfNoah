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

- in the searchbar at top, you can enter a wallet address, transaction id, etc
  - using the transaction ID returns a bunch of stuff, espcially important is the details section & total confirmations
- recent blocks: the latest blocks to make it on the chain
  - height: always increases by one, indicates the number of blocks between this one and the genesis block (has a height of 0)
  - age: the order each block was created
  - transations: total transactions in the block
  - size: dependent on the total transactions
- current fee estimates: approximate cost of making transactions on the network
- latest transactions:

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

### data and the data model

- opcodes:
  - can be used to embed data in blocks on the blockchain
    - this usecase is controversial:
      - supporters: a way to expand bitcoin to support nonfinancial use cases
      - retractors: bitcoin was only meant for financial purposes, and places a load (increased size, cost, maintenance etc) on users who to keep it that way
  - op-return: todo
- smart contracts: a series of conditions that must be met for an action to occur, and the parameters that meet those conditions
- scripts: fine tune how transactions are executed and added to the blockchain

#### blockchain

- transactions:
  - double hashed using SHA256 before being stored on the blockchain
    - sha256(sha256(0100...))
    - 0100000001f3f6a909f8521adb57d898d2985834e632374e770fd9e2b98656f1bf1fdfd427010000006b48304502203a776322ebf8eb8b58cc6ced4f2574f4c73aa664edce0b0022690f2f6f47c521022100b82353305988cb0ebd443089a173ceec93fe4dbfe98d74419ecc84a6a698e31d012103c5c1bc61f60ce3d6223a63cedbece03b12ef9f0068f2f3c4a7e7f06c523c3664ffffffff0260e31600000000001976a914977ae6e32349b99b72196cb62b5ef37329ed81b488ac063d1000000000001976a914f76bc4190f3d8e2315e5c11c59cfc8be9df747e388ac00000000
      - 010000: the bitcoin version number; indicates which bitcoin protocol this transaction adheres to
      - 01: input count; how many inputs were used for this transaction
      - f3...fff: input info; where the input is coming from, and the conditions
        - unlocking script: if the transaction is valid, this will contain the the requires that unlock the conditions of the locking script
      - 02: output count; how many outputs were produced from this transaction
      - 60e...88ac: output info; how much bitcoin outputed from the transaction, and conditions for spending in future transactions
        - locking script: TODO
      - 00...: locktime; the earliest time (or block) that a transaction can be added onto the blockchain
        - if non-zero && < 500million: its interpreted as the block height, and miners have to wait until the ilicit block height is reached before attempting to add it to the block chain
        - if > 500million: its interpreted as a unix timestamp,
        - if 0: this block can be confirmed as soon as possible

#### block data model

- block header
  - previous blocks hash: for the block that comes directly before a given block in a the chain; this is how blocks are linked together in the blockchain
  - time: timestamp of creation
  - merkle root: hash representing every transaction included in a given block;
    - pairs of transactions are repeatedly hashed together, recursively until a single hash is left
    - can be used to search the original transactions, e.g. to find the original transactions that made up the block
  - nonce: i.e. number only use once; used in bitcoin mining; miners are solving for a nonce, that when added to a hashed block, and those two values are rehashed, will solve the mining puzzle
- body: contains transactions
