import { css } from '@emotion/react';
import { LayoutGroup, motion } from 'framer-motion';
import { type FC } from 'react';

const style = () => css`
  white-space: nowrap;
`;

const listItem = (index: number) => {
  return {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { delay: 0.2 + index * 0.015 } },
  };
};

export type LogoTextProps = { text: string; initialism?: boolean; id?: string; enabled?: boolean };

export const LogoText: FC<LogoTextProps> = ({
  text,
  initialism = false,
  id = 'id',
  enabled = true,
}) => (
  <div css={style()}>
    <LayoutGroup id={id}>
      {text.split(' ').map((word, wordIndex) =>
        word.split('').map((char, index) =>
          (!initialism && enabled) || index === 0 ? (
            // eslint-disable-next-line react/no-array-index-key
            <span key={`${id}-${String(wordIndex)}-${index}`} className="text">
              <motion.span
                layoutId={`${id}-${String(wordIndex)}-${index}`}
                variants={enabled ? listItem(index) : undefined}
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
                {char}
              </motion.span>
            </span>
          ) : null
        )
      )}
    </LayoutGroup>
  </div>
);
