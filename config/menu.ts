import { links } from './links'

const menu = [
  {
    label: 'Prime',
    href: '/prime',
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
