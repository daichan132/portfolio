import { ExternalLinkCursor, ParallaxPc } from '@/components/elements';
import { YellowColor } from '@/utils/Colors';
import { css } from '@emotion/react';
import { Text, Flex, rem, Space, createStyles, Stack, useMantineTheme } from '@mantine/core';
import { useElementSize, useMediaQuery } from '@mantine/hooks';
import { motion } from 'framer-motion';
import { FC, ReactNode, useRef } from 'react';

export type TimelineItemProps = {
  children: ReactNode;
  title: string;
  period: string;
  link?: string;
  color?: string;
};

const useStyles = createStyles((theme) => ({
  contentBox: {
    position: 'relative',
  },
  box: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  shadowBox: {
    backgroundImage: 'url(/shadowPattern.svg)',
    width: '100%',
    height: '100%',
    transform: 'translate(10px,10px)',
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
  title: {
    fontSize: rem(22),
    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(18),
    },
    fontWeight: 'bold',
  },
}));

export const TimelineItem: FC<TimelineItemProps> = ({
  children,
  title,
  period,
  link = undefined,
  color = YellowColor,
}) => {
  const scrollRef = useRef(null);
  const { classes } = useStyles();
  const { ref, height } = useElementSize();
  const theme = useMantineTheme();
  const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Stack
      ref={scrollRef}
      css={css`
        padding-left: ${sm ? 0 : 120}px;
        position: relative;
        max-width: 1200px;
        .Parallax {
          position: absolute;
          left: 0;
        }
      `}
    >
      <ParallaxPc offset={20}>
        <figure
          css={css`
            transform: ${sm ? 'translate(-40px, -40px)' : undefined};
          `}
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 100 100"
            css={css`
              transform: rotate(-90deg);
            `}
          >
            <circle cx="50" cy="50" r="40" fill="#f0f0f0" />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              strokeWidth={16}
              stroke={color}
              fill="#fff"
              style={{ pathLength: 1 }}
            />
          </svg>
        </figure>
      </ParallaxPc>
      <div
        className={classes.contentBox}
        css={css`
          width: 100%;
          height: ${height + 60}px;
          z-index: 1;
          .Parallax {
            position: absolute;
            height: 100%;
            width: 100%;
          }
        `}
      >
        <ParallaxPc offset={15}>
          <div className={classes.shadowBox} />
        </ParallaxPc>
        <ParallaxPc offset={30}>
          <div className={classes.box}>
            <div
              ref={ref}
              css={css`
                width: 100%;
                padding: ${sm ? rem(20) : rem(25)};
                border: 2px solid;
                background-color: white;
              `}
            >
              <Flex
                direction={sm ? 'column' : 'row'}
                gap={sm ? rem(10) : rem(20)}
                align={sm ? 'start' : 'center'}
                justify="space-between"
              >
                <div className={classes.title}>{title}</div>
                <Flex gap={rem(20)} align="center">
                  <Text size="sm">{period}</Text>
                  {link && <ExternalLinkCursor href={link}>link</ExternalLinkCursor>}
                </Flex>
              </Flex>
              <Space h="MD" />
            </div>
          </div>
        </ParallaxPc>
      </div>
      <div
        css={css`
          margin-top: ${rem(20)};
          padding: ${sm ? rem(30) : rem(40)};
          padding-top: ${sm ? rem(30) : rem(60)};
          padding-bottom: ${sm ? rem(30) : rem(60)};
          transform: translate(0, -50px);
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
          border-radius: 5px;
        `}
      >
        {children}
      </div>
    </Stack>
  );
};
