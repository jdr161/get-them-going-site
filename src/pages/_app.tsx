import '@/styles/globals.css'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { MantineProvider } from '@mantine/core'
import { emotionCache } from '../emotion-cache'
import { Roboto_Flex } from 'next/font/google'
const robotoFlex = Roboto_Flex({ subsets: ['latin'] })
import Layout from '@/components/layout'

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
          fontFamily: robotoFlex.style.fontFamily,
        }}
        emotionCache={emotionCache}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </>
  )
}
