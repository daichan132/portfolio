/* eslint-disable react/no-unknown-property */
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { Layout } from '@/components/layout';
// eslint-disable-next-line camelcase
import { Shippori_Mincho } from '@next/font/google';

const font = Shippori_Mincho({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <style jsx global>{`
        html {
          font-family: ${font.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
