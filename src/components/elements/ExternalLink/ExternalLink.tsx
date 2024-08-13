import { css } from "@emotion/react";
import type { FC, ReactNode } from "react";
import { VscLinkExternal } from "react-icons/vsc";

const style = (color: string) => css`
  color: ${color};
  p {
    display: inline;
  }
  .icon {
    display: inline;
    transform: translate(0, 3px);
    margin: 0 0 0 2px;
    stroke-width: 0.3px;
  }
`;
export type ExternalLinkProps = {
	children: ReactNode;
	href: string;
	color?: string;
};

export const ExternalLink: FC<ExternalLinkProps> = ({
	children,
	href,
	color = "#333333",
}) => {
	return (
		<a href={href} target="_blank" rel="noopener noreferrer" css={style(color)}>
			<p>{children}</p>
			<VscLinkExternal size="1rem" color={color} className="icon" />
		</a>
	);
};
