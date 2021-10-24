import React from 'react'
import { StyledText } from './styled'
import { Colors } from 'types/theme'

type P = {
  size: number
  weight?: 500 | 600 | 700
  letterSpacing?: number
  color?: keyof Colors
  className?: string
  ellipsis?: boolean
}

const Text: React.FC<P> = ({
  size,
  weight,
  letterSpacing,
  color,
  ellipsis = false,
  className,
  children,
}) => (
  <StyledText
    size={size}
    weight={weight}
    letterSpacing={letterSpacing}
    color={color}
    ellipsis={ellipsis}
    className={className}
  >
    {children}
  </StyledText>
)

export default Text
