import { css } from "@emotion/react";
import type { ComponentMeta } from "@storybook/react";
import { SmoothScroll } from ".";

type T = typeof SmoothScroll;

export default {
	title: "SmoothScroll",
	component: SmoothScroll,
} as ComponentMeta<T>;

export const Default = () => {
	return (
		<SmoothScroll>
			<div
				css={css`
          height: 200vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        `}
			>
				<h1>Scroll</h1>
				<h1>Scroll</h1>
				<h1>Scroll</h1>
				<h1>Scroll</h1>
				<h1>Scroll</h1>
				<h1>Scroll</h1>
				<h1>Scroll</h1>
			</div>
		</SmoothScroll>
	);
};
