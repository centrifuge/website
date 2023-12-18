import { Request, Response } from 'express'
import { chunkedFetch } from './subgraphUtils'

export default async function getTotalAssetsTokenized(req: Request, res: Response) {
  try {
    const request = await chunkedFetch({
      getQuery: getLoansQuery,
      getProperty: (obj) => {
        const loans = obj.pools.reduce((acc, pool) => {
          acc.push(pool.loans)
          return acc
        }, [])
        return loans
      },
    })

    let totalAssetsTokenized = request.flat().length

    return res.status(200).send(JSON.stringify({ totalAssetsTokenized }))
  } catch (error) {
    return res.status(422).send(JSON.stringify(error))
  }
}

function getLoansQuery({ skip, first }: { skip: number; first: number; id: string }) {
  return `
    query {
      pools {
        loans(first: ${first}, skip: ${skip}) {
          id
        }
      }
    }`
}
