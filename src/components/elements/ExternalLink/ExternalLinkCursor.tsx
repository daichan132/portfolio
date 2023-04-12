import { cursorAtom } from '@/stores/cursorAtom';
import { useSetAtom } from 'jotai';
import { type FC } from 'react';
import { ExternalLink, ExternalLinkProps } from './ExternalLink';

export const ExternalLinkCursor: FC<ExternalLinkProps> = ({
  children,
  href,
  color = '#333333',
}) => {
  const setCursorData = useSetAtom(cursorAtom);
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
