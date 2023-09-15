import { Box, Text } from '@centrifuge/fabric'
import * as React from 'react'
import { theme } from '../theme'

type BannerProps = {
  children: React.ReactNode
}

export function Banner({ children }: BannerProps) {
  return process.env.SHOW_ANNOUNCEMENT_BANNER === 'true' ? (
    <Box
      as="div"
      py={1}
      display="flex"
      backgroundColor={theme.colors.accentSecondary}
      justifyContent="center"
      height="100%"
      width="100%"
    >
      <Text variant="body2">{children}</Text>
    </Box>
  ) : null
}
