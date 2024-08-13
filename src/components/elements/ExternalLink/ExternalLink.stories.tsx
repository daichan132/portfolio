import type { Meta, StoryObj } from "@storybook/react";
import { ExternalLink } from ".";

const meta = {
	title: "ExternalLink",
	component: ExternalLink,
} satisfies Meta<typeof ExternalLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		href: "https://example.com",
		children: "Example",
	},
};
