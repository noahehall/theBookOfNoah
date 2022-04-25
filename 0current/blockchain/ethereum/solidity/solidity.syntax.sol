// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8 <0.9.0;

// import "./poop"; // dont do this
// import * as poop from "./poop";
// import "./poop" as poop; // alternative
// import { flush, toilet as tl } from "./poop";

/*
  * This is a comment
  */
/// global vars and functions
contract GlobalVars {
  // msg == current msg
  function thisMsg() public {
    msg.data; // complete calldata
    msg.sender; // address: sender of the msg
    msg.sig; // bytes4: first 4 bytes of the calldata
    msg.value; // uint: in wei
  }

  // tx == current transaction
  function thisTx() public {
    tx.gas; // (uint): gas price of the transaction
    tx.origin; // (address): sender of the transaction (full call chain)
  }

  // block == current block
  function thisBlock() public {
    block.difficulty; // (uint): current block difficulty
    block.gaslimit; // (uint): current block gaslimit
    block.number; // (uint): current block number
    block.timestamp; // (uint): current block timestamp as seconds since unix epoch
  }

  // this contracts abi
  function thisAbi() public {
    abi.encode(args); // (bytes): ABI-encodes the given arguments
    abi.encodePacked(arg); // (bytes): Performes packed encoding
    abi.encodeWithSelector(selector, args); // (bytes) ABI-encodes the given arguments with the given selector
    abi.encodeWithSignature(signatureString, arg); // (bytes): Equivalent to abi.encodeWithSelector(bytes4(keccak256(signature), ...)`
  }
}

contract GlobalFns {
  function requireCondition() {
    // can specify multiple conditions
    require(
      msg.sender == someAddr,
      "return this string if false"
    );

    // doesnt return a msg, but still exits & reverts if false
    require(msg.sender != someAddr);
  }

  function assertCondition () {

  }

  // TODO: need more error examples
  // ^ they can accept data
  error NoToilertPaper();
  function revertWithArray() {
    if (block.timestamp > whatever) {
      revert NoToilerPaper();
    }
  }

  // assert;
  // payable(msg.sender).transfer(refund)
}

contract Operators {
  // TODO: different datatypes use different operators
  //  !
  //  &&
  //  ||
  //  ==
  //  !=
  //  -=
  //  +=
  // %
}

/// examples of all datatypes
contract DataTypes {
  /* generalizations */
  // you can use any type as a fn to convert another type to it
  // ^ e.g. address(uint160(bytes20(b))) or address(uint160(uint256(b)))

  /* variable modifiers ****************/
  // public: can be called by other contracts, e.g. uint public amount
  // memory: save in memory
  // storage: save in storage

  /* elementary (value) data types ****************/
  // integers: accepts steps 8 increments, from 8 to 256
  // without step defualts to 256
  // initialized to 0
  // can use type(datatype).min|.max e.g. type(uint).min

  // unsigned
  // operators: comparison, arithmetic, bitwise
  uint count;
  // signed
  // operators: can also use the unary - operator
  int amount;
  // litereals
  uint a = 1;
  uint b = 1.5; // rational
  unit c = 2e10; // 2 * 10**10

  // strings
  string name;
  string poop = "flush" // or 'flush'
  string memory a = unicode"Hello 😃"; // prefixed with unicode
  string flush = "poop" "flush"; // compiles to "poopflush"

  // boolean
  // initialized to false
  // operators: ! && || == !=
  bool iKnowWhatImDoing;

  // addresses
  // initialized to 0x0
  // operators: comparison
  // used to store contract address
  // ^ or a hash of the public half of a keypair belonging to external accounts
  // holds a 20 byte value (size of an ethereum address)
  // can be converted to a
  // ^payable address via payable(address)
  // ^to/from uint160, integer literals, bytes20, and contract types
  // properties:
  // ^ balance,
  // ^ code === bytes memory ,
  // ^ codehash === keccak-256 hash as bytes32, cheaper than using keccak256(addr.code)
  // methods: call(), delegatecall(), staticcall()
  // ^ you are handing over control to the contract at that address with these methods
  // ^ they can change your state vars, be careful!
  address owner;
  // is an address you can send ether to
  // can be converted to a regular address
  // properties: balance, send(), transfer()
  address payable recipient;
  // fails if the contract is not large enough/rejected by recipient
  recipient.transfer(20);
  // low-level counterpart of transfer
  // on failure the contract will not stop with an exception
  // ^but the send() fn will return false, so always check the return value
  // ^ generally use .transfer() instead, or even better force the recipient to withdraw the money
  // address(this).send(20);
  address literalAddr = 0xdCad3a6d3569DF655070DEd06cb7A1b2Ccd1D3AF;

  // bytes
  // 32 byte string
  bytes32 name;

  /* complex (reference) data types ****************/
  // dynmically sized arrays in the form dataType[]
  // methods: push(),
  // props: length,
  uint[] numbers;

  // custom defined types
  struct Poop {
    uint times;
    bool flushed;
  }

  // maps fromThis => ToThis
  // cannot  retrieve a list of all the keys nor added values,
  // or use within a context where the mapping isnt needed
  mapping(address => name) public names;

  // custom types with a finite set of constant values
  // initialized to the first value
  enum Blah { Flush, Poop, Toilet }

}

