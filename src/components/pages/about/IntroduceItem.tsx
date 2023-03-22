import { ParallaxPc } from '@/components/elements';
import { YellowColor } from '@/utils/Colors';
import { css } from '@emotion/react';
import { Center, createStyles, Grid, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  contentBox: {
    position: 'relative',
    height: rem(350),
    [theme.fn.smallerThan('md')]: {
      height: rem(380),
    },
    [theme.fn.smallerThan('sm')]: {
      height: rem(300),
    },
  },
  box: {
    backgroundColor: '#fafafa',
    border: `4px solid ${YellowColor}`,
    height: '100%',
    width: '100%',
  },
  shadowBox: {
    backgroundColor: '#33333322',
    width: '100%',
    height: '100%',
    transform: 'translate(10px, 30px)',
  },
  content: {
    width: '100%',
    height: '100%',
  },

  textBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
  },
  mainText: {
    fontSize: rem(24),
    [theme.fn.smallerThan('md')]: {
      fontSize: rem(22),
    },
    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(20),
    },
  },
  subText: {
    paddingTop: '2rem',
    fontSize: rem(16),
    color: 'gray',
    whiteSpace: 'pre-line',
    [theme.fn.smallerThan('sm')]: {
      paddingTop: '0rem',
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
  const { classes } = useStyles();

  return (
    <Grid gutter="xl" gutterMd={rem(60)}>
      <Grid.Col span={12} sm={6} order={reverse ? 2 : 1}>
        <div
          className={classes.contentBox}
          css={css`
            .Parallax {
              position: absolute;
              height: 100%;
              width: 100%;
            }
          `}
        >
          <ParallaxPc offset={20}>
            <div className={classes.shadowBox} />
          </ParallaxPc>
          <ParallaxPc offset={40}>
            <div className={classes.box} />
          </ParallaxPc>

          <ParallaxPc offset={50}>
            <Center className={classes.content}>
              <Icon style={{ height: '100%', transform: 'translate(0, 5px)' }} />
            </Center>
          </ParallaxPc>
        </div>
      </Grid.Col>
      <Grid.Col span={12} sm="auto" order={reverse ? 1 : 2}>
        <div className={classes.textBox}>
          <ParallaxPc offset={0}>
            <div className={classes.mainText}>{text}</div>
            <div className={classes.subText}>{subText}</div>
          </ParallaxPc>
        </div>
      </Grid.Col>
    </Grid>
  );
};
