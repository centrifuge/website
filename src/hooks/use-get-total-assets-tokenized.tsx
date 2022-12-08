import React from 'react'

export function useTotalAssetsTokenized() {
  const [isLoading, setIsLoading] = React.useState(false)
  const [isError, setIsError] = React.useState(false)
  const [data, setData] = React.useState<any>()

  React.useEffect(() => {
    setIsLoading(true)

    async function getData() {
      try {
        await fetch(`${process.env.GATSBY_FUNCTIONS_URL}/getTotalAssetsTokenized`)
          .then((res) => res.json())
          .then((obj) => setData(obj.totalAssetsTokenized))
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.warn('Error while fetching "getTotalAssetsTokenized":', error)
        }
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    getData()
  }, [])

  return { isLoading, isError, data }
}
