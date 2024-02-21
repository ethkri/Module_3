import hre from "hardhat";
import { ethers } from "hardhat";
import { DEPLOYER, RECEIVER, CONTRACT_ADDRESS, MINT_AMOUNT } from "../helper";
import { decryptCrowdsaleJson } from "ethers";

const _CONTRACT_ADDRESS = CONTRACT_ADDRESS;
const recieverAddress = DEPLOYER;
const amount = MINT_AMOUNT;
const deployer = DEPLOYER;

export async function mint() {
  const _contract = await hre.ethers.getContractAt(
    "newToken",
    _CONTRACT_ADDRESS
  );

  const owner = await _contract.owner();

  console.log("Owner: " + owner);

  const mintTX = await _contract.mint(recieverAddress, amount);

  console.log(`The Transaction Hash ${mintTX.hash}`);

  const balanceAfter = await _contract.getBalance(deployer, {
    from: deployer,
  });

  console.log("Balance after mint: " + balanceAfter);
}

mint()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
