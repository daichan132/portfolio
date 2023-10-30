import { IntroduceItem } from '@/components/pages/about/IntroduceItem';
import { Box, Center, Container, rem, Stack, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import TeenagerIcon from 'public/36-Teenager.svg';
import TeamworkIcon from 'public/58-Teamwork.svg';
import AdventurerIcon from 'public/39-Adventurer.svg';
import ProgrammerIcon from 'public/26-Programmer.svg';

import { WorkButton } from '@/components/pages/about/WorkButton';
import { css } from '@emotion/react';
import { BlueColor, RedColor, YellowColor } from '@/utils/Colors';
import { Timeline } from '@/components/pages/about/Timeline';

// https://designs.ai/graphicmaker/illustrations/Duotone_Cartoon_Set
const Home = () => {
  const theme = useMantineTheme();
  const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Container
      size="xl"
      px="xs"
      pt={sm ? rem(120) : rem(300)}
      pb={sm ? rem(40) : rem(60)}
      css={css`
        width: 100%;
      `}
    >
      <Stack spacing={sm ? rem(100) : rem(160)}>
        <IntroduceItem
          text="私の名前は若山大智です。プログラミングが大好きな大学院生です。"
          subText="My name is daichi wakayama. I am a graduate student who loves programming."
          Icon={TeenagerIcon}
          color={BlueColor}
        />
        <IntroduceItem
          text="自分のアイデアや思考をコードに落とし込み形にすることができるところが好きで、プログラミングをしています。"
          subText="I am passionate about programming because I like the fact that I can put my ideas and thoughts into code and give them shape."
          Icon={ProgrammerIcon}
          color={YellowColor}
        />
        <IntroduceItem
          text="私が作ってきた作品も見ていただけると嬉しいです！"
          subText="I hope you'll take a look at some of the pieces I've been working on too!"
          Icon={AdventurerIcon}
          color={RedColor}
        />
        <Center>
          <WorkButton />
        </Center>
        <Box pt={0} pb={30}>
          <Timeline />
        </Box>
      </Stack>
    </Container>
  );
};
export default Home;
