import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'

import { Column, Input, Icon, SearchCard, Loader } from '@components'
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

  useEffect(() => {
    if (shouldPaginate && !isFetchingNextPage && books?.length) {
      nextPage()
    }
  }, [shouldPaginate, isFetchingNextPage, books])

  return (
    <Column bg='background' minHeight='100vh' p='40px 20px'>
      <Input
        value={search}
        onChange={({ target }) => setSearch(target.value)}
        onBlur={() => search === '' && router.push('/')}
        placeholder='Search book'
        icon={<Icon name='search' />}
        autoFocus
        mb={40}
      />
      {isLoading && <Loader />}
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

export default Search
