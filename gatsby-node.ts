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
  } catch (err) {
    console.log('error', err)
  }
}
