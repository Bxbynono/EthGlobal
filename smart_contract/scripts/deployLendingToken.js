const hre = require("hardhat");

const main = async () => {
  const MyLendingToken = await hre.ethers.getContractFactory("MyLendingToken");
  const initialSupply = hre.ethers.utils.parseUnits("1000000", 18);  // 1 million tokens
  const lendingToken = await MyLendingToken.deploy(initialSupply);

  await lendingToken.deployed();

  console.log("Lending Token deployed to:", lendingToken.address);
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
