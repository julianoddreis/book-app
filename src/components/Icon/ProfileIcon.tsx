import React from 'react'

import { SvgProps } from './Icon'

const ProfileIcon = ({ color }: SvgProps) => (
  <svg width='18' height='19' viewBox='0 0 18 19' fill='none'>
    <path
      d='M17 18V16C17 13.7909 15.2091 12 13 12H5C2.79086 12 1 13.7909 1 16V18'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <circle cx='9' cy='4' r='4' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

ProfileIcon.defaultProps = {
  color: '#BFBEBF'
}

export default ProfileIcon
