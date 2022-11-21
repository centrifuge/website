import BN from 'bn.js'
import { Request, Response } from 'express'
import { fetchSubgraphData } from './fetchSubgraphData'

function getQuery({ skip, first }: { skip: number; first: number }) {
  return `
    query {
      pools(first: ${first}, skip: ${skip}) {
        reserve,
        assetValue,
        totalRepaysAggregatedAmount,
        totalDebt
      }
    }`
}

function getTotalValueLocked(pools) {
  return pools
    .reduce((sum, pool) => {
      return sum.add(new BN(pool.assetValue)).add(new BN(pool.reserve))
    }, new BN(0))
    .div(new BN(10).pow(new BN(24)))
    .toString()
}

function getTotalAssetsFinanced(pools) {
  return pools
    .reduce((sum, pool) => {
      return sum.add(new BN(pool.totalRepaysAggregatedAmount)).add(new BN(pool.totalDebt))
    }, new BN(0))
    .div(new BN(10).pow(new BN(24)))
    .toString()
}

export default async function getPoolsData(req: Request, res: Response) {
  try {
    let start = 0
    const limit = 1000

    const pools = []

    // subgraph only returns 1000 entries, fetch until no more entries are returned
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const query = getQuery({ skip: start, first: limit })
      const data = await fetchSubgraphData(query)

      if (!data.pools.length) {
        break
      }

      if (data.pools.length) {
        pools.push(...data.pools)
      }

      start += limit
    }

    const totalValueLocked = getTotalValueLocked(pools)
    const totalAssetsFinanced = getTotalAssetsFinanced(pools)

    return res.status(200).send(
      JSON.stringify({
        totalValueLocked,
        totalAssetsFinanced,
      })
    )
  } catch (error) {
    return res.status(422).send(JSON.stringify(error))
  }
}
