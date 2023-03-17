import { cursorAtom } from '@/stores/cursorAtom';
import { Container, Portal, Stack, Box, rem, createStyles } from '@mantine/core';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import Link from 'next/link';

const useStyles = createStyles(() => ({
  linkItem: {
    display: 'block',
    overflow: 'hidden',
    color: 'black',
    textDecoration: 'none',
    fontSize: rem(28),
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

const containerLinkVariants = {
  hidden: {
    transition: {
      staggerChildren: 0.05,
    },
  },
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0 },
};

export const FullscreenMenu = () => {
  const { classes } = useStyles();

  const [, setCursorData] = useAtom(cursorAtom);
  return (
    <Portal>
      <Box
        component={motion.div}
        initial={{ opacity: 0.5, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: 'easeInOut' }}
        sx={() => ({
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: 99,
          position: 'fixed',
          backgroundColor: 'white',
          padding: '0px 20px',
        })}
      >
        <Container py={70}>
          <Stack align="center" spacing={20}>
            <motion.div
              key="linkItem"
              variants={containerLinkVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{
                duration: 0.5,
              }}
            >
              <motion.div variants={linkVariants}>
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
              </motion.div>
              <motion.div variants={linkVariants}>
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
              </motion.div>
              <motion.div variants={linkVariants}>
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
              </motion.div>
            </motion.div>
          </Stack>
        </Container>
      </Box>
    </Portal>
  );
};
