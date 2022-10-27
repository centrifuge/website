import React from 'react'
import { Text } from '@centrifuge/fabric'
import { useTheme } from 'styled-components'

type ColumnTitleProps = {
  children: React.ReactNode
}

export function ColumnTitle({ children }: ColumnTitleProps) {
  const { colors } = useTheme()

  return (
    <Text as="h3" variant="body3" style={{ color: colors.textDisabled, textTransform: 'uppercase' }}>
      {children}
    </Text>
  )
}
