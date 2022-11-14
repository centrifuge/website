import { Box, Grid } from '@centrifuge/fabric'
import React from 'react'
import { NewsCard } from './news-card'

export function NewsSection() {
  const [loading, setLoading] = React.useState(false)
  const [articles, setArticles] = React.useState<any[]>()

  React.useEffect(() => {
    setLoading(true)

    async function getArticles() {
      try {
        await fetch('http://localhost:8080/getMediumPosts')
          .then((res) => res.json())
          .then(({ items }) => setArticles(items))
      } catch (error) {
      } finally {
        setLoading(false)
      }
    }

    getArticles()
  }, [])

  React.useEffect(() => console.log('articles', articles), [articles])

  return (
    <Box>
      <Grid as="ul" gridTemplateColumns={['repeat(3, minmax(0, 1fr))']} gap={3}>
        {articles &&
          articles.map(({ guid, title, link, thumbnail, description, pubDate }) => (
            <li key={guid}>
              <NewsCard label={pubDate} title={title} body={description} image={thumbnail} href={link} boxed />
            </li>
          ))}
      </Grid>
    </Box>
  )
}
