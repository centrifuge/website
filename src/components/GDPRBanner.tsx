import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import styled, { useTheme } from 'styled-components'
import Cookies from 'js-cookie'
import { Button, Text, Shelf } from '@centrifuge/fabric'

// const Anchor = styled(Link)`
//   color: ${({ theme }) => theme.colors.textPrimary}

// `

export function GDPRBanner() {
  const { zIndices, shadows } = useTheme()
  const [bannerEnabled, setBannerEnabled] = useState(false)

  useEffect(
    () => (Cookies.get('bannerCookieDismissed') === 'true' ? setBannerEnabled(false) : setBannerEnabled(true)),
    []
  )

  if (!bannerEnabled) {
    return null
  }

  return (
    <Shelf
      role="alert"
      position="fixed"
      zIndex={zIndices.sticky}
      bottom={[2, 4]}
      left={0}
      px={2}
      justifyContent="center"
    >
      <Shelf
        gap={[2, 4]}
        flexDirection={['column', 'row']}
        alignItems="start"
        px={4}
        py={3}
        backgroundColor="backgroundPage"
        borderRadius="input"
        maxWidth={800}
        style={{
          boxShadow: shadows.cardOverlay,
        }}
      >
        <Text variant="body1">
          By continuing your visit on this site, you accept the use of cookies from Google Analytics.{' '}
          <Text as={Link} to="/privacy" underline variant="body1">
            Read more
          </Text>
        </Text>

        <Button
          variant="secondary"
          onClick={() => {
            setBannerEnabled(false)
            Cookies.set('bannerCookieDismissed', 'true')
          }}
        >
          Accept
        </Button>
      </Shelf>
    </Shelf>
  )
}
