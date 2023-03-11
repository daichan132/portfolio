import { ParallaxPc } from '@/components/elements';
import { SweetSepiaColor } from '@/utils/Colors';
import { css } from '@emotion/react';
import { Center, createStyles, rem, SimpleGrid, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
  contentBox: {
    position: 'relative',
    height: '350px',
    [theme.fn.smallerThan('sm')]: {
      height: '300px',
    },
  },
  box: {
    borderRadius: '20px',
    backgroundColor: SweetSepiaColor,
  },
  content: {},

  textBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: rem(24),
    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(20),
    },
  },
  subText: {
    paddingTop: '2rem',
    [theme.fn.smallerThan('sm')]: {
      paddingTop: '0rem',
    },
    color: 'gray',
    fontSize: '1rem',
    whiteSpace: 'pre-line',
  },
}));

export const IntroduceItem = ({
  text,
  subText,
  Icon,
  reverse = false,
}: {
  text: string;
  subText: string;
  Icon: React.FC<React.SVGProps<SVGElement>>;
  reverse?: boolean;
}) => {
  const theme = useMantineTheme();
  const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const { classes } = useStyles();

  return (
    <SimpleGrid cols={2} spacing={sm ? 'xs' : '2rem'} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
      <div
        className={classes.contentBox}
        css={css`
          * {
            position: absolute;
            height: 100%;
            width: 100%;
          }
        `}
      >
        <ParallaxPc offset={0}>
          <div className={classes.box} />
        </ParallaxPc>

        <ParallaxPc offset={-30}>
          <Center className={classes.content}>
            <Icon style={{ height: sm ? '50%' : '70%', transform: 'translate(0px, -15%)' }} />
          </Center>
        </ParallaxPc>
      </div>
      <div
        className={classes.textBox}
        css={
          reverse
            ? css`
                grid-row: 1;
              `
            : undefined
        }
      >
        <ParallaxPc offset={30}>
          <div className={classes.mainText}>{text}</div>
          <div className={classes.subText}>{subText}</div>
        </ParallaxPc>
      </div>
    </SimpleGrid>
  );
};
