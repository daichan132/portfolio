import { LogoText } from '@/components/elements';
import { css } from '@emotion/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const style = css`
  position: fixed;
  top: 0;
  filter: invert(100%);
  mix-blend-mode: exclusion;
  color: black;
  z-index: 100;
  width: 100vw;
  padding: 28px 36px 28px 24px;
  box-sizing: border-box;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .linkItem {
      display: flex;
      gap: 30px 30px;
    }
  }

  .linkText {
    overflow: hidden;
    a {
      font-size: 16px;
      text-decoration: none;
      color: black;
    }
  }
`;

const scrollTop = (): number => {
  return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
};

const linkAnim = {
  hidden: { opacity: 0, y: -100 },
  show: { opacity: 1, y: 0 },
};

export const Header = () => {
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

  return (
    <header css={style}>
      <div className="container">
        <LogoText text="Daichan 132" initialism={!isTop} id="header" fontSize={isTop ? 40 : 60} />
        <div className="linkItem">
          <div>All works</div>
          <div>About me</div>
          <div>Contact me</div>
        </div>
      </div>
      <AnimatePresence>
        {isTop ? (
          <div className="linkText">
            <motion.a
              variants={linkAnim}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{
                duration: 0.3,
              }}
              style={{
                display: 'inline-block',
              }}
              href="https://github.com/daichan132"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </motion.a>
          </div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};
