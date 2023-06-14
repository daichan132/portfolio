import { css } from '@emotion/react';
import { Center, Container, rem, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Image from 'next/image';

const Home = () => {
  const theme = useMantineTheme();
  const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Container size="xl" px="xs" pt={sm ? rem(120) : rem(200)} pb={sm ? rem(52) : rem(100)}>
      <Center
        css={css`
          pointer-events: none;
        `}
      >
        <Image
          src="/main-image/IMG_1182.PNG"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </Center>
    </Container>
  );
};

export default Home;
