import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Centrifuge: Real World DeFi',
    description:
      'Decentralized asset finance: asset Originators can access bankless liquidity, and investors can earn attractive yields from an open marketplace of asset pools',
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
    'gatsby-plugin-image',
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
}

export default config
