import { ethers, network } from "hardhat";
import { DEPLOYER, RECEIVER, CONTRACT_ADDRESS } from "../helper";

const b_address = CONTRACT_ADDRESS;
const deployer = RECEIVER;

export async function rateOwnerChange() {
  console.log(`Rate at ${b_address}`);

  const _contract = await ethers.getContractAt("newToken", b_address);

  const balanceBefore = await _contract.getBalance(deployer);

  console.log("Balance: " + balanceBefore);

  console.log(`Owner = ${await _contract.owner()}`);

  const tokenName = await _contract.name();

  console.log(`name of the token: ${tokenName}`);

  const symbol = await _contract.symbol();

  console.log(`symbol of the token: ${symbol}`);
}

rateOwnerChange()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
