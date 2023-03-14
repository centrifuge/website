import { links } from './links'

const menu = [
  {
    label: 'Connect',
    items: [
      {
        label: 'Blog',
        href: links.medium,
        isExternal: true,
      },
      {
        label: 'News',
        href: '/news',
      },
      {
        label: 'Forum',
        href: links.forum,
        isExternal: true,
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
    ],
  },

  {
    label: 'Learn',
    items: [
      {
        label: 'Governance',
        href: '/governance',
      },
      {
        label: 'Documentation',
        href: links.docs,
        isExternal: true,
      },
      {
        label: 'GitHub',
        href: links.github,
        isExternal: true,
      },
    ],
  },
  {
    label: 'About',
    href: '/about',
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
