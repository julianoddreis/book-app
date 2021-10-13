import React from 'react'

import { SvgProps } from './Icon'

const ShareIcon = ({ color }: SvgProps) => (
  <svg width='14' height='16' viewBox='0 0 14 16' fill='none'>
    <path
      d='M0 8V14.4C0 15.2837 0.716344 16 1.6 16H11.2C12.0837 16 12.8 15.2837 12.8 14.4V8'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M9.60001 3.2L6.40001 0L3.20001 3.2'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M6.40002 0V10.4' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

ShareIcon.defaultProps = {
  color: '#CFCBD2'
}

export default ShareIcon
