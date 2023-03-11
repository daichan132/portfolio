import { IntroduceItem } from '@/components/pages/main/IntroduceItem';
import { Container, createStyles, Stack, useMantineTheme, rem, Button } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Head from 'next/head';
import CoffeeIcon from 'public/coffee.svg';
import DeskTopIcon from 'public/desktop.svg';
import Image from 'next/image';

const useStyles = createStyles((theme) => ({
  container: {
    position: 'relative',
    height: rem(700),
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: `calc(${theme.spacing.xl} * 6)`,
    clipPath: 'inset(0)',
    [theme.fn.smallerThan('sm')]: {
      height: rem(500),
      paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    },
  },
  mainTextContainer: {
    width: '100%',
  },
  bgImage: {
    objectFit: 'cover',
    zIndex: -1,
  },
}));

const Home = () => {
  const theme = useMantineTheme();
  const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>DAICHAN132-PF</title>
        <meta name="description" content="daichan132's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className={classes.container}>
          <Container size="lg" className={classes.mainTextContainer}>
            <Button variant="filled" size="xl" color="#fff">
              Settings
            </Button>
          </Container>
          <Image fill src="/calgary.jpg" alt="calgary" className={classes.bgImage} />
        </div>

        <Container size="lg" px="xs">
          <Stack py={sm ? '3rem' : '10rem'} spacing={sm ? '2rem' : '7rem'}>
            <IntroduceItem
              text="私はdaichan132です。大学院でアルゴリズムの研究をしています。"
              subText="Hello, my name is daichan132. I am a graduate student studying algorithms."
              Icon={CoffeeIcon}
            />
            <IntroduceItem
              text="人を笑顔にするようなプロダクトを作ることが大好きです！私が作ってきた作品を見てくれると嬉しいです！"
              subText="I love creating products that make people smile! I hope you enjoy seeing my works!"
              reverse={!sm}
              Icon={DeskTopIcon}
            />
          </Stack>
        </Container>
      </div>
    </>
  );
};

export default Home;
