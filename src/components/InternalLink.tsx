import React from 'react'
import { Link } from 'gatsby'
import { VisualButton } from '@centrifuge/fabric'
import styled from 'styled-components'
import type { VisualButtonProps } from '@centrifuge/fabric'

export type InternalLinkProps = VisualButtonProps & {
  children: React.ReactNode
  to: string
}

const Root = styled(Link)`
  display: inline-block;
`

export function InternalLink({ children, to, ...rest }: InternalLinkProps) {
  return (
    <Root to={to}>
      <VisualButton {...rest}>{children}</VisualButton>
    </Root>
  )
}
