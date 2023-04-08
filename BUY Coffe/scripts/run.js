const main = async () => {
  const TeaContractFactory = await hre.ethers.getContractFactory(
    "TeaPortal"
  );
  const TeaContract = await TeaContractFactory.deploy({
    value: hre.ethers.utils.parseEther("0.1"),
  });
  await TeaContract.deployed();
  console.log("Tea Contract deployed to:", TeaContract.address);

  /*
   * Get Contract balance
   */
  let contractBalance = await hre.ethers.provider.getBalance(
    TeaContract.address
  );
  console.log(
    "Contract balance:",
    hre.ethers.utils.formatEther(contractBalance)
  );

  /*
   * Let's try to buy a Tea
   */
  const TeaTxn = await TeaContract.buyCoffee( // buyCoffee is a function in the contract
    "This is coffee #1",
    "idris",
    ethers.utils.parseEther("0.001")
  );
  await TeaTxn.wait();

  /*
   * Get Contract balance to see what happened!
   */
  contractBalance = await hre.ethers.provider.getBalance(
    TeaContract.address
  );

  console.log(
    "Contract balance:",
    hre.ethers.utils.formatEther(contractBalance)
  );

  let allTea = await TeaContract.getallTea();
  console.log(allTea);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
