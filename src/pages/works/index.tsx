import { ExternalLinkCursor } from '@/components/elements';
import { Work } from '@/components/pages/works/Work';
import { BlueColor, YellowColor } from '@/utils/Colors';
import { css } from '@emotion/react';
import { Container, List, Mark, rem, Stack, Text, Title, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const fontBold = css`
  font-weight: bold;
`;

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

const Home = () => {
  const theme = useMantineTheme();
  const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const worksData: ReactNode[] = [
    <Work
      key="portfolio"
      src="/portfolio.png"
      color={YellowColor}
      title="Portfolio"
      skills={['Nextjs', 'Typescript', 'framer motion', 'Design']}
    >
      <Text>
        こちらの作品は<Mark css={fontBold}>楽しく自分のことを紹介する</Mark>
        ために作成したPortfolioです。Webデザインから実装までを自分で作成しました。
      </Text>
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
        こちらの作品は
        <Mark css={fontBold}>誰かと一緒に作業をしている感覚</Mark>
        を体験しながら、作業を楽しく効率的に行うことを支援するWebアプリケーションです。
        <ExternalLinkCursor href="https://jphacks.com/">JPJACKS</ExternalLinkCursor>
        に参加した際に作成しました。
      </Text>
      <Title order={5}>受賞一覧</Title>
      <List>
        <List.Item>JPHACKS Innovator 認定</List.Item>
        <List.Item>合同会社MIRAISE賞</List.Item>
      </List>
    </Work>,
  ];
  return (
    <Container
      size="lg"
      css={css`
        width: 100%;
      `}
      py={sm ? '0rem' : '3rem'}
    >
      <motion.div variants={containerVariants} initial="hidden" animate="show">
        <Stack spacing={rem(70)}>
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
