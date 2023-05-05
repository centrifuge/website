import { links } from './links'

const menu = [
  {
    label: 'News',
    href: '/news',
  },
  {
    label: 'Governance',
    href: '/governance',
  },
  {
    label: 'About',
    href: '/about',
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
        label: 'Medium',
        href: links.medium,
        isExternal: true,
      },
      {
        label: 'Discord',
        href: links.discord,
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
        label: 'LinkedIn',
        href: links.linkedin,
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
