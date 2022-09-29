import { links } from './links'

export const footer = [
  {
    title: 'Outreach',
    items: [
      {
        label: 'Twitter',
        href: links.twitter,
        isExternal: true,
      },
      {
        label: 'Telegram',
        href: links.telegram,
        isExternal: true,
      },
      {
        label: 'Medium',
        href: links.medium,
        isExternal: true,
      },
      {
        label: 'Governance Forum',
        href: '/governance',
      },
    ],
  },
  {
    title: 'Privacy',
    items: [
      {
        label: 'Terms of use',
        href: '/terms',
      },
      {
        label: 'Data Privacy Policy',
        href: '/data-privacy-policy',
      },
      {
        label: 'Security',
        href: '/security',
      },
      {
        label: 'Imprint',
        href: '/imprint',
      },
    ],
  },
  {
    title: 'Learn & Develop',
    items: [
      {
        label: 'Github',
        href: links.github,
        isExternal: true,
      },
      {
        label: 'Documentation',
        href: links.docs,
        isExternal: true,
      },
      {
        label: 'Brand Assets',
        href: '/brand',
      },
    ],
  },
  {
    title: 'Get in touch',
    items: [
      {
        label: 'Telegram: t.me/centrifuge_chat',
        href: links.telegram,
        isExternal: true,
      },
      {
        label: 'Partnerships: bizdev@centrifuge.io',
        href: 'mailto:bizdev@centrifuge.io',
        isExternal: true,
      },
      {
        label: 'Media: press@centrifuge.io',
        href: 'mailto:press@centrifuge.io',
        isExternal: true,
      },
      {
        label: 'Careers',
        href: '/about-us/#careers',
      },
    ],
  },
]
