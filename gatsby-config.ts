import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Centrifuge | The first protocol to bring Real-World Assets to DeFi',
    description:
      'A DeFi protocol bringing structured credit onto the blockchain. Institutional investors earn web3 yield backed by tokenized RWAs, while SMEs get access to a cheaper cost of capital.',
    twitterUsername: '@centrifuge',
    image: '/ogimage.png',
    siteUrl: 'https://centrifuge.io/',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './data/',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        gfm: true,
      },
    },
    'gatsby-plugin-image',
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.NODE_ENV === 'production' ? 'UA-100764518-2' : null],
        gtagConfig: {
          anonymize_ip: true,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://centrifuge.us17.list-manage.com/subscribe/post?u=27084e1d9e6f92398b5c7ce91&amp;id=e00b1ece80',
      },
    },
  ],
}

export default config
