import styled from 'styled-components'
import { hideScrollbar } from 'styles/scrollbar'

export const StyledTextarea = styled.textarea`
  font-family: AppleSDGothicNeo, sans-serif;
  font-size: 14px;
  letter-spacing: -0.12px;
  color: ${({ theme }) => theme.foreground};
  background-color: ${({ theme }) => theme.background};
  width: 100%;
  resize: none;
  ${hideScrollbar}

  ::placeholder {
    color: ${({ theme }) => theme.battleshipGrey};
  }
`
