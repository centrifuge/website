import { Request, Response } from 'express'
import { fetchSubgraphData } from './fetchSubgraphData'

export default async function getLoansData(req: Request, res: Response) {
  try {
    let start = 0
    const limit = 100
    const loans = []

    // subgraph only returns 1000 entries, fetch until no more entries are returned
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const query = getQuery({ skip: start, first: limit })
      const data = await fetchSubgraphData(query)

      if (data.loans) {
        loans.push(...data.loans)
      }

      if (!data.loans.length || data.loans.length < limit) {
        break
      }

      start += limit
    }

    return res.status(200).send(
      JSON.stringify({
        totalLoans: loans.length,
      })
    )
  } catch (error) {
    return res.status(422).send(JSON.stringify(error))
  }
}

function getQuery({ skip, first }: { skip: number; first: number }) {
  return `
    query {
      loans(first: ${first}, skip: ${skip}) {
        id
      }
    }`
}
