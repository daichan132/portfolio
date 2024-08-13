import { css } from "@emotion/react";
import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import type { ReactNode } from "react";
import { Parallax } from "./Parallax";

type ParallaxPcProps = {
	children: ReactNode;
	offset?: number;
};
export const ParallaxPc = ({
	children,
	offset = 0,
}: ParallaxPcProps): JSX.Element => {
	const theme = useMantineTheme();
	const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
	return (
		<Parallax
			offset={offset}
			enabled={!sm}
			css={css`
        transform: ${sm ? `translate(0px, ${offset}px)` : null};
      `}
		>
			{children}
		</Parallax>
	);
};
