import { IntroduceItem } from '@/components/pages/main/IntroduceItem';
import { css } from '@emotion/react';
import { Container, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Head from 'next/head';
import Image from 'next/image';

const Home = () => {
  const theme = useMantineTheme();
  const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  return (
    <>
      <Head>
        <title>DAICHAN132-PF</title>
        <meta name="description" content="daichan132's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container size="md">
          <div
            css={css`
              position: relative;
              .image {
                object-fit: cover;
                position: relative !important;
                aspect-ratio: 16/9;
              }
            `}
          >
            <Image className="image" src="/engineer.jpg" alt="engineer image" fill />
          </div>

          <div
            css={css`
              padding: 5rem 0;
              display: flex;
              flex-direction: column;
              gap: 5rem;
            `}
          >
            <IntroduceItem
              text="私はdaichan132です。大学院でアルゴリズムの研究をしています。"
              subText="Hello, my name is daichan132. I am a graduate student studying algorithms."
            />
            <IntroduceItem
              text="人を笑顔にするようなプロダクトを作ることが大好きです！私が作ってきた作品を見てくれると嬉しいです！"
              subText="I love creating products that make people smile! I hope you enjoy seeing my works!"
              reverse={!sm}
            />
          </div>
        </Container>
      </main>
    </>
  );
};

export default Home;
