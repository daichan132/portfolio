import { ParallaxPc } from '@/components/elements';
import { BlueColor, RedColor, YellowColor } from '@/utils/Colors';
import { css } from '@emotion/react';
import { Center, createStyles, Grid, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  contentBox: {
    position: 'relative',
    height: rem(400),
    [theme.fn.smallerThan('md')]: {
      height: rem(370),
    },
    [theme.fn.smallerThan('sm')]: {
      height: rem(300),
    },
  },
  shadowBox: {
    backgroundColor: '#33333322',
    width: '100%',
    height: '100%',
    transform: 'translate(10px, 30px)',
    borderRadius: '5px',
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
  },
  mainText: {
    fontSize: rem(26),
    [theme.fn.smallerThan('md')]: {
      fontSize: rem(24),
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

const style = (color: string) => css`
  .box-001 {
    position: relative;
    margin: 0 auto;
    padding: calc(1em + 25px) 1.5em 1em;
    border: 2px solid #e6edf3;
    border-radius: 5px;
    overflow: auto;
    width: 100%;
    height: 100%;
    background-color: white;
    border: 2px solid ${color};
    svg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 25px;
      background-color: #dde4eb;
    }
    .window-bar {
      border-bottom: 2px solid ${color};
    }
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
    <Grid gutter="xl" gutterMd={rem(60)} css={style(color)}>
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
            <div className="box-001">
              <svg
                className="window-bar"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="ウインドウのボタン"
              >
                <circle cx="25" cy="12" r="5.5" fill={RedColor} />
                <circle cx="45" cy="12" r="5.5" fill={YellowColor} />
                <circle cx="65" cy="12" r="5.5" fill={BlueColor} />
              </svg>
            </div>
          </ParallaxPc>

          <ParallaxPc offset={60}>
            <Center className={classes.content}>
              <Icon style={{ height: '80%', transform: 'translate(0, 5px)' }} />
            </Center>
          </ParallaxPc>
        </div>
      </Grid.Col>
      <Grid.Col span={12} sm="auto" order={reverse ? 1 : 2}>
        <div className={classes.textBox}>
          <ParallaxPc offset={80}>
            <div className={classes.mainText}>{text}</div>
            <div className={classes.subText}>{subText}</div>
          </ParallaxPc>
        </div>
      </Grid.Col>
    </Grid>
  );
};
