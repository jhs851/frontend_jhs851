import React, { ReactElement } from 'react'
import Navigator from 'components/Navigator'
import Text from 'components/Text'
import Image from 'components/Image'
import { motion } from 'framer-motion'
import MotionMenuSVG from 'components/MotionMenuSVG'
import useHeaderLeftMotionProps from './hooks/useHeaderLeftMotionProps'
import useHeaderRightMotionProps from './hooks/useHeaderRightMotionProps'

export const GetLayout = (page: ReactElement) => {
  const headerLeftMotionProps = useHeaderLeftMotionProps()
  const headerRightMotionProps = useHeaderRightMotionProps()

  return (
    <>
      <Navigator
        title={
          <motion.div {...headerLeftMotionProps}>
            <Text size={17} weight={700} letterSpacing={-0.12} color="white">
              채팅
            </Text>
          </motion.div>
        }
        headerLeft={<MotionMenuSVG />}
        headerRight={
          <motion.div {...headerRightMotionProps}>
            <Image src="/icons/user.svg" alt="내정보" width={24} height={24} />
          </motion.div>
        }
      />

      {page}
    </>
  )
}
