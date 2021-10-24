import styled, { css } from 'styled-components'
import { Colors } from 'types/theme'

export const StyledText = styled.p<{
  size: number
  weight?: 500 | 600 | 700
  letterSpacing?: number
  color?: keyof Colors
  ellipsis: boolean
}>`
  font-family: AppleSDGothicNeo, sans-serif;
  font-size: ${({ size }) => `${size}px`};
  font-weight: ${({ weight }) => weight || 500};
  letter-spacing: ${({ letterSpacing }) => `${letterSpacing || -0.1}`}px;
  color: ${({ theme, color }) => theme[color || 'foreground']};

  ${({ ellipsis }) =>
    ellipsis &&
    css`
      overflow: hidden;
      text-overflow: ellipsis '..';
      white-space: nowrap;
    `}
`
