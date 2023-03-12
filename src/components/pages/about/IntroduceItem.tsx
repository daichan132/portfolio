import { ParallaxPc } from '@/components/elements';
import { SweetSepiaColor } from '@/utils/Colors';
import { css } from '@emotion/react';
import { Center, createStyles, Grid, rem, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
  contentBox: {
    position: 'relative',
    height: rem(400),
    [theme.fn.smallerThan('md')]: {
      height: rem(350),
    },
    [theme.fn.smallerThan('sm')]: {
      height: rem(300),
    },
  },
  box: {
    borderRadius: 10,
    backgroundColor: SweetSepiaColor,
  },
  content: {},

  textBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
  },
  mainText: {
    fontSize: rem(24),
    letterSpacing: '0.1rem',
    [theme.fn.smallerThan('md')]: {
      fontSize: rem(22),
    },
    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(20),
      letterSpacing: '0',
    },
  },
  subText: {
    paddingTop: '2rem',
    letterSpacing: '0.1rem',
    fontSize: rem(20),
    color: 'gray',
    whiteSpace: 'pre-line',
    [theme.fn.smallerThan('md')]: {
      letterSpacing: rem(0),
      fontSize: rem(16),
    },
    [theme.fn.smallerThan('sm')]: {
      paddingTop: '0rem',
      letterSpacing: '0',
    },
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
    <Grid gutter="xl">
      <Grid.Col span={12} sm={6} order={reverse ? 2 : 1}>
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
          <ParallaxPc offset={25}>
            <div className={classes.box} />
          </ParallaxPc>

          <ParallaxPc offset={0}>
            <Center className={classes.content}>
              <Icon style={{ height: sm ? '50%' : '60%', transform: 'translate(0px, -15%)' }} />
            </Center>
          </ParallaxPc>
        </div>
      </Grid.Col>
      <Grid.Col span={12} sm="auto" order={reverse ? 1 : 2}>
        <div className={classes.textBox}>
          <ParallaxPc offset={50}>
            <div className={classes.mainText}>{text}</div>
            <div className={classes.subText}>{subText}</div>
          </ParallaxPc>
        </div>
      </Grid.Col>
    </Grid>
  );
};
