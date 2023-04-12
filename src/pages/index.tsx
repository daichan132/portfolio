import { css } from '@emotion/react';
import { Center, Container, rem, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const Home = () => {
  const theme = useMantineTheme();
  const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Container size="xl" px="xs" pt={sm ? rem(120) : rem(220)} pb={sm ? rem(52) : rem(100)}>
      <Center
        css={css`
          position: relative;
          height: 500px;
          max-width: 100%;
        `}
      >
        <Center
          css={css`
            position: absolute;
            font-size: large;
          `}
        >
          in preparation
        </Center>
      </Center>
    </Container>
  );
};

export default Home;
