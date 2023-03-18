import { IntroduceItem } from '@/components/pages/about/IntroduceItem';
import { Center, Container, rem, Stack, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import TeenagerIcon from 'public/36-Teenager.svg';
import TeamworkIcon from 'public/58-Teamwork.svg';
import AdventurerIcon from 'public/39-Adventurer.svg';
import { WorkButton } from '@/components/pages/about/WorkButton';
import { Marquee } from '@/components/elements';
import { YellowColor } from '@/utils/Colors';
import { css } from '@emotion/react';

// https://designs.ai/graphicmaker/illustrations/Duotone_Cartoon_Set
const Home = () => {
  const theme = useMantineTheme();
  const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  return (
    <Container
      size="lg"
      px="xs"
      css={css`
        width: 100%;
      `}
    >
      <Stack py={sm ? '0rem' : '3rem'} spacing={sm ? '2rem' : '3rem'}>
        <IntroduceItem
          text="私の名前はdaichan132です。プログラミングが大好きな大学院生です。"
          subText="My name is daichan132. I am a graduate student who loves programming."
          Icon={TeenagerIcon}
        />
        <IntroduceItem
          text="私は人の思いや独創性の詰まった物が大好きで、そういったプロダクトを作ることが目標です。"
          subText="I love things that are filled with people's thoughts and originality. My goal is to create such products."
          Icon={TeamworkIcon}
          reverse={!sm}
        />
        <IntroduceItem
          text="ここまで見てくれてありがとうございます。私が作ってきた作品も見ていただけると嬉しいです！"
          subText="Thanks for taking the time to look this far. I hope you'll take a look at some of the pieces I've been working on too!"
          Icon={AdventurerIcon}
        />
        <Center pt={rem(20)}>
          <WorkButton />
        </Center>
        <Marquee text="profile" color={YellowColor} />
      </Stack>
    </Container>
  );
};
export default Home;
