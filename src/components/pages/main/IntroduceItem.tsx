import { Parallax } from '@/components/elements/Parallax';
import { TwilightGrayColor } from '@/utils/Colors';
import { css } from '@emotion/react';
import { Center, SimpleGrid, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const introduceStyle = (reverse: boolean, enabled: boolean, sm: boolean) => css`
  position: relative;
  .box {
    position: relative;
    height: 150px;
    @media (min-width: 576px) {
      height: 300px;
    }
    div {
      position: absolute;
      height: 100%;
      width: 100%;
    }
    .bg {
      background-color: ${TwilightGrayColor};
    }
    .boxContent {
      transform: ${enabled ? 'translate(0, -30px)' : 'none'};
      h1 {
        background-color: gray;
        border-radius: 10px;
        padding: 30px;
      }
    }
  }
  .textBox {
    transform: ${enabled ? 'translate(0, 50px)' : 'none'};
    grid-column-start: ${reverse ? 1 : undefined};
    grid-row-start: ${reverse ? 1 : undefined};
    .mainText {
      font-size: 1.3rem;
    }
    .subText {
      padding-top: ${sm ? '0px' : '40px'};
      color: gray;
      font-size: 1rem;
      white-space: pre-line;
    }
  }
`;
export const IntroduceItem = ({
  text,
  subText,
  reverse = false,
}: {
  text: string;
  subText: string;
  reverse?: boolean;
}) => {
  const theme = useMantineTheme();
  const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  return (
    <SimpleGrid
      cols={2}
      spacing={sm ? 10 : 50}
      breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
      css={introduceStyle(reverse, !sm, sm)}
    >
      <div className="box">
        <Parallax offset={20} enabled={!sm}>
          <div className="bg" />
        </Parallax>

        <Parallax offset={-30} enabled={!sm}>
          <Center className="boxContent">aa</Center>
        </Parallax>
      </div>
      <div className="textBox">
        <Parallax offset={50} enabled={!sm}>
          <div className="mainText">{text}</div>
          <div className="subText">{subText}</div>
        </Parallax>
      </div>
    </SimpleGrid>
  );
};
