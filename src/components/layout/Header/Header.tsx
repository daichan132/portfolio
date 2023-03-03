import { LogoText } from '@/components/elements';
import { ExternalLink } from '@/components/elements/ExternalLink';
import { scrollTop } from '@/utils/scrollTop';
import { css } from '@emotion/react';
import { Container, createStyles, Flex, Space, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HambergerMenu } from './HambergerMenu';

const useStyles = createStyles((theme, { isTop }: { isTop: boolean }) => ({
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
    transform: 'translate(0,-0.2rem)',
  },
  logo: {
    color: 'black',
    fontSize: '2rem',
    transition: 'all 0.2s ease-in-out',
    fontWeight: isTop ? 400 : 900,
    lineHeight: '1',
    [theme.fn.smallerThan('sm')]: {
      fontSize: '1.7rem',
    },
  },
}));

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
    if (position >= 30) {
      setIsTop(false);
    } else {
      setIsTop(true);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', onScroll);
    return (): void => document.removeEventListener('scroll', onScroll);
  });

  const { classes } = useStyles({ isTop });

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
                variants={linkVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
                transition={{
                  duration: 0.3,
                  type: 'tween',
                }}
              >
                <Flex
                  css={css`
                    line-height: 2;
                  `}
                >
                  Links:
                  <Space w="md" />
                  <ExternalLink href="https://github.com/daichan132">github</ExternalLink>
                </Flex>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        <AnimatePresence initial={false} mode="wait">
          {isTop && !sm ? (
            <motion.div
              key="linkItem"
              variants={linkVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{
                duration: 0.3,
                type: 'tween',
              }}
            >
              <div>
                <Link href="/works" className={classes.linkItem}>
                  All works
                </Link>
                <div className={classes.linkItem}>About me</div>
                <div className={classes.linkItem}>Contact</div>
              </div>
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
