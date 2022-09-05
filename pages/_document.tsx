import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="http://fonts.cdnfonts.com/css/satoshi"
          rel="stylesheet"
        />
        <link
          href="https://rsms.me/inter/inter.css"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}