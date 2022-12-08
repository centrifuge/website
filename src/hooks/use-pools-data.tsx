import React from 'react'

export function usePoolsData() {
  const [isLoading, setIsLoading] = React.useState(false)
  const [isError, setIsError] = React.useState(false)
  const [data, setData] = React.useState<any>()

  React.useEffect(() => {
    setIsLoading(true)

    async function getData() {
      try {
        await fetch(`${process.env.GATSBY_FUNCTIONS_URL}/getPoolsData`)
          .then((res) => res.json())
          .then((_data) => setData(_data))
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.warn('Error while fetching sub graph data:', error)
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
