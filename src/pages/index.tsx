import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';

const Home = () => {
  return (
    <>
      <Head>
        <title>DAICHAN132-PF</title>
        <meta name="description" content="daichan132's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div
          css={css`
            position: relative;
            height: 100vh;
            width: 100vw;
          `}
        >
          <Image
            src="/main.jpg"
            alt="main image"
            fill
            css={css`
              object-fit: cover;
              padding: 150px 36px 28px 24px;
            `}
          />
        </div>
      </main>
    </>
  );
};
export default Home;
