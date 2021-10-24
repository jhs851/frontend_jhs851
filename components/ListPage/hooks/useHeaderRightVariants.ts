import { MotionProps } from 'framer-motion/types/motion/types'

const useHeaderLeftVariants = (): MotionProps => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { type: 'easeInOut' },
})

export default useHeaderLeftVariants
