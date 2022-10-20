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
    'gatsby-plugin-image',
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
}

export default config
