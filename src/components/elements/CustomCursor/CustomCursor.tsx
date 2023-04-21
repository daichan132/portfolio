import { css } from '@emotion/react';
import { useIdle, useMouse } from '@mantine/hooks';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { cursorAtom } from '@/stores/cursorAtom';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const smCursorSize = 18;
const smallStyle = css`
  position: fixed;
  z-index: 1000;
  display: flex;
  border-radius: 100%;
  filter: invert(100%);
  mix-blend-mode: exclusion;
  transition: background-color 0.3s;
  pointer-events: none;
  border: 1px solid;
`;

const smallVariants = (x: number, y: number, idle: boolean) => ({
  default: {
    opacity: idle ? 0 : 1,
    x: x - smCursorSize / 2,
    y: y - smCursorSize / 2,
    height: `${smCursorSize}px`,
    width: `${smCursorSize}px`,
    backgroundColor: 'transparent',
  },
  hover: {
    height: `${smCursorSize * 5}px`,
    width: `${smCursorSize * 5}px`,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 150,
    },
    x: x - (smCursorSize * 5) / 2,
    y: y - (smCursorSize * 5) / 2,
  },
});

export const CustomCursor = () => {
  const { x, y } = useMouse();
  const idle = useIdle(1000, { events: ['mousemove'] });
  const [{ cursorVariant }, setCursorData] = useAtom(cursorAtom);
  const router = useRouter();
  useEffect(() => {
    setCursorData({ cursorVariant: 'default' });
  }, [router.pathname, setCursorData]);

  return (
    <motion.div
      variants={smallVariants(x, y, idle)}
      animate={cursorVariant}
      css={smallStyle}
      transition={{
        type: 'spring',
        damping: 25,
        stiffness: 150,
      }}
    />
  );
};
