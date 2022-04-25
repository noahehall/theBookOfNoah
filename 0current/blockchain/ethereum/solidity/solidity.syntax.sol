// TODO: stuff is here extracted from solidity.verbose
// ^ to keep this better structured
// ^ all of this should be valid solidity, but I still need to verify with solidity docs
// either comes from solidity docs or vscode sol plugin

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
}

/// examples of all datatypes
contract DataTypes {
  /* variable modifiers ****************/
  // public: can be called by other contracts, e.g. uint public amount
  // payable: address can receive ether, e.g. address payable poopAddr
  // external:

  /* elementary data types ****************/
  // unsigned 256 bit integer
  // initialized to 0
  uint count;

  // integer
  // initialized to 0
  int amount;

  // strings
  string name;

  // boolean
  // initialized to false
  bool iKnowWhatImDoing;

  // initialized to 0x0
  // 160-bit value
  // no arithmetic operations are allowed
  // used to store contract address
  // ^ or a hash of hte public half of a keypair belonging to external accounts
  address owner;

  // 32 byte string
  bytes32 name;

  /* complex data types ****************/
  // dynmically sized arrays in the form dataType[]
  // methods: push(),
  // props: length,
  uint[] numbers;

  // container of other data types
  // create an instance, e.g. poop = Poop({ key: value, ...})
  struct Poop {
    uint times;
    bool flushed;
  }

  // maps fromThis => ToThis
  // cannot  retrieve a list of all the keys nor added values,
  // or use within a context where the mapping isnt needed
  mapping(address => name) public names;

  // constants, the initialized to the first value
  enum Blah { Flush, Poop, Toilet };

    // splits a signature (sig) using inline assembly
  assembly {
    // first 32 bytes, after the length prefix.
    r := mload(add(sig, 32))
    // second 32 bytes.
    s := mload(add(sig, 64))
    // final byte (first byte of the next 32 bytes).
    v := byte(0, mload(add(sig, 96)))
  }
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
// todo: need to add function keywords
// ^ e.g. public, external, payable, constant, private, internal,
contract Functions {
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

  // good way to validate inputs to fns
  // this can be added to any fn
  modifier addThisCodeToFn() {
    // do stuff

    _; // original fn code inserted here
  }
  // use the modifier fn above to augment this fn
  function someFn () public addThisCodeToFn() {
    // do stuff
  }
}

contract Contracts {
  // constructor is only called when contract is created
  constructor() {
    // do this stuff
  }
}

contract Events {
  // events/logs todo
  // emit IPooped(msg.sender, msg.value);
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
