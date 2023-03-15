import { Container, createStyles, rem } from '@mantine/core';
import Image from 'next/image';

const useStyles = createStyles((theme) => ({
  container: {
    position: 'relative',
    height: '70vh',
    width: '100%',
    marginTop: '2rem',
    [theme.fn.smallerThan('sm')]: {
      height: '70vh',
    },
  },
  image: {
    objectFit: 'cover',
  },
}));

const Home = () => {
  const { classes } = useStyles();

  return (
    <Container size="lg" px={rem(30)} className={classes.container}>
      <Image fill src="/japan.jpg" alt="japan" className={classes.image} />
    </Container>
  );
};

export default Home;
