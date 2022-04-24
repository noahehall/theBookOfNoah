# solidity

- strongly typed language used to develop smart contracts in the Ethereum platform
- fkn udacity solidity course sucks, just read the docs vs their old azz videos
  - bookmark: https://docs.soliditylang.org/en/latest/introduction-to-smart-contracts.html#blockchain-basics

## links

- [docs](https://docs.soliditylang.org/en/latest/index.html#getting-started)
- [remix IDE: online editor](https://remix.ethereum.org)
- [remix github](https://github.com/ethereum/remix-project)
- [old azz udacity example code](https://github.com/udacity/nd1309-work-code/tree/master/Course_Identity_And_Smart_Contracts/solidity)
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

## terms

- smart contracts: code that lives on the blockchain, the core of ethereum
  - automatically executes when conditions are met
  - what differentiates ethereum from bitcoin Script

## basics

- strongly typed language
- source code files end with `.sol`
- state/storage vars: exist for the life of the contract, and started in the blockchain as part of the contract
- events: events and logs emitted by the contract; dApps can listen for and react to these events
- functions:
- All identifiers (contract names, function names and variable names) are restricted to the ASCII character set. It is possible to store UTF-8 encoded data in string variables.

### memory management

- divided into 3 broad categories: memory, storage and callData
- memory: used for fn code execution
  - fn vars (arguments) are always stored in memory
  - temporary: data is lost after fn execution
  - arrays & structs
  - addressable at byte level
- storage: for state & local contract-level data, its the contracts db; for variables defined outside of a fn
  - state vs local
    - state vars are defined outside fns
    - local vars always reference state vars
  - persistant: think of it as a db
  - key-value store (256-bit key & value)
  - read/write costly
  - cntract can manage its own data
- callData: like a stack, used for EVM call execution
  - EVM code execution
  - immutable
  - max size 1024, word 256 bit

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
