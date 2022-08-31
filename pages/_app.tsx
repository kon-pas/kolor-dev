import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '@/components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>Kolor</title>
    </Head>
    
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp