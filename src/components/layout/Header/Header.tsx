import { LogoText, Clock, ExternalLink } from '@/components/elements';
import { scrollTop } from '@/utils/scrollTop';
import { Container, createStyles, Flex, Space, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HambergerMenu } from './HambergerMenu';

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
  },
  logo: {
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

  return (
    <header className={classes.header}>
      <Container size="lg" className={classes.container}>
        <div>
          <Link href="/" className={classes.logo}>
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
                    <ExternalLink href="https://github.com/daichan132">github</ExternalLink>
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
                <Link href="/works" className={classes.linkItem}>
                  All works
                </Link>
              </motion.div>
              <motion.div variants={linkVariants}>
                <div className={classes.linkItem}>About me</div>
              </motion.div>

              <motion.div variants={linkVariants}>
                <div className={classes.linkItem}>Contact</div>
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
