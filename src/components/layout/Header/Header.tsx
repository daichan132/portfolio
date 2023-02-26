import { LogoText } from '@/components/elements';
import { css } from '@emotion/react';
import { Container } from '@mantine/core';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { LinkItem } from './LinkItem';

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
      font-size: 18px;
      display: flex;
      gap: 0px 30px;
      overflow: hidden;
    }
  }
`;

const scrollTop = (): number => {
  return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
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
      <Container size="lg" px={50}>
        <div className="container">
          <Link
            href="/"
            css={css`
              color: black;
            `}
          >
            <LogoText
              text="Daichan 132"
              initialism={!isTop}
              id="header"
              fontSize={isTop ? 30 : 40}
            />
          </Link>
          <AnimatePresence>
            {isTop ? (
              <div className="linkItem">
                <LinkItem>
                  <Link href="/works">All works</Link>
                </LinkItem>
                <LinkItem>
                  <div>About me</div>
                </LinkItem>
                <LinkItem>
                  <div>Contact</div>
                </LinkItem>
              </div>
            ) : null}
          </AnimatePresence>
        </div>
      </Container>
    </header>
  );
};
