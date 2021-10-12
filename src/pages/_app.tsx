import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'

import Theme from '@theme'

import '../../public/fonts/fonts.css'

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } }
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </QueryClientProvider>
  )
}
export default MyApp
