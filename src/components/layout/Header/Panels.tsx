import { css } from '@emotion/react';
import { useViewportSize } from '@mantine/hooks';
import { motion } from 'framer-motion';
import { useState } from 'react';

const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] };

export const Panels = () => {
  const [panelComplete, setPanelComplete] = useState(false);
  const { height } = useViewportSize();
  return (
    <>
      <motion.div
        initial={{ height: 0 }}
        animate={{
          height: [0, height, 0],
          bottom: [height, 0, 0],
        }}
        exit={{
          height: [0, height, 0],
          top: [height, 0, 0],
        }}
        transition={{ ...transition, duration: 1.5, times: [0, 0.5, 1] }}
        css={css`
          height: 100vh;
          width: 50vw;
          position: absolute;
          z-index: 110;
          left: 0;
          background: ${panelComplete ? '#efefef' : '#efefef'};
        `}
      />
      <motion.div
        initial={{ height: 0 }}
        animate={{
          height: [0, height, 0],
          bottom: [0, 0, height],
        }}
        exit={{
          height: [0, height, 0],
          top: [height, 0, 0],
        }}
        transition={{ ...transition, duration: 1.5, times: [0, 0.5, 1] }}
        css={css`
          height: 100vh;
          width: 50vw;
          position: absolute;
          right: 0;
          z-index: 110;
          background: ${panelComplete ? '#efefef' : '#efefef'};
        `}
        onAnimationComplete={() => {
          setPanelComplete(!panelComplete);
        }}
      />
    </>
  );
};
