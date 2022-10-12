import { Box, Container, ContainerProps } from '@centrifuge/fabric'
import * as React from 'react'

export type CenterContainerProps = ContainerProps

export function CenterContainer({ children, ...rest }: CenterContainerProps) {
  return (
    <Box px={3}>
      <Container {...rest}>{children}</Container>
    </Box>
  )
}
