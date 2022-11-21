import nodeFetch from 'node-fetch'

export async function fetchSubgraphData(query) {
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

  const { data } = await response.clone().json()
  return data
}
