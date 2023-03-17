import { cursorAtom } from '@/stores/cursorAtom';
import { useAtom } from 'jotai';
import { type FC } from 'react';
import { ExternalLink, ExternalLinkProps } from './ExternalLink';

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
      style={{ display: 'inline' }}
    >
      <ExternalLink href={href} color={color}>
        {children}
      </ExternalLink>
    </div>
  );
};
