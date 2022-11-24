import React from 'react'
import { Grid, Box, Stack, Text } from '@centrifuge/fabric'
import { Image, ImageProps } from '../Image'
import link from '../../assets/link.svg'

export type ContributorProps = {
  name: string
  role: string
  social: string
  entity: {
    name: string
    href?: string
  }
  image: ImageProps
}

export function Contributor({ item }: { item: ContributorProps }) {
  return (
    <Grid
      as="li"
      gridTemplateColumns={['minmax(0, 38vw) 1fr', '1fr']}
      width={['100%']}
      flexShrink={0}
      gap={['5vw', 2]}
      px={[0, 2]}
      alignItems="center"
    >
      <Box position="relative" pl={[20, 0]}>
        <Box
          borderRadius="50%"
          overflow="hidden"
          style={{
            // New stacking context to fix border radius in Safari
            isolation: 'isolate',
          }}
        >
          <Image data={item.image} />
        </Box>
        {item.social && (
          <Box
            as="a"
            href={item.social}
            rel="noopener noreferrer"
            target="_blank"
            title={`Find ${item.name} on Social media`}
            position="absolute"
            top={[0, 'initial']}
            left={[0, 'initial']}
            bottom={['initial', 0]}
            right={['initial', 0]}
          >
            <Box as="img" display="block" src={link} maxWidth={[24, 30]} alt="" />
          </Box>
        )}
      </Box>
      <Stack alignItems={['flex-start', 'center']} textAlign={['left', 'center']} flexShrink={0}>
        <Text variant="body1" as="h3">
          {item.name}
        </Text>
        <Text variant="body3" color="textSecondary" as="span">
          {item.role}
        </Text>
        <Text
          href={item.entity.href}
          as="a"
          target="_blank"
          rel="noopener noreferrer"
          variant="body3"
          color="textSecondary"
          style={{ textDecoration: 'underline' }}
        >
          {item.entity.name}
        </Text>
      </Stack>
    </Grid>
  )
}