contract MemoryManagement {
  // all vars outside a fn are state vars
  // all state vars are stored in contract storage

  // specifically assigned to storage
  uint[] storage stateArray;

  function localVars() {
    // creates a ref to a storage array
    // reference vars change the reference
    uint[] localArray = stateArray;

    // specifically assigned to memory
    uint[] memory memoryArray;
  }
}

contract Visibility {
  string public name;
  // not required for public vars (above name is public)
  // its getters are automatically created
  function getName() public view returns (string _name) {
    return name;
  }
}

// define descript names and data for failures
// can be used in revert statements
// MUCH cheaper than strings and allow for more complex data
// always use with a natspec
/// Not enough funds for transfer. Requested `requested`,
/// but only `available` available.
error NotEnoughFunds(uint requested, uint available);

function Functions() {
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

}

// @see https://docs.soliditylang.org/en/latest/contracts.html#contracts
contract Contracts {
  uint someNumber; // state var: stored in contract storage
  // constructor is only called when contract is created
  constructor() {
    // do this stuff
  }

  // good way to validate inputs to fns
  // this can be added to any fn
  modifier addThisCodeToFn() {
    // do stuff

    _; // original fn code inserted here
  }
  // use the modifier fn above to augment this fn
  function getContractBalance () public addThisCodeToFn {
    // converts this contract to an address to get the current balance
    uint currentBalance = address(this).balance;

    return currentBalance;
  }

  function convertToPayableContract() {
    address payable canReceivePayaments = payable(address(this));
  }
}

// interfaces with the EVM logging mechanism
contract Events {
  event myEvent();

  function someFn() {
    emit myEvent();
  }
}

contract ControlFlow {
  for (uint i = 0; i < somePoop.length; i++) {
    // do this stuff
    // continue; immediately start next loop
  }

  while (someVar != someOtherVar) {
    // do this stuff

    // always include a require check
    // else you could burn all your gas
    require(thisThing == thatThing)
  }

  if (varEvalutesToBool) {
    // do this stuff
  } else {
    // do this other stuff
  }
}

// splits a signature (sig) using inline assembly
// assembly {
//   // first 32 bytes, after the length prefix.
//   r := mload(add(sig, 32))
//   // second 32 bytes.
//   s := mload(add(sig, 64))
//   // final byte (first byte of the next 32 bytes).
//   v := byte(0, mload(add(sig, 96)))
// }
// TODO: need to make these reusable
// ^ by specifying the params
// reusable fns are defined outside of contracts
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


//   // Set to true at the end, disallows any change.
//   // By default initialized to `false`.
//   bool ended;

// library Balances {
//   function move(mapping(address => uint256) storage balances, address from, address to, uint amount) internal {
//       require(balances[from] >= amount);
//       require(balances[to] + amount >= balances[to]);
//       balances[from] -= amount;
//       balances[to] += amount;
//   }
// }
