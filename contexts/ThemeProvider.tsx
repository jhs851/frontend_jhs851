import React, { useState } from 'react'
import theme from 'styles/theme'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ThemeContextState } from 'types/theme'

export const ThemeContext = React.createContext<ThemeContextState>({
  dark: false,
  toggleTheme: () => null,
  colors: theme.light,
})

type P = {
  dark: boolean
}

const ThemeProvider: React.FC<P> = ({ dark, children }) => {
  const [themeState, setTheme] = useState<ThemeContextState>({
    dark,
    toggleTheme: () => {
      setTheme(prevState => ({
        dark: !prevState.dark,
        toggleTheme: prevState.toggleTheme,
        colors: prevState.dark ? theme.light : theme.dark,
      }))
    },
    colors: dark ? theme.dark : theme.light,
  })

  React.useEffect(() => {
    if (dark !== themeState.dark) {
      themeState.toggleTheme()
    }
  }, [dark, themeState])

  return (
    <ThemeContext.Provider value={themeState}>
      <StyledThemeProvider theme={themeState.colors}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextState {
  return React.useContext<ThemeContextState>(ThemeContext)
}

export default ThemeProvider
