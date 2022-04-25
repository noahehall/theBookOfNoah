// TODO: stuff is here extracted from solidity.verbose
// ^ to keep this better structured
// ^ all of this should be valid solidity
// either comes from solidity docs or vscode sol plugin

/// global vars and functions
contract GlobalVars {
  // msg == current msg
  function thisMsg() {
    msg.data; // complete calldata
    msg.sender; // address: sender of the msg
    msg.sig; // bytes4: first 4 bytes of the calldata
    msg.value; // uint: in wei
  }

  // tx == current transaction
  function thisTx() {
    tx.gas; // (uint): gas price of the transaction
    tx.origin; // (address): sender of the transaction (full call chain)
  }

  // block == current block
  function thisBlock() {
    block.difficulty; // (uint): current block difficulty
    block.gaslimit; // (uint): current block gaslimit
    block.number; // (uint): current block number
    block.timestamp // (uint): current block timestamp as seconds since unix epoch

  }

  // assert;
  // require;
  // revert;
  // payable(msg.sender).transfer(refund)

}


// ### data types

// ```js
// /**
//   uint: unsigned 256 bit integer

//   address: 160-bit value; no arithmetic operations are allowed; used to store contract address, or a hash of hte public half of a keypair belonging to external accounts

//   mapping (from => to): maps a from key to a value; cannot retrieve a list of all the keys of a mapping, nor a list of all values; or whats been added, or be used within a context there its not needed

//   dataType[]: dynmically sized arrays
//     .push(...)
//     .length

//   struct Poop: container of other data types
//     poop = Poop({ key: value, ...})

//   enum Blah { Flush, Poop, Toilet }
//   Blah public blah; create an instance of Blah enum,
//     ^ has a default value of Blah.flush
//  */
// contract DataLocation {
//   // elementary data types
//   uint public count; // initialized to 0
//   int amount; // initialized to 0
//   bool iKnowWhatImDoing; // initialized to false
//   address payable owner; // initialized to 0x0
//   byte32 name;
//   uint[] points;

//   // complex data types
//   struct Poop {
//     uint times;
//     bool flushed;
//   }

//   // splits a signature (sig) using inline assembly
//   assembly {
//     // first 32 bytes, after the length prefix.
//     r := mload(add(sig, 32))
//     // second 32 bytes.
//     s := mload(add(sig, 64))
//     // final byte (first byte of the next 32 bytes).
//     v := byte(0, mload(add(sig, 96)))
// }

//   // maps addresses to names
//   mapping(address => name) public names;

//   // dynamically sized array of Poop structs
//   Poop[] public poops;

//   // Errors that describe failures.

//   // The triple-slash comments are so-called natspec
//   // comments. They will be shown when the user
//   // is asked to confirm a transaction or
//   // when an error is displayed.

//   /// The auction has already ended.
//   error AuctionAlreadyEnded();
//   /// There is already a higher or equal bid.
//   error BidNotHighEnough(uint highestBid);
//   /// The auction has not ended yet.
//   error AuctionNotYetEnded();
//   /// The function auctionEnd has already been called.
//   error AuctionEndAlreadyCalled();
//   constructor(bytes32[] listOfStrings) {
//     // msg is a global var
//     sender = msg.sender;
//     // do stuff
//   }

//   // good way to validate inputs to fns
//   modifier addThisCodeToFn(uint whatev) {
//     if (block.timestamp >= time) revert TooLate(time);
//     _; // original fn code inserted here
//   }

//   function someFn(uint someInt)
//     external
//     payable
//     addThiscodetoFn(blindedBid)
//   {
//     // fn body
//   }
//   function localVars() {
//     require(
//       msg.sender == someAddr,
//       "return this string if false"
//     );

//     // doesnt return a msg, but still exits & reverts if false
//     require(
//       msg.sender != someAddr
//     )
//     uint[] storage localArray;
//     uint[] memory memoryArray;

//     // creates a ref to a storage array
//     // reference vars change the reference
//     uint[] pointer = points;
//   }

//   function flush() {
//     if (block.timestamp > whatever) {
//       revert NoToilerPaper();
//     }

//     emit IPooped(msg.sender, msg.value);

//     return true;
//   }
// }

// ```

// ### operators

// ```js
//  !
//  &&
//  ||
//  ==
//  !=
//  -=
//  +=
// ```

// ### control

// ```js

