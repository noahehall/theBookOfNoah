# solidity

- strongly typed language used to develop smart contracts in the Ethereum platform
- there is some overlap with the ethereum.md file, rely on this one more (as it comes straight from solidity docs vs udacity)
- fkn udacity solidity course sucks, just read the docs vs their old azz videos
  - bookmark: https://docs.soliditylang.org/en/latest/introduction-to-smart-contracts.html#message-calls

## links

- [docs](https://docs.soliditylang.org/en/latest/index.html#getting-started)
- [remix IDE: online editor](https://remix.ethereum.org)
- [remix github](https://github.com/ethereum/remix-project)
- [old azz udacity example code](https://github.com/udacity/nd1309-work-code/tree/master/Course_Identity_And_Smart_Contracts/solidity)
- [solidity by example](https://docs.soliditylang.org/en/latest/solidity-by-example.html)
- [ethereum developer resources](https://ethereum.org/en/developers/)
- ref
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

## terms

- smart contracts: code that lives on the blockchain, the core of ethereum
  - automatically executes when conditions are met
  - what differentiates ethereum from bitcoin Script
- blockchain: globally shared, transactional database
  - anyone can read entries in the blockchain by participating in the network
- transaction: changes something in the blockchain
  - i.e. a db transaction, where everything is rolledback when anything fails
  - while a transaction is being applied, no other transaction can alter the blockchain
  - is always cryptographically signed by the sender (creator)
    - e.g. ensures that only the person holding th keys to the account can transfer money from it
    - must be included in a block to be added to the blockchain
- block: a bunlde of transactions; executed and distributed among all participating nodes
  - if two transactions in a block contradict each other, the one that comes first will succeed and the conflicting transctions discarded
  - blocks are added in ethereum every 17 seconds
- mining: the block selection algorithm
- wei: 10\*\*18 ether
- ether: ethereums currency

## basics

- strongly typed language
- source code files end with `.sol`
- state/storage vars: exist for the life of the contract, and started in the blockchain as part of the contract
- events: events and logs emitted by the contract; dApps can listen for and react to these events
- functions:
- All identifiers (contract names, function names and variable names) are restricted to the ASCII character set. It is possible to store UTF-8 encoded data in string variables.

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

### transactions

- a msg sent from one account to another (or same)
- can include binary data (payload) and ether
- if the target account
  - contains code: that code is executed and the payload is provided as input data
  - is not set/null: the transaction creates a new contract account
    - the payload of the contract creation transaction is taken to be EVM bytecode and executed
    - the output data of this execution is permenantly stored as the code of the contract
      - while a contract is being created, its code is still empty
      - ^ do not call back into the contract until its constructor fn has finished exeucting

### gas

- upon creation, each transaction is charged a certain amount of gas that has to be paid for by the originator of the transaction (tx.origin)
  - `gas_price * gas` === total cost of tx
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
    - memory is more costly the larger it grows
    - ^ scales quadratically
- storage: for state & local contract-level data, persistent between fn calls and transactions
  - key-value store that maps 256-niy words to 256-bit words
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

### keywords

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
  - you can create a blockchain explorer that tracks transactions & balances
- require: defines conditions that reverts all changes if not met
- error: allow you to provide info about why an operation failed; errors are returned to the caller of the fn
- revert: unconditionally aborts and reverts all changes; allows you to provide the name of an Error and additional data to be returned to the caller

### global vars n fns

```js
msg;
  .sender // always the address where the current (external) fn call came from
tx;
  .origin // the sender/creator of this transaction
block;
assert;
require;
revert;

```

### data types

```js
/**
 * uint: unsigned 256 bit integer
 * address: 160-bit value; no arithmetic operations are allowed; used to store contract address, or a hash of hte public half of a keypair belonging to external accounts
 * mapping (from => to): maps a from key to a value; cannot retrieve a list of all the keys of a mapping, nor a list of all values; or whats been added, or be used within a context there its not needed
 */
contract DataLocation {
  // elementary data types
  uint count; // initialized to 0
  int amount; // initialized to 0
  bool iKnowWhatImDoing; // initialized to false
  address owner; // initialized to 0x0
  // complex data types
  uint[] points;

  function localVars() {
    uint[] storage localArray;
    uint[] memory memoryArray;

    // creates a ref to a storage array
    uint[] pointer = points;
  }
}

```

### operators

```js
 !
 &&
 ||
 ==
 !=

```

### example contracts

```js
// sample contract
contract SomeContract {
  string public someStateVar;

  constructor (string _name) public {
    name = _name;
  }

  // not required for public vars
  // its getters are automatically created
  function getName() public view returns (string _name) {
    return name;
  }

  function setName(string _name) public {
    name = _name;
  }
}

```
