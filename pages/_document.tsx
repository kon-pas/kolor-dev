import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet" />
        <link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/icon" href="/assets/svgs/kolor_logo_cube_2_1.svg"></link>
        <meta
          name="description"
          content="Kolor is a kit of color-related tools and sets for Artists, Designes & Developers."
        ></meta>
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
