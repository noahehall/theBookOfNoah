// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8 <0.9.0;

// import "./poop"; // dont do this
// import * as poop from "./poop";
// import "./poop" as poop; // alternative
// import { flush, toilet as tl } from "./poop";

/*
  * This is a mltiline comment
  */
/// this is a natspec comment
/// multipline lines displayed to user
/// should be placed directly before all vars, fns, contracts, etc

// EOA > contract A > contract B
// ^ within contract A:
// ^^ msg.sender && tx.origin == EOA address
// ^ within contract B:
// ^^ msg.sender == address of Contract A
// ^^ tx.origin = EOA address
contract GlobalVars {
  // msg == info about the current tx being executed
  function thisMsg() public {
    msg.data; // (bytes) the calldata
    msg.sender; // (address) sender of this tx
    msg.sig; // (bytes4): fn identifier; i.e. first 4 bytes of the calldata
    msg.value; // (uint): ether in wei sent with this tx; only available in payable fns
  }

  // tx == current transaction
  function thisTx() public {
    tx.gas; // (uint): gas price of the transaction
    tx.origin; // (address): address that originated the transaction
  }

  /// block == current block
  function thisBlock() public {
    block.coinbase; // (address): coinbase of the block's miner
    block.difficulty; // (uint):
    block.gaslimit; // (uint):
    block.number; // (uint): current block number
    block.timestamp; // (uint): seconds since unix epoch
  }

  // this contracts abi
  function thisAbi() public {
    abi.encode(args); // (bytes): ABI-encodes the given arguments
    abi.encodePacked(arg); // (bytes): Performes packed encoding
    abi.encodeWithSelector(selector, args); // (bytes) ABI-encodes the given arguments with the given selector
    abi.encodeWithSignature(signatureString, arg); // (bytes): Equivalent to abi.encodeWithSelector(bytes4(keccak256(signature), ...)`
  }


  // needs confirmation with solidity docs
  function etherUnits() public {
    int amount = 1 ether;
    // shows err maybe needs to be within a fn?
    bool asFinney = (1 ether == 1000 finney);
    // szabo: add 000 to previous
    // gwei (shannon): add 000 to previous
    // mwei: add 000 to previous
    // kwei: add 000 to previous
    // wei: the defualt denomination; add 000 to previous, smallest denomination of ether
    // kether: .001
    // mether: add 000 to previous
    // gether: add 000 to previous
    // tether: add 000 to previous
  }

  // theres a bunch of different units
  // ^ check docs
  function timeUnits() public {
    uint nowInSeconds = now; // seconds since unix epoch
    uint oneWeek = 7 days;
  }
}


contract GlobalFns {
  function getPrevBlockHash() public returns (bytes32 hash) {
    // return previous blocks hash via blockhash fn
    // notice we mutate the var hash declared in returns directive above
    // solidity will automatically return it
    hash = blockhash(block.number -1);
  }
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
}/

