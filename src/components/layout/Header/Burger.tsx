import { Dispatch, SetStateAction } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { css } from '@emotion/react';
import { useAtom } from 'jotai';
import { cursorAtom } from '@/stores/cursorAtom';

const path01Variants = {
  open: { d: 'M3.06061 2.99999L21.0606 21' },
  closed: { d: 'M0 9.5L24 9.5' },
};

const path02Variants = {
  open: { d: 'M3.00006 21.0607L21 3.06064' },
  moving: { d: 'M0 14.5L24 14.5' },
  closed: { d: 'M0 14.5L15 14.5' },
};
const style = css`
  zoom: 150%;
`;

export const Burger = ({
  opened,
  setOpened,
}: {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
}) => {
  const path01Controls = useAnimation();
  const path02Controls = useAnimation();

  const onClick = async () => {
    setOpened(!opened);
    if (!opened) {
      await path02Controls.start(path02Variants.moving);
      path01Controls.start(path01Variants.open);
      path02Controls.start(path02Variants.open);
    } else {
      path01Controls.start(path01Variants.closed);
      await path02Controls.start(path02Variants.moving);
      path02Controls.start(path02Variants.closed);
    }
  };
  const [, setCursorData] = useAtom(cursorAtom);

  return (
    <div
      onClick={onClick}
      aria-hidden="true"
      onMouseEnter={() => {
        setCursorData({ cursorVariant: 'hover' });
      }}
      onMouseLeave={() => {
        setCursorData({ cursorVariant: 'default' });
      }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" css={style}>
        <motion.path
          {...path01Variants.closed}
          animate={path01Controls}
          transition={{ duration: 0.2 }}
          stroke="black"
        />
        <motion.path
          {...path02Variants.closed}
          animate={path02Controls}
          transition={{ duration: 0.2 }}
          stroke="black"
        />
      </svg>
    </div>
  );
};
