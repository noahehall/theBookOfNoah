# solidity

- strongly typed language used to develop smart contracts in the Ethereum platform

## links

- [docs](https://docs.soliditylang.org/en/latest/index.html#getting-started)
- [remix IDE: online editor](https://remix.ethereum.org)
- [remix github](https://github.com/ethereum/remix-project)
- [old azz udacity example code](https://github.com/udacity/nd1309-work-code/tree/master/Course_Identity_And_Smart_Contracts/solidity)

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

### keywords

- pragram: states which version of solidity to use
- contract: similar to class keyword in js
- constructor:

### types

- public: visibility
- view: only meant to view information
- returns (type): type of object returned by a fn

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
