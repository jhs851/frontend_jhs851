import 'styled-components'
import { Colors } from 'types/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends Colors {}
}
