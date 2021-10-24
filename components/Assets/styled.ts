import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1030;
  background-color: ${({ theme }) => theme.primary};
`

export const Wrapper = styled.div`
  padding: 11px;
`

export const Asset = styled(motion.div)`
  height: 46px;
  border-radius: 5px;
  overflow: hidden;
`
