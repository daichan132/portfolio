import { CustomCursor, SmoothScroll } from '@/components/elements';
import { cursorAtom } from '@/stores/cursorAtom';
import { createStyles, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { AnimatePresence, motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { Footer } from '../Footer';
import { Header } from '../Header';

const useStyles = createStyles(() => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    // backgroundImage:
    //   'linear-gradient(to right,#ffffff,#ffffff 10%,#f0f0f0 11%,#f0f0f0 12%,transparent 13%,transparent 87%,#f0f0f0 88%,#f0f0f0 89%,#ffffff 90%,#ffffff),   linear-gradient(to bottom,transparent,transparent 97%,#f0f0f0 98%,#f0f0f0)',
    // backgroundSize: '40px 40px',
    // backgroundRepeat: 'repeat',
    // backgroundPosition: 'left top',
  },
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
  const [, setCursorData] = useAtom(cursorAtom);
  return (
    <>
      {!sm && <CustomCursor />}

      <Header />

      <SmoothScroll enabled={!sm}>
        <div className={classes.main}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.main
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
      </SmoothScroll>
    </>
  );
};
