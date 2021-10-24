import styled from 'styled-components'
import Image from 'components/Image'
import Text from 'components/Text'
import { flexCenter } from 'styles/flex'

export const StyledRoom = styled.a`
  height: 74px;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.background};
  display: flex;
  align-items: center;
`

export const Avatar = styled(Image)`
  flex: 0 0 56px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;
`

export const Container = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`

export const Body = styled.div`
  flex: 1;
  overflow: hidden;
`

export const Message = styled(Text)`
  margin-top: 3px;
`

export const Footer = styled.div`
  height: 100%;
  margin-left: 13px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const DateText = styled(Text)`
  opacity: 0.4;
`

export const UnreadMessageCountContainer = styled.div`
  width: 18px;
  height: 18px;
  margin-top: 6px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary};
  ${flexCenter}
`
