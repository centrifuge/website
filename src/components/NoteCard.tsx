import { Box } from '@centrifuge/fabric'
import { theme } from '../theme'
import styled from 'styled-components'

const themes = {
  critical: theme.colors['statusCritical'],
  default: theme.colors['statusDefault'],
  info: theme.colors['statusInfo'],
  ok: theme.colors['statusOk'],
  warning: theme.colors['statusWarning'],
}

export const NoteCard = styled(Box)<{ status: keyof typeof themes }>`
  padding: ${({ theme }) => theme.space[2]}px;
  border-width: 1px;
  border-left-width: 4px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.borderPrimary};
  border-left-color: ${({ status }) => themes[status]};
  border-radius: ${({ theme }) => theme.radii.tooltip}px;
`
