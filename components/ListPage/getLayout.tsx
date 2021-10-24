import React, { ReactElement } from 'react'
import Navigator from 'components/Navigator'
import Text from 'components/Text'
import Image from 'components/Image'

export const getLayout = (page: ReactElement) => (
  <>
    <Navigator
      title={
        <Text size={17} weight={700} letterSpacing={-0.12} color="white">
          채팅
        </Text>
      }
      headerLeft={
        <Image src="/icons/menu.svg" width={24} height={24} alt="메뉴" />
      }
      headerRight={
        <Image src="/icons/user.svg" alt="내정보" width={24} height={24} />
      }
    />

    {page}
  </>
)
