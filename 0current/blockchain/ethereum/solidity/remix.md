# remix ethereum online ide

- online IDE for writing, compiling, deploying and invoking smart contracts
- test contracts in a simulator
- deploy contracts to main/test networks
- connect to a node running locally
- connect to various environments to deploy your contracts
  - javascript VM: an inbrowser ethereum network used for testing
  - injected web3 (e.g. via metamask)
    - whichever network your metamask is connected to, the injected web3 will use for remix
  - web3 providers running locally on your box, you need to add in the endpoint
  - hardhat, ganache, walletconnect

## links

- [remix website](https://remix.ethereum.org)
- [docs](https://remix-ide.readthedocs.io/en/latest/)
- [remixd: enable access to local filesystem](https://remix-ide.readthedocs.io/en/latest/remixd.html)

## basics

- high level
  - add code to a workspace
  - compile the code, making sure to select the right version of solidity
  - run/deploy the code: you can select a local web3 provider (e.g. your local ganache server)
- compile tab (one of the buttons)
  - compile contracts and get the ABI, among other things
- contract address is somewhere on the deploy tab
