import useSWR from 'swr'

import { IBook } from '@@types/books'

export const useBooks = () => {
  const { data, error } = useSWR<{ items: IBook[] }>('/v1/volumes?q=NirEyal')

  return {
    books: data?.items,
    isLoading: !error && !data,
    error
  }
}

export const useBookById = (bookId: string) => {
  const { data, error } = useSWR<IBook>(`/v1/volumes/${bookId}`)

  return {
    book: data,
    isLoading: !error && !data,
    error
  }
}
