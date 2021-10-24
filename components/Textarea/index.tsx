import React, { TextareaHTMLAttributes } from 'react'
import { StyledTextarea } from './styled'

type P = TextareaHTMLAttributes<Element> & {
  className?: string
}

const Textarea: React.ForwardRefRenderFunction<HTMLTextAreaElement, P> = (
  props,
  ref,
) => <StyledTextarea ref={ref} {...props} />

export default React.forwardRef(Textarea)
