import { Request, Response } from 'express'
const { u8aToHex } = require('@polkadot/util')
const { decodeAddress } = require('@polkadot/util-crypto')
const JSONbig = require('json-bigint')({
  useNativeBigInt: true,
  alwaysParseAsBig: true,
})
import { createProof, getContributionAmount } from './handleCreateProof'
import { merkleTree } from '../../config/crowdloan/centrifuge-reward-merkle-tree'

export default async function createCentrifugeProof(req: Request, res: Response) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method not allowed. Use POST.')
  }

  try {
    const { address } = req.body
    const hexAddress = u8aToHex(decodeAddress(address))

    const proof = await createProof(hexAddress, merkleTree)
    const contribution = await getContributionAmount(hexAddress, merkleTree)

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
