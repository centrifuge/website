import { links } from './links'

export const columns = [
  {
    title: 'Build',
    items: [
      {
        label: 'Documentation',
        href: links.docs,
        isExternal: true,
      },
      {
        label: 'Governance',
        href: '/governance',
      },
      {
        label: 'GitHub',
        href: links.github,
        isExternal: true,
      },
      {
        label: 'Brand',
        href: '/brand',
      },
      {
        label: 'Security',
        href: '/security',
      },
    ],
  },
  {
    title: 'Privacy',
    items: [
      {
        label: 'Data Privacy Policy',
        href: '/data-privacy-policy',
      },
      {
        label: 'Terms of Use',
        href: '/terms',
      },
      {
        label: 'Imprint',
        href: '/imprint',
      },
    ],
  },
  {
    title: 'Crowdloan',
    items: [
      {
        label: 'Centrifuge',
        href: '/parachain/crowdloan',
      },
      {
        label: 'Altair',
        href: '/altair/crowdloan',
      },
    ],
  },
  {
    title: 'Get in touch',
    items: [
      {
        label: 'Press: press@centrifuge.io',
        href: 'mailto:press@centrifuge.io',
        isExternal: true,
      },
      {
        label: 'Partnerships: bizdev@centrifuge.io',
        href: 'mailto:bizdev@centrifuge.io',
        isExternal: true,
      },
      {
        label: 'Careers',
        href: '/about/#careers',
      },
    ],
  },
]

export const socials = [
  {
    label: 'Twitter',
    href: links.twitter,
    icon: 'twitter',
  },
  {
    label: 'Discord',
    href: links.discord,
    icon: 'discord',
  },
  {
    label: 'Forum',
    href: links.forum,
    icon: 'forum',
  },
  {
    label: 'LinkedIn',
    href: links.linkedin,
    icon: 'linkedin',
  },
  {
    label: 'YouTube',
    href: links.youtube,
    icon: 'youtube',
  },
  {
    label: 'Telegram',
    href: links.telegram,
    icon: 'telegram',
  },
]
