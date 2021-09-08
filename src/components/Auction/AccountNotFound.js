import React from 'react';
import { Button, Box, Text } from 'grommet';
import { CircleInformation } from 'grommet-icons';
import { Section } from '../MDXLayout/shortcodes';

export const AccountNotFound = () => (
  <Section background="#F2F2F2" style={{ marginTop: 0, marginBottom: '48px' }}>
    <Box pad="30px">
      <Box gap="small">
        <Text
          size="16px"
          weight={900}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <CircleInformation size="16px" style={{ marginRight: '4px' }} />{' '}
          Account not found
        </Text>
        <Text size="16px">
          A Polkadot account is needed to stake your KSM. Make sure the account
          allows use on any chain (or Kusama) and is visible. Refresh the page
          after making changes to the extension.
        </Text>
        <Button
          primary
          alignSelf="start"
          color="#F2F2F2"
          label="Refresh"
          style={{
            marginTop: '12px',
            fontSize: '16px',
            border: '1px solid black',
            padding: '7px 20px',
          }}
          onClick={() => window.location.reload()}
        />
      </Box>
    </Box>
  </Section>
);
