// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
require('dotenv').config()
async function main() {

  const value = hre.ethers.parseEther(process.env.INITIAL_AMOUNT);

  const inheritance = await hre.ethers.deployContract("Will", [process.env.HEIR_ADDRESS], {
    value: value,
  });

  await lock.waitForDeployment();

  console.log(
    `Inheritance with ${ethers.formatEther(
      value
    )}ETH deployed to ${inheritance.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
