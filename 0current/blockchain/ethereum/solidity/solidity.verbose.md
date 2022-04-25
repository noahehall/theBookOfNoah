# solidity

- strongly typed language used to develop smart contracts in the Ethereum platform
- there is some overlap with the ethereum.md file, rely on this one more (as it comes straight from solidity docs vs udacity)
- fkn udacity solidity course sucks, just read the docs vs their old azz videos
  - bookmark: https://docs.soliditylang.org/en/latest/solidity-by-example.html#what-is-a-payment-channel

## links

- [docs](https://docs.soliditylang.org/en/latest/index.html#getting-started)
- [remix IDE: online editor](https://remix.ethereum.org)
- [remix github](https://github.com/ethereum/remix-project)
- [old azz udacity example code](https://github.com/udacity/nd1309-work-code/tree/master/Course_Identity_And_Smart_Contracts/solidity)
- [solidity by example](https://docs.soliditylang.org/en/latest/solidity-by-example.html)
- [ethereum developer resources](https://ethereum.org/en/developers/)
- [remix download files for offline use](https://github.com/ethereum/remix-live/tree/gh-pages)
- [openzepplin ECDSA fns for signatures](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/cryptography/ECDSA.sol)
- [openzepplin stuff](https://github.com/OpenZeppelin/openzeppelin-contracts)
- [openzepplin wizard](https://wizard.openzeppelin.com/)
- ref
  - [installation types & steps](https://docs.soliditylang.org/en/latest/installing-solidity.html)
  - [reference types data location](https://docs.soliditylang.org/en/latest/types.html#reference-types)
  - [data types](https://docs.soliditylang.org/en/latest/types.html)
  - [mapping data type](https://docs.soliditylang.org/en/latest/types.html#mapping-types)
  - [getter fns](https://docs.soliditylang.org/en/latest/contracts.html#getter-functions)
  - [integer types](https://docs.soliditylang.org/en/latest/types.html#integers)
  - [events](https://docs.soliditylang.org/en/latest/contracts.html#events)
  - [special variables & fns](https://docs.soliditylang.org/en/latest/units-and-global-variables.html#special-variables-functions)
  - [error handling: assert, require, revert and exceptions](https://docs.soliditylang.org/en/latest/control-structures.html#assert-and-require)
  - [checked/unchecked arithmetic](https://docs.soliditylang.org/en/latest/control-structures.html#unchecked)
  - [errors and revert](https://docs.soliditylang.org/en/latest/contracts.html#errors)
  - [revert statement](https://docs.soliditylang.org/en/latest/control-structures.html#revert-statement)
  - [opcodes](https://docs.soliditylang.org/en/latest/yul.html#opcodes)
  - [math & cryptographic fns](https://docs.soliditylang.org/en/latest/units-and-global-variables.html#mathematical-and-cryptographic-functions)
  - [inline assembly](https://docs.soliditylang.org/en/latest/assembly.html)
  - [libraries & contracts](https://docs.soliditylang.org/en/latest/contracts.html#libraries)
  - [source files](https://docs.soliditylang.org/en/latest/layout-of-source-files.html)
  - [structure of a contract](https://docs.soliditylang.org/en/latest/structure-of-a-contract.html#contract-structure)
  - [layout](https://docs.soliditylang.org/en/latest/layout-of-source-files.html)
  - [pragmas](https://docs.soliditylang.org/en/latest/layout-of-source-files.html#pragma)
  - [using for directive](https://docs.soliditylang.org/en/latest/contracts.html#using-for)
  - [structs](https://docs.soliditylang.org/en/latest/types.html#structs)
  - [enums](https://docs.soliditylang.org/en/latest/types.html#enums)
  - [functions](https://docs.soliditylang.org/en/latest/contracts.html#functions)
  - [constant and immutable state vars](https://docs.soliditylang.org/en/latest/contracts.html#constants)

## terms

- smart contracts: code that lives on the blockchain, the core of ethereum
  - what differentiates ethereum from bitcoin Script
- blockchain: globally shared, transactional database
  - anyone can read entries in the blockchain by participating in the network
- transaction: changes something in the blockchain
  - i.e. a db transaction, where everything is rolledback when anything fails
  - while a transaction is being applied, no other transaction can alter the blockchain
  - is always cryptographically signed by the sender (creator)
    - ensures that only the person holding the keys to the account can transfer money from it
    - must be included in a block being being added to the blockchain
- block: a bundle of transactions; validated by miners and distributed among all participating nodes
  - if two transactions in a block contradict each other, the one that comes first will succeed and the conflicting transctions discarded
  - blocks are added in ethereum ~17 seconds
- mining: the block selection algorithm
- wei: 10\*\*18 ether
- ether: ethereums currency
- natspec: triple-slash comments `/// like this` that will be shown when the user is asked to confirm a transaction or when an error is displayed
  - should come directly before all fns, state vars, etc
- replay attacks: when a signed message is reused to claim authorization for a second action
  - prevent these by signing the msg with a nonce (number of transactions sent by the account)
  - ^ the smart contract will check if a nonce is used multiple times
  - ReceiverPays smart contract: vulnerable to these type of attacks
    - can occur when the owner deploys the contract, makes some payments, and then destroys the contract
    - later the owner redeploys the smart contract again, but the new instance doesnt know nonces used in the previous deployment, so the attacker can use the old messages with the new contract instance
    - protect against these by
      - including the contract address in the signed message provided to the buyer
      - and ensure a condition exists within the contract that only messages containing the correct address will be accepted

## basics

### installation

#### remix

- remix: recommended for small contract & quickly learning solidity as you dont need to install anything
- can be downloaded for use without an internet connection
- see the remix.md file

#### solc-js

- node module
- has fewer features that solc
- tools expecting `solc` likely arent compatible with `solcjs`

#### solc

- the cmdline compiler
- deriv

```sh
docker run ethereum/solc:stable --help

# install via pkg manager
sudo add-apt-repository ppa:ethereum/ethereum
sudo apt-get update
sudo apt-get install solc
```

### best practices

- refunding ether via someAddr.send(someAMount) is a security risk
  - the fn containing this logic could be executed by an untrusted contract
  - instead just keep the refund amount in a variable, and require the recipient to withdraw their money themselves
- in contracts, always zero out any variables holding money after delivery
  - because the recipient could call the fn multiple times

### evm

- ethereum virtual machine: runtime environment for smart contracts
- sandboxed and completely isolated: has no access to network, filesystem or other processes
- is a stack machine
  - all computations are performed on a data area called the stack
  - has a max size of 1024 elements and contains words of 256 bits

### accounts

- external & contract accounts share the same address space
  - treated equally by the EVM
  - has persistent key-value store mapping 256-bit words to 256-bit words called storage
  - balance: balanced in ether denominated in Wei
- external accounts: controlled by public-priate key pairs (i.e. humans)
  - address: determined from the public key
- contract accounts: controlled by the code stored together with the account
  - address: determined at the time the contract is created (derived from the creator address & the number of transactions sent form that address (i.e. the nonce))

### signatures

- ECDSA signatures consit of two params, r and s
  - signatures in ehtereum include a third param called v: used to verify which accounts priate keys was used to sign a message, and the transactions sneder
  - signatures produced by web3.js are the concatenation of r, s and v

### transactions

- a msg sent from one account to another (or to the same account)
- can include binary data (payload) and ether
- if the target account
  - contains code: that code is executed and the payload is provided as input data
  - is not set/null: the transaction creates a new contract account
    - the payload of the contract creation transaction is taken to be EVM bytecode and executed
    - the output data of this execution is permenantly stored as the code of the contract
      - while a contract is being created, its code is still empty
      - ^ do not call back into the contract until its constructor fn has finished exeucting

### message calls

- similar to transactions, in that they have
  - source, target, data payload, ether, gas and return data
- every transaction consists of a top-level msg call which in urn create message calls
- limitations
  - limited to a depth of 1024
    - for complex operations, loops should be preferred over recursive calls
  - only 63/64th of the gas can be forwarded in a message call

#### delegatecall / callcode and libraries

- delegatecall: special variant of a msg call
  - identical to a msg call apart from that fact that
    - the code at the target address is executed in the context (i.e at the address) of the calling contract
    - msg.sender & msg.value do not change their values
- libraries: implemented via delegate calls
  - contract can dynamically load code froma different address at runtime
  - storage, current address & balance still refer to the calling contract
    - only the code is taken from the called addres

#### create

- contracts create other creates via this opcode
- different from normal msg calls in that
  - the payload data is executed
  - the result of the execution is stored as code
  - the caller/creator receives the address of the new contract on the stack

### gas

- upon creation, each transaction is charged a certain amount of gas that has to be paid for by the originator (sender) of the transaction (tx.origin)
  - `gas_price * gas === total cost of tx`
  - ^ has to be paid up front to the EVM executor
  - ^ already used up gas is not refunded on error

### memory management

- divided into 3 broad categories: memory, storage and callData
- memory: used for fn code execution; is refreshed for each message call
  - fn vars (arguments) are always stored in memory
  - temporary: data is lost after fn execution
  - arrays & structs
  - addressable at byte level
  - reads are limited to a width o 256 bits
  - writes can be either 8 or 256 bits wide
  - at the time of expansion, the cost in gas must be paid
    - is more costly the larger it grows
    - ^ scales quadratically
- storage: for state & local contract-level data, persistent between fn calls and transactions
  - exist for the life of the contract, and stored in the blockchain as part of the contract
  - key-value store that maps 256-bit words to 256-bit words
    - costly to read and write: minimize what you store in only what the contract needs to run
    - contracts can only read & write to its own storage
  - state vs local
    - state vars are defined outside fns
    - local vars always reference state vars
  - persistent:
  - key-value store (256-bit key & value)
  - read/write costly
  - cntract can manage its own data
- callData: like a stack, used for EVM call execution
  - EVM code execution
  - immutable
  - max size 1024, word 256 bit
- best practices
  - derived calculations, caching, and aggregates should be stored outside of the contract

### events

#### logs

- special indexed data structure that maps all the way up to the block level
- used to implement events: when you send an event it creates a log entry
- contracts cannot access log data after it has been created
- log data can be efficiently accessed from outside the blockchain (e.g. by dApps)

### libraries: todo (see link)

### interfaces: todo

### contracts

#### structure

- specify and control the behavior of contracts by breaking them into modules for isolation

#### self-destruct

- the only way to remove code from the blockchain is when a contract performs the `selfdestruct` operations
- the remaining ether is sent to a designated target and then the storage & code is removed from state
  - if someone sends ether to a removed contract the either is lost forever
  - some nodes will still contain the contract in history, so self destructing is not the same as deleting data from a hard disk
- to deactivate a contract you should disable it instead
  - e.g. by changing some internal state which causes all fns to revert when someone attempts to execute them
  - this makes it impossible to use the contract, as it returns ether immediately

#### precompiled contracts

- special contracts whose addresses range between 1 & including 8
- can be called as any other contract but
  - their behavior & gas consumption is not defined by EVM code
  - instead is implemented in the EVM execution environment itself
- different EVM compatible chains may use a different set of precompiled contracts

### source files

- source code files end with `.sol`
- can contain an arbitrary number of contract definitions, import, pragma, and `using for` directives and struct, enum, function, error and constant ariable definitions

### keywords, globals, etc

- All identifiers (contract names, function names and variable names) are restricted to the ASCII character set. It is possible to store UTF-8 encoded data in string variables.
- pragram: states which version of solidity to use
- contract: collection of code (functions) and data (state) that resides at a specific address on the chain
  - similar to a class in JS
- constructor: only run when the contract is created and will never be called afterwards
- memory: for fn arg storage
- storage: for state vars
- calldata: for calldata?
- public: makes vars accessible from other contracts
  - automatically creates a getter fn for all vars that are public
- view: only meant to view information
- returns (type): type of object returned by a fn
- event: allows clients to react so specific contract changes
  - events and logs emitted by the contract; dApps can listen for and react to these events
  - you can create a blockchain explorer that tracks transactions & balances
- require: defines conditions that reverts all changes if not met
- error: allow you to provide info about why an operation failed; errors are returned to the caller of the fn
- revert: unconditionally aborts and reverts all changes; allows you to provide the name of an Error and additional data to be returned to the caller
- external: fn is callable from other contracts?
- internal: fn is only callable from the contract itself/derived contracts
- payable: enables the fn to able to receive ether
  - else you have to use convert an address via `payable(someAddr)` to use the `.send()` fn
- returns (dataType varName)
- ecrecover: fn that accepts a msg along with the r, s and v params (ECDSA) and returns the address that was used to sign the msg
- pure: todo

## algorithms & strategies

- come from `solidity by example`
- but the idea is important: try to find and document other blockchain strategies

### auctions & voting

- [voting example](https://docs.soliditylang.org/en/latest/solidity-by-example.html#voting)
- [open auction](https://docs.soliditylang.org/en/latest/solidity-by-example.html#blind-auction)
  - everyone can see the bids that are made
  - everyone can send their bids during a bidding period (at a certain time the auction ends)
  - the bids include Ether to bind bidders to their bid
  - if the current highest bid is exceeded, the previous highest bidder gets their money back
- [blind auction](https://docs.soliditylang.org/en/latest/solidity-by-example.html#id2)
- blind strategy:
  - during the bidding period a bidder doesnt actually send their bid, but only hashed version of it (so its blind)
  - after the bidding period the bidders have to reveal their bids by sending their values unencrypted and the contract checks that the hash value is the same as the one provided during the bidding period
- binding strategy:
  - the only way to prevent the bidder from NOT sending the bid value after the auction ends is to make them send it together with the bid
  - since value transfers cannot be blinded in theithereum, anyone can see the value

### purchases

- simplifest form is a single buyer and single seller that must send an item to the buyer and receive funds in return
- [safe remote purchases](https://docs.soliditylang.org/en/latest/solidity-by-example.html#id2)
  - both parties put twice the value of the item into the contract as escrow
  - the money is locked until the seller ships the item and the buyer confirms receipt by calling a fn on the contract
  - then the buyer receives 50% back (they put up 2x)
  - then the receiver receives 150% back (they put up 2x + the 50% from the buyer)
  - this incentives both parties to resolve the situation or oyherwise their money is locked forever
- [micropayment channel](https://docs.soliditylang.org/en/latest/solidity-by-example.html#micropayment-channel)
  - [the implemented contract, must read](https://docs.soliditylang.org/en/latest/solidity-by-example.html#computing-the-message-)
- payments channel: use cryptographic signatures to make repeated transfers of ether securely, instantaneously and without transaction fees
  - the signature acts like a bank check
  - the only fees occured are when:
    - the sender deploys the created contract to the block hain
    - the receiver executes the contract on the blockchain
  - once the receiver is ready to collect their payment, they call a close method
    - the close method is responsible for actually transfering the funds (via selfdestruct)
    - thus if multiple payments exist, there are accumulative (you receive the last one which contains all the others)
    - the sender is not permitted to call the close fn (as they could use it to cheat the recipient)
- use signatures to authorise transactions via a smart contract
- sender:
  - creates and deploys a contract, that contains
    - enough ether to cover expected payments
    - a fn a recipient can call with the senders signature (see below)
    - the fn will take ether from the senders account and transmit it to the caller
  - sends a cryptographically signed message off-chain (e.g. via email) to the recipient which must include
    - the recipients address
    - the amount to be transferred
    - protection against replace attaacks
- recipient (see web3 docs)
  - is responsible for calling the smart contract fn created by the sender, providing the senders signature
  - since the recipient is calling the fn, they are responsible for paying the transaction fees
  - the recipient needs to:
    - verify the contract address in the message matches the payment channel
    - verify the total on each new payment is the expected amount
    - verify the new accumulative total doesnt exceed the amount of ether escrowed
    - verify the signature is valid and comes from the payment channel sender
- considerations:
  - time to keep the payment channel live
    - for shortlived transactions, e.g. paying for something each minute, it may be shorter
    - for longer term payment channels, e.g. paying an employee, the channel may be kept open for years or months
