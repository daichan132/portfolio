import { cursorAtom } from '@/stores/cursorAtom';
import { Container, createStyles, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { type FC } from 'react';

const useStyles = createStyles((theme) => ({
  footer: {
    width: '100%',
    boxSizing: 'border-box',
    marginTop: 'auto',
    backdropFilter: 'blur(3px)',
    borderTop: '1px solid',
    [theme.fn.smallerThan('sm')]: {
      padding: '1em 0em',
    },
  },
  container: {
    padding: '2em 2em',
    display: 'flex',
    justifyContent: 'space-between',
  },
  linkItemContainer: { display: 'flex', gap: '2rem' },
  linkItem: {
    display: 'block',
    overflow: 'hidden',
    color: '#333333',
    textDecoration: 'none',
    position: 'relative',
    paddingBottom: '2px',
    '&::after': {
      content: "''",
      background: '#000000',
      width: '100%',
      height: '2px',
      position: 'absolute',
      left: '0',
      bottom: '0',
      margin: 'auto',
      transition: 'transform .3s',
      transformOrigin: 'right top',
      transform: 'scale(0, 1)',
    },
    '&:hover::after': {
      transformOrigin: 'left top',
      transform: 'scale(1, 1)',
    },
  },
}));
export const Footer: FC = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const [, setCursorData] = useAtom(cursorAtom);
  return (
    <footer className={classes.footer}>
      <Container size="lg" className={classes.container}>
        {!sm ? '© 2023 daichan132' : null}
        <div className={classes.linkItemContainer}>
          <Link
            href="/"
            className={classes.linkItem}
            onMouseEnter={() => {
              setCursorData({ cursorVariant: 'hover' });
            }}
            onMouseLeave={() => {
              setCursorData({ cursorVariant: 'default' });
            }}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={classes.linkItem}
            onMouseEnter={() => {
              setCursorData({ cursorVariant: 'hover' });
            }}
            onMouseLeave={() => {
              setCursorData({ cursorVariant: 'default' });
            }}
          >
            About me
          </Link>
          <Link
            href="/works"
            className={classes.linkItem}
            onMouseEnter={() => {
              setCursorData({ cursorVariant: 'hover' });
            }}
            onMouseLeave={() => {
              setCursorData({ cursorVariant: 'default' });
            }}
          >
            All works
          </Link>
        </div>
      </Container>
    </footer>
  );
};
