import React from 'react';
import { Box } from 'grommet';

export const BonusCard = ({ background, children }) => (
  <Box
    background={`url('${background}')`}
    pad="16px"
    width="269px"
    height="184px"
  >
    {children}
  </Box>
);
