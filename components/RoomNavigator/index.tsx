import React from 'react'
import Text from 'components/Text'
import Image from 'components/Image'
import { IconsContainer, UploadIcon } from './styled'
import Navigator from 'components/Navigator'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import MotionBackSVG from 'components/MotionBackSVG'
import useHeaderTitleMotionProps from './hooks/useHeaderTitleMotionProps'
import useHeaderRightMotionProps from './hooks/useHeaderRightMotionProps'

type P = {
  roomName: string
  onToggleAssets: () => void
}

const RoomNavigator: React.FC<P> = ({ roomName, onToggleAssets }) => {
  const router = useRouter()
  const goBack = () => router.back()
  const onSearch = () => null
  const headerTitleMotionProps = useHeaderTitleMotionProps()
  const headerRightMotionProps = useHeaderRightMotionProps()

  return (
    <Navigator
      title={
        <motion.div {...headerTitleMotionProps}>
          <Text size={17} weight={700} letterSpacing={-0.12} color="white">
            {roomName}
          </Text>
        </motion.div>
      }
      headerLeft={
        <button data-testid="back-button" onClick={goBack}>
          <MotionBackSVG />
        </button>
      }
      headerRight={
        <IconsContainer {...headerRightMotionProps}>
          <UploadIcon data-testid="upload-button" onClick={onToggleAssets}>
            <Image
              src="/icons/upload.svg"
              alt="사진 업로드"
              width={24}
              height={24}
            />
          </UploadIcon>
          <button onClick={onSearch}>
            <Image src="/icons/search.svg" alt="검색" width={24} height={24} />
          </button>
        </IconsContainer>
      }
    />
  )
}

export default RoomNavigator
