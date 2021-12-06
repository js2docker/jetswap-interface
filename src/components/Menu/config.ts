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
    label: 'Vaults',
    icon: 'VaultIcon',
    href: 'https://fantom.jetswap.finance/vaults',
  },
  {
    label: 'IJO',
    icon: 'IfoIcon',
    href: 'https://fantom.jetswap.finance/ijo',
  },
  // {
  //   label: 'Pforce',
  //   icon: 'PforceIcon',
  //   href: 'https://fantom.jetswap.finance/pforce',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://fantom-info.jetswap.finance/home',
        target: "_blank",
      },
      {
        label: 'Tokens',
        href: 'https://fantom-info.jetswap.finance/tokens',
        target: "_blank",
      },
      {
        label: 'Pairs',
        href: 'https://fantom-info.jetswap.finance/pairs',
        target: "_blank",
      },
      {
        label: 'Accounts',
        href: 'https://fantom-info.jetswap.finance/accounts',
        target: "_blank",
      },
    ],
  },
  {
    label: 'Partnership',
    icon: 'PartnerIcon',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSeeN_QCs_OQFfRhJQagJFCTJ6GWHWUKWbw2cb6RzXzYrsrPbw/viewform',
  },
  {
    label: 'Audit',
    icon: 'AuditIcon',
    items: [
      {
        label: 'Audit by EtherAuthority',
        href: 'https://fantom.jetswap.finance/audit-by-etherauthority.pdf',
        target: "_blank",
      },
      {
        label: 'Audit by Hash0x',
        href: 'https://fantom.jetswap.finance/audit-by-hash0x.pdf',
        target: "_blank",
      },
    ],
  },
  {
    label: 'Games',
    icon: 'DiceIcon',
    items: [
      {
        label: 'Coin Flip',
        href: 'https://fantom.jetswap.finance/coin-flip',
      },
      {
        label: 'Barbell Roll',
        href: 'https://fantom.jetswap.finance/barbell-roll',
      },
      {
        label: 'Roulette',
        href: 'https://fantom.jetswap.finance/roulette',
      },
      {
        label: 'Dice It',
        href: 'https://fantom.jetswap.finance/dice-it',
      },
    ],
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
