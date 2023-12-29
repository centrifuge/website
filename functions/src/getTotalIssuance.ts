import { ApiPromise, WsProvider } from '@polkadot/api'
import { Request, Response } from 'express'

export default async function getTotalIssuance(req: Request, res: Response) {
  try {
    const CENTRIFUGE_MAINNET_WSS_RPC = 'wss://fullnode.centrifuge.io'

    const wsProvider = new WsProvider(CENTRIFUGE_MAINNET_WSS_RPC)
    const api = await ApiPromise.create({ provider: wsProvider })

    const totalIssuanceRaw = await api.query.balances.totalIssuance()
    const totalIssuance = totalIssuanceRaw.toString()
    const integer = totalIssuance.substring(0, totalIssuance.length - 18)

    return res.status(200).send(integer.toString())
  } catch (error) {
    return res.status(422).send(JSON.stringify(error))
  }
}
