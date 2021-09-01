import React from 'react';
import { Spinner, Text } from 'grommet';

export const HeaderPill = ({ label, value }) => (
  <Text
    size="16px"
    color="altair"
    style={{
      border: '1px solid #FAB961',
      borderRadius: '14px',
      padding: '0 18px',
      flexDirection: 'row',
      display: 'flex',
      alignItems: 'center',
    }}
    weight={500}
  >
    {value ? (
      <Text>{value}</Text>
    ) : (
      <Spinner
        color="altair"
        style={{
          padding: '6px',
          height: '10px',
          width: '10px',
        }}
      />
    )}
    <Text style={{ paddingLeft: '4px' }}>{label}</Text>
  </Text>
);
