import type { NextPage } from 'next'

import { Row, Column, Input, Icon, Text, BookCard } from '@components'
import { useBooks } from '@services/books'
import styled from 'styled-components'

const Home: NextPage = () => {
  const { books, isLoading, error } = useBooks()

  return (
    <Column bg='background' minHeight='100vh'>
      <Spacing>
        <Input icon={<Icon name='search' />} placeholder='Search book' />
        <Row justifyContent='space-between' mb='15px'>
          <Text fontSize='18px'>Discover new book</Text>
          <Text color='secondary'>More</Text>
        </Row>
      </Spacing>

      <Row maxWidth='100%' overflow='auto'>
        {books?.map((book, index) => (
          <BookCard
            mr={10}
            ml={index === 0 ? 20 : 0}
            key={book.id}
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors}
            image={book.volumeInfo.imageLinks?.thumbnail}
          />
        ))}
      </Row>
    </Column>
  )
}

const Spacing = styled.div`
  padding: 40px 20px;
`

export default Home
