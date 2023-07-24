import {
  createGetInitialProps,
  ServerStyles,
  createStylesServer,
} from '@mantine/next'
import Document, {
  Head,
  Html,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import { emotionCache } from '../emotion-cache'

// optional: you can provide your cache as a first argument in createStylesServer function
const stylesServer = createStylesServer(emotionCache)

export default class _Document extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <ServerStyles
          html={initialProps.html}
          server={stylesServer}
          key="styles"
        />,
      ],
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
