import { ExternalLinkCursor, ParallaxPc } from '@/components/elements';
import { YellowColor } from '@/utils/Colors';
import { css } from '@emotion/react';
import { Text, Flex, rem, Space, createStyles, Stack, useMantineTheme } from '@mantine/core';
import { useElementSize, useMediaQuery } from '@mantine/hooks';
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
    paddingLeft: 20,
  },
  shadowBox: {
    width: '98%',
    backgroundImage: 'url(/shadowPattern.svg)',
    height: '70%',
    transform: 'translate(12px,16px)',
    marginLeft: 20,
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
  title: {
    fontSize: rem(18),
    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(16),
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
  const { ref, height, width } = useElementSize();
  const theme = useMantineTheme();
  const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Stack
      ref={scrollRef}
      css={css`
        position: relative;
        margin-left: auto;
        margin-right: auto;
        width: ${sm ? 100 : 90}%;
        .Parallax {
          position: absolute;
          left: 0;
          z-index: 1;
        }
      `}
    >
      <ParallaxPc offset={10}>
        <figure
          css={css`
            transform: ${sm ? 'translate(-40px, -40px)' : 'translate(-40px, -40px)'};
          `}
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 100 100"
            fill={color}
            css={css`
              transform: rotate(-90deg);
              filter: grayscale(${period.includes('Present') ? 0 : 100}%);
            `}
          >
            <rect width="80" height="80" />
          </svg>
        </figure>
      </ParallaxPc>
      <div
        className={classes.contentBox}
        css={css`
          width: 100%;
          height: ${height + 50}px;
          z-index: 1;
          .Parallax {
            position: absolute;
            height: 100%;
          }
        `}
      >
        <ParallaxPc offset={5}>
          <div
            css={css`
              width: ${width + 32}px;
            `}
            className={classes.shadowBox}
          />
        </ParallaxPc>
        <ParallaxPc offset={10}>
          <div className={classes.box}>
            <Flex
              ref={ref}
              gap={sm ? rem(10) : rem(20)}
              align={sm ? 'start' : 'center'}
              justify="space-between"
              wrap="wrap"
              css={css`
                padding: ${sm ? rem(12) : rem(12)} ${sm ? rem(12) : rem(16)};
                border: 2px solid;
                background-color: ${period.includes('Present') ? '#fff' : '#f5f5f5'};
              `}
            >
              <div className={classes.title}>{title}</div>
              <Flex gap={rem(20)} align="center">
                <Text size="sm">{period}</Text>
                {link && <ExternalLinkCursor href={link}>link</ExternalLinkCursor>}
              </Flex>
            </Flex>
            <Space h="MD" />
          </div>
        </ParallaxPc>
      </div>
      <div
        css={css`
          margin-top: ${rem(10)};
          margin-left: 10px;
          padding: ${sm ? rem(30) : rem(40)};
          padding-top: ${sm ? rem(30) : rem(60)};
          padding-bottom: ${sm ? rem(30) : rem(30)};
          transform: translate(0, -70px);
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
        {children}
      </div>
    </Stack>
  );
};
