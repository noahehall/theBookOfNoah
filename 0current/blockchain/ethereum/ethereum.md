# ethereum

- open source programmable blockchain platform
- a decentralized platform that runs smart contracts
- a general purpose blockchain, thats built to run anytime of smart contract
  - as opposed to first genertion blockchains, built to execute specific transaction types (e.g. bitcoin === finance)
- characteristics
  - permissionless: anyone can join the networ
  - consensus: PoW, but working towards Proof of Stake
  - scalability: high node scalability, low perf scalability (15s to add a block to the chain)
    - compare that with visa/mastercard, which process about 5k transactions per second
  - regulation: decisions made by core developer group
    - bitcoin uses community driven decision-making
  - anonymity: identities are tied to public keys
  - native currency: ether
  - scripting: turing complete virtual machine

## links

- [ethereum](https://ethereum.org/)
- [ethereum stackexchange](https://ethereum.stackexchange.com)
- [ethereum youtube](https://www.youtube.com/user/ethereumproject)
- [networks & public faucets](https://ethereum.org/en/developers/docs/networks/)
  - [this one works](https://fauceth.komputing.org)
- todo
  - [ethereum yellowpaper](https://github.com/ethereum/yellowpaper)
  - [EVM](https://ethdocs.org/en/latest/introduction/what-is-ethereum.html?highlight=EVM#ethereum-virtual-machine)
  - [remix](https://remix.ethereum.org/#optimize=true&version=soljson-v0.4.24+commit.e67f0147.js)
  - [search the ethereum blockchain](https://etherscan.io/)
  - [ethereumjs/tx package](https://github.com/ethereumjs/ethereumjs-monorepo/tree/master/packages/tx)

## terms

- turing complete: can execute code
- ether: the cryptocurrency of ethereum
- kill switch: self destructs a smart contract
- patricia tree: data structure; Practical Algorithm to Retrieve Information Code in Alphanumeric
- gas: the cost of executing transactions on the EVM.
- Wei: smaller denomination of Ether, 1 ether === 10^18 Wei

## solidity

- modeled after cpp, python and javascript, submitted to EVM for execution
- statically typed, supporting inheritance and libraries
- high level language for coding and deploying smart contracts

## EVM: ethereum virtual machine

- a virtual machine that executes logic, algorithms, and processes data inputs; a runtime environment for Smart Contracts
- the operating system of ethereum; all nodes run the EVM
- world computer: all the nodes that run the EVM
- world state: the global state of the ledger
- manages state, transactions, gas and fees; connects to accounts, and
- implemetations (there are many); allows you to access the EVM via various programming languages
  - go-ethereum
  - parity (rust)
  - cpp-ethereum
  - pyethereum
  - ethereumJ (java)

## smart contract

- applications that run exactly as programmed without any possibilty of downtime, censorship, fraud or third-party interference
  - a contract written in code; to programmatically enforce rules setup in a negotiation between two parties
  - an object on the ethereum blockchain that contains code to be executed by the EVM
  - can store data, execute logic, interact with other smart contracts, and send ether
- high level
  - compiled into two views then deployed to the ethereum blockchain
    - assembly view: human readable
    - bytecode view: machine readable
  - executed on the EVM
- test network: for testing smart contracts via the EVM
- gotchas: once your smart contracts are deployed to the blockchain it cannot be changed!

## blockchain framework

### accounts

- account state: accounts, addresses, balances, including:
  - Nonce: number of transactions on the senders account
    - EOAs: total transactions that user made
    - CAs: number of times it has deployed/created other smart contracts
  - balance: value of ether available on the account in wei
  - storage hash: root node of the patricia tree
  - code hash: hash of the code within the smart contract; executes everytime a call is made to the contract; cannot change after its deployed
  - account storage
  - ethereum virtual code
- account types
  - EOAs: externally owned accounts;
    - tied to a private key
    - doesnt hold code
    - maintains ether balance
    - can send transactions/transfer between wallets
    - initiate smart contracts
  - CAs: contract accounts;
    - has code thats triggered by transactions/messages
    - controlled by the code contained within smart contracts
    - transfer value, initiate another smart contract, and execute associated smart contracts, manipulate storage
    - abi: application binary interface: javascript representation of the contract

### state

- separates blockchain state from account states and creates a mapping between them
- blockchain: contains the history of transactions, and links to accounts

### network

- mainnet: prod; proof of work
- ropsten: proof of work
- kovan: proof of authority
- rinkeby: proof of authority;

### transactions

- transactions result in a change to the world state
  - all transactions need to be signed before sending it to the network
- externally owned account transaction types

  - message calls: recipient can be another EOA or a CA
  - contract creation: recipient is a CA

- transaction fields (different between transaction types)
  - nonce: number of transactions in the senders account, incremented by 1, 0-index
  - gas price: price per unit of gas the sender is willing to pay for executing the code in the smart contract; i.e. same as the miner fee in bitcoin
  - gas limit: the max number of computation steps the transaction is allowed to spend
  - to: recipient address
  - value: Amount of either in wei
  - optional fields: used to record the creation & execution of smart contracts
    - data: todo
    - init: todo

## dapps on ethereum

- general architecture
  - frontend: normal stuff
  - smart contract: the logic/intereactions/transactions/etc users of your app can execute
  - ethereum blockchain: stores the state of transactions made by users of your application
  - web3js: js ethereum api; enables you to read and write data to the blockchain
  - infura:
  - metamask: interact with dapps; web3 provider
