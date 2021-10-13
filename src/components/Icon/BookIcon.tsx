import React from 'react'

import { SvgProps } from './Icon'

const BookIcon = ({ color }: SvgProps) => (
  <svg width='17' height='19' viewBox='0 0 17 19' fill='none'>
    <path
      d='M1 15.75C1 14.5074 2.00736 13.5 3.25 13.5H15.4'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M3.25 0H15.4V18H3.25C2.00736 18 1 16.9926 1 15.75V2.25C1 1.00736 2.00736 0 3.25 0Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

BookIcon.defaultProps = {
  color: '#BFBEBF'
}

export default BookIcon
