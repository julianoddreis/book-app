import React from 'react'

import { SvgProps } from './Icon'

const ArrowIcon = ({ size }: SvgProps) => (
  <svg width={size} height={size} viewBox='0 0 16 16' fill='none'>
    <path d='M15 8H1' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M8 15L1 8L8 1' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

ArrowIcon.defaultProps = {
  size: '16'
}

export default ArrowIcon
