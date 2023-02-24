import { css } from '@emotion/react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { type FC } from 'react';

const style = (initialism: boolean) => css`
  overflow: hidden;
  white-space: nowrap;
  height: 50px;
  line-height: 50px;
  .text {
    transition: all 0.2s 0s ease-in-out;
    font-size: ${initialism ? '30px' : '40px'};
    font-weight: bold;
    letter-spacing: ${initialism ? '7px' : '0px'};
  }
`;

const listItem = (index: number) => {
  return {
    hidden: { opacity: 0, y: '0%' },
    show: { opacity: 1, y: 0, transition: { delay: 0.5 + index * 0.05 } },
  };
};

export type LogoTextProps = { text: string; initialism?: boolean; id?: string };

export const LogoText: FC<LogoTextProps> = ({ text, initialism = false, id = 'id' }) => {
  return (
    <div css={style(initialism)}>
      <LayoutGroup id={text}>
        <AnimatePresence>
          {text.split(' ').map((word, wordIndex) =>
            word.split('').map((char, index) =>
              !initialism || index === 0 ? (
                // eslint-disable-next-line react/no-array-index-key
                <span key={`${id}-${String(wordIndex)}-${index}`} className="text">
                  <motion.span
                    layoutId={`${id}-${String(wordIndex)}-${index}`}
                    variants={listItem(index)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    transition={{
                      duration: 0.5,
                      ease: 'easeInOut',
                    }}
                    style={{
                      display: 'inline-block',
                    }}
                  >
                    {char.toUpperCase()}
                  </motion.span>
                </span>
              ) : null
            )
          )}
        </AnimatePresence>
      </LayoutGroup>
    </div>
  );
};
