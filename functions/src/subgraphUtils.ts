import nodeFetch from 'node-fetch'

async function fetchSubgraphData(query) {
  const response = await nodeFetch(process.env.CENTRIFUGE_SUBGRAPH_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query,
    }),
  })

  if (!response.ok) {
    throw new Error(`Failed to retrieve pool data for TVL: ${response.statusText}`)
  }

  const { data } = await response.json()
  return data
}

export async function chunkedFetch({
  id,
  day,
  getQuery,
  getProperty,
  chunkSize = 1000,
}: {
  id?: string
  day?: number
  getQuery: Function
  getProperty: Function
  chunkSize?: number
}) {
  try {
    let start = 0
    const limit = chunkSize
    const data = []

    while (true) {
      const queryOptions = {
        skip: start,
        first: limit,
        ...(id && { id }),
        ...(day && { day }),
      }
      const query = getQuery(queryOptions)
      const response = await fetchSubgraphData(query)

      const property = getProperty(response)
      if (property && property.length) {
        data.push(...property)
      }

      if (!property.length || property.length < limit) {
        break
      }

      start += limit
    }

    return data
  } catch (error) {
    return error
  }
}
