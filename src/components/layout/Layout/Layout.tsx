import { SmoothScroll } from '@/components/elements';
import { NihonkaiColor } from '@/utils/Colors';
import { hexToRGBA } from '@/utils/hexToRgbA';
import { createStyles, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { Header } from '../Header';

const useStyles = createStyles((theme) => ({
  main: {
    minHeight: '100vh',
    paddingBottom: `5rem`,
    paddingTop: '11em',
    [theme.fn.smallerThan('sm')]: {
      paddingTop: '3em',
    },
  },
  graphPaperPattern: {
    backgroundImage: `linear-gradient(0deg, transparent 31px, ${hexToRGBA(
      NihonkaiColor,
      0.25
    )} 32px), linear-gradient(90deg,  transparent 31px, ${hexToRGBA(NihonkaiColor, 0.25)} 32px)`,
    backgroundSize: '32px 32px',
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
          className={classes.graphPaperPattern}
        >
          <SmoothScroll enabled={!sm}>
            <div className={classes.main}>{children}</div>
          </SmoothScroll>
        </motion.main>
      </AnimatePresence>
    </>
  );
};
