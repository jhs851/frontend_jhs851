import React from 'react'
import NextHead from 'next/head'
import { useTheme } from 'contexts/ThemeProvider'

const Head: React.FC = () => {
  const { colors } = useTheme()

  return (
    <NextHead>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=375, initial-scale=0, user-scalable=no"
      />
      <meta name="msapplication-tap-highlight" content="no" />

      <meta name="theme-color" content={colors.primary} />
      <meta name="msapplication-navbutton-color" content={colors.primary} />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content={colors.primary}
      />

      <title>croquiscom-recruit/frontend_jhs851</title>
    </NextHead>
  )
}

export default Head
