import styled from 'styled-components'
import Text from 'components/Text'
import { hideScrollbar } from 'styles/scrollbar'

export const Container = styled.section`
  position: relative;
  overflow: hidden;
`

export const Wrapper = styled.div`
  height: calc(100vh - 44px);
  padding: 20px 16px 90px;
  background-color: ${({ theme }) => theme.paleGrey};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  ${hideScrollbar}
`

export const DateContainer = styled.div<{ index: number }>`
  display: flex;
  align-items: center;
  margin-top: ${({ index }) => (index ? 10 : 0)}px;
`

export const Line = styled.div`
  flex: 1;
  height: 1px;
  background-color: ${({ theme }) => theme.paleLilac};
`

export const DateText = styled(Text)`
  margin: 0 10px;
  opacity: 0.4;
`
