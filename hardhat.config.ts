import type { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-ignition-ethers'
import 'dotenv/config'

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.28',
    settings: {
      optimizer: {
        enabled: true,
        runs: 9999
      },
      metadata: {
        bytecodeHash: 'none'
      }
    }
  },
  networks: {
    monad: {
      gas: 'auto',
      gasPrice: 'auto',
      gasMultiplier: 1.5,
      url: process.env.RPC || '',
      accounts: [process.env.PRIVATE_KEY || '']
    }
  }
}

export default config
