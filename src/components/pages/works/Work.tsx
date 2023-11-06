import {
  createStyles,
  Grid,
  rem,
  Stack,
  Badge,
  Flex,
  Center,
  useMantineTheme,
} from '@mantine/core';
import { ReactNode, type FC } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';
import { useMediaQuery } from '@mantine/hooks';
import { getRandomInt } from '@/utils/getRandomInt';
import { ExternalLinkCursor } from '../../elements/ExternalLink';
import { ParallaxPc } from '../../elements/Parallax';

const useStyles = createStyles((theme, { color }: { color: string }) => ({
  contentBox: {
    position: 'relative',
    height: rem(350),
    [theme.fn.smallerThan('md')]: {
      height: rem(350),
    },
    [theme.fn.smallerThan('sm')]: {
      height: rem(200),
    },
  },
  box: {
    backgroundColor: color,
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  shadowBox: {
    backgroundImage: 'url(/shadowPattern.svg)',
    width: '100%',
    height: '100%',
    transform: 'translate(10px,20px)',
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
  content: {
    position: 'relative',
    width: '90%',
    height: '75%',
    overflow: 'hidden',
  },
  image: {
    objectFit: 'cover',
    transition: 'all 0.5s ease-in-out',
    '&:hover': { transform: 'scale(1.05)' },
  },
  textBox: {
    backgroundImage:
      'linear-gradient(to right,transparent,transparent 10%,#f0f0f0 11%,#f0f0f0 12%,transparent 13%,transparent 87%,#f0f0f0 88%,#f0f0f0 89%,transparent 90%,transparent),   linear-gradient(to bottom,transparent,transparent 97%,#f0f0f0 98%,#f0f0f0)',
    backgroundSize: '40px 40px',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'left top',
    backgroundColor: 'white',
  },
  title: {
    fontSize: rem(32),
    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(28),
    },
    position: 'relative',
    display: 'inline-block',
    fontWeight: 'bold',
  },
}));

export type WorkProps = {
  children: ReactNode;
  src: string;
  color: string;
  title: string;
  skills: string[];
  link?: string;
  githubLink?: string;
  reverse?: boolean;
};

export const Work: FC<WorkProps> = ({
  children,
  src,
  color,
  title,
  skills,
  link,
  githubLink,
  reverse = false,
}) => {
  const { classes } = useStyles({ color });
  const theme = useMantineTheme();
  const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const random = getRandomInt(0, 40);

  return (
    <Grid gutter={rem(20)} gutterSm={rem(36)} gutterMd={rem(52)}>
      <Grid.Col span={12} sm={6} md={5.5} order={reverse ? 2 : 1}>
        <div
          className={classes.contentBox}
          css={css`
            width: 100%;
            .Parallax {
              position: absolute;
              height: 100%;
              width: 100%;
            }
          `}
        >
          <ParallaxPc offset={25 + random}>
            <div className={classes.shadowBox} />
          </ParallaxPc>
          <ParallaxPc offset={50 + random}>
            <div className={classes.box} />
          </ParallaxPc>
          <ParallaxPc offset={50 + random}>
            <Center
              css={css`
                height: 100%;
                width: 100%;
              `}
            >
              <div className={classes.content}>
                <Image fill src={src} alt={src} className={classes.image} />
              </div>
            </Center>
          </ParallaxPc>
        </div>
      </Grid.Col>
      <Grid.Col span={12} sm="auto" order={reverse ? 1 : 2}>
        <div
          css={css`
            position: relative;
            height: ${sm ? '100' : '120'}%;
            transform: ${sm ? '0' : 'translate(0, -10%)'};
            padding: ${sm ? '2rem 2rem' : '1rem 3rem'};
            width: 100%;
            .Parallax {
              height: 100%;
              width: 100%;
            }
          `}
          className={classes.textBox}
        >
          <ParallaxPc offset={0}>
            <Stack justify="center" h="100%">
              <Flex wrap="wrap" align="center" justify="space-between">
                <div className={classes.title}>{title}</div>
                <Flex gap="sm">
                  {link && (
                    <ExternalLinkCursor href={link} color="black">
                      website
                    </ExternalLinkCursor>
                  )}
                  {githubLink && (
                    <ExternalLinkCursor href={githubLink} color="black">
                      code
                    </ExternalLinkCursor>
                  )}
                </Flex>
              </Flex>

              <div className="globalFont">{children}</div>
              <Flex gap="xs" wrap="wrap" className="globalFont">
                {skills.map((skill: string) => (
                  <Badge key={skill + src} color="dark" variant="outline">
                    {skill}
                  </Badge>
                ))}
              </Flex>
            </Stack>
          </ParallaxPc>
        </div>
      </Grid.Col>
    </Grid>
  );
};
