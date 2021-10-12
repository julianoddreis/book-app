import type { NextPage } from 'next'

import { Column, Input, Icon, Slider, BookCard } from '@components'
import { useBooks } from '@services/books'

const Home: NextPage = () => {
  const { books, isLoading, error } = useBooks()

  return (
    <Column bg='background' minHeight='100vh' p='40px 20px'>
      <Input icon={<Icon name='search' />} placeholder='Search book' mb={40} />

      <Slider title='Discover new book' cta={{ label: 'More' }} isLoading={isLoading} error={error}>
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
      </Slider>
    </Column>
  )
}

export default Home
