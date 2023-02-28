import { SmoothScroll } from '@/components/elements/SmoothScroll';
import { Box } from '@mantine/core';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { Header } from '../Header';

const variants = {
  hidden: { opacity: 0, x: 0, y: -20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -20 },
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
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
          <SmoothScroll>
            <Box
              sx={() => ({
                minHeight: '100vh',
                paddingTop: '200px',
                paddingBottom: '200px',
              })}
            >
              {children}
            </Box>
          </SmoothScroll>
        </motion.main>
      </AnimatePresence>
    </>
  );
};
