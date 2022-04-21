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
- todo
  - [ethereum yellowpaper](https://github.com/ethereum/yellowpaper)
  - [EVM](https://ethdocs.org/en/latest/introduction/what-is-ethereum.html?highlight=EVM#ethereum-virtual-machine)

## terms

- turing complete: can execute code
- ether: the cryptocurrency of ethereum
- kill switch: self destructs a smart contract
- patricia tree: data structure; Practical Algorithm to Retrieve Information Code in Alphanumeric

## solidity

- modeled after cpp, python and javascript, submitted to EVM for execution
- statically typed, supporting inheritance and libraries
- high level language for coding and deploying smart contracts

## EVM: ethereum virtual machine

- a virtual machine that executes logic, algorithms, and processes data inputs; a runtime environment for Smart Contracts
- the operating system of ethereum; all nodes run the EVM
- world computer: all the nodes that run the EVM
- manages state, transactions, gas and fees; connects to accounts, and
- implemetations (there are many); allows you to access the EVM via various programming languages
  - go-ethereum
  - parity (rust)
  - cpp-ethereum
  - pyethereum
  - ethereumJ (java)

## smart contract

- applications that run exactly as programmed without any possibilty of downtime, censorship, faud or third-party interference
  - a contract written in code; to programmatically enforce rules setup in a negotiation between two parties
  - an object on the ethereum blockchain that contains code to be executed by the EVM
  - can store data, execute logic, interact with other smart contracts, and send ether
- high level
  - compiled into two views
    - assembly view: human readable
    - bytecode view: machine readable
  - executed on the EVM
- test network: for testing smart contracts via the EVM

## blockchain framework

### state

- separates blockchain state from account states and creates a mapping between them
- blockchain: contains the history of transactions, and links to accounts
- account state: accounts, addresses, balances, including:
  - Nonce
  - balance
  - storage hash
  - code hash
  - account storage
  - ethereum virtual code
