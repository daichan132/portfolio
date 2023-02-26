import { css } from '@emotion/react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useCallback, useLayoutEffect, useRef, useState, type FC } from 'react';

export type SmoothScrollProps = { children: React.ReactNode };

export const SmoothScroll: FC<SmoothScrollProps> = ({ children }) => {
  const scrollRef = useRef(null);
  const [pageHeight, setPageHeight] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const resizePageHeight = useCallback((entries: any[]) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const entry of entries) {
      setPageHeight(entry.contentRect.height);
    }
  }, []);
  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => resizePageHeight(entries));
    if (scrollRef.current) {
      resizeObserver.observe(scrollRef.current);
    }
    return () => resizeObserver.disconnect();
  }, [scrollRef, resizePageHeight]);
  const { scrollY } = useScroll();
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const spring = useSpring(transform, physics);

  return (
    <>
      <motion.div
        ref={scrollRef}
        style={{ y: spring }}
        css={css`
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          will-change: transform;
        `}
      >
        {children}
      </motion.div>
      <div style={{ height: pageHeight }} />
    </>
  );
};
