import React from 'react'
import { Shelf, Box, Stack, Text } from '@centrifuge/fabric'
import { useTheme } from 'styled-components'
import { Unit } from './Unit'

export type ColorsProps = {
  title: string
  items: {
    title: string
    body: string
    colors: ColorBlockProps[]
  }[]
}

export function Colors({ title, items }: ColorsProps) {
  return (
    <Box>
      <Text as="h3" variant="heading2">
        {title}
      </Text>

      <Stack gap={6} mt={4}>
        {items.map((item, index) => (
          <Unit key={`${item.title}${index}`} title={item.title} body={item.body}>
            <Stack as="dl" gap={2}>
              {item.colors.map((color, i) => (
                <ColorBlock key={`${color.title}${i}`} {...color} />
              ))}
            </Stack>
          </Unit>
        ))}
      </Stack>
    </Box>
  )
}

type ColorBlockProps = {
  title: string
  value: string
  outline?: boolean
  inverted?: boolean
}

function ColorBlock({ title, value, outline, inverted }: ColorBlockProps) {
  const { colors } = useTheme()
  const textColor = inverted ? colors.textInverted : colors.textPrimary

  return (
    <Shelf
      backgroundColor={value}
      px={2}
      pt={8}
      pb={1}
      alignItems="end"
      gap={2}
      borderStyle="solid"
      borderWidth={outline ? 1 : 0}
      borderColor="borderPrimary"
      maxWidth="containerNarrow"
    >
      <Text as="dt" variant="body1" color={textColor}>
        {title}
      </Text>
      <Text as="dd" variant="body2" color={textColor}>
        {value}
      </Text>
    </Shelf>
  )
}
