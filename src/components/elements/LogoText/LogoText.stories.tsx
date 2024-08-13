import type { Meta, StoryObj } from "@storybook/react";
import { LogoText } from ".";

const meta = {
	title: "LogoText",
	component: LogoText,
	args: {
		text: "Daichan 132",
		initialism: true,
	},
} satisfies Meta<typeof LogoText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Initialism: Story = {
	args: { id: "Initialism" },
};

export const FullText: Story = {
	args: { initialism: false, id: "FullText" },
};
