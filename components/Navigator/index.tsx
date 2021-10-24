import React, { ReactElement } from 'react'
import { HeaderRightContainer, HeaderLeftContainer, StyledNav } from './styled'

type P = {
  headerLeft?: ReactElement
  headerRight?: ReactElement
  title?: ReactElement
}

const Navigator: React.FC<P> = ({ headerLeft, headerRight, title }) => {
  return (
    <StyledNav>
      <HeaderLeftContainer>{headerLeft}</HeaderLeftContainer>
      {title}
      <HeaderRightContainer>{headerRight}</HeaderRightContainer>
    </StyledNav>
  )
}

export default Navigator
