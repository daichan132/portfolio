import { NeptuneColor } from '@/utils/Colors';
import { hexToRGBA } from '@/utils/hexToRgbA';
import { css } from '@emotion/react';
import { useMouse } from '@mantine/hooks';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { cursorAtom } from '@/stores/cursorAtom';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const cursorSize = 80;

const bigStyle = css`
  position: fixed;
  z-index: 100;
  display: flex;
  height: ${cursorSize}px;
  width: ${cursorSize}px;
  background-color: ${hexToRGBA(NeptuneColor, 0.8)};
  border-radius: 100%;
  filter: invert(100%);
  mix-blend-mode: exclusion;
  pointer-events: none;
`;

const bigVariants = (x: number, y: number) => ({
  default: {
    opacity: 1,
    x: x - cursorSize / 2,
    y: y - cursorSize / 2,
  },
  hover: {
    opacity: 0,
    scale: 0.01,
    x: x - cursorSize / 2,
    y: y - cursorSize / 2,
  },
});

const smCursorSize = 10;
const smallStyle = css`
  position: fixed;
  z-index: 100;
  display: flex;
  height: ${smCursorSize}px;
  width: ${smCursorSize}px;
  background-color: black;
  border-radius: 100%;
  filter: invert(100%);
  mix-blend-mode: exclusion;
  pointer-events: none;
`;

const smallVariants = () => ({
  default: {
    opacity: 1,
  },
  hover: {
    opacity: 1,
    scale: 7,
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
    <>
      <motion.div
        variants={bigVariants(x, y)}
        css={bigStyle}
        animate={cursorVariant}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 150,
        }}
      />
      <motion.div
        variants={smallVariants()}
        animate={cursorVariant}
        css={smallStyle}
        style={{ x: x - smCursorSize / 2, y: y - smCursorSize / 2 }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 150,
        }}
      />
    </>
  );
};
