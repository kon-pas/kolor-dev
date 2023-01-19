import "@styles/globals.scss";

import type { AppProps } from "next/app";

import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { PathNameContextManager } from "@contexts";
import { local } from "@services";
import Layout from "@components/composition/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  const { events } = useRouter();

  useEffect(() => {
    events.on("routeChangeStart", local.gradients.save);

    return () => {
      events.off("routeChangeStart", local.gradients.save);
    };
  });
  
  return (
    <>
      <Head>
        <title>Kolor Dev</title>
      </Head>

      <PathNameContextManager.PathNameContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PathNameContextManager.PathNameContextProvider>
    </>
  );
}

export default MyApp;
