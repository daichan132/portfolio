import { ExternalLinkCursor, ParallaxPc } from '@/components/elements';
import { YellowColor } from '@/utils/Colors';
import { css } from '@emotion/react';
import { Text, Flex, rem, Space, createStyles } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';
import { motion, useScroll, useSpring } from 'framer-motion';
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
    borderRadius: 5,
  },
  shadowBox: {
    backgroundImage: 'url(/shadowPattern.svg)',
    width: '100%',
    height: '100%',
    transform: 'translate(10px,10px)',
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
    borderRadius: 5,
  },
  title: {
    fontSize: rem(22),
    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(20),
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
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['center end', 'end'],
  });
  const scaleY = useSpring(scrollYProgress, { damping: 300, stiffness: 1100 });
  const { classes } = useStyles();
  const { ref, height } = useElementSize();
  return (
    <div
      ref={scrollRef}
      css={css`
        padding-left: 160px;
        position: relative;
        .Parallax {
          position: absolute;
          left: 0;
        }
      `}
    >
      <ParallaxPc offset={20}>
        <figure>
          <svg
            width="60"
            height="60"
            viewBox="0 0 100 100"
            css={css`
              transform: rotate(-90deg);
            `}
          >
            <circle cx="50" cy="50" r="40" fill="white" />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              strokeWidth={7}
              stroke={color}
              fill="white"
              style={{ pathLength: scaleY }}
            />
          </svg>
        </figure>
      </ParallaxPc>
      <div
        className={classes.contentBox}
        css={css`
          width: 100%;
          height: ${height + 100}px;
          max-width: 1000px;
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
          <div className={classes.box}>
            <div
              ref={ref}
              css={css`
                width: 100%;
                max-width: 1000px;
                padding: ${rem(30)} ${rem(30)} ${rem(30)} ${rem(30)};
                border: 2px solid;
                border-radius: 5px;
                background-color: white;
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
              `}
            >
              <Flex gap={rem(20)} align="center" justify="space-between">
                <div className={classes.title}>{title}</div>

                <Flex gap={rem(20)} align="center">
                  <Text c="dimmed" size="sm">
                    {period}
                  </Text>
                  {link && <ExternalLinkCursor href={link}>link</ExternalLinkCursor>}
                </Flex>
              </Flex>
              <Space h="MD" />
              <div
                css={css`
                  padding: ${rem(20)} ${rem(10)} ${rem(20)} ${rem(10)};
                `}
              >
                {children}
              </div>
            </div>
          </div>
        </ParallaxPc>
      </div>
    </div>
  );
};
