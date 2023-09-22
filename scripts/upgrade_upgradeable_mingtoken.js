// scripts/upgrade-box.js
const { ethers, upgrades } = require("hardhat");
const BOX_ADDRESS='0xff37cf4abf6e756e35c24e466b93fd6028866157'
// above address have to be the current contract address 

async function main() {
  const BoxV2 = await ethers.getContractFactory("MINGTokenV2");
  const box = await upgrades.upgradeProxy(BOX_ADDRESS, BoxV2);
  console.log("MINGTokenV2 is upgraded");
}

main();