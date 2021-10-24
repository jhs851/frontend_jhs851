import { MotionProps } from 'framer-motion/types/motion/types'

const useHeaderLeftMotionProps = (): MotionProps => ({
  initial: { opacity: 0.4, x: -10 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -10 },
  transition: { type: 'easeInOut' },
})

export default useHeaderLeftMotionProps
