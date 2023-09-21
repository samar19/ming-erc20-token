const { ethers, upgrades } = require("hardhat");


async function main() {
  const [deployer] = await ethers.getSigners();

  // Replace with the actual address you deployed contract address.
  const proxyAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; 

  const MINGTokenV2 = await ethers.getContractFactory("MINGTokenV2");
  const proxyContract = await upgrades.upgradeProxy(proxyAddress, MINGTokenV2);
  await proxyContract.deployed(); // Ensure the contract is deployed

  console.log(`Upgraded MINGToken to version 2: ${proxyContract.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
