import { css } from '@emotion/react';
import { useMouse } from '@mantine/hooks';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { cursorAtom } from '@/stores/cursorAtom';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const smCursorSize = 16;
const smallStyle = css`
  position: fixed;
  z-index: 1000;
  display: flex;
  height: ${smCursorSize}px;
  width: ${smCursorSize}px;
  background-color: black;
  border-radius: 100%;
  filter: invert(100%);
  mix-blend-mode: exclusion;
  pointer-events: none;
`;

const smallVariants = (x: number, y: number) => ({
  default: {
    opacity: 1,
    x: x - smCursorSize / 2,
    y: y - smCursorSize / 2,
  },
  hover: {
    opacity: 1,
    scale: 5,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 150,
    },
    x: x - smCursorSize / 2,
    y: y - smCursorSize / 2,
  },
});

export const CustomCursor = () => {
  const { x, y } = useMouse();

  const [{ cursorVariant }, setCursorData] = useAtom(cursorAtom);
  const router = useRouter();
  useEffect(() => {
    setCursorData({ cursorVariant: 'default' });
  }, [router.pathname, setCursorData]);

  return (
    <motion.div
      variants={smallVariants(x, y)}
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
