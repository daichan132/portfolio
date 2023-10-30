import { CustomCursor } from '@/components/elements';
import { cursorAtom } from '@/stores/cursorAtom';
import { createStyles, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { AnimatePresence, motion } from 'framer-motion';
import { useSetAtom } from 'jotai';
import { useRouter } from 'next/router';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import { Footer } from '../Footer';
import { Header } from '../Header';

const useStyles = createStyles(() => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    overflow: 'hidden',
    backgroundImage: "url('/6.png')",
    backgroundRepeat: 'repeat',
    backgroundSize: '500px',
    backgroundColor: 'rgba(244, 244, 244, 0.8)',
    backgroundBlendMode: 'lighten',
  },
  background: {},
}));

const variants = {
  hidden: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const theme = useMantineTheme();
  const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const { classes } = useStyles();

  const router = useRouter();
  const path = router.pathname;
  const setCursorData = useSetAtom(cursorAtom);
  return (
    <>
      <Head>
        <title>DAICHAN132-PF</title>
        <meta charSet="utf-8" />
        <meta property="og:image" content="/main-image/IMG_1182.PNG" />
        <meta property="og:title" content="DAICHAN132-PF" />
        <meta property="og:url" content="daichan132.com" />
        <meta property="og:description" content="daichan132's portfolio-若山大智" />
        <meta property="og:type" content="website" />
        <meta name="language" content="Japanese" />
        <meta name="description" content="daichan132's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Analytics />
      {!sm && <CustomCursor />}

      <Header />

      <div className={classes.main}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.main
            className={classes.background}
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{
              duration: 0.4,
            }}
            key={path}
            onMouseEnter={() => {
              setCursorData({ cursorVariant: 'default' });
            }}
          >
            {children}
            {path !== '/' && <Footer />}
          </motion.main>
        </AnimatePresence>
      </div>
    </>
  );
};
