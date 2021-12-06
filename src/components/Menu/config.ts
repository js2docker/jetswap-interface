import { MenuEntry } from 'loopswap-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://fantom.jetswap.finance',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://fantom.jetswap.finance/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://fantom.jetswap.finance/pools',
  },
  
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Docs',
        href: 'https://docs.jetswap.finance',
        target: "_blank",
      },
      {
        label: 'Blog',
        href: 'https://jetfuelfinance.medium.com/',
        target: "_blank",
      },
      {
        label: 'Vote',
        href: 'https://fantom-vote.jetswap.finance/',
        target: '_blank',
      },
      {
        label: 'Jetfuel Finance',
        href: 'https://jetfuel.finance',
        target: "_blank",
      },
      {
        label: 'Fortress',
        href: 'https://fortress.loans',
        target: "_blank",
      },
      {
        label: 'Gforce',
        href: 'https://jetfuel.finance/gforce',
        target: "_blank",
      },
    ],
  },
]

export default config
