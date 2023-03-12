import { createStyles, Grid, rem, Title, Text, Stack, Badge, Flex } from '@mantine/core';
import { type FC } from 'react';
import Image from 'next/image';
import { ExternalLinkCursor } from '../ExternalLink';

const useStyles = createStyles((theme) => ({
  container: {
    backgroundColor: '#454545',
    width: '100%',
  },
  imageContainer: {
    height: rem(200),
    position: 'relative',
    [theme.fn.smallerThan('md')]: {
      height: rem(150),
    },
  },
  image: {
    objectFit: 'cover',
  },
}));

export type WorkProps = {
  src: string;
  title: string;
  description: string;
  skills: string[];
  link?: string;
  githubLink?: string;
};

export const Work: FC<WorkProps> = ({ src, title, description, skills, link, githubLink }) => {
  const { classes } = useStyles();
  return (
    <Grid gutter="md" gutterMd={30} className={classes.container}>
      <Grid.Col span={12} md={7}>
        <div className={classes.imageContainer}>
          <Image fill src={src} alt={src} className={classes.image} />
        </div>
      </Grid.Col>
      <Grid.Col span={12} md="auto">
        <Stack justify="center" h="100%" p="sm">
          <Flex gap="sm" wrap="wrap" align="center">
            <Title order={2} color="white">
              {title}
            </Title>
            {link && (
              <ExternalLinkCursor href={link} color="white">
                link
              </ExternalLinkCursor>
            )}
            {githubLink && (
              <ExternalLinkCursor href={githubLink} color="white">
                code
              </ExternalLinkCursor>
            )}
          </Flex>

          <Text color="white">{description}</Text>
          <Flex gap="sm" wrap="wrap">
            {skills.map((skill: string) => (
              <Badge
                key={skill}
                variant="gradient"
                gradient={{ from: 'undefined', to: 'undefined' }}
              >
                {skill}
              </Badge>
            ))}
          </Flex>
        </Stack>
      </Grid.Col>
    </Grid>
  );
};
