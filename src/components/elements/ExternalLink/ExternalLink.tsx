import { cursorAtom } from '@/stores/cursorAtom';
import { css } from '@emotion/react';
import { useAtom } from 'jotai';
import { ReactNode, type FC } from 'react';
import { VscLinkExternal } from 'react-icons/vsc';

const style = css`
  color: black;
  text-decoration: none;
  border-bottom: 2px solid black;
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
export type ExternalLinkProps = { children: ReactNode; href: string };

export const ExternalLink: FC<ExternalLinkProps> = ({ children, href }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" css={style}>
      <p>{children}</p>
      <VscLinkExternal size="1rem" color="black" className="icon" />
    </a>
  );
};

export const ExternalLinkCursor: FC<ExternalLinkProps> = ({ children, href }) => {
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
      <ExternalLink href={href}>{children}</ExternalLink>
    </div>
  );
};
