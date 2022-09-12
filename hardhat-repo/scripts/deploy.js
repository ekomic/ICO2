
const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { CHRIS_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  // Address of the Chris NFT contract that you deployed in the previous module
  const ChrisNFTContract = CHRIS_NFT_CONTRACT_ADDRESS;

  /*
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
    so ChrisTokenContract here is a factory for instances of our CryptoDevToken contract.
    */
  const ChrisTokenContract = await ethers.getContractFactory(
    "ChrisToken"
  );

  // deploy the contract
  const deployedChrisTokenContract = await ChrisTokenContract.deploy(
    ChrisNFTContract
  );

  // print the address of the deployed contract
  console.log(
    "ChrisToken Contract Address:",
    deployedChrisTokenContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });