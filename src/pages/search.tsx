import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import styled, { keyframes } from 'styled-components'
import { useInView } from 'react-intersection-observer'

import { Column, Input, Icon, SearchCard, Text, Loader } from '@components'
import { useSearch } from '@services/books'
import { useDebounce } from '@hooks/useDebounce'

const Search: NextPage = () => {
  const router = useRouter()

  const [search, setSearch] = useState('')

  const deboucedSearh = useDebounce<string>(search, 500)

  const { books, isLoading, isFetchingNextPage, error, nextPage } = useSearch(deboucedSearh)

  const [paginationRef, shouldPaginate] = useInView({
    threshold: 0
  })
  console.log(books)
  useEffect(() => {
    if (shouldPaginate && !isFetchingNextPage && books?.length) {
      nextPage()
    }
  }, [shouldPaginate, isFetchingNextPage, books])

  return (
    <Column bg='background' minHeight='100vh' p='40px 20px'>
      <BackButton onClick={() => router.push('/')}>
        <Icon name='arrow' />
      </BackButton>
      <InputContainer>
        <Input
          value={search}
          onChange={({ target }) => setSearch(target.value)}
          placeholder='Search book'
          icon={<Icon name='search' />}
          autoFocus
          mb={40}
        />
      </InputContainer>

      {isLoading && <Loader />}

      {!isLoading && !!error && (
        <Text textAlign='center' color='red'>
          Ops! Algo de errado aconteceu. Tente novamente mais tarde.
        </Text>
      )}

      {!isLoading && books?.length === 0 && (
        <Text textAlign='center'>Nenhum resultado encontrado. Tente novamente.</Text>
      )}

      <ItemsContainer>
        {books?.map((book) => (
          <SearchCard
            key={book.id}
            title={book.volumeInfo?.title}
            authors={book.volumeInfo?.authors}
            image={book.volumeInfo?.imageLinks?.thumbnail}
            onClick={() => router.push(`/books/${book.id}`)}
          />
        ))}
      </ItemsContainer>

      {isFetchingNextPage && <Loader />}

      <div ref={paginationRef} />
    </Column>
  )
}

const ItemsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 20px 10px;
`

const backButtonAnimation = keyframes`
 0% {
   opacity: 0;
   transform: translateY(50px);
 }
 100% {
   opacity: 1;
   transform: translateY(0);
 }
`

const BackButton = styled.button`
  border: none;
  background: none;
  width: 40px;
  height: 40px;
  animation: ${backButtonAnimation} 0.3s ease-in-out;
`

const inputContainerAnimation = keyframes`
 0% {
   transform: translateY(-50px);
 }
 100% {
   transform: translateY(0);
 }
`

const InputContainer = styled.div`
  animation: ${inputContainerAnimation} 0.3s ease-in-out;
`

export default Search
