/* eslint-disable react/no-unknown-property */
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { Layout } from '@/components/layout';
// eslint-disable-next-line camelcase
import { Noto_Sans_JP } from '@next/font/google';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'jotai';

const font = Noto_Sans_JP({
  weight: ['300', '400', '500'],
  style: ['normal'],
  subsets: ['latin'],
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'light',
          fontFamily: `${font.style.fontFamily}`,
          lineHeight: 1.5,
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </Provider>
  );
};

export default App;
