import React from 'react';
import { Button, Box, Text } from 'grommet';
import { CircleInformation } from 'grommet-icons';
import { Section } from '../MDXLayout/shortcodes';

export const InstallExtension = () => (
  <Section background="#F2F2F2" style={{ marginTop: 0, marginBottom: '48px' }}>
    <Box pad="30px">
      <Box gap="small">
        <Text
          size="16px"
          weight={900}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <CircleInformation size="16px" style={{ marginRight: '4px' }} />{' '}
          Extension not installed
        </Text>
        <Text size="16px">
          The Polkadot.js browser extension needs to be installed.
        </Text>
        <Button
          primary
          alignSelf="start"
          color="#F2F2F2"
          label="Install Extension"
          style={{
            marginTop: '12px',
            fontSize: '16px',
            border: '1px solid black',
            padding: '7px 20px',
          }}
          href="https://polkadot.js.org/extension/"
        />
        <Box style={{ paddingLeft: '10px', paddingTop: '10px' }}>
          <Text weight={500}>Extension already installed?</Text>
          <Text>
            Authorize this page in the extension. Make sure the account is
            visible and the use is allowed on any chain.{' '}
            <Text weight={500}>Refresh</Text> the page after changing settings
            in the extension.
          </Text>
        </Box>
      </Box>
    </Box>
  </Section>
);
