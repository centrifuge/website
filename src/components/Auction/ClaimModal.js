import React from 'react';
import { Box, Button, Layer, Text } from 'grommet';
import { Alert } from 'grommet-icons';

export const ClaimModal = ({ claimRewards, setShowClaimModal }) => (
  <Layer
    onEsc={() => setShowClaimModal(false)}
    onClickOutside={() => setShowClaimModal(false)}
  >
    <Box
      background="white"
      width="540px"
      gap="16px"
      pad="24px"
      style={{ borderRadius: '10px' }}
    >
      <Text size="18px" weight={600}>
        <Alert size="16px" /> Warning
      </Text>
      <Text>
        For now, Ledger hardware wallets are not supported by Altair, please do
        not attempt to claim AIR tokens with a Ledger at this time - we will
        support these claims soon, please check back here for updates.
      </Text>
      <Box direction="row" justify="end" gap="12px">
        <Button
          label="Cancel"
          onClick={() => setShowClaimModal(false)}
          size="medium"
        />
        <Button
          label="Claim"
          onClick={() => {
            setShowClaimModal(false);
            claimRewards();
          }}
          size="medium"
          primary
        />
      </Box>
    </Box>
  </Layer>
);
