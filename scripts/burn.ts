import { ethers, network } from "hardhat";
import { DEPLOYER, CONTRACT_ADDRESS, BURN_TOKEN_AMOUNT } from "../helper";

const b_address = CONTRACT_ADDRESS;
const amount = BURN_TOKEN_AMOUNT;
const deployer = DEPLOYER;

export async function rateOwnerChange() {
  console.log(`Rate at ${b_address}`);

  const _contract = await ethers.getContractAt("newToken", b_address);

  const balanceBefore = await _contract.getBalance(deployer, {
    from: deployer,
  });

  console.log("Balance: before transfer " + balanceBefore);

  console.log(`prev owner = ${await _contract.owner()}`);

  const transferTx = await _contract.burn(amount, {
    from: deployer,
  });

  const balanceAfter = await _contract.getBalance(deployer, {
    from: deployer,
  });

  console.log("Balance: after transfer " + balanceAfter);
}

rateOwnerChange()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
