import { MenuEntry } from 'jetswap-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://jetswap2.netlify.app',
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
    href: 'https://jetswap2.netlify.app/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://jetswap2.netlify.app/pools',
  },
  
  
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: '#',
      },
      {
        label: 'Tokens',
        href: '#',
      },
      {
        label: 'Pairs',
        href: '#',
      },
      {
        label: 'Accounts',
        href: '#',
      },
    ],
  },
  
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Voting',
        href: '#',
      },
      {
        label: 'Github',
        href: '#',
      },
      {
        label: 'Docs',
        href: '#',
      },
      {
        label: 'Blog',
        href: '#',
      },
    ],
  },
]

export default config
