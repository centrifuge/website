import { Request, Response } from 'express'
import { createProof as createActualProof, getContributionAmount } from './handleCreateProof'
const { u8aToHex } = require('@polkadot/util')
const { decodeAddress } = require('@polkadot/util-crypto')
const JSONbig = require('json-bigint')({
  useNativeBigInt: true,
  alwaysParseAsBig: true,
})

export default async function createProof(req: Request, res: Response) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method not allowed. Use POST.')
  }

  try {
    const { address, parachain } = JSON.parse(req.body)

    const merkleTree =
      parachain === 'centrifuge'
        ? require('../../config/crowdloan/centrifuge-reward-merkle-tree.js').merkleTree
        : require('../../config/crowdloan/altair-reward-merkle-tree.js').merkleTree

    const hexAddress = u8aToHex(decodeAddress(address))

    const proof = createActualProof(hexAddress, merkleTree)
    const contribution = getContributionAmount(hexAddress, merkleTree)

    return res.status(200).send(
      JSONbig.stringify({
        proof,
        signMessage: hexAddress,
        contribution,
      })
    )
  } catch (error) {
    return res.status(500).send(JSON.stringify(error))
  }
}
