# blockchain

- most comes from udacity's blockchain developer nanodegree

- skipped
  - udacity online workspace; rather use my local machine

## links

- [solidity: ethereum programming language](https://soliditylang.org/)
- [how to timestamp a digital document, the first block idea](https://www.anf.es/pdf/Haber_Stornetta.pdf)
- todos
  - [bitcoin: peer to peer electornic cash system and PoW](https://bitcoin.org/bitcoin.pdf)
  - [anders bitcoin hashing](https://anders.com/blockchain/hash.html)
    - link no longer works
  - [anders blockchain block](https://anders.com/blockchain/block)
    - no longer works
  - [bitcoin hash wiki](https://en.bitcoin.it/wiki/Hash)
  - [cryptographic hash function](https://en.wikipedia.org/wiki/Cryptographic_hash_function)
  - [blockchain.com](https://www.blockchain.com/about/index.html)
  - [blockchain.com unconfirmed transactions](https://www.blockchain.com/btc/unconfirmed-transactions)
  - [blockchain.com charts](https://www.blockchain.com/charts)
  - [bitcoin visuals](https://bitcoinvisuals.com/stats)
  - [ethereum](https://ethereum.org/)
  - [dash](https://www.dash.org/)
  - [lisk](https://lisk.io/)
  - [ethereum PoS FAQs](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQs)
  - [wikipedia proof of stake: block selection methods](https://en.wikipedia.org/wiki/Proof-of-stake)
  - [alternative proof of stake methods](https://dailyfintech.com/2016/01/20/why-proof-of-stake-matters-for-blockchain/#content-wrapper)
  - [DBFT: neos consensus protocol](https://steemit.com/neo/@basiccrypto/neo-s-consensus-protocol-how-delegated-byzantine-fault-tolerance-works)
  - [proof of activity](https://www.coinbureau.com/blockchain/proof-of-activity-explained-hybrid-consensus-algorithm/)
  - [proof of burn](https://99bitcoins.com/what-is-proof-of-burn/)
  - [neo blockchain](https://neo.org/)
  - [multicoin capital](https://multicoin.capital/)
  - [electrum](https://electrum.org/#home)
  - [getting started with electrum](https://www.youtube.com/watch?v=WdVlH9N2oKU)
  - [importing priv keys in electrum](https://bitcoinelectrum.com/importing-your-private-keys-into-electrum/)
  - [sweep a private key in electrum](https://bitcoinelectrum.com/sweeping-your-private-keys-into-electrum/)
  - [bitcoin wallet generator](https://www.bitaddress.org/bitaddress.org)
  - [generate a private key by flipping a coin](https://bitcointalk.org/index.php?topic=297077.msg3197393#msg3197393)
  - [generate a private key offline](https://github.com/bigmob/cryptosteel-tutorial/wiki/How-to-generate-private-key-offline-with-Bitaddress)
  - [full list of wallets](https://bitcoin.org/en/choose-your-wallet)

## terminology

- blockchain: a shared ledger (db) that records a list of transactions that happen within the network
  - started as an idea by Satoshi Nakamoto back in 2009 to solve problems with financial transactions
  - bitcoin is the first blockchain, but now there are many more
- transactions: a record of information, e.g. who sent it, received, etc
  - are sent to other users and grouped with other transactions into a block
  - once the block is filled with enough transactions, it is permanently added to the blockchain
- hash: a unique fingerprint assigned to a block
  - any change to the block will require a change to the hash, making the block invalid
  - each block receives a hash value, as well as the hash value of the block that was created before it, hence you get a blockchain
- blockchain data is
  - held, shared and verified by all users on the block
  - anonymous and cryptographically secure
- trusted 3rd party: entity that facilitates interactions between 2 parties
  - establish security to secure, store/record and make transactions
- ledger: list of transaction records, e.g. who sent, received, etc; removes the double spending problem
  - is shared on the blockchain, everyone has access to it
- double spending problem: when someone spends the same money more than once
- wallet address: like an email address

## blockchains

### bitcoin

- the first, but now one of many blockchains
- a type of digital currency that utilizes the blockchain to facilitate financial transactions
- uses blocks to group and validate transactions
- uses sha256 to create a unique hash value for each block on the blockchain

## blockchain framework

- overview of blockchain components
  - block
  - blockchain
  - consensus
  - digital signature
  - hashing
  - mempool (memory pool)
  - network (distributed P2P network)
  - transaction
  - wallet

### blocks

- the building blocks of the blockchain
- a container that hold a list of transactions to be added to the blockchain
- the blockchain ledger is HUGE, so the blocks provide a way to breakup the long list of transactions into groups of ordered transaction events
- block components
  - body: list of transactions
  - header: block metadata
    - previous blocks hash: the hash value for the block that comes immediately before this one, (think linked list)
    - time the block was made: the blockchains solutions to the double-spending problem:
    - merkle root: hash that represents every transaction inside the block
      - pairs of transactions are hashed repeatedly, until youre left with a single hash value
      - can be used to reverse engineer the transaction hash values that made the merkle root
        - you use the hash to search the original transactions (hash values) that created them - enables you to find the original transactions that made up the block when starting from merkle root
    - nonce: an arbitrary number that can only be used once
      - block data + nonce = hash value
      - has to do with mining
- block difficulty: the number of 0s requested to make the nonce, the more the 0s the more greater the difficulty
- block size: the amount of space a block has to hold information (e.g. 1mb)
  - is decided by the developer
  - determines how long it takes to create a block, and how many blocks will be on the chain. is the same for every block on the chain, and can only be changed via an update
- block number: identifies the position of this block within the blockchain, i.e. the block # 1 is the first block
  - genesis block: the block with number 1
- blocks hash value: it includes this blocks data + the hash value of the previous block, creating a chain of blocks (blockchain)

### blockchain

- a shared digital ledger that contains the entire histoyr of transactions made on the network
  - i.e. the transaction history of the network
- a connection of linked blocks joined together by hash values; hash values + blocks are the core components
  - if the hash value of a block is changed, the hash for the next block is also changed, and next block, etc. and all those blocks become invalid
- all information is immutable

### network (distributed p2p network)

- the network enables the blockchain to bypass the need for trusted 3rd parties
- peer to peer: a network of computers that allows information to be shared directly across users (nodes) without the need for a central authority to hold that information
  - enables open communication
- network types
  - centralized network: information is held by a single network owner, and all nodes must connect to it to get information
  - decentralized: information is duplicated and held in multiple locations, and nodes can connect to any of the networks to get information
  - distributed network: a network that duplicates information to each user in the network
    - enables information to be owned by users
    - its a decentralized network pushed to the limits

### mempool (memory pool)

- the waiting place (backlog) for unconfirmed transactions to be verified before they are added to the blockchain
  - the purpose is to provide transaction security
    - transactions must be included in a block, and the block confirmed six times before being added to the blockchain
      - 6 confirmations means 5 additional blocks have been added to that blockchain, then the entire 6 blocks get added to the overall blockchain
      - its considered irrevocable after 6 confirmations, because it will take an considerable amount of CPU resources to revalidate 6 entire blocks
  - transactions sit in RAM (memory) of all the nodes on the bitcoin network
  - six/more confirmations is sufficient proof for a transaction to leave the mempool and be included in a block on the blockchain
  - before a transaction can be considered complete, it must be verified by specialized nodes on the network called miners (at least 6 confirmations)
- miners: help ensure consensus on the blockchain by verifieing transactions in the mempool
- valid reasons for a transaction to leave the mempool (eviction does not imply a transaction is canceled)
  - the transaction expired by timeout (default 14 days after entering)
  - transaction was at the bottom (when sorted by fee per size), the mempool reached its size limit, and a new higher-fee transaction was accepted, evicting the transaction at the bottom
  - the transaction was included in a block (i.e. it shouldnt be in the mempool if it already added to the blockchain)
  - the transaction/one of its unconfirmed ancestors conflicts with a transaction that was already included in a block
- fees: confirming bitcoin transactions requires a lot of computational memory,
  - everytime a sender puts out a transaction into the mempool, they add a transaction fee, a tip for the miner to validate the transaction
  - miners can look through all possible transactions and will pick the one with the higest fee, (thats how they get paid)

### consensus (idea and algorithms)

- drives all the decisions made to establish and grow the blockchain; its how the blockchain makes decisions; and how blocks join the blockchain
- is an idea, thats implemented via different algorithms
  - a voting process for the network, that makes decisions about information on the blockchain, e.g. which transactions are most trustworthy
- byzantine generals' problem: an analogy for a distributed network and reaching consensus amongst nodes
  - 9 generals encircling an army, need to make a decision about how best to attack, or retreat, and all nine must agree to do the same thing, else they will lose
  - of the 9 generals, there could be some who are traitors (theres always traitors in the mix)
  - the generals are physically separated, and must send their votes via messengers, which could be attacked along the way, lose the msg, or change the msg

#### proof of work (PoW)

- summary: miner nodes solve a math puzzle that requires a lot of computation power. whichever miner is able to solve the puzzle the fastest is able to add a block of transactions to the blockchain
  - in return, they are paid the transaction fees from all the transactions included in the block, as well as paid by the netowrk with bitcions that were newly created upon the mining of the block
- bitcoin uses PoW
- a way to achieve consensus without a centralized authority, original proposed by bitcoin (see the paper link)
- whoever puts in the most work to contribute to the system is the most trustworthy
  - a system where information can be costly to produce (the work required to generate a blocks hash value), but easy to verify
  - each node is involved in solving a problem to prove theyve done the required work
  - solving the problem (takes a long time) is indicator/signal that the node can be trusted
    - the problem is finding the Nonce for the next block
  - the nodes that solve the problem are known as miners
    - miners are in a race with eachother to solve the next problem, in order to be the one that puts the next block on the blockchain
    - in return for their time and resources they are paid transaction fees (by the users) and in bitcoin (by the network)
      - the bitcoin are created specifically for miners, and is the only way new coins are added to the network
- the proof of work requires a certain type of hash value, that starts with a certain amount of zeros (this is the block difficulty)
  - you get the zeros by having the correct Nonce + block data
  - since the block data (the transactions) arent changing, the only option is to change the Nonce
  - guessing the Nonce is time consuming, and the more leading zeros required in the final hash value, the longer the guessing game takes
  - bitcoin adjusts the block difficulty (amount of zeros required) to ensure a new block is created every 10 minutes
    - 10 minutes was arbitrarily decided by the bitcoin developers, as a balance between network security and efficiency of creating new blocks
      - too fast: hackers can attempt to change the data
      - too slow: network cant keep up with the amount of transactions happening and the mempool will be overloaded
- issues
  - extremely high energy consumption: the compute power to calculate the correct Nonce is super high
    - mining rigs/farms are setup that consume a lot of energy
  - monopoly of miners leads to concern for centralization
    - those who have the resources to access more equipment have an unfair advantage
    - they have more say in which blocks are considered valid

#### proof of stake algorithm (PoS)

- summary: there are no miners, instead validators (stakeholders) determine which block makes it onto the chain
  - in order to validate transactions and create blocks, they must put up their own coins as stake, like placing a bet
  - if they validate a fraudulent transaction, they lose their stake as well as their rights to participate as a validator in the future
- who uses it
  - ethereum uses PoS (but use to be on PoW)
  - DASH: pioneer of PoS: built from the core bitcoin platform with added features for privacy and Tx speed
    - PrivateSend: todo
    - InstantSend: todo
  - LISK: focused on creating decentralize Apps; uses delegated PoS
    - dapps are built with javascript
    - delegated PoS: only the top 101 delegates are able to have stakes in the network
      - delegates are voted on in a rolling basis by the community; 1 Lisk === 1 vote
- focuses on giving votes to members, depending on how much stake they have in the success of the chain; more stake === more votes
- validators: aka stakeholders: determine which blocks make it onto the blockchain
  - validators put up their own coins as stake, as if they were placing a bet
  - if a validator puts an invalid transaction into a block on the blockchain, they lose their holds and their right to participate as a validator in the future
    - this incentives validators to validate only truthy transactions
    - the greater the % of total coins a validator owns, the higher the chance of them being picked of validating the next block
    - if a validators block is added to the blockchain, they are added coin proportional to the amount of their stake
  - there are no miners in PoS that mine coins, because all the coins already exist
- forks: TODO
  - basically when there are multiple proposed blocks and that split a chain, need to research this some more
- issues
  - nothing at stake problem: if a validator bets on multiple blocks, so they always win.
    - slasher solution: validators are penalized if they simutaneously create blocks on multiple chains
    - other solution: validators on penalized for creating blocks on the wrong chain; forcing them to be selective about which blockchain to put their stake on

#### delegated proof of stake

- todo

#### DBFT algorithm

- summary: ordinary nodes in the system vote on representative delegate nodes; the delegate nodes decide which blocks should be added to the blockchain
  - when its time to add a block, a randomly selected delegate is selected as speaker, proposes the block of transactions to add, and atleast 66% of the other delegates must approve, the process repeates if less than 66% (2/3rds) fail to approve the proposed block
- neo uses DBFT
- delegated Byzantine fault tolerance
- said to be much faster that PoW because there are no complicated cryptographic puzzles to solve
- there are no forks: because there is always only one versin of truth (due to the consensus nodes + voting process)
- assignes roles to nodes to help coordinate consensus
- does not have miners, but instead consensus nodes and regular nodes
  - regular nodes: just normal users
  - consensus nodes: have the power to verify each block written to the blockchain; act as representatives for other nodes in the network
    - keep track of proposed blocks that could be added to the blockchain
    - when its time to add a block to the blockchain, a random consensus node is selected,
      - NEO blockchain: labels the selected consensus node SPEAKER, and the others delegates
        - the speaker creates a new block and proposes it to the delegates
        - 2/3rds of delegates must approve the block, else a new randomly selected consensus node becomes speaker and the process repeates
- issues
  - bad speaker: since speakers are chosen randomly, the selected speaker could be dishonest/malfunction
    - solution: since users vote on delegates, and delegates are randomly selected to become speaker, its up to the users to ensure only honest nodes become delegates
  - bad delegates: users may not know which other nodes are good, and be unable to cast meaningful votes
    - solution: some platforms release data about the honesty and functioning of each delegate for voters to review

#### Proof of Activity

- todo

#### proof of elapsed time

- todo

#### proof of burn

- todo

### transactions

- the fundamental building blocks of any blockchain
- a data structure that encodes a transfer of value from a source of funds (input) to a destination of funds (output)
  - the wallet needs to have enough funds, the sum of the input transactions + fees
- transactions start broadcasting to the network when a wallet first signs a transaction
  - a signature is required before a transaction is submitted to the network
  - you sign the transaction via the private key linked to your wallet address
  - the signed transaction goes from the sender to the receiver as a transaction message
  - can be made up of multiple transaction inputs and outputs
    - e.g. a single input will generally require two outputs, input to cover the value being transferred + miner fees, 1 output to the receiver, 1 output as change back to the sender
- transaction inputs: value from a source of funds becomes input to the transaction
  - all inputs are unspent outputs from another transaction, i.e. all inputs reference back to an output, e.g. the initial funding of a wallet (like a linked list)
  - conditions: transaction inputs need to be converted to an output, which contains the condition to prove ownership using a private key
- transaction output: aka UTXO
  - UTXO: unspent transaction output; the initial broadcast of a transaction to the network; only UTXO messages can be used as inputs to an accepted transaction
    - contains conditions (proofs): proof of ownership to transact with those funds (derived from the wallet addresses private key)
    - is indivisible, like a coin, cant be cut in half,
      - if the value of a UTXO is larger than the desired value of a transaction, it must still be consumed in its entired, and an additional output must be created to give change back to the owner
  - when a user receives bitcoin, that amount is recorded on the blockchain as unspent outputs (UTXO);
  - all of a wallets UTXO is scattered throughought the blockchain
  - when its time for them to spend that bitcoin, the wallet scans the blockchain and aggregates all the UTXO belonging to that user, and calculates the balance
    - i.e. theres no such thing as a stored balance for an account/bitcoin address; theres just a bunch of UTXO scattered on the blockchain, all linking back to a specific wallet address
- lifecycle 1
  - get the receivers wallet address
  - create a transaction: amount to send + transaction fee
  - verify & sign the transaction via senders wallet, using the wallets private key
  - broadcast the transaction to the mempool
  - miners eventually accept the transaction, group it into a block, find the proof of work, and assign the block a hash value
  - the block is eventually placed onto the blockchain
  - as the block gains confirmations, its eventually accepted as a valid transaction
  - the receiver finally receives their funds
- lifecycle 2
  - i want to send 2 bitcoin
  - wallet scans the blockchain and retrieves two UTXO belonging to my address that can be summed to cover the costs
  - these two UTXO becomes input to a new transaction, and the change is converted to an output (another UTXO) and linked back to my wallet address

### wallet

- establishes your identity on the blockchain
  - when you move crypto from one address to another, you need to provide a digital signature proving that you control/own that address, i.e. your signing a transaction that shows you control the address from which the crypto is moving from
- restoring a wallet
  - use a seed: the 12 words used to initially create the wallet
  - import a private key: you take the private key of a source wallet and import it into a destination wallet
    - enables you to access the key via the source/destination wallet(s)
      - be careful, as now the source wallet has been shared, it increases the likelihood of being compromised
  - sweep a private key: move the private key of a source wallet into a destination wallet
    - the source wallet is now empty, and the destination becomes the new source
    -

#### keys

- private > public > wallet

##### private keys

- private key: a cryptographically secure randomly generated number that allows you to send crypto from your wallet; everytime you interact with the blockchain, you have to sign that transaction with your private key
  - can be any number from 1 to 2^256
- formats:
  - hexadecimal: 256 bits === 32 bytes
  - wallet import format (WIF): make it easier to make different copies for different use cases
    - WIF (Base58Check):
    - WIF-Compressed (Base58Check added suffix 0x01 before encoding)
- generating
  - find a secure source of entropy to make it random/unpredictable

##### public key

- public key: a shareable key that cannot be used to spend crypto; but used to receive crypto; created from the private key via some one-way elliptic curge digital signature algo (ECDSA see security docs for indepth);

##### wallet address

- wallet address: a unique identifer made from the public key for a wallet that can be shared with anyone

#### non deterministic wallet

- random wallets where private keys are generated from random private keys as seeds (instead of easy to remember words)

  - random number > priv key > pub key > wallet addrss
  - nothing can be traced back to the random number

- best practices
  - generate a new wallet address for each transaction, so no one can trck links between addresses
  - make sure to backup the wallet, so you dont lose the generated priv key
- use cases
  - backend services

#### deterministic wallets

- all priv, publick and wallet addresses can be traced back to the original seeds, theres a purpose behind each

##### sequential deterministic wallet

- derived sequentially from a single seed and can be traced back to that seed
  - a random number is used to generate a seed (e.g. 12 words)
  - the seed is put through an algo to create a private master key
  - the private master key goes through an algo, to create a new private key, and so on
  - the seed can be used to regenerate everything as well as export/import to migrate the wallet to diferent impelmentations, thus only a single backup is necessary
- first introduced in electrum

##### hierarchical deterministic (HD) wallet

- borne from the bitcoin improvement proposal 32 (BIP32)
  - BIPs are used to improve the bitcoin proposal
- an advanced type of deterministic wallet that contains keys derived in a tree structure
  - a seed creates a master key
  - that master key can create child private/public keys, chlid keys can create grandchild private/public keys, and so on
- seed words: list of words that store all te information needed to recover a wallet
- use cases
  - businesses that want to separate out different departmental spending
    - since all the keys still tie back to the initial master key, you can still assert authority over all public/private ancestor keys
  - assigning keys to application users that need to be paid
  - creating keys for different types of transactions
  - trustless servers: a webserver can create ancestor public keys for various tasks, and never share the private key
- best practices
  - the master key must be secured, as everything falls apart if its leaks

### hashing

- blockchain hashing logic
  - generate private key
  - hash private key with ECDSA to create public key
  - hash public key with SHA256 (256 bits), then with primitive to digest (RIPEMD-160, 160 bits) to create a public key hash
  - make the wallet address via Base58Check

### digital signatures

- establishes a proof of ownership for each transaction on the blockchain
- created via the wallet address
