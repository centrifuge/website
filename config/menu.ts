import { links } from './links'

const menu = [
  {
    label: 'Connect',
    items: [
      {
        label: 'Governance',
        href: '/governance',
      },
      {
        label: 'Twitter',
        href: links.twitter,
        isExternal: true,
      },
      {
        label: 'Discord',
        href: links.discord,
        isExternal: true,
      },
      {
        label: 'LinkedIn',
        href: links.linkedin,
        isExternal: true,
      },
      {
        label: 'Telegram',
        href: links.telegram,
        isExternal: true,
      },
      {
        label: 'Crowdloan',
        href: '',
      },
    ],
  },
  {
    label: 'Learn',
    items: [
      {
        label: 'About us',
        href: '/about-us',
      },
      {
        label: 'In the news',
        href: '/news',
      },
      {
        label: 'FAQs',
        href: 'https://docs.centrifuge.io/faq/',
        isExternal: true,
      },
      {
        label: 'Documentation',
        href: links.docs,
        isExternal: true,
      },
      {
        label: 'Blog',
        href: links.medium,
        isExternal: true,
      },
      {
        label: 'Youtube',
        href: links.youtube,
        isExternal: true,
      },
      {
        label: 'Token summary',
        href: 'https://centrifuge.io/cfg_token_summary.pdf',
        isExternal: true,
      },
    ],
  },
  {
    label: 'Develop',
    items: [
      {
        label: 'Altair',
        href: 'https://centrifuge.io/altair/',
        isExternal: true,
      },
      {
        label: 'Brand',
        href: '/brand',
      },
      {
        label: 'GitHub',
        href: links.github,
        isExternal: true,
      },
    ],
  },
]

export const mobileMenu = menu

export const desktopMenu = [
  ...menu,
  {
    label: 'Centrifuge App',
    href: links.app,
    isExternal: true,
    isButton: true,
  },
]
