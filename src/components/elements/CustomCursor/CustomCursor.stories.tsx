import type { Meta, StoryObj } from "@storybook/react";
import { CustomCursor } from ".";

const meta = {
	title: "CustomCursor",
	component: CustomCursor,
} satisfies Meta<typeof CustomCursor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
