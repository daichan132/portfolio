import { Parallax } from '@/components/elements/Parallax';
import { TwilightGrayColor } from '@/utils/Colors';
import { css } from '@emotion/react';
import { Center, Container, SimpleGrid, Stack, Title, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Head from 'next/head';
import Image from 'next/image';

const introduceStyle = (reverse: boolean, enabled: boolean, sm: boolean) => css`
  position: relative;
  .box {
    position: relative;
    height: ${sm ? 200 : 300}px;
    div {
      position: absolute;
      height: 100%;
      width: 100%;
    }
    .bg {
      background-color: ${TwilightGrayColor};
    }
    .boxContent {
      transform: ${enabled ? 'translate(0, -30px)' : 'none'};
      h1 {
        background-color: gray;
        border-radius: 10px;
        padding: 30px;
      }
    }
  }
  .textBox {
    transform: ${enabled ? 'translate(0, 50px)' : 'none'};
    grid-column-start: ${reverse ? 1 : undefined};
    grid-row-start: ${reverse ? 1 : undefined};
    .subText {
      padding-top: ${sm ? '0px' : '40px'};
      color: gray;
      font-size: 16px;
      white-space: pre-line;
    }
  }
`;
const IntroduceItem = ({
  text,
  subText,
  reverse = false,
}: {
  text: string;
  subText: string;
  reverse?: boolean;
}) => {
  const theme = useMantineTheme();
  const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  return (
    <SimpleGrid
      cols={2}
      spacing={sm ? 10 : 50}
      breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
      css={introduceStyle(reverse, !sm, sm)}
    >
      <div className="box">
        <Parallax offset={20} enabled={!sm}>
          <div className="bg" />
        </Parallax>

        <Parallax offset={-30} enabled={!sm}>
          <Center className="boxContent">aa</Center>
        </Parallax>
      </div>
      <div className="textBox">
        <Parallax offset={50} enabled={!sm}>
          <Title order={3}>{text}</Title>
          <div className="subText">{subText}</div>
        </Parallax>
      </div>
    </SimpleGrid>
  );
};

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
        <Container size="lg">
          <div
            css={css`
              position: relative;
              .image {
                object-fit: contain;
                width: 100%;
                position: relative !important;
              }
            `}
          >
            <Image className="image" src="/grayknit.jpg" alt="grayknit image" fill />
          </div>

          <Stack
            spacing={sm ? 50 : 150}
            css={css`
              padding: ${sm ? 50 : 100}px ${sm ? 0 : 20}px;
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
          </Stack>
        </Container>
      </main>
    </>
  );
};

export default Home;
