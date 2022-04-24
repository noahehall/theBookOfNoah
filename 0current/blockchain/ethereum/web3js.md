# web3

- set of libraries for interacting with the ethereum blockchain from javascript land

## terms

- unitMap: mapping of various tokens on ethereum and their exchange rate
  - when sending transactions, you cant specify decimal places (e.g. 1.5 ether, or 1.5 dollars)
  - you have to reduce the value to a lower denomination, e.g. 1 dollar and and 50c

## links

- [docs](https://web3js.readthedocs.io)

```js
import web3 from "web3"; // main class

// util: functions for Ethereum dapps and other web3.js packages.
const { utils } = web3; // utility
const hash = utils.sha3("some msg");

// eth: interact with a blockchain & smart contracts
const { eth } = web3;

// eth.account: to generate eth accounts & sign transactions & data
const { accounts } = eth;

// eth.personal: interact with the Ethereum node’s accounts.
const { personal } = eth;
// prepends the length of the msg to the signed data
// be sure you create the hash first, this way the msg will always be exactly 32 bytes long
personal.sign(someHash, eth.defaultAccount).then(console.log);
```
