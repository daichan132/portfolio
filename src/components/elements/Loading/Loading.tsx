import { css } from '@emotion/react';
import { Center, Loader, Portal } from '@mantine/core';
import { motion } from 'framer-motion';
import { type FC } from 'react';

const variants = {
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};
export const Loading: FC = () => {
  return (
    <Portal>
      <motion.div
        variants={variants}
        animate="enter"
        exit="exit"
        transition={{
          duration: 1,
        }}
        css={css`
          position: absolute;
          z-index: 10000000;
          inset: 0px 0px;
          background-color: white;
        `}
      >
        <Center
          css={css`
            height: 100%;
            width: 100%;
          `}
        >
          <Loader />
        </Center>
      </motion.div>
    </Portal>
  );
};
