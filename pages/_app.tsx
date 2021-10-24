import type { AppProps } from 'next/app'
import GlobalStyles from 'styles/GlobalStyles'
import withDarkMode from 'next-dark-mode'
import ThemeProvider from 'contexts/ThemeProvider'
import Layout from 'components/Layout'
import { NextPage } from 'next'
import { ReactElement } from 'react'
import 'plugins/moment'

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement<P>) => ReactElement<P>
}

type P = AppProps & {
  Component: NextPageWithLayout
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

    <Layout>
      {(Component.getLayout ?? (page => page))(<Component {...pageProps} />)}
    </Layout>
  </ThemeProvider>
)

export default withDarkMode(App)
