import { IntroduceItem } from '@/components/pages/about/IntroduceItem';
import { Container, Stack, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import TeenagerIcon from 'public/36-Teenager.svg';
import TeamworkIcon from 'public/58-Teamwork.svg';
import AdventurerIcon from 'public/39-Adventurer.svg';

const Home = () => {
  const theme = useMantineTheme();
  const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  return (
    <Container size="lg" px="xs">
      <Stack pt={sm ? '0rem' : '3rem'} pb={sm ? '1rem' : '5rem'} spacing={sm ? '2rem' : '3rem'}>
        <IntroduceItem
          text="私はdaichan132です．私は大学院生で，研究に取り組みながらプログラミングをしています．"
          subText="Hello, my name is daichan132. I am a graduate student and I am programming while working on my research."
          Icon={TeenagerIcon}
        />
        <IntroduceItem
          text="人の思いや努力の詰まった物が大好きで，そういったプロダクトを作ることが目標です．"
          subText="I love things that are filled with people's thoughts and efforts, and my goal is to create such products."
          reverse={!sm}
          Icon={TeamworkIcon}
        />
        <IntroduceItem
          text="ここまで見てくれてありがとうございます．私が作ってきた作品も見ていただけると嬉しいです！"
          subText="Thanks for taking the time to look this far. I hope you'll take a look at some of the pieces I've been working on too!"
          Icon={AdventurerIcon}
        />
      </Stack>
    </Container>
  );
};
export default Home;
