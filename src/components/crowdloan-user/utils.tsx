import { CurrencyBalance } from '@centrifuge/centrifuge-js'
import { useCentrifugeQuery } from '@centrifuge/centrifuge-react'
import { cryptoWaitReady } from '@polkadot/util-crypto'
import type { WalletAccount } from '@subwallet/wallet-connect/types'
import jsonBigInt from 'json-bigint'
import { useQuery } from 'react-query'
import { map, switchMap } from 'rxjs'
import type { CrowdloanUserProps } from './index'

const JsonBig = jsonBigInt({ useNativeBigInt: true, alwaysParseAsBig: true })

export function useTotalRewards({
  address,
  parachain,
}: {
  address?: WalletAccount['address']
  parachain: CrowdloanUserProps['network']
}) {
  const { data } = useQuery(
    ['getRewardData', address, parachain],
    async () => {
      const response = await fetch(`${process.env.GATSBY_LAMBDA_URL}/getRewardData`, {
        method: 'POST',
        body: JSON.stringify({
          address,
          parachain,
        }),
      })

      const json = await response.json()
      const amount = new CurrencyBalance(json.contributionAmount, 18)
      return amount
    },
    {
      enabled: !!address,
    }
  )

  return data
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

export async function getAccountDetails(
  account: WalletAccount,
  parachain: CrowdloanUserProps['network']
): Promise<[any, string, string] | null> {
  if (!account) {
    return null
  }

  const proof = await fetch(`${process.env.GATSBY_LAMBDA_URL}/createProof`, {
    method: 'POST',
    body: JSON.stringify({ address: account.address, parachain }),
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
