import { createStyles, Grid, rem, Stack, Badge, Flex, Center } from '@mantine/core';
import { ReactNode, type FC } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';
import { ExternalLinkCursor } from '../../elements/ExternalLink';
import { ParallaxPc } from '../../elements/Parallax';

const useStyles = createStyles((theme, { color }: { color: string }) => ({
  container: {
    transition: 'all 0.5s ease-in-out',
    padding: '0.5rem 0',
    display: 'flex',
    alignItems: 'center',
  },
  contentBox: {
    position: 'relative',
    height: rem(400),
    [theme.fn.smallerThan('md')]: {
      height: rem(400),
    },
    [theme.fn.smallerThan('sm')]: {
      height: rem(300),
    },
  },
  box: {
    backgroundColor: color,
    width: '100%',
    height: '100%',
  },
  content: {
    position: 'relative',
    width: '85%',
    height: '70%',
    overflow: 'hidden',
  },
  image: {
    objectFit: 'cover',
    transition: 'all 0.5s ease-in-out',
    '&:hover': { transform: 'scale(1.05)' },
  },
  title: {
    fontSize: rem(32),
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
  return (
    <div className={classes.container}>
      <Grid gutter="md" gutterMd={30} w="100%">
        <Grid.Col span={12} sm={6} md={7} order={reverse ? 2 : 1}>
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
            <ParallaxPc offset={30}>
              <div className={classes.box} />
            </ParallaxPc>

            <ParallaxPc offset={0}>
              <Center
                css={css`
                  height: 100%;
                  width: 100%;
                  transform: translate(0, -2%);
                `}
              >
                <div className={classes.content}>
                  <Image fill src={src} alt={src} className={classes.image} />
                </div>
              </Center>
            </ParallaxPc>
          </div>
        </Grid.Col>
        <Grid.Col
          span={12}
          sm="auto"
          order={reverse ? 1 : 2}
          css={css`
            .Parallax {
              height: 100%;
              width: 100%;
            }
          `}
        >
          <ParallaxPc offset={60}>
            <Stack justify="center" h="100%" p="sm">
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
        </Grid.Col>
      </Grid>
    </div>
  );
};
