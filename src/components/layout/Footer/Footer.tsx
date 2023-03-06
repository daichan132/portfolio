import { Container, createStyles, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';
import { type FC } from 'react';

const useStyles = createStyles((theme) => ({
  footer: {
    width: '100%',
    boxSizing: 'border-box',
    padding: '2em 2em',
    borderTop: '1px solid',
    marginTop: 'auto',
    [theme.fn.smallerThan('sm')]: {
      padding: '1em 0em',
    },
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  linkItemContainer: { display: 'flex', gap: '2rem' },
  linkItem: {
    overflow: 'hidden',
    color: 'black',
    textDecoration: 'none',
    fontSize: '1rem',
  },
}));
export const Footer: FC = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  return (
    <footer className={classes.footer}>
      <Container size="lg" className={classes.container}>
        {!sm ? '© 2023 daichan132' : null}
        <div className={classes.linkItemContainer}>
          <Link href="/works" className={classes.linkItem}>
            All works
          </Link>
          <div className={classes.linkItem}>About me</div>
          <div className={classes.linkItem}>Contact</div>
        </div>
      </Container>
    </footer>
  );
};
