import { LogoText } from '@/components/elements';
import { css } from '@emotion/react';
import { Container, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HambergerMenu } from './HambergerMenu';

const style = css`
  position: fixed;
  top: 0;
  filter: invert(100%);
  mix-blend-mode: exclusion;
  color: black;
  z-index: 100;
  width: 100%;
  padding: 28px 0px;
  box-sizing: border-box;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .linkItem {
      font-size: 16px;
      display: flex;
      gap: 0px 30px;
      overflow: hidden;
    }
  }
`;

const scrollTop = (): number => {
  return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
};

const linkVariants = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0 },
};

const hambergerVariants = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0 },
};

export const Header = () => {
  const [isTop, setIsTop] = useState<boolean>(true);
  const theme = useMantineTheme();
  const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

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

  return (
    <header css={style}>
      <Container size="xl" className="container">
        <Link
          href="/"
          css={css`
            color: black;
          `}
        >
          <LogoText text="Daichan 132" initialism={!isTop} id="heaader" rem={isTop ? 2 : 3} />
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
              <div className="linkItem">
                <Link href="/works">All works</Link>
                <div>About me</div>
                <div>Contact</div>
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
              <HambergerMenu size={30} />
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
};
