import React, { useMemo } from 'react'

export interface SvgProps {
  color?: string
  size?: string
}

interface IconProps extends SvgProps {
  name: typeof iconNames[number]
}

const iconNames = ['search']

import Search from './SearchIcon'

const IconComponent = ({ name, ...props }: IconProps) => {
  const Icon = useMemo(() => {
    switch (name) {
      default:
      case 'search':
        return Search
    }
  }, [name])

  return <Icon {...props} />
}

export default IconComponent
