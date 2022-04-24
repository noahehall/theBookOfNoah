# matamask

- (a browser) wallet & tool for interacting with dapps
  - works as an injected web3 provider
    - it injects web3 into the browser so dApps can use it,
    - also makes a node available
  - users need to have metamask installed in their browser to for your dapp to work
- To build and interact with decentralized applications; Metamask provides the connection between DApps and the Ethereum blockchain.

## links

- [website](https://metamask.io/)
- [public faucet](https://faucet.metamask.io/)
- [rinkeby facuet](https://faucet.rinkeby.io/)

## metamask & remix

- any changes to your metamask config will generally require you to redeploy your smart contract within remix
  - this is because remix connects to metamask, so if you change what blockchain metamask is connected to, you'll have to redeploy the contract to that new blockchain (e.g ganache) and update any downstream code with the new contract address (provided by remix)
