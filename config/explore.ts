import { links } from './links'

export const explore = [
  {
    title: 'Learn',
    items: [
      {
        label: 'Website',
        href: '/',
      },
      {
        label: 'Terms',
        href: '/terms',
      },
      {
        label: 'Documentation',
        href: 'https://docs.centrifuge.io/',
        isExternal: true,
      },
      {
        label: 'Youtube',
        href: links.youtube,
        isExternal: true,
      },
    ],
  },

  {
    title: 'Connect',
    items: [
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
        label: 'Telegram',
        href: links.telegram,
        isExternal: true,
      },
      {
        label: 'Governance',
        href: '/governance',
      },
    ],
  },

  {
    title: 'Develop',
    items: [
      {
        label: 'Github',
        href: links.github,
        isExternal: true,
      },
      {
        label: 'Brand',
        href: '/brand',
      },
    ],
  },
]
