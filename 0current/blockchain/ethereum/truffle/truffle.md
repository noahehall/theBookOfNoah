# truffle

- ethereum framework for deploying smart contracts
- The Truffle Suite gets developers from idea to dapp as comfortably as possible.
- enables you to build, compile, test and deploy (migrate) contracts in nodejs

## links

- [truffle website](https://trufflesuite.com/)
- [truffle box](https://trufflesuite.com/boxes/)

## todo

- had some issues installing with pnpm, i think it has to do with `_install.node` whatever script in the linux dir
  - works with npm tho

## terms

- migrate: extracts the ABI from a deployed contract
- truffle config: setup the connection to a blockchain
  - check the doc for the latest code
- truffle boxes: boilerplates to get you up and running with a fullstack dapp

## gotchas

- only seems to work with commonj, set package.json.type = 'commonjs'

## cmds

```sh
  truffle # see list of cmds
    console # connect to the network specified in the truffle config.js
    compile # compile contract source files
    migrate # run migrations to deploy contracts
```
