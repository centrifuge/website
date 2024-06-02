import { ApiPromise, WsProvider } from '@polkadot/api'

export default async function getTotalIssuance(req, res) {
  const CENTRIFUGE_MAINNET_WSS_RPC = 'wss://fullnode.centrifuge.io'

  const wsProvider = new WsProvider(CENTRIFUGE_MAINNET_WSS_RPC)
  const api = await ApiPromise.create({ provider: wsProvider })

  const totalIssuanceRaw = await api.query.balances.totalIssuance()
  const totalIssuance = totalIssuanceRaw.toString()
  const integer = totalIssuance.substring(0, totalIssuance.length - 18)

  res.send(integer.toString())
}
