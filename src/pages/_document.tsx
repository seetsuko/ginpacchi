import { CacheProvider } from '@emotion/react'
import createEmotionServer from '@emotion/server/create-instance'
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import createEmotionCache from '../createEmotionCache'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    const cache = createEmotionCache({ key: 'my-app-key' })
    const { extractCriticalToChunks } = createEmotionServer(cache)

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(
              <CacheProvider value={cache}>
                <App {...props} />
              </CacheProvider>,
            ),
        })

      const initialProps = await Document.getInitialProps(ctx)
      const emotionStyles = extractCriticalToChunks(initialProps.html)
      const emotionStyleTags = emotionStyles.styles.map((style) => (
        <style
          key={style.key}
          data-emotion={`${style.key} ${style.ids.join(' ')}`}
          dangerouslySetInnerHTML={{ __html: style.css }}
        />
      ))

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
            {emotionStyleTags}
          </>
        ),
      }
    } finally {
      sheet.seal()
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

export default MyDocument
