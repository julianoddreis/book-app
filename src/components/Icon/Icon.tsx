import React, { useMemo } from 'react'

export interface SvgProps {
  color?: string
  size?: string
}

interface IconProps extends SvgProps {
  name: 'search' | 'statistics' | 'arrow' | 'bookmark'
}

import Search from './SearchIcon'
import Statistics from './StatisticsIcon'
import Arrow from './ArrowIcon'
import BookMark from './BookMarkIcon'

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
      case 'bookmark':
        return BookMark
    }
  }, [name])

  return <Icon {...props} />
}

export default IconComponent
