import { SmoothScroll, CustomCursor } from '@/components/elements';
import { createStyles, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';

const useStyles = createStyles((theme) => ({
  main: {
    paddingTop: '10rem',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundImage:
      'linear-gradient(0deg, transparent calc(100% - 1px), #f0f0f0 calc(100% - 1px)),\n                    linear-gradient(90deg, transparent calc(100% - 1px), #f0f0f0 calc(100% - 1px))',
    backgroundSize: '30px 30px',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center center',
    [theme.fn.smallerThan('sm')]: {
      paddingTop: '4em',
      paddingBottom: `3rem`,
    },
  },
  bg: {
    minHeight: '100vh',
  },
}));

const variants = {
  hidden: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
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
    <>
      {!sm && <CustomCursor />}

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
            <div className={classes.main}>{children}</div>
            {path !== '/' && <Footer />}
          </SmoothScroll>
        </motion.main>
      </AnimatePresence>
    </>
  );
};
