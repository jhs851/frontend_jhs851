export interface CommonColors {
  readonly black: string
  readonly white: string
  readonly grey1: string
  readonly coolGrey: string
  readonly paleGrey: string
  readonly battleshipGrey: string
  readonly charcoalGrey: string
  readonly charcoalGrey2: string
  readonly paleLilac: string
  readonly foreground: string
  readonly background: string
  readonly black10: string
}

export interface AccentColors {
  readonly primary: string
  readonly secondary: string
  readonly error: string
}

export interface Colors extends CommonColors, AccentColors {}

export type Theme = {
  light: Colors
  dark: Colors
}

export interface ThemeContextState {
  dark: boolean
  toggleTheme: () => void
  colors: Colors
}