/// examples of all datatypes
contract DataTypes {
  /* generalizations */
  // you can use any type as a fn to convert another type to it
  // ^ has to be a logical conversion (e.g. int8 cannot hold int256)
  // ^ else compiler will throw error
  // ^ e.g. address(uint160(bytes20(b))) or address(uint160(uint256(b)))

  /* variable modifiers ****************/
  // public: can be called by other contracts, e.g. uint public amount
  // ^ public state arrays will automatically have a getter with index required
  // constant

  // you have to explicity provide the data area
  // memory: lifetime === lifetime of external fn call
  // ^ cannot push on memory arrays
  // ^ memory arrays cant be resized (theres no push) you have to make it a storage
  // ^ memory arrays must be created with new, e.g. uint[] memory myArray = new uint[](10) // size of 10
  // storage: lifetime === lifetime of contract
  // ^ calldata: special data location that contains the fn arguments
  // ^^ behaves like memory, prefer this when appropriate
  // ^^ immutable, non-persistent
  // calldata: save in same space fns parameters are kept
  // assignment/type conversion that changes the data location
  // ^ always create an independent copy (no reference)
  // assignments inside the same data location
  // ^ memory to memeory: reference
  // ^ storage to local storage: reference
  // ^^ all other ssignments to storage: copy

  /* value data types ****************/
  // integers: accepts steps 8 increments, from 8 to 256
  // without step defualts to 256
  // int8 = 1 byte = 0-255.
  // int16 = 2 bytes = -32,768 to 32,767
  // int32 = 4 bytes = -2,147,483,648 to 2,147,483,647
  // etc
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
  address literalAddr = hex"0xdCad3a6d3569DF655070DEd06cb7A1b2Ccd1D3AF";

  // enums
  // custom types with a finite set of constant values
  // explicitly convertible to/from all integer types
  // limited to 256 members
  // initialized to the first value
  // indexes starts at 0 and increments by 1 like in C
  // can be declared outside a contract
  // not part of the ABI definition
  // ^ i.e. a caller of the contract cant determine enums via the ABI
  // ^ the caller will need to send a uint8 integer to a fn that provides access to the enum
  enum Blah { Flush, Poop, Toilet }


  /* reference data types ****************/
  // comprise structs, arrays and mappings

  // struct: for user defined types
  // cannot have members of its own type (you cant poop inside a Poop)
  // not part of the ABI (callers dont have direct access)
  // ^ instead you can provide a fn that returns a struct
  // cannot be passed as an argument to a fn
  // ^ you have to pass the individual struct members
  struct Poop {
    uint times;
    bool flushed;
  }
  Poop me;
  me.times = 1200;
  uint timesIPoopEachDAy = me.times;

  // arrays:
  // properties
  // ^ length
  // methods
  // ^ push() // only storage arrays & bytes
  // ^^ has constant gas cost
  // ^ pop() // only storage arrays & bytes
  // ^^ has gas cost proportional to the array length
  // compile-time fixed/dynamic size
  // ^ cannot be converted between each other
  // dynmically sized arrays in the form dataType[]
  // ^ cant be initialized on creation
  // ^^ you have to assign each individual element
  // ^^ e.g. uint[] memory x = new uint[](3);
  // ^^ x[0] = 1; x[1] = 2; x[2] = 3;
  // statically sized arrays in the form dataType[size]
  // methods:
  // ^ push()
  // ^ pop()
  // props: length,
  uint[] numbers;
  uint[][3] numbers; // an array of 3 dynamic uint arrays

  // array literals
  // ^ always a statically-sized memory array whose length == number of expressions
  // ^ first expression determines the type of all subsequent expressions
  [1, a, f(3)] // unit8[3] memory

  // special arrays: bytes & strings
  // bytes: for arbitrary-length raw byte data

  // ^ similary to bytes1[]
  // ^^ but is packed tightly in calldata & memory
  // ^^ prefer bytes > bytes1[] because its cheaper
  // ^ go from 1 to 32
  // ^ e.g. 32 byte string
  // methods
  // ^ bytes.concat(b1, b2); (returns bytes memory)
  bytes32 name;

  // strings: for arbitrary-length UTF-8 data
  // ^ unless the string fits in bytes1 through 32
  // ^ equal to bytes
  // ^^ but does not have allow length/index access
  // ^^ convert the string to bytes for length/index access
  // ^ complex string operations are costly (gas) and should be avoid
  // methods
  // ^ string.concat(s1, s2); (returns string memory)
  string name;
  string poop = "flush" // or 'flush'
  string memory a = unicode"Hello 😃"; // prefixed with unicode
  string flush = "poop" "flush"; // compiles to "poopflush"


  // mappings
  // maps keyType => valueType
  // ^ key
  // ^^ cant be a mapping type
  // ^^ is initialized to all possible values keyType
  // ^ value
  // ^^ can be a mapping type
  // must be storage/state var
  // ^ i.e. cant be a local variable inside a fn
  // must use delete to remove a value for a key
  // cannot
  // ^ retrieve a list of all the keys nor added values,
  // ^ use within a context where the mapping isnt needed
  mapping(string => string) public names;
  names["poop"] = "then wipe";


}

// @see https://docs.soliditylang.org/en/latest/types.html#data-location-and-assignment-behaviour
contract DataLocation {
    // The data location of x is storage.
    // This is the only place where the
    // data location can be omitted.
    uint[] x;

    // The data location of memoryArray is memory.
    function f(uint[] memory memoryArray) public {
        x = memoryArray; // works, copies the whole array to storage
        uint[] storage y = x; // works, assigns a pointer, data location of y is storage
        y[7]; // fine, returns the 8th element
        y.pop(); // fine, modifies x through y
        delete x; // fine, clears the array, also modifies y
        // The following does not work; it would need to create a new temporary /
        // unnamed array in storage, but storage is "statically" allocated:
        // y = memoryArray;
        // This does not work either, since it would "reset" the pointer, but there
        // is no sensible location it could point to.
        // delete y;
        g(x); // calls g, handing over a reference to x
        h(x); // calls h and creates an independent, temporary copy in memory
    }

    function g(uint[] storage) internal pure {}
    function h(uint[] memory) public pure {}
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

// todo: need to clean this up
// function (<parameter types>) internal|external <functionType> returns (<return types>) { /* body */ }
// internal fns: can only be called inside the current contract (default fn type)
// ^ i.e. current code unit: includes internal libraries & inherited fns
// external fns: consist of an address & a fn signature
// i.e. ContractName.fn (or this.f if within the contract);
// ^ can be passed via and return from external fn calls
// if a fn returns something you HAVE to specify the type
// fn types: can specify multiple
// ^ public: anyone can call
// ^ private: only this contract can call
// ^ pure: doenst modify (or read!!!) the contracts data
// ^ view: returns data and DOES NOT modify contract data
// ^ constant: same as view
// ^ payable: caller can send ether via this fn
// fn conversion
// pure: can be converted to view & non-payable fns
// view: can be converted to non-payable fns
// payable: can be converted to non-payable fns
// properties
// .address: the address of hte contract of the fn
// .selector: returns the ABI fn selector
// gas & wei
// send gas to a fn via someFn{gas: <amount>, value: <amount>}(args)
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

  function returnsTuple () returns (int, int) {
    return (1, 2);
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
