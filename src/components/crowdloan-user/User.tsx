import * as React from 'react'
import {
  formatBalanceAbbreviated,
  useCentrifuge,
  useCentrifugeTransaction,
  useWallet,
  WalletMenu,
} from '@centrifuge/centrifuge-react'
import { Button, Container, Shelf, Stack, Text } from '@centrifuge/fabric'
import { decodeAddress, signatureVerify } from '@polkadot/util-crypto'
import type { WalletAccount } from '@subwallet/wallet-connect/types'
import BN from 'bn.js'
import { switchMap } from 'rxjs'
import { useTotalRewards, useDidClaim, getAccountDetails } from './utils'
import { Spinner } from '../Spinner'

export function User() {
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

  async function claim(account: WalletAccount | null, callback: typeof execute) {
    if (!account || !callback) {
      return
    }

    await getAccountDetails(account)
      .then((payload) => {
        if (payload) {
          callback(payload)
        }
      })
      .catch((error) => console.log(error))
  }

  return (
    <Container as="section">
      <Stack
        gap={3}
        alignItems="start"
        maxWidth={500}
        p={[2, 4]}
        borderRadius="input"
        border="1px solid"
        borderColor="borderPrimary"
      >
        <WalletMenu />

        {didClaim != null ? (
          didClaim ? (
            <Text varaint="body1" as="p">
              <Text as="strong" variant="emphasized">
                Rewards already claimed
              </Text>
            </Text>
          ) : (
            <Shelf gap={3} rowGap={1} flexWrap="wrap" justifyContent="space-between" width="100%" mb={2}>
              <Text as="p" variant="body1">
                Total rewards:{' '}
                <Text as="strong" variant="emphasized">
                  {formatBalanceAbbreviated(totalRewards, currency)}
                </Text>
              </Text>
              {totalRewards.gt(new BN(0)) && (
                <Button onClick={() => claim(selectedAccount, execute)} loading={isLoading}>
                  Claim rewards
                </Button>
              )}
            </Shelf>
          )
        ) : (
          <Spinner />
        )}

        <Text
          as="a"
          href="https://gov.centrifuge.io/t/how-to-claim-cfg-rewards-from-the-centrifuge-crowdloan-on-polkadot/3590"
          rel="noopener noreferrer"
          target="_blank"
          variant="body3"
          style={{ textDecoration: 'underline' }}
        >
          Learn how to claim
        </Text>
      </Stack>
    </Container>
  )
}
