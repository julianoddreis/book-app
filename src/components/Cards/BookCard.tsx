import React from 'react'
import styled from 'styled-components'

import { Row, RowProps, Column, Text, Icon } from '@components'

interface BookCardProps extends RowProps {
  title: string
  authors: string[]
  image: string
}

const BookCard: React.FC<BookCardProps> = (props) => {
  const { title, authors, image, ...rest } = props

  return (
    <CardContainer {...rest}>
      <Column>
        <Text fontSize='27px' color='white' mb={5}>
          {title}
        </Text>
        <Text fontSize='14px' color='#E7E7E1' mb={30}>
          {authors.join(', ')}
        </Text>
        <Row alignItems='center'>
          <Icon name='statistics' />
          <Text fontSize='10px' color='#E7E7E1' ml={5}>
            Read now
          </Text>
        </Row>
      </Column>
      <BookImage src={image ?? '/images/book-placeholder.png'} />

      <Circle />
      <Rectangle />
      <Triangle />
    </CardContainer>
  )
}

const CardContainer = styled(Row)`
  height: 139px;
  padding: 13px 20px;
  min-width: 272px;
  border-radius: 8px;
  position: relative;
  background-color: #00173d;
  justify-content: space-between;
  ${Text} {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 150px;
  }
`

const BookImage = styled.img`
  width: 72px;
  height: 111px;
`

const Circle = styled.div`
  width: 18px;
  height: 18px;
  border: 2px solid #4550a7;
  position: absolute;
  top: 5px;
  left: 130px;
  border-radius: 50%;
`

const Rectangle = styled.div`
  width: 46px;
  height: 4px;
  top: 95px;
  left: 145px;
  position: absolute;
  transform: rotate(14deg);
  background-color: #ec6374;
`

const Triangle = styled.div`
  width: 0;
  height: 0;
  top: 3px;
  left: 145px;
  position: absolute;
  transform: rotate(-24deg);
  border-left: 24px solid transparent;
  border-right: 24px solid transparent;
  border-bottom: 24px solid #fcbc48;
`

export default BookCard
