import { Container, rem, Space, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const Home = () => {
  const theme = useMantineTheme();
  const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Container size="xl" px="xs" pt={sm ? rem(52) : rem(220)} pb={sm ? rem(52) : rem(100)}>
      <Space h={sm ? rem(30) : rem(100)} />
    </Container>
  );
};

export default Home;
