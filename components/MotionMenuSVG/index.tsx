import React from 'react'
import { motion } from 'framer-motion'

const MotionMenuSVG: React.FC = () => (
  <svg width={24} height={24} viewBox="0 0 24 24">
    <motion.line
      layoutId="header-left-line-1"
      x1="4"
      y1="6"
      x2="20"
      y2="6"
      stroke="#fff"
      strokeWidth={2}
      strokeMiterlimit={10}
    />
    <motion.line
      x1="4"
      y1="12"
      x2="20"
      y2="12"
      stroke="#fff"
      strokeWidth={2}
      strokeMiterlimit={10}
    />
    <motion.line
      layoutId="header-left-line-2"
      x1="4"
      y1="18"
      x2="20"
      y2="18"
      stroke="#fff"
      strokeWidth={2}
      strokeMiterlimit={10}
    />
  </svg>
)

export default MotionMenuSVG
