import { css } from '@emotion/react';
import { LayoutGroup, motion } from 'framer-motion';
import { type FC } from 'react';

const style = (rem: number) => css`
  white-space: nowrap;
  height: 2.5rem;
  line-height: 2.5rem;
  .text {
    transition: all 0.3s 0s ease-out;
    font-size: ${rem}rem;
    font-weight: bold;
  }
`;

const listItem = (index: number) => {
  return {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { delay: 0.2 + index * 0.015 } },
  };
};

export type LogoTextProps = { text: string; initialism?: boolean; id?: string; rem?: number };

export const LogoText: FC<LogoTextProps> = ({ text, initialism = false, id = 'id', rem = 1 }) => (
  <div css={style(rem)}>
    <LayoutGroup id={id}>
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
                transition={{
                  duration: 0.35,
                  type: 'tween',
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
    </LayoutGroup>
  </div>
);
