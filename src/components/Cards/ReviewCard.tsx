import React from 'react'
import styled from 'styled-components'

import { Row, RowProps } from '@components'

interface ReviewCardProps extends RowProps {
  image: string
}

const ReviewCard: React.FC<ReviewCardProps> = (props) => {
  const { image, ...rest } = props

  return (
    <CardContainer {...rest}>
      <BookImage src={image ?? '/images/book-placeholder.png'} />
    </CardContainer>
  )
}

const CardContainer = styled(Row)`
  width: 335px;
  height: 188px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`

const BookImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export default ReviewCard
