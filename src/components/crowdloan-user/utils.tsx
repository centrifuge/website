import { CurrencyBalance } from '@centrifuge/centrifuge-js'
import { useCentrifugeQuery } from '@centrifuge/centrifuge-react'
import { WalletAccount } from '@subwallet/wallet-connect/types'
import { map, switchMap } from 'rxjs'
import { cryptoWaitReady } from '@polkadot/util-crypto'
import jsonBigInt from 'json-bigint'
const JsonBig = jsonBigInt({ useNativeBigInt: true, alwaysParseAsBig: true })

export function useTotalRewards() {
  return CurrencyBalance.fromFloat(100, 18)
}

export function useDidClaim(address?: string) {
  const [data] = useCentrifugeQuery(
    ['claimedRewards', address],
    (cent) => {
      return cent.getApi().pipe(
        switchMap((api) => {
          return api.query.crowdloanClaim.processedClaims([address, 1])
        }),
        map((didClaim) => {
          return didClaim.toHuman() ? true : false
        })
      )
    },
    {
      enabled: !!address,
    }
  )
  return data
}

export async function getAccountDetails(account: WalletAccount): Promise<[any, string, string] | null> {
  if (!account) {
    return null
  }

  const proof = await fetch(`${process.env.GATSBY_LAMBDA_URL}/createCentrifugeProof`, {
    method: 'POST',
    body: JSON.stringify({ address: account.address }),
  })
    .then(async (response) => {
      if (!response.ok) {
        throw new Error('Could not create proof')
      }

      return await response.text()
    })
    .then((text) => JsonBig.parse(text))
    .catch((error) => console.log(error))

  const signature = await cryptoWaitReady()
    .then((_) => account.wallet?.signer?.signRaw)
    .then(async (signRaw) => {
      if (!signRaw) {
        throw new Error('signRaw was not defined')
      }

      return await signRaw({
        address: account.address,
        data: proof.signMessage,
        type: 'bytes',
      })
    })
    .then((payload) => payload.signature)
    .catch((error) => console.log(error))

  return [proof, signature as string, account.address]
}
