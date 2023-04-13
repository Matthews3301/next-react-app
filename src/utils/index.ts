import Web3 from 'web3'

export function truncateAddress(address: string) {
  return `${address.substring(0, 4)}...${address.substring(address.length - 4, address.length)}`
}

export function formatValue(value: string | number, digits: number = 2) {
  const web3 = new Web3()
  const etherValue = web3.utils.fromWei(value.toString(), 'ether')
  return parseFloat(etherValue).toLocaleString(undefined, { minimumFractionDigits: digits, maximumFractionDigits: digits })
}

export function formatDate(value: string | number) {
  return new Date(Number(value) * 1000).toLocaleString('en-US', { timeZone: 'UTC' })
}