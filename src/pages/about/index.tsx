import { IntroduceItem } from '@/components/pages/about/IntroduceItem';
import { Center, Container, rem, Stack, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import TeenagerIcon from 'public/36-Teenager.svg';
import TeamworkIcon from 'public/58-Teamwork.svg';
import AdventurerIcon from 'public/39-Adventurer.svg';
import ProgrammerIcon from 'public/26-Programmer.svg';

import { WorkButton } from '@/components/pages/about/WorkButton';
import { css } from '@emotion/react';
import { BlueColor, RedColor, YellowColor } from '@/utils/Colors';

// https://designs.ai/graphicmaker/illustrations/Duotone_Cartoon_Set
const Home = () => {
  const theme = useMantineTheme();
  const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Container
      size="lg"
      px="xs"
      pt={sm ? rem(52) : rem(240)}
      pb={sm ? rem(52) : rem(100)}
      css={css`
        width: 100%;
      `}
    >
      <Stack spacing={sm ? rem(30) : rem(100)}>
        <IntroduceItem
          text="私の名前はdaichan132です。プログラミングが大好きな大学院生です。"
          subText="My name is daichan132. I am a graduate student who loves programming."
          Icon={TeenagerIcon}
          color={YellowColor}
        />
        <IntroduceItem
          text="人の思いや独創性の詰まった物が大好きで、そういったプロダクトを作ることが目標です。"
          subText="I love things that are filled with people's thoughts and originality. My goal is to create such products."
          Icon={TeamworkIcon}
          reverse={!sm}
          color={BlueColor}
        />
        <IntroduceItem
          text="自分のアイデアや思考をコードに落とし込み、形にすることができるところがプログラミングの好きなところです。"
          subText="I like programming because I can put my ideas and thoughts into code and give them shape."
          Icon={ProgrammerIcon}
          color={RedColor}
        />
        <IntroduceItem
          text="ここまで見てくれてありがとうございます。私が作ってきた作品も見ていただけると嬉しいです！"
          subText="Thanks for taking the time to look this far. I hope you'll take a look at some of the pieces I've been working on too!"
          Icon={AdventurerIcon}
          reverse={!sm}
          color={YellowColor}
        />
        <Center pt={rem(60)}>
          <WorkButton />
        </Center>
      </Stack>
    </Container>
  );
};
export default Home;
