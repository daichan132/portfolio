import { LogoText, Clock, ExternalLinkCursor } from '@/components/elements';
import { cursorAtom } from '@/stores/cursorAtom';
import { scrollTop } from '@/utils/scrollTop';
import { css } from '@emotion/react';
import { Container, createStyles, Flex, rem, Space, useMantineTheme, Box } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { AnimatePresence, motion } from 'framer-motion';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FullscreenMenu } from './FullScreenMenu';
import { HambergerMenu } from './HambergerMenu';
import { Panels } from './Panels';

const useStyles = createStyles((theme, { initialism }: { initialism: boolean }) => ({
  header: {
    position: 'fixed',
    top: 0,
    color: '#333333',
    zIndex: 100,
    width: '100%',
    boxSizing: 'border-box',
    padding: '0 2em 3em 0',
    transition: 'all 0.5s ease',
    [theme.fn.smallerThan('sm')]: {
      padding: '0 0em',
    },
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '2em',
    [theme.fn.smallerThan('sm')]: {
      marginTop: '0.5em',
    },
  },
  linkItem: {
    display: 'block',
    overflow: 'hidden',
    color: '#333333',
    textDecoration: 'none',
    fontSize: rem(20),
    position: 'relative',
    paddingBottom: '2px',
    background: 'transparent',
    '&::after': {
      content: "''",
      background: '#000000',
      width: '100%',
      height: '2px',
      position: 'absolute',
      left: '0',
      bottom: '0',
      margin: 'auto',
      transition: 'transform .5s',
      transformOrigin: 'right top',
      transform: 'scale(0, 1)',
    },
    '&:hover::after': {
      transformOrigin: 'left top',
      transform: 'scale(1, 1)',
    },
  },
  logo: {
    zIndex: 99,
    color: '#333333',
    fontWeight: initialism ? 'normal' : 'bold',
    fontSize: initialism ? rem(32) : rem(52),
    transition: 'all 0.3s ease-in-out',
    lineHeight: '1',
    [theme.fn.smallerThan('sm')]: {
      fontSize: '1.7rem',
    },
  },
  text: {
    fontSize: rem(18),
  },
}));

const containerLinkVariants = {
  hidden: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const containerSubVariants = {
  hidden: {
    transition: {
      staggerChildren: 0.15,
    },
  },
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: 0 },
  show: { opacity: 1, y: 0 },
};

const hambergerVariants = {
  hidden: { opacity: 0, y: 0 },
  show: { opacity: 1, y: 0 },
};

export const Header = () => {
  const theme = useMantineTheme();
  const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const [opened, setOpened] = useState<boolean>(true);
  const [isTop, setIsTop] = useState<boolean>(true);
  const onScroll = (): void => {
    const position = scrollTop();
    if (position >= 40) {
      setIsTop(false);
    } else {
      setIsTop(true);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', onScroll);
    return (): void => document.removeEventListener('scroll', onScroll);
  });

  const [, setCursorData] = useAtom(cursorAtom);
  const router = useRouter();

  useEffect(() => {
    setOpened(false);
  }, [router.pathname, setOpened, isTop]);

  const { classes } = useStyles({ initialism: !isTop });

  const [isActive, setActive] = useState(false);

  useEffect(() => {
    setActive(false);
    const timer = setTimeout(() => {
      setActive(true);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const [panelComplete, setPanelComplete] = useState(false);
  useEffect(() => {
    setPanelComplete(!panelComplete);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opened]);

  return (
    <header className={classes.header}>
      <Container size="xl" className={classes.container}>
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
                variants={containerSubVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
                transition={{
                  duration: 0.5,
                }}
                className={classes.text}
              >
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
        <div>
          <div
            css={css`
              position: relative;
              z-index: 101;
            `}
          >
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
              ) : (
                <motion.div
                  key="hamberger"
                  variants={hambergerVariants}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  transition={{
                    duration: 0.3,
                  }}
                >
                  <HambergerMenu opened={opened} setOpened={setOpened} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <FullscreenMenu open={opened} />
          <Box
            sx={() => ({
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              zIndex: 103,
              position: 'fixed',
              pointerEvents: panelComplete ? 'all' : 'none',
            })}
          >
            <AnimatePresence
              onExitComplete={() => {
                setPanelComplete(false);
              }}
            >
              {opened && isActive && (
                <Panels panelComplete={panelComplete} setPanelComplete={setPanelComplete} />
              )}
            </AnimatePresence>
          </Box>
        </div>
      </Container>
    </header>
  );
};
