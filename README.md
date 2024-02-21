# ERC20 TOKEN

This Solidity program encapsulates the code for an ERC20 token named "New Token" with the symbol "NTK."
The token is specifically crafted for displaying the basic functionality of an ERC20 token.

## Description

This Solidity program defines the "New Token" Token, an ERC20 token on EVM based blockchain with the symbol "NTK."
This code offers a foundational understanding of ERC20 token creation in Solidity, serving as a starting point for developers exploring
blockchain-based solutions.

### Getting Started

To interact with the Token contract, you can start-off by cloning this repo and running

```
npm i
```

in the terminal to install all the dependencies required.

To compile the code, run:

```
npx hardhat compile
```

To deploy the code locally on the harhdat network, run:

```
npx hardhat node
```

and then run:

```
npx hardhat run --network localhost scripts/deploy.ts
```

and then open another terminal to interact with the Token smart contract, type in the terminal

```
npx harhdat run scripts/<filename>.ts --network localhost
```

### Authors

Kritika Joshi

### License

This project is licensed under the MIT License - see the LICENSE.md file for details
