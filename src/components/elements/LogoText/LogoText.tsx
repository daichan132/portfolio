import { css } from '@emotion/react';
import { LayoutGroup, motion } from 'framer-motion';
import { type FC } from 'react';

const style = (fontSize: number) => css`
  white-space: nowrap;
  height: 50px;
  line-height: 50px;
  .text {
    transition: all 0.3s 0s ease-out;
    font-size: ${fontSize}px;
    font-weight: bold;
  }
`;

const listItem = (index: number) => {
  return {
    hidden: { opacity: 0, y: -5, x: -10 },
    show: { opacity: 1, y: 0, x: 0, transition: { delay: 0.2 + index * 0.015 } },
  };
};

export type LogoTextProps = { text: string; initialism?: boolean; id?: string; fontSize?: number };

export const LogoText: FC<LogoTextProps> = ({
  text,
  initialism = false,
  id = 'id',
  fontSize = 30,
}) => {
  return (
    <div css={style(fontSize)}>
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
                    duration: 0.8,
                    type: 'spring',
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
};
