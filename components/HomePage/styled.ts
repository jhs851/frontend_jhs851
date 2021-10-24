import styled from 'styled-components'
import { flexCenter } from 'styles/flex'

export const Container = styled.div`
  height: 100vh;
  flex-direction: column;
  ${flexCenter}
`

export const Button = styled.a`
  width: 110px;
  padding: 8px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.primary};
  margin-top: 20px;
  ${flexCenter}
`
