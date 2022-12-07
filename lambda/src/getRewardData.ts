import { u8aToHex } from '@polkadot/util'
import { decodeAddress } from '@polkadot/util-crypto'
import { Request, Response } from 'express'
import { getContributionAmount } from './handleCreateProof'

export default async function getRewardData(req: Request, res: Response) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method not allowed. Use POST.')
  }

  const { address, parachain } = JSON.parse(req.body)

  const merkleTree =
    parachain === 'centrifuge' ? require('../../config/crowdloan/centrifuge-reward-merkle-tree.js').merkleTree : {}

  const hexAddress = u8aToHex(decodeAddress(address))

  const amount = getContributionAmount(hexAddress, merkleTree)

  return res.status(200).send(
    JSON.stringify({
      address,
      contributionAmount: String(amount),
    })
  )
}
