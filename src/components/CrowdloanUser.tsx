import { AnchorButton, Box, Divider, Stack, Container, Text } from '@centrifuge/fabric'
import React from 'react'
import { useTheme } from 'styled-components'

export function CrowdloanUser() {
  const { shadows } = useTheme()

  return (
    <Container
      p={[2, 4]}
      borderRadius="input"
      style={{
        boxShadow: shadows.cardOverlay,
      }}
    >
      <Stack gap={2} alignItems="start">
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
    </Container>
  )
}
