const { ethers } = require('hardhat');

async function main() {
  // Get the account that will deploy the contract
  const [deployer] = await ethers.getSigners();

  console.log('Deploying contracts with the account:', deployer.address);

  // Load the compiled contract
  const MINGToken = await ethers.getContractFactory('MINGToken');
  const mingToken = await MINGToken.deploy();

  console.log('MINGToken address:', mingToken.address);
}

// Execute the deployment script
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
