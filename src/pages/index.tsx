import { ExternalLink } from '@/components/elements/ExternalLink';
import { IntroduceItem } from '@/components/pages/main/IntroduceItem';
import { Container, createStyles, Stack, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Head from 'next/head';
import Image from 'next/image';

const useStyles = createStyles((theme) => ({
  mainImage: {
    position: 'relative',
    width: '100%',
    maxWidth: '71.25rem',
    margin: '0 auto',
    objectFit: 'contain',
    aspectRatio: '16 / 9',
    marginTop: '1rem',
    [theme.fn.smallerThan('sm')]: {
      marginTop: '0em',
    },
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
        <div className={classes.mainImage}>
          <Image className="image" src="/wall.jpg" alt="wall image" fill />
        </div>

        <Container size="lg" px="xs">
          <div>
            Photo by{' '}
            <ExternalLink href="https://unsplash.com/it/@mailchimp?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Mailchimp
            </ExternalLink>{' '}
            for{' '}
            <ExternalLink href="https://unsplash.com/ja/%E5%86%99%E7%9C%9F/VLpRa5tFdNY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </ExternalLink>
          </div>
          <Stack py={sm ? '3rem' : '8rem'} spacing={sm ? '2rem' : '5rem'}>
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
      </div>
    </>
  );
};

export default Home;
