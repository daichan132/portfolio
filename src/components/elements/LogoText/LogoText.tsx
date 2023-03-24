import { css } from '@emotion/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState, type FC } from 'react';

const style = () => css`
  white-space: nowrap;
`;

const listItem = (index: number) => {
  return {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { delay: 0.2 + index * 0.02 } },
    exit: { opacity: 0 },
  };
};

export type LogoTextProps = { text: string; initialism?: boolean; id?: string; enabled?: boolean };

export const LogoText: FC<LogoTextProps> = ({
  text,
  initialism = false,
  id = 'id',
  enabled = true,
}) => {
  const [isLayoutIdActive, setIsLayoutIdActive] = useState(true);

  useEffect(() => {
    if (initialism) {
      setIsLayoutIdActive(true);
    }
    const timer = setTimeout(() => {
      setIsLayoutIdActive(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [initialism]);

  return (
    <div css={style()}>
      <AnimatePresence initial={false}>
        {text.split(' ').map((word, wordIndex) =>
          word.split('').map((char, index) =>
            (!initialism && enabled) || index === 0 ? (
              // eslint-disable-next-line react/no-array-index-key
              <span key={`${id}-${String(wordIndex)}-${index}`} className="text">
                <motion.span
                  layoutId={isLayoutIdActive ? `${id}-${String(wordIndex)}-${index}` : undefined}
                  variants={enabled ? listItem(index) : undefined}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  transition={{
                    duration: 0.5,
                  }}
                  style={{
                    display: 'inline-block',
                  }}
                >
                  {char}
                </motion.span>
              </span>
            ) : null
          )
        )}
      </AnimatePresence>
    </div>
  );
};
