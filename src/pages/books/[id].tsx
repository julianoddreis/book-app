import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import { Column, Icon, Loader, Text } from '@components'
import { useBookById } from '@services/books'

const BookPage: NextPage = () => {
  const { query, ...router } = useRouter()

  const { book, isLoading, error } = useBookById(query.id as string)

  return (
    <Column bg='white' minHeight='100vh'>
      <Header>
        <button onClick={() => router.push('/')}>
          <Icon name='arrow' />
        </button>
        {error && (
          <Text color='red' textAlign='center' fontSize='28px' mt={100}>
            Ops! Algo de errado aconteceu. tente novamente mais tarde.
          </Text>
        )}
        {!error && (isLoading ? <Loader mt={200} /> : <BookImage src={book?.volumeInfo.imageLinks.thumbnail} />)}

        <Decorations src='/images/book-page-decorations.png' />
      </Header>

      <Column px='20px' py='50px'>
        <Text fontSize={24} mb={5}>
          <b>{book?.volumeInfo.title}</b>: {book?.volumeInfo.subtitle}
        </Text>
        <Text color='#FF6978' letterSpacing='0.670588px' mb={10}>
          {book?.volumeInfo.authors.join(', ')}
        </Text>
        <Text dangerouslySetInnerHTML={{ __html: book?.volumeInfo.description as string }} />
      </Column>
    </Column>
  )
}

const Header = styled.div`
  background: #fff6e5;
  height: 282px;
  display: flex;
  justify-content: center;
  border-bottom-right-radius: 150px;
  position: relative;
  button {
    background: none;
    border: none;
    position: absolute;
    top: 40px;
    left: 30px;
    cursor: pointer;
  }
`

const BookImage = styled.img`
  width: 151px;
  height: 234px;
  transform: translateY(80px);
  border: none;
  box-shadow: 0px 2px 4px 0px #e5e5e580;
  z-index: 2;
`

const Decorations = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  max-height: 100%;
  z-index: 1;
`

export default BookPage
