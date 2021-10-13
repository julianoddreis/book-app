import React from 'react'

import { SvgProps } from './Icon'

const ReadIcon = ({ color }: SvgProps) => (
  <svg width='17' height='16' viewBox='0 0 17 16' fill='none'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0 0H4.8C6.56731 0 8 1.59188 8 3.55556V16C8 14.5272 6.92548 13.3333 5.6 13.3333H0V0Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M16 0H11.2C9.43269 0 8 1.59188 8 3.55556V16C8 14.5272 9.07452 13.3333 10.4 13.3333H16V0Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

ReadIcon.defaultProps = {
  color: '#CFCBD2'
}

export default ReadIcon
