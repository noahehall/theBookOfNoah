# udacity's blockchain developer nanodegree

- skipped

  - udacity online workspace; rather use my local machine

## links

- [solidity: ethereum programming language](https://soliditylang.org/)
- [how to timestamp a digital document, the first block idea](https://www.anf.es/pdf/Haber_Stornetta.pdf)
- todos
  - [bitcoin: peer to peer electornic cash system](https://bitcoin.org/bitcoin.pdf)
  - [anders bitcoin hashing](https://anders.com/blockchain/hash.html)
  - [bitcoin hash wiki](https://en.bitcoin.it/wiki/Hash)
  - [cryptographic hash function](https://en.wikipedia.org/wiki/Cryptographic_hash_function)

## terminology

- blockchain: a shared db that contains a list of transactions
  - started as an idea by Satoshi Nakamoto back in 2009 to solve problems with financial transactions
  - bitcoin is the first blockchain, but now there are many more
- transactions: a record of information, e.g. who sent it, received, etc
  - are sent to other users and grouped with other transactions into a block
  - once the block is filled with enough transactions, it is permanently added to the blockchain
- block hash: a unique fingerprint assigned to a block
  - any change to the block will require a change to the hash, making the block invalid
  - each block receives a hash value, as well as the hash value of the block that was created before it, hence you get a blockchain
- blockchain data is
  - held, shared and verified by all users on the block
  - anonymous and cryptographically secure
- trusted 3rd party: entity that facilitates interactions between 2 parties
  - establish security to secure, store/record and make transactions
- ledger: list of transaction records, e.g. who sent, received, etc; removes the double spending problem
  - is shared on the blockchain, everyone has access to it
- double spending problem: when someone spends the same money more than once

## blockchain framework

- overview of blockchain components
  - transaction
  - wallet
  - signature
  - mempool
  - network
  - consensus
  - hashing
  - block
  - blockchain

### hash

- a digital fingerprint for information
- data > hash fn (e.g. sha56) > hash value
- sha256: outputs a 256 bit number

## bitcoin

- the first, but now one of many blockchains
- a type of digital currency that utilizes the blockchain to facilitate financial transactions
- uses blocks to group and validate transactions
- uses sha256 to create a unique hash value for each block on the blockchain
