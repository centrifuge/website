import { Box, Text } from '@centrifuge/fabric'
import * as React from 'react'
import { theme } from '../theme'

type BannerProps = {
  children: React.ReactNode
}

export function Banner({ children }: BannerProps) {
  const [hasMounted, setHasMounted] = React.useState(false)

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }
  return (
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
  )
}
