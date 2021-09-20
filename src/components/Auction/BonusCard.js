import React from 'react';
import { Box } from 'grommet';

export const BonusCard = ({ background, children }) => (
  <Box
    background={`url('${background}')`}
    pad="12px"
    width="274px"
    height="200px"
    style={{ paddingLeft: '20px' }}
  >
    {children}
  </Box>
);
