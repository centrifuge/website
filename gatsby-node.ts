import { readFile } from 'fs/promises'
import path from 'path'
import type { GatsbyNode } from 'gatsby'
import pages from './config/pages'

export const createPages: GatsbyNode['createPages'] = async ({ actions }) => {
  const { createPage } = actions

  await Promise.all(pages.map((page) => readFile(`./content/${page}.json`, 'utf8')))
    .then((fileBuffers) => {
      fileBuffers.forEach((fileBuffer) => {
        const { slug, title, seo, sections } = JSON.parse(fileBuffer)

        createPage({
          path: slug,
          component: path.resolve('./src/templates/base.tsx'),
          context: {
            title,
            seo,
            sections,
          },
        })
      })
    })
    .catch((error) => {
      console.error(error.message)
      process.exit(1)
    })
}
