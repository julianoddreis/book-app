import React from 'react'
import styled from 'styled-components'

import { Text, Column, ColumnProps } from '@components'

interface SearchCardProps extends ColumnProps {
  title: string
  authors: string[]
  image: string
}

const SearchCard: React.FC<SearchCardProps> = (props) => {
  const { title, authors, image, ...rest } = props

  return (
    <CardContainer {...rest}>
      <img src={image ?? '/images/book-placeholder.png'} />
      <Text color='#313131CC' fontSize='12px' fontWeight={700} mb={5}>
        {title}
      </Text>
      <Text color='#313131CC' fontSize='10px' fontWeight={900}>
        {authors?.join(', ')}
      </Text>
    </CardContainer>
  )
}

const CardContainer = styled(Column)`
  width: 100px;
  img {
    height: 153px;
    margin-bottom: 5px;
    object-fit: cover;
    border-radius: 5px;
    box-shadow: 0px 2px 4px 0px #e5e5e580;
  }
  ${Text} {
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 100%;
    overflow: hidden;
  }
`

export default SearchCard
