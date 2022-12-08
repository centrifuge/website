import * as React from 'react'
import FocusTrap from 'focus-trap-react'
import { Box } from '@centrifuge/fabric'
import { Burger } from '../burger'
import { mobileMenu } from '../../../config/menu'
import { Panel } from './styles'
import { SubMenu } from './SubMenu'

export function MobileMenu() {
  const [open, setOpen] = React.useState(false)

  return (
    <FocusTrap
      active={open}
      focusTrapOptions={{
        clickOutsideDeactivates: true,
      }}
    >
      <Box as="nav" role="navigation" aria-label="Main" display={['block', 'block', 'none']}>
        <Burger open={open} toggle={() => setOpen(!open)} />

        <Panel role="list" aria-hidden={!open} open={open}>
          {mobileMenu.map((item, index) => (
            <li key={`${item.label}-${index}`}>
              <SubMenu {...item} preventTab={!open} />
            </li>
          ))}
        </Panel>
      </Box>
    </FocusTrap>
  )
}
