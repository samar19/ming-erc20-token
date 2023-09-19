// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20BurnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

contract MINGToken is ERC20BurnableUpgradeable, OwnableUpgradeable, UUPSUpgradeable {
    function initialize() initializer public {
        __ERC20_init("MING", "MING");
        __Ownable_init();
        __UUPSUpgradeable_init();

        _mint(msg.sender, 1000000 ether); // Mint initial supply to the contract deployer
    }

    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}

    function mint(address account, uint256 amount) external onlyOwner {
        _mint(account, amount);
    }
}
