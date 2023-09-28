import centrifugeLight from '@centrifuge/fabric/dist/theme/centrifugeLight'
import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  ...centrifugeLight,
  sizes: {
    ...centrifugeLight.sizes,
    container: '1430px',
    containerHeader: '1600px',
    containerNarrow: '1140px',
    headerHeight: [50, 65, 65],
  },
  space: Object.assign([], centrifugeLight.space, {
    layoutSmall: 80,
    layoutMedium: 144,
    layoutLarge: 168,
    layoutXLarge: 250,
  }),
  typography: {
    ...centrifugeLight.typography,
    heading1: {
      fontSize: [36, 50, 64, 80],
      lineHeight: 1.167,
      fontWeight: 500,
      letterSpacing: '-0.04em',
      color: 'textPrimary',
    },
    heading2b: {
      fontSize: [32, 50, 66],
      lineHeight: 1,
      fontWeight: 500,
      letterSpacing: '-0.04em',
      color: 'textPrimary',
    },
    heading3b: {
      fontSize: [28, 38, 50],
      lineHeight: 1.2,
      fontWeight: 500,
      color: 'textPrimary',
    },
    heading4b: {
      fontSize: [24, 28, 30],
      lineHeight: 1.2,
      fontWeight: 500,
      letterSpacing: '-0.04em',
      color: 'textPrimary',
    },
    heading5: {
      fontSize: [20, 24, 28],
      lineHeight: 1.4,
      fontWeight: 400,
      color: 'textPrimary',
    },
    heading6: {
      fontSize: [18, 20, 24],
      lineHeight: 1.2,
      fontWeight: 400,
      color: 'textPrimary',
    },
    tag: {
      fontSize: [12, 14, 15, 16],
      lineHeight: 1.2,
      fontWeight: 500,
      color: 'textSecondary',
      textTransform: 'uppercase',
    },
    emphasized: {
      fontWeight: 600,
    },
    interactive1: {
      fontSize: 14,
      lineHeight: 1.375,
      fontWeight: 500,
      color: 'textPrimary',
    },
    interactive2: {
      fontSize: 12,
      lineHeight: 1.375,
      fontWeight: 500,
      color: 'textPrimary',
    },
    body1: {
      fontSize: [16, 18],
      lineHeight: 1.3,
      fontWeight: 400,
      color: 'textPrimary',
    },
    body2: {
      fontSize: 16,
      lineHeight: 1.25,
      fontWeight: 400,
      color: 'textPrimary',
    },
    body3: {
      fontSize: 14,
      lineHeight: 1.35,
      fontWeight: 400,
      color: 'textPrimary',
    },
    body4: {
      fontSize: 12,
      lineHeight: 1.25,
      fontWeight: 400,
      color: 'textSecondary',
    },
    label1: {
      fontSize: [14, 16],
      lineHeight: 1.375,
      fontWeight: 500,
      color: 'textSecondary',
    },
    menuAnchor: {
      fontSize: 20,
      fontWeight: 400,
      color: 'textPrimary',
    },
  },
}
