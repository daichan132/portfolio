/* eslint-disable react/no-unknown-property */
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { Layout } from '@/components/layout';
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { Provider } from 'jotai';
import Head from 'next/head';
// eslint-disable-next-line camelcase
import { Zen_Kaku_Gothic_New } from 'next/font/google';
import { useState } from 'react';

const font = Zen_Kaku_Gothic_New({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
});
const App = ({ Component, pageProps }: AppProps) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  return (
    <>
      <Head>
        <title>DAICHAN132-PF</title>
        <meta name="description" content="daichan132's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider>
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
              globalStyles: (theme) => ({
                '*, *::before, *::after': {
                  boxSizing: 'border-box',
                },

                html: { scrollBehavior: 'smooth' },
                body: {
                  ...theme.fn.fontStyles(),
                  fontFamily: `${font.style.fontFamily}`,
                  color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : '#333333',
                  lineHeight: 1.5,
                  letterSpacing: '0.05rem',
                },
                '.globalFont': {
                  '*': { fontFamily: `${font.style.fontFamily}` },
                },
              }),
            }}
          >
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </MantineProvider>
        </ColorSchemeProvider>
      </Provider>
    </>
  );
};

export default App;
