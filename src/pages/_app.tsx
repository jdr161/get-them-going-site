import '@/styles/globals.css'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { MantineProvider, Tuple, DefaultMantineColor } from '@mantine/core'
import { emotionCache } from '../emotion-cache'
import { Roboto_Flex } from 'next/font/google'
const robotoFlex = Roboto_Flex({ subsets: ['latin'] })
import Layout from '@components/layout'

type ExtendedCustomColors =
  | 'lightBlue'
  | 'darkBlue'
  | 'backgroundLight'
  | 'offWhite'
  | 'lightGray'
  | DefaultMantineColor

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>
  }
}

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>Get Them Going</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'light',
          fontFamily: robotoFlex.style.fontFamily,
          colors: {
            'lightBlue': ['#4C768D'],
            'darkBlue': ['#1C4C64'],
            'backgroundLight': ['#EDF1F4'],
            'offWhite': ['#EDF1F4'],
            'lightGray': ['#D9D9D9']
          },
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
