import { cursorAtom } from '@/stores/cursorAtom';
import { css } from '@emotion/react';
import { useAtom } from 'jotai';
import { ReactNode, type FC } from 'react';
import { VscLinkExternal } from 'react-icons/vsc';

const style = (color: string) => css`
  color: ${color};
  text-decoration: none;
  border-bottom: 2px solid ${color};
  padding-bottom: 1px;
  p {
    display: inline;
  }
  .icon {
    display: inline;
    transform: translate(0, 3px);
    margin: 0 4px;
    stroke-width: 1px;
  }
`;
export type ExternalLinkProps = { children: ReactNode; href: string; color?: string };

export const ExternalLink: FC<ExternalLinkProps> = ({ children, href, color = 'black' }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" css={style(color)}>
      <p>{children}</p>
      <VscLinkExternal size="1rem" color={color} className="icon" />
    </a>
  );
};

export const ExternalLinkCursor: FC<ExternalLinkProps> = ({ children, href, color = 'black' }) => {
  const [, setCursorData] = useAtom(cursorAtom);
  return (
    <div
      onMouseEnter={() => {
        setCursorData({ cursorVariant: 'hover' });
      }}
      onMouseLeave={() => {
        setCursorData({ cursorVariant: 'default' });
      }}
    >
      <ExternalLink href={href} color={color}>
        {children}
      </ExternalLink>
    </div>
  );
};
