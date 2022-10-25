import { AnchorButton, Box, Divider, Stack, Container, Text, Button } from '@centrifuge/fabric'
import React from 'react'
import { useTheme } from 'styled-components'

export function CrowdloanUser() {
  const [isExtension, setIsExtension] = React.useState(true)
  const [account, setAccount] = React.useState('dfknver')
  const [rewards, setRewards] = React.useState(0)
  const { shadows } = useTheme()

  return (
    <Container
      as="section"
      p={[2, 4]}
      borderRadius="input"
      style={{
        boxShadow: shadows.cardOverlay,
      }}
    >
      {isExtension && (
        <Stack alignItems="start" gap={2}>
          <Text as="h2" variant="heading4">
            Rewards
          </Text>

          <Text
            as="a"
            href={`https://polkadot.subscan.io/account/${account}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            View account on Subscan
          </Text>

          <Button>Claim rewards</Button>
          <Text
            as="a"
            href="https://gov.centrifuge.io/t/how-to-claim-cfg-rewards-from-the-centrifuge-crowdloan-on-polkadot/3590"
            rel="noopener noreferrer"
            target="_blank"
          >
            Learn how to claim
          </Text>
        </Stack>
      )}

      {!isExtension && (
        <Stack gap={2} alignItems="start" as="aside">
          <Text as="p" variant="body1">
            <Text as="em" variant="emphasized" fontStyle="normal">
              Polkadot extension missing
            </Text>
            <br />
            The Polkadot.js browser extension needs to be installed.
          </Text>
          <AnchorButton
            href="https://github.com/polkadot-js/extension"
            rel="noopener noreferrer"
            target="_blank"
            variant="secondary"
            small
          >
            Install extension
          </AnchorButton>

          <Divider />
          <Text as="p" variant="body2">
            Extension already installed? Authorize this page in the extension. Make sure the account is visible and the
            use is allowed on any chain. Refresh the page after changing the settings in the extension.
          </Text>
        </Stack>
      )}
    </Container>
  )
}
