import React, { useEffect, useRef, useState } from 'react'
import { Asset, Container, Wrapper } from './styled'
import Image from 'components/Image'
import { Asset as IAsset } from 'types'
import { Swiper, SwiperSlide } from 'swiper/react'
import useContainerVariants from './hooks/useContainerVariants'
import useAssetVariants from './hooks/useAssetVariants'

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
  props,
  ref,
) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const containerVariants = useContainerVariants()
  const assetVariants = useAssetVariants()
  const [assets, setAssets] = useState<IAsset[]>(props.assets)
  const [visible, setVisible] = useState<boolean>(false)
  const onToggle = () => {
    if (!assets.length) {
      return
    }

    setVisible(prevState => !prevState)
  }
  const onClick = (asset: IAsset) => {
    setAssets(prevState => prevState.filter(value => value.id !== asset.id))
    props.onClick(asset.path)
  }

  useEffect(() => {
    if (!assets.length) {
      setVisible(false)
    }
  }, [assets])

  React.useImperativeHandle(ref, () => {
    if (containerRef.current) {
      return {
        ...containerRef.current,
        onToggle,
      }
    }

    return undefined
  })

  return (
    <Container
      ref={containerRef}
      initial={false}
      animate={visible ? 'open' : 'closed'}
      variants={containerVariants}
    >
      <Wrapper>
        <Swiper
          spaceBetween={10}
          slidesPerView="auto"
          style={{ overflow: 'unset' }}
        >
          {assets.map(asset => (
            <SwiperSlide key={asset.id} style={{ width: 46 }}>
              <Asset
                onClick={() => onClick(asset)}
                animate={visible ? 'open' : 'closed'}
                variants={assetVariants}
              >
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
