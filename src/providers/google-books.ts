import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://www.googleapis.com/books/'
})

api.interceptors.request.use((config) => ({
  ...config,
  params: {
    ...config.params,
    key: process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY
  }
}))

api.interceptors.response.use((response) => response?.data)
