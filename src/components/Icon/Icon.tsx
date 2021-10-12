import React, { useMemo } from 'react'

export interface SvgProps {
  color?: string
  size?: string
}

interface IconProps extends SvgProps {
  name: typeof iconNames[number]
}

const iconNames = ['search', 'statistics']

import Search from './SearchIcon'
import Statistics from './StatisticsIcon'

const IconComponent = ({ name, ...props }: IconProps) => {
  const Icon = useMemo(() => {
    switch (name) {
      default:
      case 'search':
        return Search
      case 'statistics':
        return Statistics
    }
  }, [name])

  return <Icon {...props} />
}

export default IconComponent
