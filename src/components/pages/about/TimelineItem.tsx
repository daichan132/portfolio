import { ExternalLinkCursor, ParallaxPc } from '@/components/elements';
import { RedColor } from '@/utils/Colors';
import { css } from '@emotion/react';
import { Text, Flex, rem, Space, createStyles } from '@mantine/core';
import { motion, useScroll, useSpring } from 'framer-motion';
import React, { FC, ReactNode, useRef } from 'react';

export type TimelineItemProps = {
  children: ReactNode;
  title: string;
  period: string;
  link?: string;
  disable?: boolean;
};

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(24),
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
  disable = false,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['center end', 'center center'] });
  const scaleY = useSpring(scrollYProgress, { damping: 300, stiffness: 1100 });
  const { classes } = useStyles();
  return (
    <div
      ref={ref}
      css={css`
        padding-left: 100px;
        position: relative;
        .Parallax {
          position: absolute;
          left: 0;
          top: 24px;
        }
      `}
    >
      <ParallaxPc offset={20}>
        <figure>
          <svg
            width="40"
            height="40"
            viewBox="0 0 100 100"
            css={css`
              transform: rotate(-95deg);
            `}
          >
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              strokeWidth={7}
              stroke={RedColor}
              fill="white"
              style={{ pathLength: scaleY }}
            />
          </svg>
        </figure>
      </ParallaxPc>
      <div
        css={css`
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
          width: 100%;
          max-width: 1000px;
          padding: ${rem(30)} ${rem(60)} ${rem(30)} ${rem(30)};
        `}
      >
        <div>
          <div
            className={classes.title}
            css={css`
              color: ${disable ? 'gray' : 'black'};
            `}
          >
            {title}
          </div>
          <Flex gap={rem(20)} align="center">
            <Text c="dimmed" size="sm">
              {period}
            </Text>
            {link && <ExternalLinkCursor href={link}>link</ExternalLinkCursor>}
          </Flex>
        </div>
        <Space h="md" />
        {children}
      </div>
    </div>
  );
};
