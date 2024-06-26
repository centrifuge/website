import type { GatsbyNode } from 'gatsby'
import path from 'path'

export const createPages: GatsbyNode['createPages'] = async ({ actions: { createPage, createRedirect } }) => {
  try {
    const legalPages = ['/imprint', '/terms', '/security', '/data-privacy-policy']

    legalPages.forEach((slug) => {
      createPage({
        path: slug,
        component: path.resolve('./src/templates/legal.tsx'),
        context: {
          slug,
        },
      })
    })

    createRedirect({
      fromPath: `/parachain/crowdloan`,
      toPath: `/`,
    })
  } catch (err) {
    console.log('error', err)
  }
}

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ actions }) => {
  actions.setWebpackConfig({
    externals: ['fs', 'path', 'crypto'],
    externalsPresets: { node: true },
  })
}
