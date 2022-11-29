import type { GatsbyNode } from 'gatsby'
import path from 'path'

export const createPages: GatsbyNode['createPages'] = async ({ actions: { createPage } }) => {
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

    const crowdloanPages = ['/altair', '/parachain']

    crowdloanPages.forEach((route) => {
      createPage({
        path: `${route}/crowdloan`,
        component: path.resolve('./src/templates/crowdloan.tsx'),
        context: {
          slug: route,
        },
      })
    })
  } catch (err) {
    console.log('error', err)
  }
}

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ actions }) => {
  actions.setWebpackConfig({
    externals: ['fs', 'path', 'crypto'],
    // externalsPresets: { node: true },
  })
}
