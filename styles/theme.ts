import { AccentColors, CommonColors, Theme } from 'types/theme'

const commonColors: CommonColors = {
  black: '#000000',
  white: '#ffffff',
  grey1: '#e5e5e7',
  coolGrey: '#a4a6b0',
  paleGrey: '#f9f9fb',
  battleshipGrey: '#74747e',
  charcoalGrey: '#464052',
  charcoalGrey2: '#363a42',
  paleLilac: '#e6e6eb',
  foreground: '#363a42',
  background: '#ffffff',
  black10: 'rgba(0, 0, 0, 0.1)',
}

const accentColors: AccentColors = {
  primary: '#5b36ac',
  secondary: '#47909b',
  error: 'red',
}

const theme: Theme = {
  light: {
    ...commonColors,
    ...accentColors,
  },
  dark: {
    ...commonColors,
    ...accentColors,
    // foreground: commonColors.background,
    // background: commonColors.foreground,
  },
}

export default theme
