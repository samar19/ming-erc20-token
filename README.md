# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js

npx hardhat run scripts/deploy.js --network mumbai

(node:38542) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:38546) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
Deploying contracts with the account: 0x34E8E400BE58476977EB37c18d3C005878AB6d0C
MINGToken address: 0x076F0A8f984735b86a40FcD2615496F896542822

npx hardhat verify --network mumbai 0x076F0A8f984735b86a40FcD2615496F896542822
https://mumbai.polygonscan.com/address/0x076F0A8f984735b86a40FcD2615496F896542822#code

```
