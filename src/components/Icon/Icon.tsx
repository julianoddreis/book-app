import React, { useMemo } from 'react'

export interface SvgProps {
  color?: string
  size?: string
}

interface IconProps extends SvgProps {
  name: 'search' | 'statistics' | 'arrow'
}

import Search from './SearchIcon'
import Statistics from './StatisticsIcon'
import Arrow from './ArrowIcon'

const IconComponent = ({ name, ...props }: IconProps) => {
  const Icon = useMemo(() => {
    switch (name) {
      default:
      case 'search':
        return Search
      case 'statistics':
        return Statistics
      case 'arrow':
        return Arrow
    }
  }, [name])

  return <Icon {...props} />
}

export default IconComponent
