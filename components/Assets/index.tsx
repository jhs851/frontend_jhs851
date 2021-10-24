import React, { useRef, useState } from 'react'
import { Asset, Container, Wrapper } from './styled'
import Image from 'components/Image'
import { Asset as IAsset } from 'types'
import { Swiper, SwiperSlide } from 'swiper/react'

export type HTMLDivAssetsElement =
  | (HTMLDivElement & {
      onToggle: () => void
    })
  | undefined

type P = {
  assets: IAsset[]
  onClick: (asset: string) => any
}

const Assets: React.ForwardRefRenderFunction<HTMLDivAssetsElement, P> = (
  { assets, onClick },
  ref,
) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState<boolean>(false)
  const onToggle = () => {
    if (!assets.length) {
      return
    }

    setVisible(prevState => !prevState)
  }

  React.useImperativeHandle(ref, () => {
    if (containerRef.current) {
      return {
        ...containerRef.current,
        onToggle,
      }
    }

    return undefined
  })

  if (!visible) {
    return null
  }

  return (
    <Container ref={containerRef}>
      <Wrapper>
        <Swiper spaceBetween={10} slidesPerView="auto">
          {assets.map(asset => (
            <SwiperSlide key={asset.id} style={{ width: 46 }}>
              <Asset onClick={() => onClick(asset.path)}>
                <Image src={asset.path} width={46} height={46} alt="이미지" />
              </Asset>
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </Container>
  )
}

export default React.forwardRef(Assets)
