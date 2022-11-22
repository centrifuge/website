import React from 'react'

export function useLoansData() {
  const [isLoading, setIsLoading] = React.useState(false)
  const [isError, setIsError] = React.useState(false)
  const [data, setData] = React.useState<any>()

  React.useEffect(() => {
    setIsLoading(true)

    async function getData() {
      try {
        await fetch(`${process.env.GATSBY_LAMBDA_URL}/getLoansData`)
          .then((res) => res.json())
          .then((obj) => setData(obj))
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
