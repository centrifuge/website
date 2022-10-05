import { FabricTheme } from '@centrifuge/fabric'
import {} from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme extends FabricTheme {
    sizes: FabricTheme['sizes'] & {
      containerHeader: string
      containerNarrow: string
    }
    typography: FabricTheme['typography'] & {
      tag: ThemeTypography['heading1']
    }
  }
}
