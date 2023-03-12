import { Work } from '@/components/elements';
import { css } from '@emotion/react';
import { Container, Stack, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const Home = () => {
  const theme = useMantineTheme();
  const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  return (
    <Container
      size="lg"
      css={css`
        width: 100%;
      `}
    >
      <Stack>
        <Work
          src="/vroom.png"
          title="VRooM"
          description="VRooMは誰かと一緒に作業をしている感覚を提供し、作業を楽しく効率的に行うことを支援します。"
          skills={['Nextjs', 'Typescript', 'zustand', 'Threejs']}
          link="https://jphacks-2022-4839e.web.app/"
          githubLink="https://github.com/jphacks/A_2207"
        />
      </Stack>
    </Container>
  );
};
export default Home;
