import { Request, Response } from 'express'
import { fetchSubgraphData } from './fetchSubgraphData'

export default async function getLoansData(req: Request, res: Response) {
  try {
    const poolIds = await getPoolIds()
    const requests = poolIds.map(({ id }) => getPoolLoans(id))

    let totalLoansCount = await Promise.all(requests).then((results) => results.flat().length)

    return res.status(200).send(JSON.stringify({ totalLoansCount }))
  } catch (error) {
    return res.status(422).send(JSON.stringify(error))
  }
}

async function getPoolIds() {
  try {
    let start = 0
    const limit = 100
    const ids = []

    // eslint-disable-next-line no-constant-condition
    while (true) {
      const query = getPoolsQuery(start, limit)
      const response = await fetchSubgraphData(query)

      if (response.pools) {
        ids.push(...response.pools)
      }

      if (!response.pools.length || response.pools.length < limit) {
        break
      }

      start += limit
    }

    return ids
  } catch (error) {
    return error
  }
}

async function getPoolLoans(id) {
  try {
    let start = 0
    const limit = 100
    const loans = []

    // eslint-disable-next-line no-constant-condition
    while (true) {
      const query = getLoansQuery(start, limit, id)
      const response = await fetchSubgraphData(query)

      if (response.pool.loans) {
        loans.push(...response.pool.loans)
      }

      if (!response.pool.loans.length || response.pool.loans.length < limit) {
        break
      }

      start += limit
    }

    return loans
  } catch (error) {
    return error
  }
}

function getPoolsQuery(skip, first) {
  return `
    query {
      pools(first: ${first}, skip: ${skip}) {
        id
      }
    }`
}

function getLoansQuery(skip, first, id) {
  return `
    query {
      pool(id: "${id}") {
        loans(first: ${first}, skip: ${skip}) {
          id
        }
      }
    }`
}
