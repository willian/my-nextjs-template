import type { AppProps /*, AppContext */ } from 'next/app'

import 'tailwindcss/tailwind.css'

import Global from 'components/Global'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Global />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
