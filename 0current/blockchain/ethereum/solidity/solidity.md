# solidity

- strongly typed language used to develop smart contracts in the Ethereum platform
- there is some overlap with the ethereum.md file, rely on this one more (as it comes straight from solidity docs vs udacity)
- fkn udacity solidity course sucks, just read the docs vs their old azz videos
  - bookmark: https://docs.soliditylang.org/en/latest/solidity-by-example.html#id2
    - at the line explaining modifiers

## links

- [docs](https://docs.soliditylang.org/en/latest/index.html#getting-started)
- [remix IDE: online editor](https://remix.ethereum.org)
- [remix github](https://github.com/ethereum/remix-project)
- [old azz udacity example code](https://github.com/udacity/nd1309-work-code/tree/master/Course_Identity_And_Smart_Contracts/solidity)
- [solidity by example](https://docs.soliditylang.org/en/latest/solidity-by-example.html)
- [ethereum developer resources](https://ethereum.org/en/developers/)
- [remix download files for offline use](https://github.com/ethereum/remix-live/tree/gh-pages)
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
    - is more costly the larger it grows
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

#### logs

- special indexed data structure that maps all the way up to the block level
- used to implement events
- contracts cannot access log data after it has been created
- log data can be efficiently accessed from outside the blockchain

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

### contracts

#### self-destruct

- the only ay to remove code from the blockchain is when a contract performs the `selfdestruct` operations
- the remaining ether is sent to a designated target and then the storage & code is removed from state
  - if someone sends ether to a removed contract the enter is lost forever
  - some nodes will still contain the contract in history, so self destructing is not hte same as deleting data from a hard disk
- to deactivate a contract you should disable it instead
  - e.g. by changing some internal state which causes all fns to revert
  - this makes it impossible to use the contract, as it returns ether immediately

#### precompiled contracts

- special contracts whose addresses range between 1 & including 8
- can be called as any other contract but
  - their behavior & gas consumption is not defined by EVM code
  - instead is implemented in the EVM execution environment itself
- different EVM compatible chains may use a different set of precompiled contracts

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
- external: fn is callable from other contracts?
- internal: fn is only callable from the contract itself/derived contracts
- payable
- returns (dataType varName)

### global vars n fns

```js
msg;
  .sender // always the address where the current (external) fn call came from
  .value // todo
tx;
  .origin // the sender/creator of this transaction
block;
  .timestamp
assert;
require;
revert;
payable(msg.sender).transfer(refund)
```

### data types

```js
/**
  uint: unsigned 256 bit integer

  address: 160-bit value; no arithmetic operations are allowed; used to store contract address, or a hash of hte public half of a keypair belonging to external accounts

  mapping (from => to): maps a from key to a value; cannot retrieve a list of all the keys of a mapping, nor a list of all values; or whats been added, or be used within a context there its not needed

  dataType[]: dynmically sized arrays
    .push(...)
    .length

  struct Poop: container of other data types
    poop = Poop({ key: value, ...})

 */
contract DataLocation {
  // elementary data types
  uint public count; // initialized to 0
  int amount; // initialized to 0
  bool iKnowWhatImDoing; // initialized to false
  address payable owner; // initialized to 0x0
  byte32 name;
  uint[] points;

  // complex data types
  struct Poop {
    uint times;
    bool flushed;
  }

  event IPooped(address sender, uint times);
  error NoToilerPaper();
  error NoWatterInTank(uint secondsToWait)
  // maps addresses to names
  mapping(address => name) public names;

  // dynamically sized array of Poop structs
  Poop[] public poops;

  constructor(bytes32[] listOfStrings) {
    // msg is a global var
    sender = msg.sender;
    // do stuff
  }

  // good way to validate inputs to fns
  modifier addThisCodeToFn(uint whatev) {
    if (block.timestamp >= time) revert TooLate(time);
    _; // original fn code inserted here
  }

  function someFn(uint someInt)
    external
    payable
    addThiscodetoFn(blindedBid)
  {
    // fn body
  }
  function localVars() {
    require(
      msg.sender == someAddr,
      "return this string if false"
    );

    // doesnt return a msg, but still exits & reverts if false
    require(
      msg.sender != someAddr
    )
    uint[] storage localArray;
    uint[] memory memoryArray;

    // creates a ref to a storage array
    // reference vars change the reference
    uint[] pointer = points;
  }

  function flush() {
    if (block.timestamp > whatever) {
      revert NoToilerPaper();
    }

    emit IPooped(msg.sender, msg.value);

    return true;
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
 -=
 +=
```

### control

```js

for (uint i = 0; i < somePoop.length; i++) {
  // do this stuff
}

while (someVar != someOtherVar) {
  // do this stuff

  // always include a require check
  // else you could burn all your gas
  require(thisThing == thatThing)
}

if (someThingEvaluatesToBool) {
  // do this stuff
} else {
  // do this other stuff
}

```

### functions

```js
function auctionEnd() external {
  // It is a good guideline to structure functions that interact
  // with other contracts (i.e. they call functions or send Ether)
  // into three phases:
  // 1. checking conditions
  // 2. performing actions (potentially changing conditions)
  // 3. interacting with other contracts
  // If these phases are mixed up, the other contract could call
  // back into the current contract and modify the state or cause
  // effects (ether payout) to be performed multiple times.
  // If functions called internally include interaction with external
  // contracts, they also have to be considered interaction with
  // external contracts.

  // 1. Conditions
  if (block.timestamp < auctionEndTime)
      revert AuctionNotYetEnded();
  if (ended)
      revert AuctionEndAlreadyCalled();

  // 2. Effects
  ended = true;
  emit AuctionEnded(highestBidder, highestBid);

  // 3. Interaction
  beneficiary.transfer(highestBid);
}
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

## algorithms & strategies

### auctions & voting

- [voting example](https://docs.soliditylang.org/en/latest/solidity-by-example.html#voting)
- [open auction](https://docs.soliditylang.org/en/latest/solidity-by-example.html#blind-auction)
- [blind auction](https://docs.soliditylang.org/en/latest/solidity-by-example.html#id2)

### purchases

- [safe remote purchases](https://docs.soliditylang.org/en/latest/solidity-by-example.html#id2)
