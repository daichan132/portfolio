import { css } from '@emotion/react';
import { ReactNode, type FC } from 'react';
import { VscLinkExternal } from 'react-icons/vsc';

const style = (color: string) => css`
  color: ${color};
  text-decoration: none;
  border-bottom: 1px solid ${color};
  padding-bottom: 1px;
  p {
    display: inline;
  }
  .icon {
    display: inline;
    transform: translate(0, 3px);
    margin: 0 4px;
    stroke-width: 0.5px;
  }
`;
export type ExternalLinkProps = { children: ReactNode; href: string; color?: string };

export const ExternalLink: FC<ExternalLinkProps> = ({ children, href, color = '#333333' }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" css={style(color)}>
      <p>{children}</p>
      <VscLinkExternal size="1rem" color={color} className="icon" />
    </a>
  );
};
