const fs = require('fs');
const { artifacts } = require('hardhat');

async function main() {
  const MINGToken = await artifacts.readArtifact('MINGToken');
  fs.writeFileSync('MINGToken.abi.json', JSON.stringify(MINGToken.abi, null, 2));
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
