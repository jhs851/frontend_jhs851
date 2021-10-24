import type { AppProps } from 'next/app'
import GlobalStyles from 'styles/GlobalStyles'
import withDarkMode from 'next-dark-mode'
import ThemeProvider from 'contexts/ThemeProvider'

type P = AppProps & {
  darkMode: {
    autoModeActive: boolean
    autoModeSupported: boolean
    darkModeActive: boolean
    switchToAutoMode: () => void
    switchToDarkMode: () => void
    switchToLightMode: () => void
  }
}

const App = ({ Component, pageProps, darkMode }: P) => (
  <ThemeProvider dark={darkMode.darkModeActive}>
    <GlobalStyles />

    <Component {...pageProps} />
  </ThemeProvider>
)

export default withDarkMode(App)
