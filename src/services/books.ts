import { useQuery, useInfiniteQuery } from 'react-query'

import { IBook } from '@@types/books'
import { api } from '@providers/google-books'

interface BooksResponse {
  items: IBook[]
}

export const useBooks = () => {
  const { data, isLoading, error } = useQuery('books', (): Promise<BooksResponse> => api.get('/v1/volumes?q=NirEyal'))

  return {
    error,
    isLoading,
    books: data?.items
  }
}

export const useBookById = (bookId: string) => {
  const { data, isLoading, error } = useQuery(['books', bookId], (): Promise<IBook> => api.get(`/v1/volumes/${bookId}`))

  return {
    error,
    isLoading,
    book: data
  }
}

export const useSearch = (query: string) => {
  const { data, isLoading, isFetchingNextPage, error, fetchNextPage } = useInfiniteQuery(
    ['search', query],
    ({ pageParam = 0 }): Promise<BooksResponse> =>
      api.get('/v1/volumes', { params: { q: query, startIndex: pageParam } }),
    {
      enabled: !!query
    }
  )

  const books = data?.pages.flatMap(({ items }) => items ?? [])

  const nextPage = () => fetchNextPage({ pageParam: books?.length })

  return {
    error,
    isLoading,
    books,
    nextPage,
    isFetchingNextPage
  }
}
