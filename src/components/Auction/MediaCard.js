import React from 'react';
import { Box } from 'grommet';

export const MediaCard = ({ children }) => (
  <Box
    width="364px"
    height="434px"
    style={{
      boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.2)',
      borderRadius: '10px',
    }}
  >
    {children}
  </Box>
);
