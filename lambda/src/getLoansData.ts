import { Request, Response } from 'express'
import { chunkedFetch } from './subgraphUtils'

export default async function getLoansData(req: Request, res: Response) {
  try {
    const poolIds = await chunkedFetch({
      getQuery: getPoolsQuery,
      getProperty: (obj) => obj?.pools,
    })

    const requests = poolIds.map(({ id }) =>
      chunkedFetch({
        id,
        getQuery: getLoansQuery,
        getProperty: (obj) => obj?.pool?.loans,
      })
    )

    let totalLoansCount = await Promise.all(requests).then((results) => results.flat().length)

    return res.status(200).send(JSON.stringify({ totalLoansCount }))
  } catch (error) {
    return res.status(422).send(JSON.stringify(error))
  }
}

function getPoolsQuery({ skip, first }: { skip: number; first: number }) {
  return `
    query {
      pools(first: ${first}, skip: ${skip}) {
        id
      }
    }`
}

function getLoansQuery({ skip, first, id }: { skip: number; first: number; id: string }) {
  return `
    query {
      pool(id: "${id}") {
        loans(first: ${first}, skip: ${skip}) {
          id
        }
      }
    }`
}
