import React from 'react'
import Text from 'components/Text'
import Image from 'components/Image'
import { IconsContainer, UploadIcon } from './styled'
import Navigator from 'components/Navigator'
import { useRouter } from 'next/router'

type P = {
  roomName: string
  onToggleAssets: () => void
}

const RoomNavigator: React.FC<P> = ({ roomName, onToggleAssets }) => {
  const router = useRouter()
  const goBack = () => router.back()
  const onSearch = () => null

  return (
    <Navigator
      title={
        <Text size={17} weight={700} letterSpacing={-0.12} color="white">
          {roomName}
        </Text>
      }
      headerLeft={
        <button onClick={goBack}>
          <Image src="/icons/back.svg" width={24} height={24} alt="뒤로" />
        </button>
      }
      headerRight={
        <IconsContainer>
          <UploadIcon onClick={onToggleAssets}>
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
