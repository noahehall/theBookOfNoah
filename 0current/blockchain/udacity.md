# udacity's blockchain developer nanodegree

## links

- [solidity: ethereum programming language](https://soliditylang.org/)

## terminology

- blockchain: a shared db that contains a list of transactions
  - started as an idea by Satoshi Nakamoto back in 2009
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
