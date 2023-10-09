import { ParallaxPc } from '@/components/elements';
import { YellowColor } from '@/utils/Colors';
import { css } from '@emotion/react';
import { Center, createStyles, Grid, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {},
  contentBox: {
    position: 'relative',
    height: rem(340),
    [theme.fn.smallerThan('md')]: {
      height: rem(320),
    },
    [theme.fn.smallerThan('sm')]: {
      height: rem(300),
    },
    maxWidth: '540px',
    margin: '0 auto',
  },
  shadowBox: {
    backgroundImage: 'url(/shadowPattern.svg)',
    width: '100%',
    height: '100%',
    transform: 'translate(10px, 30px)',
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
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
    padding: '0 30px',
    [theme.fn.smallerThan('sm')]: {
      padding: '20px 20px',
    },
  },
  mainText: {
    fontSize: rem(22),
    [theme.fn.smallerThan('md')]: {
      fontSize: rem(20),
    },
    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(18),
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

const style = (color: string) => css`
  .box-001 {
    position: relative;
    margin: 0 auto;
    border: 2px solid #e6edf3;
    overflow: auto;
    width: 100%;
    height: 100%;
    background-color: white;
    border-color: ${color};
    border-width: 40px 24px;
  }
`;
export const IntroduceItem = ({
  text,
  subText,
  Icon,
  color = YellowColor,
  reverse = false,
}: {
  text: string;
  subText: string;
  Icon: React.FC<React.SVGProps<SVGElement>>;
  color?: string;
  reverse?: boolean;
}) => {
  const { classes } = useStyles();

  return (
    <Grid gutter="xl" gutterMd={rem(60)} css={[style(color)]} className={classes.container}>
      <Grid.Col span={12} sm={6} order={reverse ? 2 : 1}>
        <Center
          className={classes.contentBox}
          css={css`
            .Parallax {
              position: absolute;
              height: 100%;
              width: 95%;
            }
          `}
        >
          <ParallaxPc offset={25}>
            <div className={classes.shadowBox} />
          </ParallaxPc>
          <ParallaxPc offset={50}>
            <div className="box-001" />
          </ParallaxPc>

          <ParallaxPc offset={75}>
            <Center className={classes.content}>
              <Icon style={{ height: '80%', transform: 'translate(0, 5px)' }} />
            </Center>
          </ParallaxPc>
        </Center>
      </Grid.Col>
      <Grid.Col span={12} sm="auto" order={reverse ? 1 : 2}>
        <Center
          css={css`
            height: 110%;
            transform: translate(0, -5%);
          `}
        >
          <div
            css={css`
              height: 100%;
              background-image: linear-gradient(
                  to right,
                  transparent,
                  transparent 10%,
                  #f0f0f0 11%,
                  #f0f0f0 12%,
                  transparent 13%,
                  transparent 87%,
                  #f0f0f0 88%,
                  #f0f0f0 89%,
                  transparent 90%,
                  transparent
                ),
                linear-gradient(to bottom, transparent, transparent 97%, #f0f0f0 98%, #f0f0f0);
              background-size: 40px 40px;
              background-repeat: repeat;
              background-position: left top;
              background-color: white;
            `}
          >
            <div className={classes.textBox}>
              <ParallaxPc offset={0}>
                <div className={classes.mainText}>{text}</div>
                <div className={classes.subText}>{subText}</div>
              </ParallaxPc>
            </div>
          </div>
        </Center>
      </Grid.Col>
    </Grid>
  );
};
