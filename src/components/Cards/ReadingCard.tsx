import React from 'react'
import styled from 'styled-components'

import { Row, RowProps, Column, Text, Icon } from '@components'

interface ReadingCardBooks extends RowProps {
  title: string
  authors: string[]
  image: string
}

const ReadingCard: React.FC<ReadingCardBooks> = (props) => {
  const { title, authors, image, ...rest } = props

  return (
    <CardContainer {...rest}>
      <BookImage src={image ?? '/images/book-placeholder.png'} />
      <InnerContent>
        <Column>
          <Text fontSize='20px' color='#2A2B26' mb={5}>
            {title}
          </Text>
          <Text fontSize='10px' color='#74776D' mb={10}>
            {authors?.join(', ')}
          </Text>
          <Row alignItems='center'>
            <Icon name='bookmark' />
            <Text fontSize='10px' color='#2A2B26' ml={5}>
              Chapter 2 From 9
            </Text>
          </Row>
        </Column>
        <Circle />
        <Rectangle />
        <DecorationSvg />
      </InnerContent>
    </CardContainer>
  )
}

const CardContainer = styled(Row)`
  height: 136px;
  min-width: 331px;
  max-width: 331px;
  position: relative;
  align-items: center;
`

const InnerContent = styled(Row)`
  max-height: 100px;
  width: 100%;
  border-radius: 8px;
  padding: 10px 0;
  background-color: #eef5db;
  justify-content: center;
  position: relative;
  overflow: hidden;

  ${Text} {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
`

const BookImage = styled.img`
  width: 91px;
  height: 136px;
  position: absolute;
  left: 20px;
  z-index: 2;
  object-fit: cover;
`

const Circle = styled.div`
  width: 18px;
  height: 18px;
  border: 2px solid #4550a7;
  position: absolute;
  top: -8px;
  left: 223px;
  border-radius: 50%;
`

const Rectangle = styled.div`
  width: 46px;
  height: 4px;
  top: 60px;
  right: -23px;
  position: absolute;
  transform: rotate(14deg);
  background-color: #ec6374;
`

const DecorationSvg = () => (
  <Row position='absolute' top='-30px' right='-30px'>
    <svg width='69' height='69' viewBox='0 0 69 69' fill='none' xmlnsXlink='http://www.w3.org/1999/xlink'>
      <circle cx='34.5' cy='34.5' r='34.5' fill='url(#pattern0)' />
      <defs>
        <pattern id='pattern0' patternContentUnits='objectBoundingBox' width='0.58851' height='0.103855'>
          <use xlinkHref='#image0' transform='scale(0.0173091)' />
        </pattern>
        <image
          id='image0'
          width='34'
          height='6'
          xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAGCAYAAACmekziAAAABGdBTUEAALGOfPtRkwAAAY5JREFUKBW9Uj1IQlEUPuf6pCQofI9+CLMhaynInwyKfrYgGgxRCyEICpyaImh0aomaJKjFagjhUVRDRJNNDv61tLokgRROiZV6T/cFwitsKjpwOYfvnPN9H/deA/xjdM4stTS19W81dw+VN0OBfDwep7o81gt9DofDTByux35bK3afh4BHAPGMgKYByIKElwjswmTCmy9G2p1+G6fqOgHaEPGItbLzp7j68pMJ2+xaU7Hw6AGiVTFTIYQ7JMhKzJgtpGI5wUFml98KvBZBogGGUug5q95qfBrOeHVeaGn77k8jst03LtxuANIkAu4hwwyv8RVEmALAK4Z40ovKdTp9UNFIlBH/KK/VloFgQcxkBLSPxCqCw05IDrHjEMJmIZISvWHGcLerj23fq+q7tv89rBNBM8oOb4IIOhjAjslkiOYTark+aBnzy6VXHgDgQSAcFKJR0ZsTDysJc4dkMB4Xk7GH+rw+a+Sl0ptLkiBXSJ7m9L2GteL0ebU/0bCpA2X3Yo/s9Ia129PBf1Z+AO3ViTcdfWOLAAAAAElFTkSuQmCC'
        />
      </defs>
    </svg>
  </Row>
)

export default ReadingCard
