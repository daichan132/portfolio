import { Container, createStyles, rem, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

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
}));

const Home = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  return (
    <Container size="lg" className={classes.container} pt={sm ? rem(52) : rem(240)}>
      in preparation
    </Container>
  );
};

export default Home;
