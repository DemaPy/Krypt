// https://eth-goerli.g.alchemy.com/v2/JH655ou_MoJ0nVkAvI-C1qghuGKhd6kd


require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/JH655ou_MoJ0nVkAvI-C1qghuGKhd6kd',
      accounts: ['4ea5aeb988e4319cbe612ff027b53f039a08045fd120a448450f1195fa050f9c']
    }
  }
}