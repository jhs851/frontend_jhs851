import { MotionProps } from 'framer-motion/types/motion/types'

const useContainerVariants = (): MotionProps => ({
  initial: { opacity: 0, x: -30 },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: { opacity: 0, x: -30 },
  transition: { type: 'linear' },
})

export default useContainerVariants
