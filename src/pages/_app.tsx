/* eslint-disable react/no-unknown-property */
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { Layout } from '@/components/layout';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'jotai';
import Head from 'next/head';
// eslint-disable-next-line camelcase
import { Noto_Sans_JP } from 'next/font/google';

const font = Noto_Sans_JP({
  weight: ['300', '400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>DAICHAN132-PF</title>
        <meta name="description" content="daichan132's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            globalStyles: (theme) => ({
              '*, *::before, *::after': {
                boxSizing: 'border-box',
              },

              body: {
                ...theme.fn.fontStyles(),
                fontFamily: `${font.style.fontFamily}`,
                lineHeight: 1.5,
                letterSpacing: '0.05rem',
              },
            }),
          }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MantineProvider>
      </Provider>
    </>
  );
};

export default App;
