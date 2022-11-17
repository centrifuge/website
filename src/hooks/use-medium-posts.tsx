import React from 'react'

const rawDataEntry = {
  title: '',
  author: '',
  categories: [''],
  content: '',
  description: '',
  guid: '',
  link: '',
  pubDate: '',
  thumbnail: undefined,
}

export function useMediumPosts(count = 10) {
  const [isLoading, setIsLoading] = React.useState(true)
  const [isError, setIsError] = React.useState(false)
  const [posts, setPosts] = React.useState<typeof rawDataEntry[]>(new Array(count).fill(rawDataEntry))

  React.useEffect(() => {
    setIsLoading(true)

    async function getArticles() {
      try {
        await fetch(`${process.env.GATSBY_LAMBDA_URL}/getMediumPosts`)
          .then((res) => res.json())
          .then(({ items }) => setPosts(items.slice(0, count)))
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.warn('Error while fetching medium posts:', error)
        }
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    getArticles()
  }, [])

  return { isLoading, isError, posts }
}
