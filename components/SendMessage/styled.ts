import styled from 'styled-components'
import { flexCenter } from 'styles/flex'

export const SendContainer = styled.form`
  display: flex;
  padding: 10px 16px 20px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.paleGrey};
`

export const TextareaContainer = styled.div`
  flex: 1;
  height: 50px;
  margin-right: 12px;
  padding: 17px 16px 16px;
  border-radius: 25px;
  box-shadow: 0 2px 4px 0 ${({ theme }) => theme.black10};
  background-color: ${({ theme }) => theme.background};
`

export const SubmitContainer = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary};
  transition: opacity 300ms;
  ${flexCenter}

  :disabled {
    opacity: 0.4;
  }
`
