import { css } from "@emotion/react";
import type { Meta, StoryObj } from "@storybook/react";
import { SmoothScroll } from ".";

const meta: Meta<typeof SmoothScroll> = {
	title: "SmoothScroll",
	component: SmoothScroll,
} satisfies Meta<typeof SmoothScroll>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
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
	),
};
