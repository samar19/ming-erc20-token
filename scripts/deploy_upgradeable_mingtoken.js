// scripts/deploy_upgradeable_mingtoken.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const Box = await ethers.getContractFactory("MINGToken");
  const box = await upgrades.deployProxy(Box, []);
  await box.waitForDeployment();
  console.log("MINGToken deployed to:", await box.getAddress());
}

main();