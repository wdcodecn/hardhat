// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

// contract BaseContract is Initializable {
//     uint256 public y;

//     function initialize() public initializer {
//         y = 42;
//     }
// }

contract Box is Initializable {

    function initialize(uint256 _x) public initializer {
        // BaseContract.initialize();
        _value = _x;
    }

    uint256 private _value;

    // Emitted when the stored value changes
    event ValueChanged(uint256 value);

    // Stores a new value in the contract
    function store(uint256 value) public {
        _value = value;
        emit ValueChanged(value);
    }

    // Reads the last stored value
    function retrieve() public view returns (uint256) {
        return _value;
    }
}
