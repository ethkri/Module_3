import hre from "hardhat";
import { ethers } from "hardhat";
import { DEPLOYER, CONTRACT_ADDRESS, RECEIVER, TRANSFER_TOKEN_AMOUNT } from "../helper";

const _CONTRACT_ADDRESS = CONTRACT_ADDRESS; // Replace with actual contract address
const receiverAddress = RECEIVER; // Replace with actual receiver address
const amount = TRANSFER_TOKEN_AMOUNT; // Replace with actual amount
const sender = DEPLOYER; // Replace with actual sender address

export async function transfer() {
  try {
    const _contract = await hre.ethers.getContractAt(
      "newToken",
      _CONTRACT_ADDRESS
    );

    const owner = await _contract.owner();
    console.log("Owner: " + owner);

    const balanceBefore = await _contract.getBalance(sender);
    console.log("Balance: before transfer " + balanceBefore);

    const transferTX = await _contract.transferToken(receiverAddress, amount, {
      from: sender,
    });
    console.log(`The Transaction Hash ${transferTX.hash}`);

    const balanceAfter = await _contract.getBalance(sender);
    console.log("Balance: after transfer " + balanceAfter);
  } catch (error) {
    console.error("Error during transfer:", error);
    process.exit(1);
  }
}

transfer()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Unhandled promise rejection:", error);
    process.exit(1);
  });
