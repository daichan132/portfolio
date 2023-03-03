/* eslint-disable react/no-unknown-property */
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { Layout } from '@/components/layout';
// eslint-disable-next-line camelcase
import { Kiwi_Maru } from '@next/font/google';
import { MantineProvider } from '@mantine/core';

const font = Kiwi_Maru({
  weight: ['300', '400', '500'],
  style: ['normal'],
  subsets: ['latin'],
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: 'light',
        fontFamily: font.style.fontFamily,
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  );
};

export default App;
