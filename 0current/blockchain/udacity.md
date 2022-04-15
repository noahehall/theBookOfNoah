# udacity's blockchain developer nanodegree

- skipped

  - udacity online workspace; rather use my local machine

## links

- [solidity: ethereum programming language](https://soliditylang.org/)
- [how to timestamp a digital document, the first block idea](https://www.anf.es/pdf/Haber_Stornetta.pdf)
- todos
  - [bitcoin: peer to peer electornic cash system](https://bitcoin.org/bitcoin.pdf)
  - [anders bitcoin hashing](https://anders.com/blockchain/hash.html)
    - link no longer works
  - [anders blockchain block](https://anders.com/blockchain/block)
    - no longer works
  - [bitcoin hash wiki](https://en.bitcoin.it/wiki/Hash)
  - [cryptographic hash function](https://en.wikipedia.org/wiki/Cryptographic_hash_function)

## terminology

- blockchain: a shared ledger (db) that records a list of transactions that happen within the network
  - started as an idea by Satoshi Nakamoto back in 2009 to solve problems with financial transactions
  - bitcoin is the first blockchain, but now there are many more
- transactions: a record of information, e.g. who sent it, received, etc
  - are sent to other users and grouped with other transactions into a block
  - once the block is filled with enough transactions, it is permanently added to the blockchain
- hash: a unique fingerprint assigned to a block
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

## blockchains

### bitcoin

- the first, but now one of many blockchains
- a type of digital currency that utilizes the blockchain to facilitate financial transactions
- uses blocks to group and validate transactions
- uses sha256 to create a unique hash value for each block on the blockchain

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

### blocks

- the building blocks of the blockchain
- a container that hold a list of transactions to be added to the blockchain
- the blockchain ledger is HUGE, so the blocks provide a way to breakup the long list of transactions into groups of ordered transaction events
- block components
  - body: list of transactions
  - header: block metadata
    - previous blocks hash: the hash value for the block that comes immediately before this one, (think linked list)
    - time the block was made: the blockchains solutions to the double-spending problem:
    - merkle root: hash that represents every transaction inside the block
      - pairs of transactions are hashed repeatedly, until youre left with a single hash value
      - can be used to reverse engineer the transaction hash values that made the merkle root
        - you use the hash to search the original transactions (hash values) that created them - enables you to find the original transactions that made up the block when starting from merkle root
    - nonce: an arbitrary number that can only be used once
      - block data + nonce = hash value
      - has to do with mining
- block difficulty: the number of 0s requested to make the nonce, the more the 0s the more greater the difficulty
- block size: the amount of space a block has to hold information (e.g. 1mb)
  - is decided by the developer
  - determines how long it takes to create a block, and how many blocks will be on the chain. is the same for every block on the chain, and can only be changed via an update
- block number: identifies the position of this block within the blockchain, i.e. the block # 1 is the first block
  - genesis block: the block with number 1

### blockchain

- a shared digital ledger that contains the entire histoyr of transactions made on the network
  - i.e. the transaction history of the network
- a connection of linked blocks joined together by hash values; hash values + blocks are the core components
  - if the hash value of a block is changed, the hash for the next block is also changed, and next block, etc.
- all information is immutable
