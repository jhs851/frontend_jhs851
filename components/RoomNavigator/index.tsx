import React from 'react'
import Text from 'components/Text'
import Image from 'components/Image'
import { IconsContainer, UploadIcon } from './styled'
import Navigator from 'components/Navigator'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import MotionBackSVG from 'components/MotionBackSVG'
import useHeaderLeftVariants from './hooks/useHeaderLeftVariants'
import useHeaderRightVariants from './hooks/useHeaderLeftVariants'

type P = {
  roomName: string
  onToggleAssets: () => void
}

const RoomNavigator: React.FC<P> = ({ roomName, onToggleAssets }) => {
  const router = useRouter()
  const goBack = () => router.back()
  const onSearch = () => null
  const headerLeftVariants = useHeaderLeftVariants()
  const headerRightVariants = useHeaderRightVariants()

  return (
    <Navigator
      title={
        <motion.div {...headerLeftVariants}>
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
        <IconsContainer {...headerRightVariants}>
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
