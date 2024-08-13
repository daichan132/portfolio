import { css } from "@emotion/react";
import type { Meta, StoryObj } from "@storybook/react";
import { Marquee } from ".";

const meta: Meta<typeof Marquee> = {
	title: "Marquee",
	component: Marquee,
	args: {
		text: "daichan132",
		baseVelocity: 20,
	},
} satisfies Meta<typeof Marquee>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => (
		<div
			css={css`
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      `}
		>
			<Marquee {...args} />
		</div>
	),
	args: {},
};
