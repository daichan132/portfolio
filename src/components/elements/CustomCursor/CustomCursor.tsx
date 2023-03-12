import { CharcoalColor, ConcreteGrayColor } from '@/utils/Colors';
import { hexToRGBA } from '@/utils/hexToRgbA';
import { css } from '@emotion/react';
import { useMouse } from '@mantine/hooks';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { cursorAtom } from '@/stores/cursorAtom';

const cursorSize = 60;

const bigStyle = css`
  position: fixed;
  z-index: 100;
  display: flex;
  height: ${cursorSize}px;
  width: ${cursorSize}px;
  background-color: ${hexToRGBA(ConcreteGrayColor, 0.2)};
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

const smallStyle = css`
  position: fixed;
  z-index: 100;
  display: flex;
  height: 10px;
  width: 10px;
  background-color: ${CharcoalColor};
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
    backgroundColor: 'black',
  },
});

export const CustomCursor = () => {
  const { x, y } = useMouse();

  const [{ cursorVariant }] = useAtom(cursorAtom);

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
        style={{ x: x - 5, y: y - 5 }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 150,
        }}
      />
    </>
  );
};
