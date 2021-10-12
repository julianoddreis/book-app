import styled from 'styled-components'

import { Column, ColumnProps, Row, Text, Loader } from '@components'

interface SliderProps extends ColumnProps {
  title: string
  actionLabel: string
  isLoading?: boolean
  error?: boolean
}

const Slider = (props: SliderProps) => {
  const { title, actionLabel, children, isLoading, error, ...rest } = props

  return (
    <Column {...rest}>
      <Row justifyContent='space-between' mb='15px' px='20px'>
        <Text fontSize='18px'>{title}</Text>
        <Button color='secondary'>{actionLabel}</Button>
      </Row>
      <ItemsContainer maxWidth='100%' overflow='auto'>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Text textAlign='center' color='red'>
            Ops! Algo de errado aconteceu. Tente novamente mais tarde.
          </Text>
        ) : (
          children
        )}
      </ItemsContainer>
    </Column>
  )
}

const ItemsContainer = styled(Row)`
  ::-webkit-scrollbar {
    display: none;
  }
`

const Button = styled.button`
  background: none;
  font-size: 14px;
  border: none;
  color: ${({ theme }) => theme.colors.secondary};
`

export default Slider
