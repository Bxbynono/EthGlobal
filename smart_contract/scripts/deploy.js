const hre = require("hardhat");

const main = async () => {
  //addresses for the tokens (collateral, lending, and LINK)
  const collateralTokenAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";  // Replace with actual address
  const lendingTokenAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";        // Replace with actual address
  const linkTokenAddress = "0x514910771AF9Ca656af840dff83E8264EcF986CA";              // Replace with actual LINK token address

  // Get the contract factory for CrossChainLending
  const CrossChainLendingFactory = await hre.ethers.getContractFactory("CrossChainLending");

  // Deploy the contract with the required constructor arguments
  const crossChainLendingContract = await CrossChainLendingFactory.deploy(
    collateralTokenAddress, 
    lendingTokenAddress, 
    linkTokenAddress
  );

  await crossChainLendingContract.deployed();

  console.log("CrossChainLending contract deployed to:", crossChainLendingContract.address);
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
