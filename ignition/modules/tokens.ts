import { buildModule } from '@nomicfoundation/hardhat-ignition/modules'
import { parseUnits } from 'ethers'

export default buildModule('Tokens', (m) => {
  const supply = parseUnits('100000', 'ether')

  const wbtc = m.contract('MockToken', ['Wrapped Bitcoin', 'WBTC', supply], { id: 'WBTC' })

  const uni = m.contract('MockToken', ['Uniswap', 'UNI', supply], { id: 'UNI' })

  const usdt = m.contract('MockToken', ['Tether', 'USDT', supply], { id: 'USDT' })

  const weth = m.contract('WETH9', [], { id: 'WETH' })

  return { wbtc, uni, usdt, weth }
})
