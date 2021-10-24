import styled from 'styled-components'
import { flexCenter } from 'styles/flex'

export const StyledNav = styled.header`
  height: 44px;
  background-color: ${({ theme }) => theme.primary};
  position: relative;
  ${flexCenter}
`

export const HeaderLeftContainer = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
`

export const HeaderRightContainer = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
`
