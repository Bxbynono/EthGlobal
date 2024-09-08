const hre = require("hardhat");

const main = async () => {
  // Get the contract factory for CollateralToken
  const CollateralTokenFactory = await hre.ethers.getContractFactory("CollateralToken");
  
  // Deploy the contract with an initial supply
  const initialSupply = hre.ethers.utils.parseUnits("1000000", 18);  // 1 million tokens
  const collateralToken = await CollateralTokenFactory.deploy(initialSupply);

  // Wait for the contract to be deployed
  await collateralToken.deployed();

  console.log("Collateral Token deployed to:", collateralToken.address);
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