// for (uint i = 0; i < somePoop.length; i++) {
//   // do this stuff
//   // continue; immediately start next loop
// }

// while (someVar != someOtherVar) {
//   // do this stuff

//   // always include a require check
//   // else you could burn all your gas
//   require(thisThing == thatThing)
// }

// if (someThingEvaluatesToBool) {
//   // do this stuff
// } else {
//   // do this other stuff
// }

// ```

// ### functions

// ```js
// function auctionEnd() external {
//   // It is a good guideline to structure functions that interact
//   // with other contracts (i.e. they call functions or send Ether)
//   // into three phases:
//   // 1. checking conditions
//   // 2. performing actions (potentially changing conditions)
//   // 3. interacting with other contracts
//   // If these phases are mixed up, the other contract could call
//   // back into the current contract and modify the state or cause
//   // effects (ether payout) to be performed multiple times.
//   // If functions called internally include interaction with external
//   // contracts, they also have to be considered interaction with
//   // external contracts.

//   // 1. Conditions
//   if (block.timestamp < auctionEndTime)
//       revert AuctionNotYetEnded();
//   if (ended)
//       revert AuctionEndAlreadyCalled();

//   // 2. Effects
//   ended = true;
//   emit AuctionEnded(highestBidder, highestBid);

//   // 3. Interaction
//   beneficiary.transfer(highestBid);
// }

// // Ensure that `msg.value` is an even number.
// // Division will s
// function isEven() {
//   value = msg.value / 2;
//   if ((2 * value) != msg.value)
//       revert ValueNotEven();
// }

// /// Abort the purchase and reclaim the ether.
// /// Can only be called by the seller before
// /// the contract is locked.
// function abort()
//     external
//     onlySeller
//     inState(State.Created)
// {
//     emit Aborted();
//     state = State.Inactive;
//     // We use transfer here directly. It is
//     // reentrancy-safe, because it is the
//     // last call in this function and we
//     // already changed the state.
//     seller.transfer(address(this).balance);
// }

// // recipient is the address that should be paid.
// // amount, in wei, specifies how much ether should be sent.
// // nonce can be any unique number to prevent replay attacks
// // contractAddress is used to prevent cross-contract replay attacks
// function signPayment(recipient, amount, nonce, contractAddress, callback) {
//     var hash = "0x" + abi.soliditySHA3(
//         ["address", "uint256", "uint256", "address"],
//         [recipient, amount, nonce, contractAddress]
//     ).toString("hex");

//     web3.eth.personal.sign(hash, web3.eth.defaultAccount, callback);
// }

// // sign a message via javascript and supported libraries
// function constructPaymentMessage(contractAddress, amount) {
//     return abi.soliditySHA3(
//         ["address", "uint256"],
//         [contractAddress, amount]
//     );
// }
// function signMessage(message, callback) {
//     web3.eth.personal.sign(
//         "0x" + message.toString("hex"),
//         web3.eth.defaultAccount,
//         callback
//     );
// }
// // contractAddress is used to prevent cross-contract replay attacks.
// // amount, in wei, specifies how much Ether should be sent.
// function signPayment(contractAddress, amount, callback) {
//     var message = constructPaymentMessage(contractAddress, amount);
//     signMessage(message, callback);
// }

// /// the recipient can close the channel at any time by presenting a
// /// signed amount from the sender. the recipient will be sent that amount,
// /// and the remainder will go back to the sender
// function close(uint256 amount, bytes memory signature) external {
//     require(msg.sender == recipient);
//     require(isValidSignature(amount, signature));

//     recipient.transfer(amount);
//     selfdestruct(sender);
// }
// ```

// ### example contracts

// ```js
// // sample contract
// contract SomeContract {
//   string public someStateVar;

//   constructor (string _name) public {
//     name = _name;
//   }

//   // not required for public vars
//   // its getters are automatically created
//   function getName() public view returns (string _name) {
//     return name;
//   }

//   function setName(string _name) public {
//     name = _name;
//   }

//   // Set to true at the end, disallows any change.
//   // By default initialized to `false`.
//   bool ended;


// }

// ```

// ### example libraries

// ```js

// library Balances {
//   function move(mapping(address => uint256) storage balances, address from, address to, uint amount) internal {
//       require(balances[from] >= amount);
//       require(balances[to] + amount >= balances[to]);
//       balances[from] -= amount;
//       balances[to] += amount;
//   }
// }

// ```
