import BN from 'bn.js'
import { Request, Response } from 'express'
import { chunkedFetch } from './subgraphUtils'

function getPoolsQuery({ skip, first }: { skip: number; first: number }) {
  return `
    query {
      pools(first: ${first}, skip: ${skip}) {
        reserve,
        assetValue,
        totalBorrowsAggregatedAmount,
        totalDebt
      }
    }`
}

function getDailyPoolsQuery({ skip, first, day }: { skip: number; first: number; day: number }) {
  return `
    query {
      dailyPoolDatas(where: {day: "${day}"}, first: ${first}, skip: ${skip}) {
        reserve
        assetValue
      }
    }
  `
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
      return sum.add(new BN(pool.totalBorrowsAggregatedAmount))
    }, new BN(0))
    .div(new BN(10).pow(new BN(24)))
    .toString()
}

function utcDateOneYearAgo() {
  const now = new Date()
  const oneYearAgo = new Date(Date.UTC(now.getUTCFullYear() - 1, now.getUTCMonth(), now.getUTCDate(), 0, 0, 0))
  return Math.floor(oneYearAgo.getTime() / 1000)
}

export default async function getPoolsData(req: Request, res: Response) {
  try {
    const pools = await chunkedFetch({
      getQuery: getPoolsQuery,
      getProperty: (obj) => obj?.pools,
      chunkSize: 1000,
    })

    const poolsOneYearAgo = await chunkedFetch({
      day: utcDateOneYearAgo(),
      getQuery: getDailyPoolsQuery,
      getProperty: (obj) => obj?.dailyPoolDatas,
      chunkSize: 1000,
    })

    const totalValueLocked = getTotalValueLocked(pools)
    const totalValueLockedOneYearAgo = getTotalValueLocked(poolsOneYearAgo)
    const totalValueLockedGrowth = ((totalValueLocked - totalValueLockedOneYearAgo) / totalValueLockedOneYearAgo) * 100
    const totalAssetsFinanced = getTotalAssetsFinanced(pools)

    return res.status(200).send(
      JSON.stringify({
        totalValueLockedGrowth,
        totalAssetsFinanced,
      })
    )
  } catch (error) {
    return res.status(500).send(error)
  }
}
