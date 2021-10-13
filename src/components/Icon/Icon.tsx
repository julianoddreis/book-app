import React, { useMemo } from 'react'

export interface SvgProps {
  color?: string
  size?: string
}

interface IconProps extends SvgProps {
  name:
    | string
    | 'search'
    | 'statistics'
    | 'arrow'
    | 'bookmark'
    | 'home'
    | 'book'
    | 'profile'
    | 'read'
    | 'listen'
    | 'share'
}

import Search from './SearchIcon'
import Statistics from './StatisticsIcon'
import Arrow from './ArrowIcon'
import BookMark from './BookMarkIcon'
import Home from './HomeIcon'
import Book from './BookIcon'
import Profile from './ProfileIcon'
import Read from './ReadIcon'
import Listen from './ListenIcon'
import Share from './ShareIcon'

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
      case 'home':
        return Home
      case 'book':
        return Book
      case 'profile':
        return Profile
      case 'read':
        return Read
      case 'listen':
        return Listen
      case 'share':
        return Share
    }
  }, [name])

  return <Icon {...props} />
}

export default IconComponent
