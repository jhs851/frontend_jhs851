import type { AppProps } from 'next/app'
import GlobalStyles from 'styles/GlobalStyles'
import withDarkMode from 'next-dark-mode'

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

const App = ({ Component, pageProps }: P) => (
  <>
    <GlobalStyles />

    <Component {...pageProps} />
  </>
)

export default withDarkMode(App)
