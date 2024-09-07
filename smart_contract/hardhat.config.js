require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/lhBLfjnLQDw6Pj60KUWtkbS71i40vJI2',
      accounts: ['4dea4146bd53d7b8f951dae34c2ed03dd03cade2a48e6c9b086133af81c4fd4b'],
    },
  },
};