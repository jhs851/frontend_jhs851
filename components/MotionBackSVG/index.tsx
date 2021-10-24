import React from 'react'
import { motion } from 'framer-motion'

const MotionBackSVG: React.FC = () => (
  <svg width={24} height={24} viewBox="0 0 24 24">
    <motion.line
      layoutId="header-left-line-2"
      x1="16.2"
      y1="19.8"
      x2="7.7"
      y2="11.3"
      stroke="#fff"
      strokeWidth={2}
      strokeMiterlimit={10}
    />
    <motion.line
      layoutId="header-left-line-1"
      x1="16.3"
      y1="4.2"
      x2="7.7"
      y2="12.6"
      stroke="#fff"
      strokeWidth={2}
      strokeMiterlimit={10}
    />
  </svg>
)

export default MotionBackSVG
