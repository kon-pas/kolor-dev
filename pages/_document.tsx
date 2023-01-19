import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="https://fonts.cdnfonts.com/css/satoshi"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="https://rsms.me/inter/inter.css"
          as="font"
          type="font/woff2"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.cdnfonts.com/css/tw-cen-mt-std"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Martian+Mono:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        <link
          rel="icon"
          type="image/icon"
          href="/assets/svgs/kolor_dev_logo_0_textless.svg"
        />

        <meta
          name="description"
          content="Kolor is a kit of color-related tools and sets for Artists, Designes & Developers."
        ></meta>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <body
        className={
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
