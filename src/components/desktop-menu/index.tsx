import * as React from 'react'
import { Box, Shelf } from '@centrifuge/fabric'
import type { ButtonVariant } from './SubMenu'
import { desktopMenu } from '../../../config/menu'
import { SubMenu } from './SubMenu'
import { ListItem } from './styles'

type DesktopMenuProps = {
  menuButtonVariant: ButtonVariant
}

export function DesktopMenu({ menuButtonVariant }: DesktopMenuProps) {
  return (
    <Box as="nav" role="navigation" aria-label="Main" display={['none', 'none', 'block']}>
      <Shelf as="ul" role="list" p={0} justifyContent="flex-end" alignItems="center" gap={3}>
        {desktopMenu.map((item, index) => (
          <ListItem as="li" position="relative" key={`${item.label}-${index}`}>
            <SubMenu {...item} buttonVariant={menuButtonVariant} />
          </ListItem>
        ))}
      </Shelf>
    </Box>
  )
}
