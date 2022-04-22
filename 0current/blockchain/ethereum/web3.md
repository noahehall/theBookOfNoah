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
const { utils } = web3; // utility functions for Ethereum dapps and other web3.js packages.
const { eth } = web3; // interact with a blockchain & smart contracts
const { accounts } = eth; // fns to generate eth accounts & sign transactions & data
const { personal } = eth; //nteract with the Ethereum node’s accounts.
```
