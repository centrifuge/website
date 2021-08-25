import React from 'react';
import { Box, Text } from 'grommet';
import { Alert } from 'grommet-icons';

export const UnexpectedError = () => {
  return (
    <Box
      background={{ color: '#FFE8ED' }}
      style={{ width: '500px', padding: '24px', borderRadius: '4px' }}
    >
      <Text weight={600}>
        <Alert size="small" /> Unexpected error!
      </Text>
      <Text>Try again.</Text>
    </Box>
  );
};
