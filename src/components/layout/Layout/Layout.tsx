import { SmoothScroll } from '@/components/elements/SmoothScroll';
import { createStyles, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { Header } from '../Header';

const useStyles = createStyles((theme) => ({
  main: {
    minHeight: '100vh',
    paddingBottom: `5rem`,
    marginTop: '10rem',
    [theme.fn.smallerThan('sm')]: {
      marginTop: '3.2em',
    },
  },
}));

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const theme = useMantineTheme();
  const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const { classes } = useStyles();

  const router = useRouter();
  const path = router.pathname;
  return (
    <>
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
          </SmoothScroll>
        </motion.main>
      </AnimatePresence>
    </>
  );
};
