import { readFile } from 'fs/promises'
import path from 'path'
import type { GatsbyNode } from 'gatsby'

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage } = actions

  let pages = JSON.parse(await readFile('./content/pages.json', 'utf8'))

  for (const page of pages) {
    const { slug, title, seo, sections } = JSON.parse(await readFile(`./content/${page}.json`, 'utf8'))

    createPage({
      path: slug,
      component: path.resolve('./src/templates/base.tsx'),
      context: {
        title,
        seo,
        sections,
      },
    })
  }
}
