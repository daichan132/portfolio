import { Container, createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    position: 'relative',
    height: '100%',
    width: '100%',
    marginTop: '2rem',
    [theme.fn.smallerThan('sm')]: {
      height: '100%',
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
      in preparation
    </Container>
  );
};

export default Home;
