# bitcoin

- most comes from udacity's blockchain nanodegree program

## links

- todo

  - [testnet](https://en.bitcoinwiki.org/wiki/Testnet)
    - [same link?](https://en.bitcoin.it/wiki/Testnet)
  - [example applications](https://developer.bitcoin.org/examples/)
  - [dev setup requirements](https://bitcoin.org/en/bitcoin-core/features/requirements)
  - [reduce storage](https://bitcoin.org/en/full-node#reduce-storage)
  - [download latest version](https://bitcoin.org/en/download)
  - [bitcoin core docs](https://bitcoin.org/en/bitcoin-core/help#documentation)
  - [bitcoin core wiki docs](https://en.bitcoin.it/wiki/Running_Bitcoin#Linux_Quickstart)
  - [bitcoin.conf generator](https://jlopp.github.io/bitcoin-core-config-generator/)
  - [linux setup instructions: use this](https://bitcoin.org/en/full-node#linux-instructions)
  - [choose a bitcoin wallet](https://bitcoin.org/en/choose-your-wallet)
  - [bitcoin data dir](https://en.bitcoin.it/wiki/Data_directory)
  - [some random testnet faucet](https://testnet.help/en/btcfaucet/testnet#log)
  - [another random testnet faucet](https://bitcoinfaucet.uo1.net)
  - [blockcypher testnet explorer](https://live.blockcypher.com/btc-testnet/)
  - [bitcoin Script language](https://kingslanduniversity.com/bitcoin-script-101/)
  - [bitcoin script + list of opcodes](https://en.bitcoin.it/wiki/Script)
  - [all bitcoin & lightning network APIs](https://chainquery.com/)
    - [bitcoin listunspent cmd](https://chainquery.com/bitcoin-cli/listunspent)

## terms

- bitcoin:
  - specifically a network of bitcoin users creating & validating transactions
  - generally known as a cryptocurrency
- bitcoin core: implementation of bitcoin that encompasses all of the software behind bitcoin that allows the network to function
  - aka Bitcoin-QT, or the Satoshi Client
- faucet: a website that gives rewards in the form of bitcoin; e.g. how you can get testnet coins
  - google `bitcoin testnet public faucet`
- satoshis: the smallest bitcion unit: 10^8 satoshis = 1 bitcoin
- BIPs: Bitcoin Improvement Proposals; similar to ethereum EIPs

## bitcoin core

- set of developer tools to create applications on the bitcoin blockchain
- a dev env for the bitcoin blockchain

### transaction verification engine

- connects to the bitcoin network as a full node allowing you to verify transactions occuring within the network
- grabs the unlocking script contained in the input of a transaction, and checks if it solves the requirements of the UTXO (output) of the linked transaction
  - the sum of a wallets UTXO (unspent bitcoin) is its account balance
  - i.e. the unlocking script of an input in a transaction unlocks the output of a locking script in a PREVIOUS transaction
  - i.e. the locking script of a transaction, interacts with the unlocking script of an input to a FUTURE transaction

### block explorer

- explore & verify the entire bitcoin blockahin, the history of all transactions

#### blockcypher block explorer

- in the searchbar at top, you can enter a wallet address, transaction id, etc
  - using the transaction ID returns a bunch of stuff, espcially important is the details section & total confirmations
- recent blocks: the latest blocks to make it on the chain
  - height: always increases by one, indicates the number of blocks between this one and the genesis block (has a height of 0)
  - age: the order each block was created
  - transations: total transactions in the block
  - size: dependent on the total transactions
- current fee estimates: approximate cost of making transactions on the network
- latest transactions:

### full-node wallet

- fully accepts and validates transactions and blocks from the bitcoin blockchain
  - enables you to continuously download and validate the blockchain using your local computer
  - you dont participate in mining

### debug console

- in the help menu
- CLI enabling you to intereact with data on the bitcoin blockchain

```sh
  getnewaddress somename
  getwalletinfo
  createWallet somename
  loadWalet
  listunspent # show all the unspect confirmed transaction outputs in a wallet, can be used as inputs in another transaction;
    # txid: the transaction id
    # vout: output index of this output within this transaction
    # address: the address to which this output is paid
    # label: if a label was assigned to the transaction
    # redeemScript: one copy is hashed to create the scriptPubKey, the other copy is for the signature
    # scriptPubKey: the hash of the locking script
    # amount: the amount of bitcoin that is paid to the address
    # confirmation: total confirmations
    # spendable: true if the private key(s) needed to spend this output are part of the wallet
    # solvable: true if the wallet knows how to spend this output
    # safe: true if ? TODO
  gettxout <txid> <vout> # view details about a specific UTXO
    # bestblock: hash of the block header that includes this transaction
    # confirmations: total
    # value: amount of bitcoin sent to this output
    # scriptPubKey: the locking script
    # ^ hex: encoded as hex
    # ^ reqSig: the number of required signatures
    # ^ type: type of script, pubkey, multisig, scripthash, witness_v0_keyhash, etc
    # ^ addresses: the addresses used in this transaction
    # ^ coinbase: true if it belongs to coinbase transaction
  createrawtransaction <inputArray> <outputObject># create a transaction (doesnt send it)
    # createrawtransaction '[{"txid":"TXID","vout": VOUT}]' '{"to_address":amount1, "from_address":amount2}'
    # ^ there are generally two outputs in the outputObject
    # ^ to account for change back
    # returns a hex string
  decoderawtransaction <rawtransactionhexstring> # decodes a raw transactions hex string into a human readable object
    # vin: an array of inputs
    # ^the scriptSig will be empty if the raw transaction hasnt been signed by the sending address
    # vout: an array of the outputs
  signrawtransactionwithwallet <hexstring>
    # returns a new hex string
  sendrawtransaction <hexstring>
    # returns a transaction hash (transaction id hexstring)
    # run it through gettxout/gettransaction to view details
  gettransaction <txid> # view details about a transaction
    # amount: how much the wallet received/sent depending if the wallet sent/received
    # fee: fee amount
    # confirmations: amount of confirmations
    # txid: the txid
    # details array
  getrawtransaction <txid>


```

### environments

#### Mainnet

- prod: primary network where live transactions take place
- peers: entire network, +value, ~200gb, full block difficulty, 10 min block creation, pub-key prefix = 1

#### Testnet

- test: alternative bitcoin blockchain that provides a test env for applications
- peers: testers, no value, ~14gb, pub key prefix = m or n, half block diffulty of mainnet; coins have no value and periodically get reset and redistributed,
- you have to sync to the network and download the blocks

#### Regnet

- regression: alternative test network for testing bitcoin applications
- no peers (local to your computer), coins have no value, can instantaneously create blocks (no block difficulty), transactions dont go through validation,
- can only download the core components necessary to run the application

## bitcoin core development

- ~/.bitcoin/bitcoin.conf: all cli options excent for `-conf` can be specified in this file

- you can run the cli or the GUI, but not both at the same time

### data dir

- ~/.bitcoin: the data default directory
  - /testnet3: for the testnet
    - /wallets: contains all your wallets, they end in `.dat`

### blockchain

- designed for transactional data, but can also be used to embed any kind of data as the blockchain expands beyond finance
  - see OP_RETURN elseware

### bitcoind

- the cli: can be run without arguments

### bitcoin-qt

- the gui

```sh
  bitcoin-qt # connect to mainnet
    -testnet # connect to testnet
    -regnet # connect to regnet


```

### data and the data model

- smart contracts: a series of conditions that must be met for an action to occur, and the parameters that meet those conditions
- transactions:
  - double hashed using SHA256 before being stored on the blockchain
    - sha256(sha256(0100...))
    - e.g. this is a raw transaction (not double hashed): 0100000001f3f6a909f8521adb57d898d2985834e632374e770fd9e2b98656f1bf1fdfd427010000006b48304502203a776322ebf8eb8b58cc6ced4f2574f4c73aa664edce0b0022690f2f6f47c521022100b82353305988cb0ebd443089a173ceec93fe4dbfe98d74419ecc84a6a698e31d012103c5c1bc61f60ce3d6223a63cedbece03b12ef9f0068f2f3c4a7e7f06c523c3664ffffffff0260e31600000000001976a914977ae6e32349b99b72196cb62b5ef37329ed81b488ac063d1000000000001976a914f76bc4190f3d8e2315e5c11c59cfc8be9df747e388ac00000000
      - 010000: the bitcoin version number; indicates which bitcoin protocol this transaction adheres to
      - 01: input count; how many inputs were used for this transaction
      - f3...fff: input info; where the input is coming from, and the conditions (can be further broken down below)
        - previous output hash (reversed); links back to an output (UTXO), i.e. points back to the transaction containing the UTXO that will be spnt in this input
        - previous output index; may have more than one UTXO which are referenced by their index number
        - script size (in bytes)
        - scriptsig (the unlocking script) that fullfil ths conditions of the UTXO lockin script
          - historically called scriptsig, because it usually contains a digital signature
          - however, unlocking script is preferred (not all locking scripts are required to contain a signature)
        - sequence: deprecatated feature of bitcoin
      - 02: output count; how many outputs were produced from this transaction
      - 60e...88ac: output info; how much bitcoin outputed from the transaction, and conditions for spending in future transactions (can be further broken down)
        - value: the amount of bitcion outputted in Satoshis
        - script size (in bytes)
        - scriptpubkey (the locking script); the hash of the locking script that specifies the conditions that must be met to spend this output
          - historically called scriptpubkey, becomes they contain a public key/bitcoin address
          - however the phrase lockingScript is generally preferred
      - 00...: locktime; the earliest time (or block) that a transaction can be added onto the blockchain
        - if non-zero && < 500million: its interpreted as the block height, and miners have to wait until the ilicit block height is reached before attempting to add it to the block chain
        - if > 500million: its interpreted as a unix timestamp,
        - if 0: this block can be confirmed as soon as possible

#### bitcoin script

- scripts: list of instructions recorded in each transaction that when executed, determines if the transaction is valid and if the bitcoins can be spent
  - the locking and unlocking script are like a problem and a solution to determine if a transaction is valid, the locking script sets the conditions required for the funds to be spent, and the unlocking script sets the parameters that should satisfied the conditions in the locking script
    - i.e. the locking script should return true when provided with the unlocking script
  - unlocking script: if the transaction is valid, this will contain the the requires that unlock the conditions of the locking script
    - generally contains a digital signature producers by the users wallet from their private key that will unlock the locking script
  - locking script:
    - places a lock on an UTXO (output) of a transaction by specifying the conditions that must be met in order to spend the outputs in the future
      - e.g. the condition may be: anyone with the key (signature) corrosponding to some public address associated with some wallet
- Bitcoin Script: a stack based language
  - high level
    - not turing complete: no loops/complex flow control
      - no infinite loops
      - prevents the validation mechanism from being targeted and attacked as a vulnerability
      - simplifies and secures the system
      - completely deterministic
    - stateless verification
      - no state saved prior to/after the script executes
      - self-contained
      - provides predictability no matter where script is executed
  - stores numbers (data constants)
  - executes from left to right
  - opcodes: i.e. operation codes; used to interact with data in the Bitcoin Script Stack
    - used to push/pop data onto and interact with data in the stack
    - can be used to embed data in blocks on the blockchain
      - this usecase is controversial:
        - supporters: a way to expand bitcoin to support nonfinancial use cases
        - retractors: bitcoin was only meant for financial purposes, and places a load (increased size, cost, maintenance etc) on users who to keep it that way

```sh
  # example bitcoin script
  # ^ sig + pubKey === unlocking script
  # ^ the rest is the locking script
  <sig> <pubKey> OP_DUP OP_HASH160 <pubKeyHash> OP_EQUALVERIFY OP_CHECKSIG

  # common opcodes, the OP_ prefix can be omitted in scripts
  # ^ generally all push their result to the top of the stack
  OP_ADD # pop two items from the top of the stack, add them, them push the sum back to the stack
  OP_MUL # multipies top two items
  OP_EQUAL # checks if the top two stack items are equal to each other
  OP_DUPE # duplicate the top stack item
  OP_EQUALVERIFY
  OP_CHECKSIG # checks the signature for the top two stack items
  OP_RETURN <data> # allows embedding up to 40 bytes of data
    # does not bloat UTXO memory pool
    # to store a sha256 hash, you need to encode the data to binary with 8 bits per byte

  # opcode examples:
  # ^ remember they execute from left to right
  # ^ constant values are pushed to the top of the stack
  2 6 OP_ADD 8 OP_EQUAL # 2 + 6 === 8
    # ^ 2 could be an unlocking script, and the remainder could be a locking script
    # ^ together they return true

```

#### block data model

- block header
  - previous blocks hash: for the block that comes directly before a given block in a the chain; this is how blocks are linked together in the blockchain
  - time: timestamp of creation
  - merkle root: hash representing every transaction included in a given block;
    - pairs of transactions are repeatedly hashed together, recursively until a single hash is left
    - can be used to search the original transactions, e.g. to find the original transactions that made up the block
  - nonce: i.e. number only use once; used in bitcoin mining; miners are solving for a nonce, that when added to a hashed block, and those two values are rehashed, will solve the mining puzzle
- body: contains transactions
