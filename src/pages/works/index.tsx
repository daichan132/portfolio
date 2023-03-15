import { Work } from '@/components/pages/works/Work';
import { BlueColor, RedColor, YellowColor } from '@/utils/Colors';
import { css } from '@emotion/react';
import { Container, rem, Stack, Text, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};
const worksData: ReactNode[] = [
  <Work
    key="portfolio"
    src="/portfolio.png"
    color={YellowColor}
    title="Portfolio"
    skills={['Nextjs', 'Typescript', 'zustand', 'Threejs']}
  >
    この作品はdaichan132の自己紹介と作品をします。
  </Work>,
  <Work
    key="vroom"
    src="/vroom.png"
    color={BlueColor}
    title="VRooM"
    skills={['Nextjs', 'Typescript', 'zustand', 'Threejs']}
    link="https://jphacks-2022-4839e.web.app/"
    githubLink="https://github.com/jphacks/A_2207"
  >
    <Text>
      VRooMは誰かと一緒に作業をしている感覚を提供し、作業を楽しく効率的に行うことを支援します。
    </Text>
  </Work>,
  <Work
    key="vroom"
    src="/vroom.png"
    color={RedColor}
    title="VRooM"
    skills={['Nextjs', 'Typescript', 'zustand', 'Threejs']}
    link="https://jphacks-2022-4839e.web.app/"
    githubLink="https://github.com/jphacks/A_2207"
  >
    VRooMは誰かと一緒に作業をしている感覚を提供し、作業を楽しく効率的に行うことを支援します。
  </Work>,
];
const Home = () => {
  const theme = useMantineTheme();
  const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  return (
    <Container
      size="lg"
      css={css`
        width: 100%;
      `}
      py={sm ? '2rem' : '5rem'}
    >
      <motion.div variants={containerVariants} initial="hidden" animate="show">
        <Stack spacing={rem(100)}>
          {worksData.map((work, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <motion.div key={i} variants={itemVariants}>
              {work}
            </motion.div>
          ))}
        </Stack>
      </motion.div>
    </Container>
  );
};
export default Home;
