const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance(); //

  console.log("Deploying contracts with account: ", deployer.address);
  console.log("Account balance: ", accountBalance.toString());

  const Token = await hre.ethers.getContractFactory("TeaPortal"); // TeaPortal is the name of the contract
  const portal = await Token.deploy({
    value: hre.ethers.utils.parseEther("0.1"),
  });
  await portal.deployed();

  console.log("TeaPortal address: ", portal.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();