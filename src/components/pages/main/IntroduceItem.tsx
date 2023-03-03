import { Parallax } from '@/components/elements';
import { TwilightGrayColor } from '@/utils/Colors';
import { css } from '@emotion/react';
import { Center, createStyles, SimpleGrid, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
  contentBox: {
    position: 'relative',
    height: '300px',
    [theme.fn.smallerThan('sm')]: {
      height: '200px',
    },
  },
  box: {
    backgroundColor: TwilightGrayColor,
  },
  content: {
    transform: 'translate(0, -30px)',
    [theme.fn.smallerThan('sm')]: {
      transform: 'none',
    },
  },

  textBox: {
    transform: 'translate(0, 50px)',
    [theme.fn.smallerThan('sm')]: {
      transform: 'none',
    },
  },
  mainText: {
    fontSize: 'x-large',
    [theme.fn.smallerThan('sm')]: {
      fontSize: 'large',
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
  reverse = false,
}: {
  text: string;
  subText: string;
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
        <Parallax offset={20} enabled={!sm}>
          <div className={classes.box} />
        </Parallax>

        <Parallax offset={-30} enabled={!sm}>
          <Center className={classes.content}>aa</Center>
        </Parallax>
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
        <Parallax offset={50} enabled={!sm}>
          <div className={classes.mainText}>{text}</div>
          <div className={classes.subText}>{subText}</div>
        </Parallax>
      </div>
    </SimpleGrid>
  );
};
