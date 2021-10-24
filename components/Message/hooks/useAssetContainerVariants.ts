import { Variants } from 'framer-motion/types/types'

const useAssetContainerVariants = (): Variants => ({
  loading: { scale: 0.8, transition: { type: 'linear' } },
  loaded: { scale: 1, transition: { type: 'linear' } },
})

export default useAssetContainerVariants
