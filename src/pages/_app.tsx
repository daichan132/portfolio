/* eslint-disable react/no-unknown-property */
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { Layout } from '@/components/layout';
// eslint-disable-next-line camelcase
import { Noto_Sans_JP } from '@next/font/google';

const notoSansJP = Noto_Sans_JP({
  weight: ['100', '400', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <style jsx global>{`
        html {
          font-family: ${notoSansJP.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
