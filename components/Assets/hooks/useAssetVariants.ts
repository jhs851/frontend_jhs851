import { Variants } from 'framer-motion/types/types'

const useAssetVariants = (): Variants => ({
  open: { scale: 1, transition: { delay: 0.2 } },
  closed: { scale: 0, transition: { duration: 0.12 } },
})

export default useAssetVariants
