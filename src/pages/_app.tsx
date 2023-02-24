import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { Header } from '@/components/layout/Header';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default App;
