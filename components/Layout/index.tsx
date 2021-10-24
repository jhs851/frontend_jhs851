import React from 'react'
import { Container } from 'components/Layout/styled'
import Head from 'components/Head'

const Layout: React.FC = ({ children }) => (
  <>
    <Head />
    <Container>{children}</Container>
  </>
)

export default Layout
