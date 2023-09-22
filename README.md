# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js

## npx hardhat run scripts/deploy.js --network mumbai

Deploying contracts with the account: 0x34E8E400BE58476977EB37c18d3C005878AB6d0C
MINGToken address: 0x9d7DfA57593D41b332867DACCd2B573C98cBbc3A

## npx hardhat verify --network mumbai 0x9d7DfA57593D41b332867DACCd2B573C98cBbc3A
https://mumbai.polygonscan.com/address/0x9d7DfA57593D41b332867DACCd2B573C98cBbc3A#code
```

# Ming's deployment

```
npx hardhat run scripts/deploy_upgradeable_mingtoken.js --network mumbai

MINGToken deployed to: 0xFF37Cf4AbF6e756e35c24E466b93fd6028866157
```

Contract Address with Proxy: https://mumbai.polygonscan.com/address/0xff37cf4abf6e756e35c24e466b93fd6028866157#readProxyContract

## upgrade for new code, V2 ...

```
npx hardhat run scripts/upgrade_upgradeable_mingtoken.js --network mumbai

```

PS. not tested yet
