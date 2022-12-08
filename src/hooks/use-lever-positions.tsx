import React from 'react'

type PositionProps = {
  id: string
  title: string
  href: string
}

export function useLeverPositions() {
  const [isLoading, setIsLoading] = React.useState(false)
  const [isError, setIsError] = React.useState(false)
  const [positions, setPositions] = React.useState<PositionProps[]>()

  React.useEffect(() => {
    setIsLoading(true)

    async function getPositions() {
      try {
        await fetch(`${process.env.GATSBY_FUNCTIONS_URL}/getLeverPositions`)
          .then((res) => res.json())
          .then((data) => setPositions(data))
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.warn('Error while fetching vacancies:', error)
        }
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    getPositions()
  }, [])

  return { isLoading, isError, positions }
}
