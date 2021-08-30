import React from 'react';
import { Box } from 'grommet';

export const BonusCard = ({ background, children }) => (
  <Box
    background={`url('${background}')`}
    pad="16px"
    width="271px"
    height="199px"
    style={{ paddingLeft: '20px' }}
  >
    {children}
  </Box>
);
