import { ethers } from "hardhat";

async function main() {
  const name = "NEW TOKEN";
  const symbol = "NWT";
  const ERC20 = await ethers.deployContract("newToken", [name, symbol]);

  await ERC20.waitForDeployment();

  console.log(`ERC20 deployed to ${ERC20.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
