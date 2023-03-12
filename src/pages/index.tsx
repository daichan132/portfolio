import { Container, createStyles, rem, useMantineTheme } from '@mantine/core';
import Image from 'next/image';
import { useMediaQuery } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
  container: {
    position: 'relative',
    height: rem(600),
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: `calc(${theme.spacing.xl} * 6)`,
    clipPath: 'inset(0)',
    [theme.fn.smallerThan('sm')]: {
      height: rem(500),
      paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    },
  },
  image: {
    objectFit: 'contain',
  },
}));

const Home = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Container size="lg" px={rem(30)} mb={sm ? '3rem' : '10rem'} className={classes.container}>
      <Image fill src="/japan.jpg" alt="japan" className={classes.image} />
    </Container>
  );
};

export default Home;
