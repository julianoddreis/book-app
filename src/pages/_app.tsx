import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'

import Theme from '@theme'
import { api } from '@providers/google-books'

import '../../public/fonts/fonts.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher: api }}>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </SWRConfig>
  )
}
export default MyApp
