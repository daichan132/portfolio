import { panelDuration } from '@/utils/Const';
import { css } from '@emotion/react';
import { useViewportSize } from '@mantine/hooks';
import { motion } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';

const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] };

export const Panels = ({
  setPanelComplete,
  num = 7,
}: {
  setPanelComplete: Dispatch<SetStateAction<boolean>>;
  num?: number;
}) => {
  const { height } = useViewportSize();
  return (
    <>
      {Array.from({ length: num }, (a: number, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={{
            height: [0, height, 0],
            bottom: i % 2 === 0 ? [height, 0, 0] : [0, 0, height],
          }}
          exit={{
            height: [0, height, 0],
            top: i % 2 === 0 ? [height, 0, 0] : [0, 0, height],
          }}
          transition={{
            ...transition,
            duration: panelDuration,
            times: [0, 0.5, 1],
            delay: i * 0.03,
          }}
          css={css`
            height: 100vh;
            width: ${100 / num}vw;
            position: absolute;
            z-index: 110;
            left: ${(100 / num) * i}%;
            background: #eaeaea;
          `}
          onAnimationComplete={() => {
            // eslint-disable-next-line no-unused-expressions
            i === 0 && setPanelComplete(true);
          }}
        />
      ))}
    </>
  );
};
