import { TwilightGrayColor, NihonkaiColor } from '@/utils/Colors';
import { css } from '@emotion/react';
import { Center, Container, Grid, SimpleGrid, Stack, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Head from 'next/head';
import Image from 'next/image';

const introduceStyle = (reverse: boolean) => css`
  .box {
    position: relative;
    background-color: ${TwilightGrayColor};
    height: 300px;
    div {
      height: 100%;
    }
  }
  .textBox {
    grid-column-start: ${reverse ? 1 : undefined};
    grid-row-start: ${reverse ? 1 : undefined};
    .mainText {
      font-size: 24px;
    }
    .subText {
      padding-top: 40px;
      padding-right: 60px;
      color: ${NihonkaiColor};
      font-size: 18px;
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
  return (
    <SimpleGrid
      cols={2}
      spacing={80}
      breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
      css={introduceStyle(reverse)}
    >
      <div className="box">
        <Center className="content">aa</Center>
      </div>
      <div className="textBox">
        <div className="mainText">{text}</div>
        <div className="subText">{subText}</div>
      </div>
    </SimpleGrid>
  );
};

const PRIMARY_COL_HEIGHT = 400;
const Home = () => {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;
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
          <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
            <div
              css={css`
                position: relative;
                .image {
                  object-fit: cover;
                  width: 100%;
                  position: relative !important;
                }
              `}
            >
              <Image
                className="image"
                src="/main.jpg"
                alt="main image"
                height={PRIMARY_COL_HEIGHT}
                width={10000}
              />
            </div>
            {!sm ? (
              <Grid gutter="md">
                <Grid.Col>
                  <div
                    css={css`
                      background-color: ${TwilightGrayColor};
                      height: ${SECONDARY_COL_HEIGHT + 30}px;
                    `}
                  />
                </Grid.Col>
                <Grid.Col span={8}>
                  <div
                    css={css`
                      position: relative;
                      .image {
                        object-fit: cover;
                        width: 100%;
                        position: relative !important;
                      }
                    `}
                  >
                    <Image
                      className="image"
                      src="/grayknit.jpg"
                      alt="denim image"
                      height={SECONDARY_COL_HEIGHT - 30}
                      width={10000}
                    />
                  </div>
                </Grid.Col>
                <Grid.Col span={4}>
                  <div
                    css={css`
                      position: relative;
                      .image {
                        object-fit: cover;
                        width: 100%;
                        position: relative !important;
                      }
                    `}
                  >
                    <Image
                      className="image"
                      src="/denim.jpg"
                      alt="denim image"
                      height={SECONDARY_COL_HEIGHT - 30}
                      width={10000}
                    />
                  </div>
                </Grid.Col>
              </Grid>
            ) : null}
          </SimpleGrid>
          <div
            css={css`
              position: relative;
            `}
          >
            <Stack
              spacing={300}
              css={css`
                margin-top: 150px;
                padding: 150px 50px;
              `}
            >
              <IntroduceItem
                text="私はdaichan132です。大学院でアルゴリズムの研究をしています。"
                subText={`Hello, my name is daichan132.
I am a graduate student studying algorithms.`}
              />
              <IntroduceItem
                text="現在は大学院生でアルゴリズムの研究をしています。"
                subText="Hi. My name is daichan132. I have loved making things since I was a child."
                reverse={!sm}
              />
              <IntroduceItem
                text="こんにちは。私はdaichan132です。小さい頃からものづくりが大好きです。"
                subText="Hi. My name is daichan132. I have loved making things since I was a child."
              />
            </Stack>
          </div>
        </Container>
      </main>
    </>
  );
};

export default Home;
