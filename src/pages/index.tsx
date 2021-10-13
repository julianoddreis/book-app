import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import { Text, Column, Input, Icon, Slider, BookCard, ReadingCard, ReviewCard, NavigationTabs } from '@components'
import { useBooks } from '@services/books'
import { mockedReadingBooks, mockedReviews } from '@mocks/books'

const Home: NextPage = () => {
  const router = useRouter()

  const { books, isLoading, error } = useBooks()

  return (
    <Column bg='background' minHeight='100vh' pt='40px' pb='80px'>
      <Column px='20px' mb={40}>
        <Input onFocus={() => router.push('/search')} placeholder='Search book' icon={<Icon name='search' />} mb={30} />
        <Text fontSize='24px' fontWeight={400}>
          Hi,{' '}
          <Text as='span' color='#FF6978' fontWeight={600} mr={10}>
            Mehmed Al Faith
          </Text>
          <img src='/images/hand-greeting.png' style={{ width: 24 }} />
        </Text>
      </Column>
      <Slider title='Discover new book' actionLabel='More' isLoading={isLoading} error={!!error} mb={50}>
        {books?.map((book, index) => (
          <BookCard
            key={book.id}
            ml={index === 0 ? 20 : 0}
            mr={index === books.length - 1 ? 20 : 10}
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors}
            image={book.volumeInfo.imageLinks?.thumbnail}
            onClick={() => router.push(`/books/${book.id}`)}
          />
        ))}
      </Slider>

      <Slider title='Currently Reading' actionLabel='All' mb={50}>
        {mockedReadingBooks.map((book, index) => (
          <ReadingCard
            key={book.id}
            ml={index === 0 ? 20 : 0}
            mr={index === mockedReadingBooks.length - 1 ? 20 : 10}
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors}
            image={book.volumeInfo.imageLinks?.thumbnail}
            onClick={() => router.push(`/books/${book.id}`)}
          />
        ))}
      </Slider>

      <Slider title='Reviews of The Days' actionLabel='All video'>
        {mockedReviews.map((book, index) => (
          <ReviewCard
            key={book.id}
            ml={index === 0 ? 20 : 0}
            mr={index === mockedReadingBooks.length - 1 ? 20 : 10}
            image={book.volumeInfo.imageLinks?.reviewThumbnail ?? book.volumeInfo.imageLinks?.thumbnail}
            onClick={() => router.push(`/books/${book.id}`)}
          />
        ))}
      </Slider>

      <NavigationTabs currentPath='/home' />
    </Column>
  )
}

export default Home
