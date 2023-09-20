// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20BurnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

contract MINGTokenV2 is ERC20BurnableUpgradeable, OwnableUpgradeable, UUPSUpgradeable {
    string private _name;
    string private _symbol;

    function initialize() initializer public {
        __ERC20_init("MING Token", "MING"); // Set the name and symbol here
        __Ownable_init();
        __UUPSUpgradeable_init();

        _mint(msg.sender, 1000000 ether);
        _name = "MING Token";
        _symbol = "MING";
    }

    function setNameSymbol(string memory name, string memory symbol) external onlyOwner {
        _name = name;
        _symbol = symbol;
    }

    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}

    function mint(address account, uint256 amount) external onlyOwner {
        _mint(account, amount);
    }

    function increaseSupply(uint256 amount) external onlyOwner {
        _mint(owner(), amount);
    }

    function name() public view override returns (string memory) {
        return _name;
    }

    function symbol() public view override returns (string memory) {
        return _symbol;
    }
}
