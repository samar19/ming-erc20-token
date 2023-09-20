const { ethers, upgrades } = require("hardhat");


async function main() {
  const [deployer] = await ethers.getSigners();

  const proxyAddress = "0x74De8cA31af474CEd4E6789Ae525cd7bc9ce5Ec4"; // Replace with the actual address

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
