import styled from 'styled-components'
import Text from 'components/Text'
import { HiOutlinePaperAirplane } from 'react-icons/hi'
import { flexCenter } from 'styles/flex'
import { motion } from 'framer-motion'

export const MessageContainer = styled.article<{ me: boolean }>`
  margin-top: 10px;
  display: flex;
  justify-content: ${({ me }) => (me ? 'flex-end' : 'flex-start')};
  align-items: flex-end;
`

export const StyledMessage = styled(motion.div)<{ me: boolean }>`
  padding: 12px;
  border-radius: 12px;
  box-shadow: 0 2px 4px 0 ${({ theme }) => theme.black10};
  word-break: break-word;
  background-color: ${({ theme, me }) =>
    me ? theme.primary : theme.background};
`

export const FailedContainer = styled.div`
  display: flex;
  margin: 0 4px;
  border-radius: 4px;
  overflow: hidden;
`

export const RetryButton = styled.button`
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.background};
  border-right: 1px solid ${({ theme }) => theme.paleLilac};
  ${flexCenter};
`

export const RemoveButton = styled.button`
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.background};
  ${flexCenter};
`

export const TimeText = styled(Text)<{ me: boolean }>`
  margin: 0 4px;
  opacity: 0.4;
  order: ${({ me }) => (me ? 0 : 1)};
`

export const AssetContainer = styled(motion.div)``

export const AssetWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 4px 0 ${({ theme }) => theme.black10};
  background-color: ${({ theme }) => theme.charcoalGrey};
`

export const CancelButton = styled.button`
  position: absolute;
  width: 40px;
  height: 40px;
  opacity: 0.8;
  background-color: ${({ theme }) => theme.black};
  border-radius: 50%;
  left: 50%;
  top: 50%;
  margin-top: -20px;
  margin-left: -20px;
  z-index: 1030;
  cursor: pointer;
  transform: scale(1.2);
  ${flexCenter};
`

export const ProgressContainer = styled.div`
  height: 6px;
  border-radius: 3px;
  margin-top: 3px;
  background-color: ${({ theme }) => theme.grey1};
  overflow: hidden;
`

export const Progress = styled.div<{ width: number }>`
  width: ${({ width }) => width}%;
  height: 100%;
  transition: width 300ms linear;
  background-color: ${({ theme }) => theme.primary};
`

export const LoadingIcon = styled(HiOutlinePaperAirplane)`
  transform: rotate(-90deg) translateX(2px);
`
