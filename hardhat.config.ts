import type { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-ignition-ethers'
import 'dotenv/config'

const config: HardhatUserConfig = {
  solidity: '0.8.28',
  networks: {
    sepolia: {
      gas: "auto",
      gasPrice: "auto",
      gasMultiplier: 1.2,
      url: process.env.SEPOLIA_RPC,
      accounts: [process.env.PRIVATE_KEY || ''],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  }
}

export default config
