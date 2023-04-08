### TeaPortal Smart Contract
The TeaPortal is a smart contract written in Solidity, a programming language for developing smart contracts on the Ethereum blockchain. This contract allows users to buy tea by sending Ether (ETH) and stores the details of the purchased tea, including the sender's address, a custom message, the sender's name, and the timestamp of the purchase. The total number of teas bought by all users is also recorded.

## Features

. Users can buy tea by calling the buytea function with a custom message, name, and the exact amount of Ether required for the purchase.

. The contract keeps track of the total number of teas bought by all users through the totalTea variable.

. Users can retrieve the details of all teas bought by calling the getallTea function, which returns an array of Tea structs containing the tea details.

. The contract owner, set during construction, receives the Ether paid by users for purchasing tea.

. The contract emits a NewTea event when a user buys tea, containing the sender's address, timestamp, custom message, and name.

## Installation

To use this smart contract, you will need to have the Solidity compiler (version 0.8.0 or higher) and a development environment such as Hardhat set up. Once the environment is set up, you can deploy the contract to an Ethereum network of your choice.


### Usage

1.Deploy the TeaPortal contract to an Ethereum network of your choice.

2.Users can call the buytea function with the custom message, name, and exact amount of Ether required for the tea purchase.

3.The contract owner will receive the Ether paid by users.

4.Users can retrieve the details of all teas bought by calling the getallTea function.

5.The contract emits a NewTea event when a user buys tea, containing the sender's address, timestamp, custom message, and name.


If you find any Problem You can Simply go to : https://tinyurl.com/mr2j7ha7 and Check For More.

# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
