import { CurrencyBalance } from '@centrifuge/centrifuge-js'
import {
  formatBalanceAbbreviated,
  useCentrifuge,
  useCentrifugeQuery,
  useCentrifugeTransaction,
  useWallet,
  WalletMenu,
} from '@centrifuge/centrifuge-react'
import { Button, Container, Shelf, Stack, Text } from '@centrifuge/fabric'
import { cryptoWaitReady, decodeAddress, signatureVerify } from '@polkadot/util-crypto'
import BN from 'bn.js'
import jsonBigInt from 'json-bigint'
import * as React from 'react'
import { map, switchMap } from 'rxjs'
import { useTheme } from 'styled-components'

const JsonBig = jsonBigInt({ useNativeBigInt: true, alwaysParseAsBig: true })

export function CrowdloanUser() {
  const { shadows } = useTheme()
  const { selectedAccount } = useWallet()
  const didClaim = useDidClaim(selectedAccount?.address)
  const totalRewards = useTotalRewards()
  const centrifuge = useCentrifuge()
  const currency = centrifuge.config.network === 'altair' ? 'AIR' : 'CFG'

  const { execute, isLoading } = useCentrifugeTransaction(
    'Claiming rewards',
    (cent) =>
      ([proof, signature, address]: [any, string, string], options) => {
        return cent.getApi().pipe(
          switchMap((api) => {
            const verification = signatureVerify(proof.signMessage, signature, decodeAddress(address))
            if (!['sr25519', 'ed25519', 'ecdsa'].includes(verification.crypto)) {
              throw new Error('Verification of signature failed with given account.')
            }
            const signatureTypeMulti = api.createType('MultiSignature', {
              [verification.crypto]: signature,
            })

            const proofType = api.createType('Proof', {
              leafHash: api.createType('Hash', proof.proof.leafHash),
              sortedHashes: api.createType('Vec<Hash>', proof.proof.sortedHashes),
            })

            const amountType = api.createType('Balance', proof.contribution)

            const accountId = api.createType('AccountId', decodeAddress(address))

            const submittable = api.tx.crowdloanClaim.claimReward(
              accountId,
              accountId,
              signatureTypeMulti,
              proofType,
              amountType
            )

            return cent.wrapSignAndSend(api, submittable, options)
          })
        )
      }
  )

  async function claim() {
    if (!selectedAccount) return

    const response = await fetch('/.netlify/functions/createCentrifugeProof', {
      method: 'POST',
      body: JSON.stringify({ address: selectedAccount.address }),
    })

    const text = await response.text()

    if (!response.ok) {
      console.error('createProof failed', text)
      throw new Error('Could not create proof')
    }

    const proof = JsonBig.parse(text)

    await cryptoWaitReady()

    const signRaw = selectedAccount.wallet?.signer?.signRaw

    if (!signRaw) throw new Error('signRaw was not defined')

    const { signature } = await signRaw({
      address: selectedAccount.address,
      data: proof.signMessage,
      type: 'bytes',
    })

    execute([proof, signature, selectedAccount.address])
  }

  return (
    <Container
      as="section"
      p={[2, 4]}
      borderRadius="input"
      style={{
        boxShadow: shadows.cardOverlay,
      }}
    >
      <Stack gap={2} alignItems="start">
        <WalletMenu />

        {didClaim != null &&
          (didClaim ? (
            'Rewards already claimed'
          ) : (
            <Shelf gap={3}>
              <Text>{`Total rewards: ${formatBalanceAbbreviated(totalRewards, currency)}`}</Text>
              {totalRewards.gt(new BN(0)) && (
                <Button onClick={claim} loading={isLoading}>
                  Claim rewards
                </Button>
              )}
            </Shelf>
          ))}

        <Text
          as="a"
          href="https://gov.centrifuge.io/t/how-to-claim-cfg-rewards-from-the-centrifuge-crowdloan-on-polkadot/3590"
          rel="noopener noreferrer"
          target="_blank"
        >
          Learn how to claim
        </Text>
      </Stack>
    </Container>
  )
}

function useTotalRewards() {
  return CurrencyBalance.fromFloat(100, 18)
}

function useDidClaim(address?: string) {
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
