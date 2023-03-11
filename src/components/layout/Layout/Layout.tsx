import { SmoothScroll, CustomCursor } from '@/components/elements';
import { SweetSepiaColor } from '@/utils/Colors';
import { hexToRGBA } from '@/utils/hexToRgbA';
import { createStyles, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';

const useStyles = createStyles((theme) => ({
  main: {
    paddingBottom: `0rem`,
    paddingTop: '12em',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    [theme.fn.smallerThan('sm')]: {
      paddingTop: '3em',
    },
  },
  bg: {
    minHeight: '100vh',
    backgroundColor: `${hexToRGBA(SweetSepiaColor, 0.15)}`,
  },
}));

const variants = {
  hidden: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const theme = useMantineTheme();
  const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const { classes } = useStyles();

  const router = useRouter();
  const path = router.pathname;

  const [isLoaging, setIsLoaging] = useState<boolean>(true);

  useEffect(() => {
    if (sessionStorage.getItem('access')) {
      setIsLoaging(false);
    } else {
      setIsLoaging(true);
      setTimeout(() => {
        sessionStorage.setItem('access', 'firstaccess');
        setIsLoaging(false);
      }, 3300);
    }
  }, []);

  return isLoaging ? (
    <div>aa</div>
  ) : (
    <div className={classes.bg}>
      <CustomCursor />

      <Header />

      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{
            duration: 0.5,
          }}
          key={path}
        >
          <SmoothScroll enabled={!sm}>
            <div className={classes.main}>
              {children}
              <Footer />
            </div>
          </SmoothScroll>
        </motion.main>
      </AnimatePresence>
    </div>
  );
};
