import React from 'react'
import NextImage, { ImageProps } from 'next/image'
import { ImageContainer } from 'components/Image/styled'

type P = ImageProps & {
  className?: string
}

const Image: React.FC<P> = props => (
  <ImageContainer className={props.className}>
    <NextImage objectFit="contain" {...props} />
  </ImageContainer>
)

export default Image
