import { LogoText, Clock, ExternalLinkCursor } from '@/components/elements';
import { cursorAtom } from '@/stores/cursorAtom';
import { scrollTop } from '@/utils/scrollTop';
import { Container, createStyles, Flex, Space, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { AnimatePresence, motion } from 'framer-motion';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { useEffect, useState } from 'react';
// eslint-disable-next-line camelcase
import { Train_One } from '@next/font/google';
import { HambergerMenu } from './HambergerMenu';

const font = Train_One({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
});

const useStyles = createStyles((theme) => ({
  header: {
    position: 'fixed',
    top: 0,
    filter: 'invert(100%)',
    mixBlendMode: 'exclusion',
    color: 'black',
    zIndex: 100,
    width: '100%',
    boxSizing: 'border-box',
    marginTop: '2em',
    padding: '0 2em',
    [theme.fn.smallerThan('sm')]: {
      marginTop: '0.5em',
      padding: '0 0em',
    },
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  linkItem: {
    display: 'block',
    overflow: 'hidden',
    color: 'black',
    textDecoration: 'none',
    fontSize: '1.1rem',
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
  logo: {
    fontFamily: font.style.fontFamily,
    color: 'black',
    fontSize: '2.5rem',
    transition: 'all 0.2s ease-in-out',
    fontWeight: 'bold',
    lineHeight: '1',
    [theme.fn.smallerThan('sm')]: {
      fontSize: '1.7rem',
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

const hambergerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const Header = () => {
  const theme = useMantineTheme();
  const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const [isTop, setIsTop] = useState<boolean>(true);
  const onScroll = (): void => {
    const position = scrollTop();
    if (position >= 80) {
      setIsTop(false);
    } else {
      setIsTop(true);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', onScroll);
    return (): void => document.removeEventListener('scroll', onScroll);
  });

  const { classes } = useStyles();

  const [, setCursorData] = useAtom(cursorAtom);

  return (
    <header className={classes.header}>
      <Container size="lg" className={classes.container}>
        <div>
          <Link
            href="/"
            className={classes.logo}
            onMouseEnter={() => {
              setCursorData({ cursorVariant: 'hover' });
            }}
            onMouseLeave={() => {
              setCursorData({ cursorVariant: 'default' });
            }}
          >
            <LogoText text="DAICHAN 132" initialism={!isTop} id="header" enabled={!sm} />
          </Link>
          <AnimatePresence initial={false} mode="wait">
            {isTop && !sm ? (
              <motion.div
                key="linkItem"
                variants={containerLinkVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
                transition={{
                  duration: 0.3,
                  type: 'tween',
                }}
              >
                <Space h="xs" />
                <motion.div variants={linkVariants}>
                  <Clock />
                </motion.div>
                <motion.div variants={linkVariants}>
                  <Flex>
                    Links:
                    <Space w="md" />
                    <ExternalLinkCursor href="https://github.com/daichan132">
                      github
                    </ExternalLinkCursor>
                  </Flex>
                </motion.div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        <AnimatePresence initial={false} mode="wait">
          {isTop && !sm ? (
            <motion.div
              key="linkItem"
              variants={containerLinkVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{
                duration: 0.3,
                type: 'tween',
              }}
            >
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
              <motion.div variants={linkVariants}>
                <div
                  className={classes.linkItem}
                  onMouseEnter={() => {
                    setCursorData({ cursorVariant: 'hover' });
                  }}
                  onMouseLeave={() => {
                    setCursorData({ cursorVariant: 'default' });
                  }}
                >
                  About me
                </div>
              </motion.div>

              <motion.div variants={linkVariants}>
                <div
                  className={classes.linkItem}
                  onMouseEnter={() => {
                    setCursorData({ cursorVariant: 'hover' });
                  }}
                  onMouseLeave={() => {
                    setCursorData({ cursorVariant: 'default' });
                  }}
                >
                  Contact
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="hamberger"
              variants={hambergerVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{
                duration: 0.3,
                type: 'tween',
              }}
            >
              <HambergerMenu size={sm ? 25 : 30} />
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
};
