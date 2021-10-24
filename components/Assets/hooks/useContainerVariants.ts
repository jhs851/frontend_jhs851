import { Variants } from 'framer-motion/types/types'

const useContainerVariants = (): Variants => ({
  open: { y: 0, transition: { type: 'linear' } },
  closed: { y: '-100%', transition: { type: 'linear' } },
})

export default useContainerVariants
