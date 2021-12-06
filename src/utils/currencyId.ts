import { Currency, ETHER, Token } from '@domgeswap-libs/sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'FANTOM'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}

export default currencyId
