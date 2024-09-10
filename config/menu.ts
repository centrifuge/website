import { links } from './links'

const menu = [

  {
    label: 'Products',
    items: [
      {
        label: 'Fund Management',
        href: '/fund-management',
      },
      {
        label: 'Centrifuge Prime',
        href: '/prime',
      }, 
      {
        label: 'RWA Market',
        href: '/rwa-market',
      },
    ]
  },
  {
    label: 'News',
    href: '/news',
  },
  {
    label: 'About',
    items: [
      {
        label: 'Blog',
        href: links.blog,
        isExternal: true,
      },
      {
        label: 'Docs',
        href: links.docs,
        isExternal: true,
      },
      {
        label: 'Contributors',
        href: '/contributors',
      },
      {
        label: 'Governance',
        href: '/governance',
      },
    ],
  },
  {
    label: 'Community',
    items: [
      {
        label: 'Twitter',
        href: links.twitter,
        isExternal: true,
      },
      {
        label: 'LinkedIn',
        href: links.linkedin,
        isExternal: true,
      },
      {
        label: 'Forum',
        href: links.forum,
        isExternal: true,
      },
      {
        label: 'GitHub',
        href: links.github,
        isExternal: true,
      },
      {
        label: 'YouTube',
        href: links.youtube,
        isExternal: true,
      },
      {
        label: 'Discord',
        href: links.discord,
        isExternal: true,
      },
    ],
  },
  {
    label: 'RWA Summit',
    href: links.rwasummit,
    isExternal: true,
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
