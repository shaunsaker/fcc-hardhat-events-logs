//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract SimpleStorage {
  uint256 public favoriteNumber;
  event storedNumber(
    uint256 indexed oldNumber,
    uint256 indexed newNumber,
    uint256 addedNumber,
    address sender
  );

  function store(uint256 newFavoriteNumber) public {
    // this will emit an event everytime store is called
    emit storedNumber(
      favoriteNumber,
      newFavoriteNumber,
      favoriteNumber + newFavoriteNumber,
      msg.sender
    );

    favoriteNumber = newFavoriteNumber;
  }
}
