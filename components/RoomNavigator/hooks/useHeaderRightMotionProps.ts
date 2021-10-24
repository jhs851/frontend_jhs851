import { MotionProps } from 'framer-motion/types/motion/types'

const useHeaderRightMotionProps = (): MotionProps => ({
  initial: { opacity: 0, x: 30 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.2, duration: 0.3 },
  },
  exit: {
    opacity: 0,
    x: 30,
    transition: { delay: 0.2, duration: 0.3 },
  },
  transition: { type: 'easeInOut' },
})

export default useHeaderRightMotionProps
